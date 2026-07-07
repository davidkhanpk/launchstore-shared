export const textMeta = {
  name: 'Text',
  label: 'Text',
  description: 'A text block with typography controls (size, weight, line-height, alignment), color, max-width, and padding/margin spacing. Supports a rich-text switch that renders content via dangerouslySetInnerHTML inside the Tailwind prose container.',
  category: 'content',
  intent: ['text', 'paragraph', 'copy', 'body', 'content'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['text'],
  themeable: ['color'],
  a11yRisk: 'low',
  a11yNotes: 'When richText is true, ensure HTML content is sanitized upstream (avoid raw user input as HTML).',
  mobileBehavior: 'responsive',
  searchTags: ['text', 'paragraph', 'copy', 'p', 'body', 'rich text', 'typography'],

  props: {
    text: { type: 'string', required: true },
    richText: { type: 'boolean', required: true },
    fontSize: { type: 'enum', options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl'] },
    fontWeight: { type: 'enum', options: ['light', 'normal', 'medium', 'semibold', 'bold'] },
    lineHeight: { type: 'enum', options: ['tight', 'snug', 'normal', 'relaxed', 'loose'] },
    textAlign: { type: 'enum', options: ['left', 'center', 'right', 'justify'] },
    color: { type: 'string' },
    maxWidth: { type: 'string' },
    marginTop: { type: 'number', required: true },
    marginBottom: { type: 'number', required: true },
    paddingX: { type: 'number', required: true },
    paddingY: { type: 'number', required: true },
  },
} as const;

export type TextMeta = typeof textMeta;
