export const flexRowMeta = {
  name: 'FlexRow',
  label: 'Flex Row',
  description: 'Horizontal flexbox row with justifyContent / alignItems / gap / wrap controls. Hosts a single DropZone ("flex-row-content") that repeats the flex layout so children align with parent. Background color and border radius via inline styles.',
  category: 'layout',
  intent: ['flex', 'row', 'horizontal', 'inline', 'layout'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: [],
  themeable: ['backgroundColor'],
  a11yRisk: 'low',
  a11yNotes: 'Plain div wrapper. Use role="row" only when inside a parent that establishes table semantics.',
  mobileBehavior: 'responsive',
  searchTags: ['flex', 'row', 'horizontal', 'inline', 'layout', 'dropzone', 'flexbox'],

  props: {
    justifyContent: { type: 'enum', options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] },
    alignItems: { type: 'enum', options: ['start', 'center', 'end', 'stretch', 'baseline'] },
    gap: { type: 'enum', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    wrap: { type: 'enum', options: ['nowrap', 'wrap', 'wrap-reverse'] },
    fullWidth: { type: 'boolean', required: true },
    maxWidth: { type: 'string' },
    padding: { type: 'string' },
    backgroundColor: { type: 'string' },
    borderRadius: { type: 'string' },
  },
} as const;

export type FlexRowMeta = typeof flexRowMeta;
