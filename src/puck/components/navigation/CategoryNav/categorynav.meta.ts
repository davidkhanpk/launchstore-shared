export const categoryNavMeta = {
  name: 'CategoryNav',
  label: 'Category Navigation',
  description:
    'Vertical list of product categories with optional icons — a sidebar-style category menu. ' +
    'Categories data is injected by the host; the editor shows placeholders. For a horizontal top menu use MenuNavigation; for category CARDS use CategoryGrid.',
  category: 'navigation',
  intent: ['navigate', 'browse', 'menu'],
  visualRole: 'sidebar',
  dataDeps: ['categories (consumer-injected)'],
  copyFields: ['title'],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['categories', 'menu', 'sidebar', 'navigation', 'browse'],
  props: {
    title: { type: 'string', required: true, description: 'Optional heading above the list.' },
    showIcons: { type: 'boolean', required: true, description: 'Show an icon per category.' },
    style: { type: 'enum', options: ['standard', 'luxury'], required: true, description: 'standard = normal; luxury = lighter type with wider tracking.' },
  },
} as const;

export type CategoryNavMeta = typeof categoryNavMeta;
