export const categoryTitleMeta = {
  name: 'CategoryTitle',
  label: 'Category Title',
  description: 'Category page title (h1-h4) with typography controls. Reads category.name from injected category prop. Renders placeholder when no category is set.',
  category: 'category',
  intent: ['title', 'category-title', 'h1', 'header', 'name'],
  visualRole: 'inline',
  dataDeps: ['category.name'],
  copyFields: [],
  themeable: ['color'],
  a11yRisk: 'low',
  a11yNotes: 'Tag is configurable (h1-h4) — pick the right heading level for the surrounding page outline. Placeholder text uses italic gray and announces nothing harmful.',
  mobileBehavior: 'responsive',
  searchTags: ['title', 'category-title', 'h1', 'h2', 'header', 'name'],

  props: {
    category: { type: 'object' },
    tag: { type: 'enum', options: ['h1', 'h2', 'h3', 'h4'], required: true },
    fontSize: { type: 'enum', options: ['default', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'], required: true },
    color: { type: 'enum', options: ['default', 'black', 'gray', 'primary', 'white'], required: true },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
    fontWeight: { type: 'enum', options: ['normal', 'medium', 'semibold', 'bold'], required: true },
  },
} as const;

export type CategoryTitleMeta = typeof categoryTitleMeta;
