/**
 * Codemod: revert the createAccordionFields mechanism to flat fields.
 *
 * For every src/puck/components .tsx file that uses it:
 *   1. Extract the flat-fields variable name passed to createAccordionFields
 *      (the shorthand arg, usually `allFields`).
 *   2. Delete the `// ── Accordion config ──...` comment + `const accordionFields
 *      = createAccordionFields({...});` block.
 *   3. Rewrite `fields: accordionFields as any,` -> `fields: <flatVar> as any,`.
 *   4. Drop the `createAccordionFields,` import line.
 *
 * Idempotent: files without the pattern are skipped. Run from repo root:
 *   node scripts/revert-accordion.cjs
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'src', 'puck', 'components');

const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith('.tsx')) files.push(p);
  }
})(DIR);

// comment + blank line + declaration through the call's closing `\n});` + blank line
// variable name is captured (usually accordionFields; Accordion.tsx uses inspectorFields)
const BLOCK_RE =
  /\/\/ ── Accordion config ─+\n\nconst (\w+) = createAccordionFields\(\{[\s\S]*?\n\}\);\n\n/;
// wiring references whatever the const was named
const wiringFor = (v) => new RegExp(`fields: ${v} as any,`);
const ARG_RE = /\n  ([A-Za-z_$][\w$]*),\n\}\);/; // shorthand arg just before call close
const IMPORT_LINE_RE = /^[ \t]*createAccordionFields,\r?\n/gm;
const IMPORT_SOLO_RE = /^import \{ createAccordionFields \} from '[^']*';\r?\n/gm;

let changed = 0, skipped = 0, failures = [];
for (const f of files) {
  const src = fs.readFileSync(f, 'utf8');
  if (!src.includes('createAccordionFields')) { skipped++; continue; }

  const m = src.match(BLOCK_RE);
  if (!m) { failures.push(`${path.relative(ROOT, f)}: accordion block not found`); continue; }
  const constName = m[1];

  const argMatch = m[0].match(ARG_RE);
  const flatVar = argMatch ? argMatch[1] : 'allFields';

  let out = src.replace(BLOCK_RE, '');
  const wiring = wiringFor(constName);
  if (!wiring.test(out)) { failures.push(`${path.relative(ROOT, f)}: fields: ${constName} wiring not found`); continue; }
  out = out.replace(wiring, `fields: ${flatVar} as any,`);
  out = out.replace(IMPORT_LINE_RE, '');
  out = out.replace(IMPORT_SOLO_RE, '');

  if (out.includes('createAccordionFields')) {
    failures.push(`${path.relative(ROOT, f)}: residual createAccordionFields reference`);
    continue;
  }

  fs.writeFileSync(f, out);
  changed++;
  console.log(`reverted ${path.relative(ROOT, f)} (fields: ${flatVar})`);
}

console.log(`\nchanged=${changed} skipped=${skipped} failures=${failures.length}`);
failures.forEach((x) => console.log('FAIL ' + x));
process.exitCode = failures.length ? 1 : 0;
