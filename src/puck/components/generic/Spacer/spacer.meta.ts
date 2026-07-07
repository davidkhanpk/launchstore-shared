export const spacerMeta = {
  name: 'Spacer',
  label: 'Spacer',
  description: 'Vertical whitespace with optional horizontal divider line. Height preset (xs..3xl → Tailwind h-* classes). Optional divider in solid/dashed/dotted variants.',
  category: 'generic',
  intent: ['spacer', 'divider', 'whitespace', 'gap', 'separator'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: [],
  themeable: ['dividerColor'],
  a11yRisk: 'low',
  a11yNotes: 'Decorative. <hr> is announced as a thematic break by screen readers — use sparingly.',
  mobileBehavior: 'responsive',
  searchTags: ['spacer', 'divider', 'whitespace', 'gap', 'hr', 'separator'],

  props: {
    height: { type: 'enum', options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'], required: true },
    showDivider: { type: 'boolean', required: true },
    dividerStyle: { type: 'enum', options: ['solid', 'dashed', 'dotted'] },
    dividerColor: { type: 'string', required: true },
  },
} as const;

export type SpacerMeta = typeof spacerMeta;
