export const richTextContentMeta = {
  name: 'RichTextContent',
  label: 'Rich Text Content',
  description: 'Rich text block rendered inside the Tailwind prose container. Editor uses the Puck richtext widget (ProseMirror). Render output is dangerouslySetInnerHTML — content MUST be sanitized upstream by Puck before reaching this component. Outer controls: max-width preset and vertical padding.',
  category: 'content',
  intent: ['rich-text', 'prose', 'article', 'paragraphs', 'formatted-text'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: ['content'],
  themeable: [],
  a11yRisk: 'high',
  a11yNotes: 'Rich text comes from the Puck widget which sanitizes. Never feed raw user HTML. Heading hierarchy in the content should be coherent with surrounding page structure.',
  mobileBehavior: 'responsive',
  searchTags: ['rich text', 'article', 'prose', 'wysiwyg', 'editor', 'formatted'],

  props: {
    content: { type: 'string', required: true },
    maxWidth: { type: 'enum', options: ['max-w-2xl', 'max-w-3xl', 'max-w-5xl', 'max-w-none'] },
    padding: { type: 'enum', options: ['py-6', 'py-12', 'py-20'] },
  },
} as const;

export type RichTextContentMeta = typeof richTextContentMeta;
