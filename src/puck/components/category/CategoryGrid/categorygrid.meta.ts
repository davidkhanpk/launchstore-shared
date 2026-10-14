export const categoryGridMeta = {
  name: 'CategoryGrid',
  label: 'Category Grid',
  description:
    'Grid of the store\'s product CATEGORIES (not products) — each card is a category with image, ' +
    'name, and optional product count. Categories data is injected by the host at render time; ' +
    'in the editor it shows placeholder cards. Use this for "browse by category" / collection ' +
    'navigation sections. To FEATURE PRODUCTS instead, use FeaturedProducts or a product carousel.',
  category: 'category',
  intent: ['navigate', 'browse', 'organize', 'group'],
  visualRole: 'block',
  dataDeps: ['categories (consumer-injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['categories', 'collections', 'grid', 'browse', 'navigation'],
  props: {
    columns: { type: 'number', required: true, description: 'Category cards per row (1-4).' },
    gap: { type: 'string', required: true, description: 'Spacing between cards: sm | md | lg.' },
    showImages: { type: 'boolean', required: true, description: 'Show each category\'s image.' },
    showCounts: { type: 'boolean', required: true, description: 'Show the product count per category.' },
    showDescriptions: { type: 'boolean', required: true, description: 'Show category descriptions.' },
    cardStyle: { type: 'string', required: true, description: 'Card look: standard | bordered | shadow.' },
  },
} as const;

export type CategoryGridMeta = typeof categoryGridMeta;
