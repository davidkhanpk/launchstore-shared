export const sectionMeta = {
  name: 'Section',
  label: 'Section',
  description: 'Semantic <section> wrapper with vertical padding preset (none..xl) and a fixed set of background presets (transparent/white/gray/brand-primary). Contains children — typically a Container with DropZones inside.',
  category: 'layout',
  intent: ['section', 'page-section', 'layout-wrapper', 'background', 'padding'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Renders <section>. Add aria-labelledby if it has a heading for landmark navigation.',
  mobileBehavior: 'responsive',
  searchTags: ['section', 'page-section', 'wrapper', 'background', 'padding', 'layout'],

  props: {
    paddingY: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
    backgroundColor: { type: 'enum', options: ['transparent', 'white', 'gray', 'primary'] },
  },
} as const;

export type SectionMeta = typeof sectionMeta;
