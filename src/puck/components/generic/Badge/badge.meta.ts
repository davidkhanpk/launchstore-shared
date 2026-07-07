export const badgeMeta = {
  name: 'Badge',
  label: 'Badge',
  description: 'Inline badge with 6 variants (default/primary/success/warning/error/info) or fully custom bg+text colors. 3 sizes (sm/md/lg) and 4 corner-radius presets. Dark-mode aware variant styles.',
  category: 'generic',
  intent: ['badge', 'tag', 'chip', 'pill', 'label', 'status'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['text'],
  themeable: ['customBgColor', 'customTextColor'],
  a11yRisk: 'low',
  a11yNotes: 'Inline <span> — no semantic role by default. If badge conveys status use role="status" or aria-label.',
  mobileBehavior: 'responsive',
  searchTags: ['badge', 'tag', 'chip', 'pill', 'label', 'status', 'inline'],

  props: {
    text: { type: 'string', required: true },
    variant: { type: 'enum', options: ['default', 'primary', 'success', 'warning', 'error', 'info'], required: true },
    size: { type: 'enum', options: ['sm', 'md', 'lg'], required: true },
    rounded: { type: 'enum', options: ['sm', 'md', 'lg', 'full'], required: true },
    customBgColor: { type: 'string' },
    customTextColor: { type: 'string' },
  },
} as const;

export type BadgeMeta = typeof badgeMeta;
