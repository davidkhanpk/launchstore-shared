export const subcategoryNavMeta = {
  name: 'SubcategoryNav',
  label: 'Subcategory Navigation',
  description:
    'Links to a category\'s subcategories — horizontal links, vertical list, or pill chips. Subcategory data is consumer-injected; the editor shows placeholders.',
  category: 'category',
  intent: ['navigate', 'browse'],
  visualRole: 'sub-header',
  dataDeps: ['subcategories (consumer-injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['subcategory', 'navigation', 'links', 'pills', 'browse'],
  props: {
    layout: { type: 'enum', options: ['horizontal', 'vertical', 'pills'], required: true, description: 'Link arrangement — pills = rounded chips.' },
    showIcons: { type: 'boolean', required: true, description: 'Show an icon per subcategory.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Alignment.' },
  },
} as const;

export type SubcategoryNavMeta = typeof subcategoryNavMeta;
