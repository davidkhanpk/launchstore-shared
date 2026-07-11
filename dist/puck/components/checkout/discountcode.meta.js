export const discountCodeMeta = {
    name: 'DiscountCode', label: 'Discount Code',
    description: 'Discount code input + applied-coupon display, with 2 layouts (always-visible / expandable accordion). Cart-library-agnostic: takes appliedDiscount, onApply(code), onRemove, formatPrice.',
    category: 'checkout', intent: ['cart', 'discount', 'coupon'], visualRole: 'block', dataDeps: ['appliedDiscount (cart flow)'],
    copyFields: ['buttonText', 'placeholder'], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input> + <button>. <details> for expandable.', mobileBehavior: 'responsive',
    searchTags: ['cart', 'discount', 'coupon', 'promo-code'],
    props: { layout: { type: 'enum', options: ['inline', 'expandable'], required: true }, showAppliedDiscounts: { type: 'boolean', required: true }, buttonText: { type: 'string', required: true }, placeholder: { type: 'string', required: true } },
};
//# sourceMappingURL=discountcode.meta.js.map