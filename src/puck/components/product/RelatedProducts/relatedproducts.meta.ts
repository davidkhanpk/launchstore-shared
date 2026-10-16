export const relatedProductsMeta = {
  name: 'RelatedProducts',
  label: 'Related Products',
  description:
    'A products grid/carousel showing products RELATED to the current product — how to relate is ' +
    'configured via relatedBy (collection/tags/category/upsell/crosssell/frequently_bought). ' +
    'The storefront resolves and injects the actual products at render; the editor shows the ' +
    'configured section. Use on PRODUCT pages. For curated/storefront-wide product sections use FeaturedProducts.',
  category: 'product',
  intent: ['cross-sell', 'upsell', 'recommend', 'related'],
  visualRole: 'block',
  dataDeps: ['current product context (storefront-injected)'],
  copyFields: ['title', 'tagline'],
  themeable: ['textColor'],
  a11yRisk: 'medium',
  a11yNotes: 'Carousel mode uses Swiper — ensure navigation is enabled for keyboard users.',
  mobileBehavior: 'responsive',
  searchTags: ['related', 'recommendations', 'upsell', 'cross-sell', 'you may also like', 'product grid'],
  props: {
    title: { type: 'string', required: true, description: 'Section heading, e.g. "You May Also Like".' },
    showTitle: { type: 'boolean', required: true, description: 'Render the section heading.' },
    tagline: { type: 'string', required: true, description: 'Small subheading under the title.' },
    showTagline: { type: 'boolean', required: true, description: 'Render the tagline.' },
    relatedBy: { type: 'enum', options: ['collection', 'tags', 'category', 'upsell', 'crosssell', 'frequently_bought'], required: true, description: 'How the storefront picks the related products. "upsell"/"crosssell" fit order-confirmation and product pages; "collection"/"tags" fit general product pages.' },
    maxProducts: { type: 'number', required: true, description: 'Max products shown (4-8 recommended).' },
    displayStyle: { type: 'enum', options: ['grid', 'carousel'], required: true, description: 'grid = static rows; carousel = Swiper slider.' },
    productCardTemplateId: { type: 'string', required: true, description: 'Optional saved product-card template id. Leave "" for the default card.' },
    gridColumns: { type: 'enum', options: ['2', '3', '4', '5'], required: true, description: 'Columns in grid mode.' },
    containerPadding: { type: 'enum', options: ['none', 'sm', 'md', 'lg'], required: true, description: 'Section padding.' },
    textColor: { type: 'color', required: true, description: 'Token path (e.g. "text.primary") or hex.' },
  },
} as const;

export type RelatedProductsMeta = typeof relatedProductsMeta;
