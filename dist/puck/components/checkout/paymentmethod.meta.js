export const paymentMethodMeta = {
    name: 'PaymentMethod', label: 'Payment Method',
    description: 'Payment method selector with 3 layouts (list/cards/icons), express checkout top/bottom, optional security badges, save-card checkbox. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue.',
    category: 'checkout', intent: ['payment', 'checkout', 'card'], visualRole: 'block', dataDeps: ['methods (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>. Card form uncontrolled for Puck preview.', mobileBehavior: 'responsive',
    searchTags: ['payment', 'checkout', 'card', 'paypal', 'apple-pay'],
    props: { layout: { type: 'enum', options: ['list', 'cards', 'icons'], required: true }, showPaymentIcons: { type: 'boolean', required: true }, showSecurityBadges: { type: 'boolean', required: true }, enableSaveCard: { type: 'boolean', required: true }, expressCheckoutPosition: { type: 'enum', options: ['top', 'bottom', 'none'], required: true } },
};
//# sourceMappingURL=paymentmethod.meta.js.map