export const shippingMethodMeta = {
    name: 'ShippingMethod', label: 'Shipping Method',
    description: 'Shipping method selector with 3 layouts (list/cards/compact) + optional pickup option. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue, pickupOption?. The wrapper injects real Medusa shipping options and the currently selected option ID; no static fallback list.',
    category: 'checkout', intent: ['shipping', 'delivery', 'checkout'], visualRole: 'block', dataDeps: ['methods (consumer)', 'pickupOption? (consumer)', 'selectedId (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>.', mobileBehavior: 'responsive',
    searchTags: ['shipping', 'delivery', 'checkout'],
    props: { layout: { type: 'enum', options: ['list', 'cards', 'compact'], required: true }, showDeliveryTime: { type: 'boolean', required: true }, showDeliveryDescription: { type: 'boolean', required: true }, showPickupOption: { type: 'boolean', required: true } },
};
//# sourceMappingURL=shippingmethod.meta.js.map