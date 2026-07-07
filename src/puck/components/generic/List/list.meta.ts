export const listMeta = {
  name: 'List',
  label: 'List',
  description: 'Vertical list with 4 marker styles (bullet, numbered, check, none). Item spacing (tight/normal/relaxed) + font size (sm/base/lg). Text color accepts hex or theme token.',
  category: 'generic',
  intent: ['list', 'bullet', 'numbered', 'checklist', 'todo', 'items'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['items[].text'],
  themeable: ['color'],
  a11yRisk: 'medium',
  a11yNotes: 'Renders semantic <ul>/<li>. Custom markers rendered as inline <span> inside <li> — screen readers will not announce markers as "list item" depending on UA. For ordered semantics consider keeping type=numbered.',
  mobileBehavior: 'responsive',
  searchTags: ['list', 'ul', 'ol', 'bullet', 'items', 'checklist', 'todo'],

  props: {
    items: { type: 'array', required: true },
    type: { type: 'enum', options: ['bullet', 'numbered', 'check', 'none'], required: true },
    spacing: { type: 'enum', options: ['tight', 'normal', 'relaxed'], required: true },
    fontSize: { type: 'enum', options: ['sm', 'base', 'lg'], required: true },
    color: { type: 'string', required: true },
  },
} as const;

export type ListMeta = typeof listMeta;
