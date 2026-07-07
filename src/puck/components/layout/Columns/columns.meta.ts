export const columnsMeta = {
  name: 'Columns',
  label: 'Columns',
  description: 'Grid layout with 2/3/4 columns and per-ratio layout for 2-col mode (50/50, 60/40, 70/30, etc). Each column hosts a numbered DropZone (column-1, column-2...). Stacks on mobile unless disabled.',
  category: 'layout',
  intent: ['columns', 'grid', 'multi-column', 'row', 'layout'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Plain grid — visually hidden stacking at mobile breakpoints is auto.',
  mobileBehavior: 'responsive',
  searchTags: ['columns', 'grid', 'layout', 'multi-column', 'dropzone', 'responsive'],

  props: {
    columns: { type: 'enum', options: ['2', '3', '4'], required: true },
    layout: { type: 'enum', options: ['equal', '60-40', '40-60', '70-30', '30-70', '50-50'] },
    gap: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    mobileStack: { type: 'boolean', required: true },
    alignItems: { type: 'enum', options: ['start', 'center', 'end', 'stretch'] },
  },
} as const;

export type ColumnsMeta = typeof columnsMeta;
