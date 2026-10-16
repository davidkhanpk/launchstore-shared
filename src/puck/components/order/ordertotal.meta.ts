export const orderTotalMeta = {
  name: 'OrderTotal',
  label: 'Order Total Line',
  description: 'Order-confirmation atom: "Total: {amount}". Amount and price formatting come from order context.',
  category: 'order',
  intent: ['confirm'],
  visualRole: 'atom',
  dataDeps: ['order total (page context)'],
  copyFields: ['label'],
  themeable: ['color'],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['order', 'total', 'price', 'atom'],
  props: {
    label: { type: 'string', required: true, description: 'Prefix text, e.g. "Total".' },
    fontSize: { type: 'enum', options: ['md', 'lg', 'xl', '2xl'], required: true, description: 'Text size — typically larger than other atoms.' },
    color: { type: 'color', required: true, description: 'Token path or hex.' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'Alignment.' },
    fontWeight: { type: 'enum', options: ['semibold', 'bold'], required: true, description: 'Text weight.' },
  },
} as const;

export type OrderTotalMeta = typeof orderTotalMeta;
