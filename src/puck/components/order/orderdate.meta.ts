export const orderDateMeta = {
  name: 'OrderDate',
  label: 'Order Date Line',
  description: 'Order-confirmation atom: "Placed on {date}". Date comes from order context.',
  category: 'order',
  intent: ['confirm'],
  visualRole: 'atom',
  dataDeps: ['order date (page context)'],
  copyFields: ['label'],
  themeable: ['color'],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['order', 'date', 'atom'],
  props: {
    label: { type: 'string', required: true, description: 'Prefix text, e.g. "Placed on". Empty = date only.' },
    fontSize: { type: 'enum', options: ['xs', 'sm', 'md', 'lg'], required: true, description: 'Text size.' },
    color: { type: 'color', required: true, description: 'Token path or hex.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Alignment.' },
  },
} as const;

export type OrderDateMeta = typeof orderDateMeta;
