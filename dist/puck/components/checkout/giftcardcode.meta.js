export const giftCardCodeMeta = {
    name: 'GiftCardCode', label: 'Gift Card Code',
    description: 'Gift card code input for checkout — customers enter a code to apply store credit balance to their order total. Expandable layout, applied-card chip with remove button, specific error feedback for invalid/expired/redeemed codes.',
    category: 'checkout', intent: ['checkout', 'payment', 'gift-card', 'credit', 'redeem'], visualRole: 'block', dataDeps: ['appliedGiftCard (cart credit_lines)'],
    copyFields: ['buttonText', 'placeholder'], themeable: [], a11yRisk: 'medium', a11yNotes: 'Real <input> + <button>. Enter key submits.', mobileBehavior: 'responsive',
    searchTags: ['gift', 'card', 'code', 'credit', 'redeem', 'checkout', 'balance', 'voucher'],
    props: { layout: { type: 'enum', options: ['inline', 'expandable'], required: false }, showAppliedGiftCard: { type: 'boolean', required: false }, buttonText: { type: 'string', required: false }, placeholder: { type: 'string', required: false } },
};
//# sourceMappingURL=giftcardcode.meta.js.map