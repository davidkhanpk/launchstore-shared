export const orderTotalsMeta = {
    name: 'OrderTotals', label: 'Order Totals',
    description: 'Order totals breakdown (subtotal, shipping, tax, discount, total) with optional highlight box. Pre-formatted strings; no currency math in shared.',
    category: 'checkout', intent: ['order', 'totals', 'summary'], visualRole: 'block', dataDeps: ['totals (cart flow)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text only.', mobileBehavior: 'responsive',
    searchTags: ['order', 'totals', 'summary', 'subtotal'],
    props: { showSubtotal: { type: 'boolean', required: true }, showShipping: { type: 'boolean', required: true }, showTax: { type: 'boolean', required: true }, showDiscount: { type: 'boolean', required: true }, showTotal: { type: 'boolean', required: true }, highlightTotal: { type: 'boolean', required: true }, layout: { type: 'enum', options: ['default', 'compact'], required: true } },
};
//# sourceMappingURL=ordertotals.meta.js.map