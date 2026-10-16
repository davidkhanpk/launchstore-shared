export const paginationBarMeta = {
  name: 'PaginationBar',
  label: 'Pagination Bar',
  description:
    'Listing page pagination: numbered pages or prev/next, plus an optional per-page selector. The storefront drives actual navigation.',
  category: 'storefront',
  intent: ['paginate', 'browse'],
  visualRole: 'listing-controls',
  dataDeps: ['page state (storefront-driven)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Current page must be marked for screen readers (aria-current).',
  mobileBehavior: 'compact',
  searchTags: ['pagination', 'pages', 'listing', 'next', 'prev'],
  props: {
    style: { type: 'enum', options: ['numbered', 'compact', 'load-more'], required: true, description: 'numbered = page buttons; compact = prev/next; load-more = single button.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Bar alignment.' },
    maxPageNumbers: { type: 'number', required: true, description: 'Max visible page buttons before ellipsis.' },
    showPerPageSelector: { type: 'boolean', required: true, description: 'Show the per-page dropdown.' },
    perPageOptions: { type: 'array', required: true, description: 'Choices for per-page, e.g. [12, 24, 48].' },
  },
} as const;

export type PaginationBarMeta = typeof paginationBarMeta;
