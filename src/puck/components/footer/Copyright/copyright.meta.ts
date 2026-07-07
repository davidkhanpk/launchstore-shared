export const copyrightMeta = {
  name: 'Copyright',
  label: 'Copyright',
  description: 'Footer copyright line. Optional auto-prepended "© <current year>" prefix. Top divider toggle for separating from content above. Padding controls (text fields, accepts CSS length values).',
  category: 'footer',
  intent: ['copyright', 'footer-text', 'legal', 'footer-copyright'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['text'],
  themeable: ['textColor', 'dividerColor'],
  a11yRisk: 'low',
  a11yNotes: 'Plain text. Decorative only — no interactivity.',
  mobileBehavior: 'responsive',
  searchTags: ['copyright', 'legal', 'footer', '©', 'year'],

  props: {
    text: { type: 'string', required: true },
    showYear: { type: 'boolean', required: true },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
    fontSize: { type: 'enum', options: ['xs', 'sm', 'base'], required: true },
    textColor: { type: 'string', required: true },
    showDivider: { type: 'boolean', required: true },
    dividerColor: { type: 'string', required: true },
    paddingTop: { type: 'string', required: true },
    paddingBottom: { type: 'string', required: true },
  },
} as const;

export type CopyrightMeta = typeof copyrightMeta;
