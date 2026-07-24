export const paymentMethodMeta = {
  name: 'PaymentMethod', label: 'Payment Method',
  description: 'Payment method selector with 3 layouts (list/cards/icons), optional security badges, save-card checkbox. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue. No express checkout — that lives outside Medusa\'s payment session flow and must be wired separately via Stripe Express Checkout Element if/when a real integration is built.',
  category: 'checkout', intent: ['payment', 'checkout', 'card'], visualRole: 'block', dataDeps: ['methods (consumer)'],
  copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>.', mobileBehavior: 'responsive',
  searchTags: ['payment', 'checkout', 'card', 'paypal', 'apple-pay'],
  props: { layout: { type: 'enum', options: ['list', 'cards', 'icons'], required: true }, showPaymentIcons: { type: 'boolean', required: true }, showSecurityBadges: { type: 'boolean', required: true }, enableSaveCard: { type: 'boolean', required: true } },
} as const;
export type PaymentMethodMeta = typeof paymentMethodMeta;
