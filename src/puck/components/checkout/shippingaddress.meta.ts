export const shippingAddressMeta = {
  name: 'ShippingAddress', label: 'Shipping Address',
  description: 'Shipping address form (contact + address + optional company + same-as-billing) with 2 layouts (single/two column). Cart-library-agnostic: takes sameAsBilling, onSameAsBillingChange, onContinue, countries, states.',
  category: 'checkout', intent: ['shipping', 'address', 'checkout', 'form'], visualRole: 'block', dataDeps: ['countries (consumer)'],
  copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input> + <select> + <button>. All inputs uncontrolled for Puck preview.', mobileBehavior: 'responsive',
  searchTags: ['shipping', 'address', 'checkout', 'form'],
  props: { showBillingAddress: { type: 'boolean', required: true }, requirePhone: { type: 'boolean', required: true }, showCompanyField: { type: 'boolean', required: true }, enableAddressAutocomplete: { type: 'boolean', required: true }, defaultSameAsBilling: { type: 'boolean', required: true }, layout: { type: 'enum', options: ['single-column', 'two-column'], required: true } },
} as const;
export type ShippingAddressMeta = typeof shippingAddressMeta;
