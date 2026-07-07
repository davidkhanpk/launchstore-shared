export const dividerMeta = {
  name: 'Divider',
  label: 'Divider',
  description: 'Horizontal divider line with style/thickness/width/marginTop/marginBottom controls. Color accepts hex or theme tokens (resolved via var(--theme-*) at render).',
  category: 'generic',
  intent: ['divider', 'hr', 'separator', 'horizontal-rule'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: [],
  themeable: ['color'],
  a11yRisk: 'low',
  a11yNotes: '<hr> conveys a thematic break to screen readers. Use sparingly inside dense lists.',
  mobileBehavior: 'responsive',
  searchTags: ['divider', 'hr', 'line', 'separator', 'horizontal-rule'],

  props: {
    style: { type: 'enum', options: ['solid', 'dashed', 'dotted'], required: true },
    thickness: { type: 'enum', options: ['1', '2', '4'], required: true },
    color: { type: 'string', required: true },
    width: { type: 'enum', options: ['full', '3/4', '1/2', '1/4'], required: true },
    marginTop: { type: 'enum', options: ['none', 'sm', 'md', 'lg'], required: true },
    marginBottom: { type: 'enum', options: ['none', 'sm', 'md', 'lg'], required: true },
  },
} as const;

export type DividerMeta = typeof dividerMeta;
