export const productTitleMeta = {
  name: 'ProductTitle',
  label: 'Product Title',
  description: 'Product title heading. Configurable HTML tag (h1-h4), font size, color, alignment, weight, and Tailwind margin/padding shortcuts. Reads `product.title` from the shared product shape; consumer wrapper injects the product at render-time.',
  category: 'product',
  intent: ['product', 'title', 'heading'],
  visualRole: 'inline',
  dataDeps: ['product (injected)'],
  copyFields: [],
  themeable: ['color'],
  a11yRisk: 'low',
  a11yNotes: 'Renders the chosen HTML tag (h1..h4); consumer should pick h1 for the canonical product page title for SEO/a11y. Style alone must not be the only signal of hierarchy.',
  mobileBehavior: 'responsive',
  searchTags: ['product', 'title', 'heading', 'h1', 'h2', 'h3'],

  props: {
    tag: { type: 'enum', options: ['h1', 'h2', 'h3', 'h4'], required: true },
    fontSize: { type: 'enum', options: ['default', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'], required: true },
    color: { type: 'enum', options: ['default', 'black', 'gray', 'primary', 'white'], required: true },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
    fontWeight: { type: 'enum', options: ['normal', 'medium', 'semibold', 'bold'], required: true },
    marginTop: { type: 'string', required: true },
    marginBottom: { type: 'string', required: true },
    paddingX: { type: 'string', required: true },
    paddingY: { type: 'string', required: true },
  },
} as const;

export type ProductTitleMeta = typeof productTitleMeta;
