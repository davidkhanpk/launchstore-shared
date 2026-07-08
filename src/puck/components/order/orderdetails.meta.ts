export const orderDetailsMeta = {
  name: 'OrderDetails', label: 'Order Details',
  description: 'Full order details page: items list (with optional preorder badge), shipping + billing addresses, payment method, shipping method, pricing breakdown. Cart-library-agnostic: takes items, shippingAddress, billingAddress, payment, shippingMethod, totals, formatPrice.',
  category: 'order', intent: ['order', 'details', 'receipt'], visualRole: 'block', dataDeps: ['items/totals (consumer)', 'addresses (consumer)'],
  copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text + <img>. No interactive elements. Compact view toggles font size.', mobileBehavior: 'responsive',
  searchTags: ['order', 'details', 'receipt', 'invoice'],
  props: { showItemImages: { type: 'boolean', required: true }, showItemQuantity: { type: 'boolean', required: true }, showItemPrice: { type: 'boolean', required: true }, showShippingAddress: { type: 'boolean', required: true }, showBillingAddress: { type: 'boolean', required: true }, showPaymentMethod: { type: 'boolean', required: true }, showShippingMethod: { type: 'boolean', required: true }, showPricingBreakdown: { type: 'boolean', required: true }, compactView: { type: 'boolean', required: true } },
} as const;
export type OrderDetailsMeta = typeof orderDetailsMeta;
