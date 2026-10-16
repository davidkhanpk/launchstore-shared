export const orderNumberMeta = {
  name: 'OrderNumber',
  label: 'Order Number Line',
  description: 'Order-confirmation atom: "Order {number}". The number comes from order context.',
  category: 'order',
  intent: ['confirm'],
  visualRole: 'atom',
  dataDeps: ['order number (page context)'],
  copyFields: ['label'],
  themeable: ['color'],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['order', 'number', 'atom'],
  props: {
    label: { type: 'string', required: true, description: 'Prefix text, e.g. "Order".' },
    fontSize: { type: 'enum', options: ['sm', 'md', 'lg', 'xl'], required: true, description: 'Text size.' },
    color: { type: 'color', required: true, description: 'Token path or hex.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Alignment.' },
    fontWeight: { type: 'enum', options: ['normal', 'medium', 'semibold', 'bold'], required: true, description: 'Text weight.' },
  },
} as const;

export type OrderNumberMeta = typeof orderNumberMeta;
