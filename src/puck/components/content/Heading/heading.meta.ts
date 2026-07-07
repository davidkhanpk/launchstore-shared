export const headingMeta = {
  name: 'Heading',
  label: 'Heading',
  description: 'HTML heading (h1-h6) with size preset (xs..5xl), typography (weight, line-height, letter-spacing, alignment), color, margin, and entrance animation (fadeIn/slideUp/slideDown) with optional delay.',
  category: 'content',
  intent: ['heading', 'title', 'header', 'section-title', 'seo-h1', 'seo-h2'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: ['text'],
  themeable: ['color'],
  a11yRisk: 'medium',
  a11yNotes: 'Heading levels must be logical and sequential (h1 > h2 > h3). The default level is h2 — pages must use exactly one h1 (typically set by a Hero or page title component).',
  mobileBehavior: 'responsive',
  searchTags: ['heading', 'title', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'header', 'text'],

  props: {
    text: { type: 'string', required: true },
    level: { type: 'enum', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    size: { type: 'enum', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl'] },
    fontWeight: { type: 'enum', options: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    textAlign: { type: 'enum', options: ['left', 'center', 'right'] },
    color: { type: 'string' },
    fontSize: { type: 'string' },
    lineHeight: { type: 'enum', options: ['tight', 'snug', 'normal', 'relaxed', 'loose'] },
    letterSpacing: { type: 'enum', options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'] },
    marginTop: { type: 'number', required: true },
    marginBottom: { type: 'number', required: true },
    animation: { type: 'enum', options: ['none', 'fadeIn', 'slideUp', 'slideDown'] },
    animationDelay: { type: 'number', required: true },
  },
} as const;

export type HeadingMeta = typeof headingMeta;
