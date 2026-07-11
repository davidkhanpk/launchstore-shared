export const orderConfirmationMeta = {
    name: 'OrderConfirmation', label: 'Order Confirmation',
    description: 'Post-purchase success page (3 styles: success/minimal/detailed) with optional order number, email confirmation, and continue-shopping button. Cart-library-agnostic: takes orderId, email, viewOrderHref, continueShoppingHref.',
    category: 'order', intent: ['order', 'confirmation', 'success'], visualRole: 'block', dataDeps: ['orderId/email (consumer)'],
    copyFields: ['titleText', 'messageText'], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text + <a> tags. Lucide Check + Heroicons EnvelopeIcon replaced with inline SVG.', mobileBehavior: 'responsive',
    searchTags: ['order', 'confirmation', 'success', 'thank-you'],
    props: { style: { type: 'enum', options: ['success', 'minimal', 'detailed'], required: true }, titleText: { type: 'string', required: true }, messageText: { type: 'string', required: true }, showCheckmark: { type: 'boolean', required: true }, showOrderNumber: { type: 'boolean', required: true }, showEmailConfirmation: { type: 'boolean', required: true }, showContinueShopping: { type: 'boolean', required: true } },
};
//# sourceMappingURL=orderconfirmation.meta.js.map