export const shippingMethodMeta = {
  name: 'ShippingMethod', label: 'Shipping Method',
  description: 'Shipping method selector with 3 layouts (list/cards/compact) + optional pickup option. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue, defaultSelection.',
  category: 'checkout', intent: ['shipping', 'delivery', 'checkout'], visualRole: 'block', dataDeps: ['methods (consumer)'],
  copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>. Lucide Truck/Clock replaced with inline SVG.', mobileBehavior: 'responsive',
  searchTags: ['shipping', 'delivery', 'checkout', 'method'],
  props: { layout: { type: 'enum', options: ['list', 'cards', 'compact'], required: true }, showDeliveryTime: { type: 'boolean', required: true }, showDeliveryDescription: { type: 'boolean', required: true }, showPickupOption: { type: 'boolean', required: true }, defaultSelection: { type: 'enum', options: ['standard', 'express', 'overnight'], required: true } },
} as const;
export type ShippingMethodMeta = typeof shippingMethodMeta;
