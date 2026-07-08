export const orderReviewMeta = {
    name: 'OrderReview', label: 'Order Review & Place Order',
    description: 'Final order review block: shipping address, shipping method, payment method, terms checkbox, place-order button, security badge, policy links. Cart-library-agnostic: takes shippingAddress, shippingMethod, paymentMethod, onPlaceOrder, agreedToTerms/onAgreedChange, isProcessing, hrefs.',
    category: 'checkout', intent: ['order', 'review', 'place-order', 'terms'], visualRole: 'block', dataDeps: ['shippingAddress/shippingMethod/paymentMethod (consumer)'],
    copyFields: ['buttonText'], themeable: [], a11yRisk: 'medium', a11yNotes: 'Real <button>, <input type="checkbox">. Disabled when terms not agreed.', mobileBehavior: 'responsive',
    searchTags: ['order', 'review', 'place-order', 'terms', 'confirmation'],
    props: { showTermsCheckbox: { type: 'boolean', required: true }, showPolicies: { type: 'boolean', required: true }, showSecurityBadge: { type: 'boolean', required: true }, buttonText: { type: 'string', required: true }, buttonSize: { type: 'enum', options: ['default', 'large'], required: true } },
};
//# sourceMappingURL=orderreview.meta.js.map