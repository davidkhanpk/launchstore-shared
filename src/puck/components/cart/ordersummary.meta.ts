export const orderSummaryMeta = {
  name: 'OrderSummary',
  label: 'Order Summary',
  description: 'Order summary with item list (image, quantity badge, variant info, line total), totals breakdown (subtotal, shipping, tax, discount, total), and security lock icon. Cart-library-agnostic: takes items[], totals, formatPrice. Lucide LockClosedIcon replaced with inline SVG.',
  category: 'cart',
  intent: ['order', 'summary', 'review', 'checkout'],
  visualRole: 'block',
  dataDeps: ['items (cart flow)', 'totals (cart flow)'],
  copyFields: [],
  themeable: [],
  a11yRisk: 'low',
  a11yNotes: 'Plain text + decorative icons. All inputs are static — no form fields. Real product images should be passed via items[].thumbnail.',
  mobileBehavior: 'responsive',
  searchTags: ['order', 'summary', 'review', 'checkout', 'totals'],
  props: {
    position: { type: 'enum', options: ['sidebar', 'inline'], required: true },
    showItemImages: { type: 'boolean', required: true },
    showItemQuantity: { type: 'boolean', required: true },
    showItemPrice: { type: 'boolean', required: true },
    showSubtotal: { type: 'boolean', required: true },
    showShipping: { type: 'boolean', required: true },
    showTax: { type: 'boolean', required: true },
    showDiscount: { type: 'boolean', required: true },
    showTotal: { type: 'boolean', required: true },
    compactView: { type: 'boolean', required: true },
  },
} as const;

export type OrderSummaryMeta = typeof orderSummaryMeta;
