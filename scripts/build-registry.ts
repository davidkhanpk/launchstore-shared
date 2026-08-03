/**
 * build-registry.ts
 *
 * Walks src/puck/components/**\/*.meta.ts, validates each with Zod, and
 * produces:
 *   - dist/registry.json   (consumed by launchstore backend as AI registry)
 *   - dist/registry.d.ts   (typed access)
 *
 * T-003 implementation:
 *   - Zod validation of each meta file (name unique, props schema valid)
 *   - Sortable by category → name
 *   - Per-category groupings for Tier 3 discovery
 *   - Emits a `propSchema` snapshot for the backend's procedural judges
 *
 * T-003 next steps (T-006, future epics):
 *   - Auto-embed each component for semantic `discover_components` search
 *   - Per-environment overrides (e.g. a different description for a "test" environment)
 */

import { writeFileSync, mkdirSync, existsSync, readdirSync, statSync, readFileSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { pathToFileURL, fileURLToPath } from 'node:url';
import { z } from 'zod';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = join(__dirname, '..');
const COMPONENTS_DIR = join(PKG_ROOT, 'src', 'puck', 'components');
const DIST_DIR = join(PKG_ROOT, 'dist');

// ─── Zod schemas ─────────────────────────────────────────────────────────

const PropDefSchema = z.object({
  type: z.enum(['string', 'number', 'boolean', 'enum', 'color', 'array', 'object']),
  required: z.boolean().optional(),
  description: z.string().optional(),
  options: z.array(z.string()).optional(),
  min: z.number().optional(),
  max: z.number().optional(),
}).passthrough();

const MetaSchema = z.object({
  name: z.string().min(1),
  label: z.string().min(1),
  description: z.string().min(1),
  category: z.string().min(1),
  intent: z.array(z.string()).default([]),
  visualRole: z.string().optional(),
  dataDeps: z.array(z.string()).default([]),
  copyFields: z.array(z.string()).default([]),
  themeable: z.array(z.string()).default([]),
  a11yRisk: z.enum(['low', 'medium', 'high']).default('low'),
  mobileBehavior: z.string().optional(),
  searchTags: z.array(z.string()).default([]),
  props: z.record(z.string(), PropDefSchema).default({}),
}).passthrough();

// ─── Discovery ───────────────────────────────────────────────────────────

function walkMetaFiles(dir: string, accumulator: string[] = []): string[] {
  if (!existsSync(dir)) return accumulator;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      walkMetaFiles(full, accumulator);
    } else if (entry.endsWith('.meta.ts')) {
      accumulator.push(full);
    }
  }
  return accumulator;
}

interface CompiledEntry {
  name: string;
  label: string;
  description: string;
  category: string;
  intent: string[];
  visualRole?: string;
  dataDeps: string[];
  copyFields: string[];
  themeable: string[];
  a11yRisk: 'low' | 'medium' | 'high';
  mobileBehavior?: string;
  searchTags: string[];
  /** Map of prop name → serializable prop definition (drives the AI prompt) */
  propSchema: Record<string, z.infer<typeof PropDefSchema>>;
  /** Map of prop name → JSON Schema (for the procedural judge's T-016 validator) */
  jsonSchema: Record<string, unknown>;
  /** Real default props from the component's ComponentConfig (fills AI inserts). */
  defaultProps?: Record<string, unknown>;
  /** True if the component renders one or more Puck <DropZone>s (can hold children). */
  isContainer: boolean;
  /** Literal drop-zone names the component renders (e.g. ["content"], ["column-1","column-2"]). */
  zones: string[];
  /** For components with dynamic zones (e.g. Columns renders column-1, column-2, ...), the static prefix, e.g. "column-". */
  dynamicZonePrefix?: string;
  /** Absolute path of the meta.ts source, for debugging */
  metaPath: string;
}

interface CompiledRegistry {
  /** Schema version — bump when shape changes */
  version: '1.0.0';
  /** ISO timestamp of the build */
  generatedAt: string;
  /** Total count for sanity checks */
  total: number;
  /** Components sorted by category then name */
  entries: CompiledEntry[];
  /** Grouped by category for the AI prompt's tier-3 discovery */
  byCategory: Record<string, CompiledEntry[]>;
  /** Grouped by intent for the AI prompt's intent matching (E2 T-006) */
  byIntent: Record<string, CompiledEntry[]>;
}

// ─── Compile ─────────────────────────────────────────────────────────────

/**
 * Loads + validates + compiles one meta file.
 * Uses dynamic import because each meta file is `.ts` and we want
 * the build script to work without a separate transpile step.
 */
async function compileOne(metaPath: string): Promise<CompiledEntry> {
  // dynamic import — tsx handles .ts resolution
  // On Windows, absolute paths must be file:// URLs for dynamic import
  const importUrl = sep === '\\' ? pathToFileURL(metaPath).href : metaPath;
  const mod = await import(importUrl);
  const raw = Object.values(mod).find((v) => v && typeof v === 'object' && 'name' in v && 'props' in v);
  if (!raw) {
    throw new Error(`No meta export found in ${metaPath}`);
  }

  const parsed = MetaSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(
      `Invalid meta file ${metaPath}:\n${parsed.error.errors.map((e) => `  ${e.path.join('.')}: ${e.message}`).join('\n')}`,
    );
  }

  const m = parsed.data;
  return {
    name: m.name,
    label: m.label,
    description: m.description,
    category: m.category,
    intent: m.intent,
    visualRole: m.visualRole,
    dataDeps: m.dataDeps,
    copyFields: m.copyFields,
    themeable: m.themeable,
    a11yRisk: m.a11yRisk,
    mobileBehavior: m.mobileBehavior,
    searchTags: m.searchTags,
    propSchema: m.props,
    jsonSchema: zodPropsToJsonSchema(m.props),
    defaultProps: loadDefaultProps(metaPath, m.name),
    ...loadZones(metaPath, m.name),
    metaPath: relative(PKG_ROOT, metaPath),
  };
}

/**
 * Extract the Puck drop-zone names a component renders (`<DropZone zone="..."/>`)
 * via static AST parsing. This is the ground-truth structural metadata the AI
 * needs so it never has to guess zone names. Returns isContainer + literal zone
 * names, plus a dynamicZonePrefix for components that render zones from a
 * template literal (e.g. Columns renders column-1, column-2, ... -> prefix "column-").
 */
function loadZones(
  metaPath: string,
  name: string,
): { isContainer: boolean; zones: string[]; dynamicZonePrefix?: string } {
  const dir = dirname(metaPath);
  const candidates = [join(dir, `${name}.tsx`), join(dir, `${name}.ts`)];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    try {
      const src = readFileSync(file, 'utf-8');
      const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      return extractZonesFromSource(sf);
    } catch (err: any) {
      console.warn(`[build-registry] could not parse zones for ${name} from ${file}: ${err.message}`);
    }
  }
  return { isContainer: false, zones: [] };
}

/** Core DropZone extraction from an already-parsed source file. */
function extractZonesFromSource(
  sf: ts.SourceFile,
): { isContainer: boolean; zones: string[]; dynamicZonePrefix?: string } {
  const zones = new Set<string>();
  let dynamicZonePrefix: string | undefined;
  let hasDropZone = false;

  const visit = (node: ts.Node): void => {
    let attrs: ts.JsxAttributes | undefined;
    if (ts.isJsxSelfClosingElement(node) && node.tagName.getText(sf) === 'DropZone') {
      attrs = node.attributes;
    } else if (ts.isJsxOpeningElement(node) && node.tagName.getText(sf) === 'DropZone') {
      attrs = node.attributes;
    }
    if (attrs) {
      hasDropZone = true;
      for (const a of attrs.properties) {
        if (!ts.isJsxAttribute(a) || a.name.getText(sf) !== 'zone' || !a.initializer) continue;
        const init = a.initializer;
        if (ts.isStringLiteralLike(init)) {
          zones.add(init.text);
        } else if (ts.isJsxExpression(init) && init.expression) {
          const e = init.expression;
          if (ts.isStringLiteralLike(e)) zones.add(e.text);
          else if (ts.isTemplateExpression(e)) dynamicZonePrefix = e.head.text;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);

  if (hasDropZone) {
    return {
      isContainer: true,
      zones: [...zones].sort(),
      ...(dynamicZonePrefix ? { dynamicZonePrefix } : {}),
    };
  }
  return { isContainer: false, zones: [] };
}

/**
 * Auto-derive a registry entry for a component that has a ComponentConfig .tsx
 * but no .meta.ts. Keeps every renderable component first-class in the AI
 * registry (name, category, defaultProps, zones, and a prop schema derived from
 * the default values) without hand-maintaining a meta file. A real .meta.ts,
 * when present, always takes precedence (richer description/intent).
 */
function deriveEntryFromComponent(tsxPath: string): CompiledEntry | null {
  let src: string;
  try {
    src = readFileSync(tsxPath, 'utf-8');
  } catch {
    return null;
  }
  const sf = ts.createSourceFile(tsxPath, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);

  let cfg: { name: string; label: string; defaultProps: Record<string, unknown> } | null = null;
  const visit = (node: ts.Node): void => {
    if (cfg) return;
    if (
      ts.isVariableStatement(node) &&
      node.modifiers?.some((m) => m.kind === ts.SyntaxKind.ExportKeyword)
    ) {
      for (const decl of node.declarationList.declarations) {
        if (
          ts.isIdentifier(decl.name) &&
          decl.initializer &&
          ts.isObjectLiteralExpression(decl.initializer)
        ) {
          const obj = decl.initializer;
          const hasRender = obj.properties.some(
            (p) => (ts.isPropertyAssignment(p) || ts.isMethodDeclaration(p)) && p.name?.getText(sf) === 'render',
          );
          if (!hasRender) continue;
          const labelProp = obj.properties.find(
            (p) => ts.isPropertyAssignment(p) && p.name?.getText(sf) === 'label',
          );
          const label =
            labelProp && ts.isPropertyAssignment(labelProp) && ts.isStringLiteralLike(labelProp.initializer)
              ? labelProp.initializer.text
              : decl.name.text;
          const dpProp = obj.properties.find(
            (p) => ts.isPropertyAssignment(p) && p.name?.getText(sf) === 'defaultProps',
          );
          const defaultProps =
            dpProp && ts.isPropertyAssignment(dpProp) && ts.isObjectLiteralExpression(dpProp.initializer)
              ? objectLiteralToValue(dpProp.initializer, sf)
              : {};
          cfg = { name: decl.name.text, label, defaultProps };
          return;
        }
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  if (!cfg) return null;
  const c = cfg as { name: string; label: string; defaultProps: Record<string, unknown> };

  const zoneInfo = extractZonesFromSource(sf);
  const propSchema = derivePropSchema(c.defaultProps);
  const words = c.name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').toLowerCase().split(/\s+/).filter(Boolean);

  return {
    name: c.name,
    label: c.label,
    description: `${c.label} component (auto-derived).`,
    category: categoryFromPath(tsxPath),
    intent: words,
    dataDeps: [],
    copyFields: [],
    themeable: [],
    a11yRisk: 'low',
    searchTags: words,
    propSchema,
    jsonSchema: zodPropsToJsonSchema(propSchema),
    defaultProps: c.defaultProps,
    isContainer: zoneInfo.isContainer,
    zones: zoneInfo.zones,
    ...(zoneInfo.dynamicZonePrefix ? { dynamicZonePrefix: zoneInfo.dynamicZonePrefix } : {}),
    metaPath: `${relative(PKG_ROOT, tsxPath)} (auto-derived)`,
  };
}

/** Derive a prop schema from default-prop value types (best-effort). */
function derivePropSchema(
  defaultProps: Record<string, unknown>,
): Record<string, z.infer<typeof PropDefSchema>> {
  const out: Record<string, z.infer<typeof PropDefSchema>> = {};
  for (const [k, v] of Object.entries(defaultProps ?? {})) {
    let type: z.infer<typeof PropDefSchema>['type'] = 'string';
    if (typeof v === 'number') type = 'number';
    else if (typeof v === 'boolean') type = 'boolean';
    else if (Array.isArray(v)) type = 'array';
    else if (v && typeof v === 'object') type = 'object';
    else if (typeof v === 'string' && /^#(?:[0-9a-f]{3,8})$/i.test(v)) type = 'color';
    out[k] = { type } as z.infer<typeof PropDefSchema>;
  }
  return out;
}

/** Category = the path segment immediately under components/. */
function categoryFromPath(fp: string): string {
  const norm = fp.replace(/\\/g, '/');
  const m = norm.match(/\/components\/([^/]+)\//);
  return m ? m[1] : 'misc';
}

/** Walk for component .tsx files (potential ComponentConfig exports). */
function walkComponentFiles(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) return acc;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) walkComponentFiles(full, acc);
    else if (entry.endsWith('.tsx')) acc.push(full);
  }
  return acc;
}


/**
 * Extract the component's ComponentConfig `defaultProps` so the backend AI can
 * fill inserted nodes with a complete, renderable prop set.
 *
 * Uses static TypeScript AST parsing rather than importing the module: many
 * components do side-effect imports (e.g. `import 'swiper/css'`) that a Node
 * build script cannot execute. Parsing the source avoids running any component
 * code. Best-effort: object literals with non-literal values (spreads, computed
 * refs) skip those keys.
 */
function loadDefaultProps(
  metaPath: string,
  name: string,
): Record<string, unknown> | undefined {
  const dir = dirname(metaPath);
  const candidates = [join(dir, `${name}.tsx`), join(dir, `${name}.ts`)];
  for (const file of candidates) {
    if (!existsSync(file)) continue;
    try {
      const src = readFileSync(file, 'utf-8');
      const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
      const dp = findDefaultPropsObject(sf);
      if (dp) return dp;
    } catch (err: any) {
      console.warn(`[build-registry] could not parse defaultProps for ${name} from ${file}: ${err.message}`);
    }
  }
  return undefined;
}

/** Find the ComponentConfig object literal (has both `render` + `defaultProps`) and return its defaults. */
function findDefaultPropsObject(sf: ts.SourceFile): Record<string, unknown> | undefined {
  let found: Record<string, unknown> | undefined;
  const visit = (node: ts.Node): void => {
    if (found) return;
    if (ts.isObjectLiteralExpression(node)) {
      const hasRender = node.properties.some(
        (p) => (ts.isPropertyAssignment(p) || ts.isMethodDeclaration(p)) && p.name?.getText(sf) === 'render',
      );
      const dpProp = node.properties.find(
        (p) => ts.isPropertyAssignment(p) && p.name?.getText(sf) === 'defaultProps',
      );
      if (
        hasRender &&
        dpProp &&
        ts.isPropertyAssignment(dpProp) &&
        ts.isObjectLiteralExpression(dpProp.initializer)
      ) {
        found = objectLiteralToValue(dpProp.initializer, sf);
        return;
      }
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
  return found;
}

function objectLiteralToValue(
  obj: ts.ObjectLiteralExpression,
  sf: ts.SourceFile,
): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const prop of obj.properties) {
    if (!ts.isPropertyAssignment(prop) || !prop.name) continue;
    const key = ts.isStringLiteralLike(prop.name)
      ? prop.name.text
      : ts.isIdentifier(prop.name)
        ? prop.name.text
        : prop.name.getText(sf);
    const value = literalToValue(prop.initializer, sf);
    if (value !== SKIP) out[key] = value;
  }
  return out;
}

const SKIP = Symbol('skip');

function literalToValue(node: ts.Expression, sf: ts.SourceFile): unknown {
  if (ts.isStringLiteralLike(node)) return node.text;
  if (ts.isNumericLiteral(node)) return Number(node.text);
  if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
  if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
  if (node.kind === ts.SyntaxKind.NullKeyword) return null;
  if (ts.isPrefixUnaryExpression(node) && node.operator === ts.SyntaxKind.MinusToken) {
    const inner = literalToValue(node.operand, sf);
    return typeof inner === 'number' ? -inner : SKIP;
  }
  if (ts.isArrayLiteralExpression(node)) {
    return node.elements.map((el) => literalToValue(el, sf)).filter((v) => v !== SKIP);
  }
  if (ts.isObjectLiteralExpression(node)) return objectLiteralToValue(node, sf);
  // Identifiers, computed refs, template expressions with substitutions, etc.
  return SKIP;
}

function zodPropsToJsonSchema(props: Record<string, z.infer<typeof PropDefSchema>>): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [name, p] of Object.entries(props)) {
    out[name] = { type: p.type, ...p };
  }
  return out;
}

// ─── Main ────────────────────────────────────────────────────────────────

async function main() {
  if (!existsSync(DIST_DIR)) mkdirSync(DIST_DIR, { recursive: true });

  const metaFiles = walkMetaFiles(COMPONENTS_DIR);
  if (metaFiles.length === 0) {
    console.warn(`[build-registry] No meta files found under ${COMPONENTS_DIR}`);
  }

  const entries: CompiledEntry[] = [];
  for (const metaPath of metaFiles) {
    try {
      entries.push(await compileOne(metaPath));
    } catch (err: any) {
      console.error(`[build-registry] ${err.message}`);
      process.exit(1);
    }
  }

  // Auto-derive entries for components that render (have a ComponentConfig .tsx)
  // but have NO .meta.ts, so every renderable component is first-class in the AI
  // registry. A real meta always wins.
  const covered = new Set(entries.map((e) => e.name));
  let derivedCount = 0;
  for (const tsxPath of walkComponentFiles(COMPONENTS_DIR)) {
    const entry = deriveEntryFromComponent(tsxPath);
    if (entry && !covered.has(entry.name)) {
      entries.push(entry);
      covered.add(entry.name);
      derivedCount++;
    }
  }
  if (derivedCount > 0) {
    console.log(`[build-registry] auto-derived ${derivedCount} meta-less component(s)`);
  }

  // Validate uniqueness
  const seen = new Set<string>();
  for (const e of entries) {
    if (seen.has(e.name)) {
      throw new Error(`Duplicate component name: ${e.name}`);
    }
    seen.add(e.name);
  }

  // Sort + group
  entries.sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.name.localeCompare(b.name);
  });

  const byCategory: Record<string, CompiledEntry[]> = {};
  const byIntent: Record<string, CompiledEntry[]> = {};
  for (const e of entries) {
    (byCategory[e.category] ??= []).push(e);
    for (const intent of e.intent) {
      (byIntent[intent] ??= []).push(e);
    }
  }

  const registry: CompiledRegistry = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    total: entries.length,
    entries,
    byCategory,
    byIntent,
  };

  writeFileSync(join(DIST_DIR, 'registry.json'), JSON.stringify(registry, null, 2) + '\n');

  const dts = `// Auto-generated by scripts/build-registry.ts. Do not edit.
export const REGISTRY_VERSION = '1.0.0';
export interface CompiledEntry {
  name: string;
  label: string;
  description: string;
  category: string;
  intent: string[];
  visualRole?: string;
  dataDeps: string[];
  copyFields: string[];
  themeable: string[];
  a11yRisk: 'low' | 'medium' | 'high';
  mobileBehavior?: string;
  searchTags: string[];
  propSchema: Record<string, PropDef>;
  jsonSchema: Record<string, unknown>;
  metaPath: string;
}
export interface PropDef {
  type: 'string' | 'number' | 'boolean' | 'enum' | 'color' | 'array' | 'object';
  required?: boolean;
  description?: string;
  options?: string[];
  min?: number;
  max?: number;
  [key: string]: unknown;
}
export interface CompiledRegistry {
  version: '1.0.0';
  generatedAt: string;
  total: number;
  entries: CompiledEntry[];
  byCategory: Record<string, CompiledEntry[]>;
  byIntent: Record<string, CompiledEntry[]>;
}
export const registry: CompiledRegistry = ${JSON.stringify(registry, null, 2)} as const;
`;
  writeFileSync(join(DIST_DIR, 'registry.d.ts'), dts);

  console.log(
    `[build-registry] compiled ${entries.length} component(s) across ${Object.keys(byCategory).length} categor(ies)`,
  );
}

main().catch((err) => {
  console.error('[build-registry] Fatal:', err);
  process.exit(1);
});
