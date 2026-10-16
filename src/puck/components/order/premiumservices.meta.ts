export const premiumServicesMeta = {
  name: 'PremiumServices',
  label: 'Premium Services',
  description:
    'Order-confirmation atom: highlight cards for premium perks (warranty, gift wrap, support). Service items are consumer-injected.',
  category: 'order',
  intent: ['confirm', 'upsell'],
  visualRole: 'atom',
  dataDeps: ['services (consumer-injected)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  mobileBehavior: 'responsive',
  searchTags: ['order', 'premium', 'services', 'perks', 'atom'],
  props: {
    columns: { type: 'number', required: true, description: 'Cards per row (1-3).' },
  },
} as const;

export type PremiumServicesMeta = typeof premiumServicesMeta;
