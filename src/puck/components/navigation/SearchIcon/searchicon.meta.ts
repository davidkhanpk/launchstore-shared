export const searchIconMeta = {
  name: 'SearchIcon',
  label: 'Search Icon',
  description: 'Magnifying-glass icon button with hover state, optional modal search overlay. Click-to-search toggles a full-viewport modal with text input + submit. Modal behavior is router-agnostic via the onSearchSubmit callback prop (consumer wraps with next/navigation useRouter push to /:country/search?q=).',
  category: 'navigation',
  intent: ['search', 'find', 'magnifying-glass', 'lookup', 'nav-search', 'command-palette'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: [],
  themeable: ['iconColor', 'hoverColor'],
  a11yRisk: 'medium',
  a11yNotes: 'Trigger button has aria-label="Search". Modal closes on backdrop click or Escape (capture is current; escape listener can be added by wrapper). Modal focus traps the input via autoFocus; on close focus should return to the trigger button (wrapper responsibility).',
  mobileBehavior: 'responsive',
  searchTags: ['search', 'find', 'magnifying-glass', 'lookup', 'command-palette', 'nav'],

  props: {
    iconSize: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
    iconColor: { type: 'string', required: true },
    hoverColor: { type: 'string', required: true },
    style: { type: 'enum', options: ['minimal', 'outlined', 'filled'], required: true },
    openSearchOnClick: { type: 'boolean', required: true },
  },
} as const;

export type SearchIconMeta = typeof searchIconMeta;
