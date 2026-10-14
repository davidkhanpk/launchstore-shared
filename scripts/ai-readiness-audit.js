// AI-readiness audit of the compiled registry (doc 18 Track F).
const r = require('../dist/registry.json');

const GROUNDING_PROPS = /product.?source|categoryId|categoryIds|collectionId|productIds|productId|relatedBy|handle|sku/i;

const rows = r.entries.map((e) => {
  const props = Object.entries(e.propSchema ?? {});
  const withDesc = props.filter(([, p]) => p && typeof p.description === 'string' && p.description.length > 3);
  const required = props.filter(([, p]) => p && p.required);
  const autoDerived = /\(auto-derived\)/.test(e.description ?? '');
  const groundingProps = props.filter(([k]) => GROUNDING_PROPS.test(k)).map(([k]) => k);
  const intentTags = (e.intent ?? []).length;
  const searchTags = (e.searchTags ?? []).length;
  return {
    name: e.name,
    category: e.category,
    autoDerived,
    propCount: props.length,
    descCoverage: props.length ? withDesc.length / props.length : 1,
    allRequired: props.length > 2 && required.length === props.length,
    groundingProps,
    intentTags,
    searchTags,
  };
});

const metaLess = rows.filter((x) => x.autoDerived);
const noDescriptions = rows.filter((x) => !x.autoDerived && x.propCount > 0 && x.descCoverage < 0.5);
const allRequired = rows.filter((x) => x.allRequired);
const grounding = rows.filter((x) => x.groundingProps.length > 0);
const noTags = rows.filter((x) => !x.autoDerived && (x.intentTags === 0 || x.searchTags === 0));

const byCat = {};
for (const x of rows) {
  byCat[x.category] ??= { total: 0, metaLess: 0, lowDesc: 0 };
  byCat[x.category].total++;
  if (x.autoDerived) byCat[x.category].metaLess++;
  if (!x.autoDerived && x.descCoverage < 0.5) byCat[x.category].lowDesc++;
}

console.log('=== SUMMARY (of', rows.length, 'components) ===');
console.log('meta-less (auto-derived):', metaLess.length);
console.log('has-meta but <50% props described:', noDescriptions.length);
console.log('ALL props marked required (misleading):', allRequired.length);
console.log('grounding-sensitive (data-source props):', grounding.length);
console.log('missing intent or searchTags:', noTags.length);

console.log('\n=== BY CATEGORY (total / meta-less / low-desc) ===');
for (const [cat, s] of Object.entries(byCat).sort((a, b) => b[1].metaLess - a[1].metaLess)) {
  console.log(`${cat}: ${s.total} / ${s.metaLess} / ${s.lowDesc}`);
}

console.log('\n=== META-LESS COMPONENTS ===');
console.log(metaLess.map((x) => `${x.category}/${x.name}`).join('\n'));

console.log('\n=== LOW DESCRIPTION COVERAGE (<50%) ===');
console.log(noDescriptions.map((x) => `${x.name} (${Math.round(x.descCoverage * 100)}% of ${x.propCount})`).join('\n'));

console.log('\n=== GROUNDING-SENSITIVE (need interplay docs) ===');
console.log(grounding.map((x) => `${x.name}: ${x.groundingProps.join(', ')}`).join('\n'));

console.log('\n=== ALL-REQUIRED (suspect flags) ===');
console.log(allRequired.map((x) => x.name).join(', '));
