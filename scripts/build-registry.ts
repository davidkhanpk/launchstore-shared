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
    metaPath: relative(PKG_ROOT, metaPath),
  };
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
