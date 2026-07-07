export const gridMeta = {
  name: 'Grid',
  label: 'Grid',
  description: 'Responsive grid with independent column controls per breakpoint (mobile / tablet / desktop) and configurable gap. Hosts a single DropZone ("items"). Tailwind responsive prefixes mobile/tablet/desktop based on selected counts.',
  category: 'generic',
  intent: ['grid', 'responsive-grid', 'tile', 'multi-column', 'responsive', 'layout'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Plain grid wrapper. No semantic role added — combine with section/article/heading for accessibility context.',
  mobileBehavior: 'responsive',
  searchTags: ['grid', 'responsive', 'tile', 'multi-column', 'layout', 'dropzone'],

  props: {
    columns: { type: 'enum', options: ['1', '2', '3', '4', '5', '6'], required: true },
    tabletColumns: { type: 'enum', options: ['1', '2', '3', '4'], required: true },
    mobileColumns: { type: 'enum', options: ['1', '2'], required: true },
    gap: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'], required: true },
  },
} as const;

export type GridMeta = typeof gridMeta;
