export const giftCardCodesDisplayMeta = {
  name: 'GiftCardCodesDisplay', label: 'Gift Card Codes',
  description: 'Displays gift card codes purchased in the order — for the order confirmation page. Shows code, value, copy button, and email note. Fetches codes automatically from the loyalty plugin.',
  category: 'order', intent: ['order-confirmation', 'gift-card', 'purchase', 'success'], visualRole: 'block', dataDeps: ['giftCards (order gift card items)'],
  copyFields: ['title'], themeable: [], a11yRisk: 'low', a11yNotes: 'Copy button has text label. Codes in monospace for readability.', mobileBehavior: 'responsive',
  searchTags: ['gift', 'card', 'code', 'confirmation', 'success', 'purchase', 'delivery'],
  props: { showCopyButton: { type: 'boolean', required: false }, showEmailNote: { type: 'boolean', required: false }, title: { type: 'string', required: false } },
} as const;
export type GiftCardCodesDisplayMeta = typeof giftCardCodesDisplayMeta;
