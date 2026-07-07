export const searchBarMeta = {
  name: 'SearchBar',
  label: 'Search Bar',
  description: 'Inline search input with optional popular-searches dropdown. Submit/click handler is router-agnostic via the onSearch callback. Replaces the inline next/navigation router push with a callback so the consumer wires its own routing (Storefront uses next/navigation; Frontend forwards to a static preview or no-op). Lucide-react Search + X icons replaced with inline SVG.',
  category: 'navigation',
  intent: ['search', 'find', 'search-bar', 'nav-search'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['popularSearches'],
  themeable: ['backgroundColor', 'textColor', 'borderColor', 'focusBorderColor'],
  a11yRisk: 'low',
  a11yNotes: 'Submit button has aria-label. Clear button has aria-label. Dropdown closes via onBlur with timeout (200ms) so clickable options remain accessible.',
  mobileBehavior: 'responsive',
  searchTags: ['search', 'find', 'search-bar', 'nav-search'],

  props: {
    placeholder: { type: 'string', required: true },
    style: { type: 'enum', options: ['minimal', 'outlined', 'filled'], required: true },
    size: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
    showIcon: { type: 'boolean', required: true },
    iconPosition: { type: 'enum', options: ['left', 'right'], required: true },
    fullWidth: { type: 'boolean', required: true },
    maxWidth: { type: 'string', required: false },
    borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'full'], required: true },
    backgroundColor: { type: 'string', required: true },
    textColor: { type: 'string', required: true },
    borderColor: { type: 'string', required: true },
    focusBorderColor: { type: 'string', required: true },
    showPopularSearches: { type: 'boolean', required: true },
    popularSearches: { type: 'array', required: false, items: '$item' },
  },
} as const;

export type SearchBarMeta = typeof searchBarMeta;
