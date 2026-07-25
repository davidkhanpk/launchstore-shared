export const paymentMethodMeta = {
  name: 'PaymentMethod', label: 'Payment Method',
  description: 'Payment method selector with 3 layouts (list/cards/icons), optional security badges, save-card checkbox. Display info (name, description, icon) comes from the shared PAYMENT_INFO_MAP keyed by Medusa provider id. No express checkout — those are the same Medusa provider IDs (pp_apple_pay_apple, pp_google_pay_google) shown with friendly names.',
  category: 'checkout', intent: ['payment', 'checkout', 'card'], visualRole: 'block', dataDeps: ['methods (consumer)', 'selectedId? (consumer)'],
  copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>.', mobileBehavior: 'responsive',
  searchTags: ['payment', 'checkout', 'card', 'paypal', 'apple-pay', 'google-pay', 'manual'],
  props: { layout: { type: 'enum', options: ['list', 'cards', 'icons'], required: true }, showPaymentIcons: { type: 'boolean', required: true }, showSecurityBadges: { type: 'boolean', required: true }, enableSaveCard: { type: 'boolean', required: true } },
} as const;
export type PaymentMethodMeta = typeof paymentMethodMeta;
