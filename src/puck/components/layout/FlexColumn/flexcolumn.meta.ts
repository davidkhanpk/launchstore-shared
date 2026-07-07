export const flexColumnMeta = {
  name: 'FlexColumn',
  label: 'Flex Column',
  description: 'Vertical flexbox column with justifyContent / alignItems / gap controls. Hosts a DropZone ("flex-column-content"). Optional fullHeight mode, min-height, padding, background color, and border radius. Renders with a faint dashed border to make the editable area visible in the canvas.',
  category: 'layout',
  intent: ['flex', 'column', 'vertical', 'stack', 'layout'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: [],
  themeable: ['backgroundColor'],
  a11yRisk: 'low',
  a11yNotes: 'Plain div wrapper.',
  mobileBehavior: 'responsive',
  searchTags: ['flex', 'column', 'vertical', 'stack', 'layout', 'dropzone', 'flexbox'],

  props: {
    justifyContent: { type: 'enum', options: ['start', 'center', 'end', 'space-between', 'space-around', 'space-evenly'] },
    alignItems: { type: 'enum', options: ['start', 'center', 'end', 'stretch'] },
    gap: { type: 'enum', options: ['none', 'xs', 'sm', 'md', 'lg', 'xl'] },
    fullHeight: { type: 'boolean', required: true },
    minHeight: { type: 'string' },
    padding: { type: 'string' },
    backgroundColor: { type: 'string' },
    borderRadius: { type: 'string' },
  },
} as const;

export type FlexColumnMeta = typeof flexColumnMeta;
