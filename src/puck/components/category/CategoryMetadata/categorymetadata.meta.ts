export const categoryMetadataMeta = {
  name: 'CategoryMetadata',
  label: 'Category Metadata',
  description: 'Compact metadata row (handle, product count, updated date) below the category title. Each item toggles independently. Horizontal or vertical layout. SVG icons (tag/package/calendar) inline (no external dep).',
  category: 'category',
  intent: ['metadata', 'info', 'category-meta', 'stats', 'product-count'],
  visualRole: 'inline',
  dataDeps: ['category.handle', 'category.product_count', 'category.updated_at'],
  copyFields: [],
  themeable: ['textColor', 'iconColor'],
  a11yRisk: 'low',
  a11yNotes: 'Plain flex container with semantic spans; icons are decorative (no aria attributes needed for purely visual glyphs).',
  mobileBehavior: 'responsive',
  searchTags: ['metadata', 'category-meta', 'stats', 'product-count', 'info'],

  props: {
    category: { type: 'object' },
    showHandle: { type: 'boolean', required: true },
    showProductCount: { type: 'boolean', required: true },
    showUpdatedDate: { type: 'boolean', required: true },
    layout: { type: 'enum', options: ['horizontal', 'vertical'], required: true },
    fontSize: { type: 'string', required: true },
    textColor: { type: 'string', required: true },
    iconColor: { type: 'string', required: true },
    spacing: { type: 'string', required: true },
  },
} as const;

export type CategoryMetadataMeta = typeof categoryMetadataMeta;
