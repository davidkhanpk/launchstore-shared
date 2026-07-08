export const cartItemsPreviewMeta = {
    name: 'CartItemsPreview',
    label: 'Cart Items Preview',
    description: 'Static read-only cart preview (header, item list, prices). Pure presentational, no callbacks.',
    category: 'checkout', intent: ['cart', 'preview', 'review'], visualRole: 'block', dataDeps: ['items (consumer)', 'countryCode (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text + images. No interactive elements.', mobileBehavior: 'responsive',
    searchTags: ['cart', 'preview', 'review'],
    props: { showImages: { type: 'boolean', required: true }, showQuantity: { type: 'boolean', required: true }, showVariantInfo: { type: 'boolean', required: true }, imageSize: { type: 'enum', options: ['sm', 'md', 'lg'], required: true }, layout: { type: 'enum', options: ['list', 'compact'], required: true } },
};
export const discountCodeMeta = {
    name: 'DiscountCode',
    label: 'Discount Code',
    description: 'Discount code input + applied-coupon display, with 2 layouts (always-visible / expandable accordion). Cart-library-agnostic: takes appliedDiscount, onApply(code), onRemove, formatPrice.',
    category: 'checkout', intent: ['cart', 'discount', 'coupon'], visualRole: 'block', dataDeps: ['appliedDiscount (cart flow)'],
    copyFields: ['buttonText', 'placeholder'], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input> + <button> with onClick/onChange. <details> for expandable layout.', mobileBehavior: 'responsive',
    searchTags: ['cart', 'discount', 'coupon', 'promo-code'],
    props: { layout: { type: 'enum', options: ['inline', 'expandable'], required: true }, showAppliedDiscounts: { type: 'boolean', required: true }, buttonText: { type: 'string', required: true }, placeholder: { type: 'string', required: true } },
};
export const orderReviewMeta = {
    name: 'OrderReview',
    label: 'Order Review & Place Order',
    description: 'Final order review block showing shipping address, shipping method, payment method, terms checkbox, place-order button, security badge, and policy links. Cart-library-agnostic: takes shippingAddress, shippingMethod, paymentMethod, onPlaceOrder, agreedToTerms/onAgreedChange, isProcessing, hrefs.',
    category: 'checkout', intent: ['order', 'review', 'place-order', 'terms'], visualRole: 'block', dataDeps: ['shippingAddress/shippingMethod/paymentMethod (consumer)', 'agreedToTerms (consumer)'],
    copyFields: ['buttonText'], themeable: [], a11yRisk: 'medium', a11yNotes: 'Real <button>, <input type="checkbox">. Disabled when terms not agreed.', mobileBehavior: 'responsive',
    searchTags: ['order', 'review', 'place-order', 'terms', 'confirmation'],
    props: { showTermsCheckbox: { type: 'boolean', required: true }, showPolicies: { type: 'boolean', required: true }, showSecurityBadge: { type: 'boolean', required: true }, buttonText: { type: 'string', required: true }, buttonSize: { type: 'enum', options: ['default', 'large'], required: true } },
};
export const orderTotalsMeta = {
    name: 'OrderTotals',
    label: 'Order Totals',
    description: 'Order totals breakdown (subtotal, shipping, tax, discount, total) with optional highlight box. Pre-formatted strings; no currency math in shared.',
    category: 'checkout', intent: ['order', 'totals', 'summary'], visualRole: 'block', dataDeps: ['totals (cart flow)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Plain text only. No interactive elements.', mobileBehavior: 'responsive',
    searchTags: ['order', 'totals', 'summary', 'subtotal'],
    props: { showSubtotal: { type: 'boolean', required: true }, showShipping: { type: 'boolean', required: true }, showTax: { type: 'boolean', required: true }, showDiscount: { type: 'boolean', required: true }, showTotal: { type: 'boolean', required: true }, highlightTotal: { type: 'boolean', required: true }, layout: { type: 'enum', options: ['default', 'compact'], required: true } },
};
export const paymentMethodMeta = {
    name: 'PaymentMethod',
    label: 'Payment Method',
    description: 'Payment method selector with 3 layouts (list/cards/icons), express checkout top/bottom, optional security badges, save-card checkbox. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue.',
    category: 'checkout', intent: ['payment', 'checkout', 'card'], visualRole: 'block', dataDeps: ['methods (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>. Card form is uncontrolled for Puck preview.', mobileBehavior: 'responsive',
    searchTags: ['payment', 'checkout', 'card', 'paypal', 'apple-pay'],
    props: { layout: { type: 'enum', options: ['list', 'cards', 'icons'], required: true }, showPaymentIcons: { type: 'boolean', required: true }, showSecurityBadges: { type: 'boolean', required: true }, enableSaveCard: { type: 'boolean', required: true }, expressCheckoutPosition: { type: 'enum', options: ['top', 'bottom', 'none'], required: true } },
};
export const shippingAddressMeta = {
    name: 'ShippingAddress',
    label: 'Shipping Address',
    description: 'Shipping address form (contact + address + optional company + same-as-billing) with 2 layouts (single/two column). Cart-library-agnostic: takes sameAsBilling, onSameAsBillingChange, onContinue, countries, states.',
    category: 'checkout', intent: ['shipping', 'address', 'checkout', 'form'], visualRole: 'block', dataDeps: ['countries (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input> + <select> + <button>. All inputs are uncontrolled for Puck preview.', mobileBehavior: 'responsive',
    searchTags: ['shipping', 'address', 'checkout', 'form'],
    props: { showBillingAddress: { type: 'boolean', required: true }, requirePhone: { type: 'boolean', required: true }, showCompanyField: { type: 'boolean', required: true }, enableAddressAutocomplete: { type: 'boolean', required: true }, defaultSameAsBilling: { type: 'boolean', required: true }, layout: { type: 'enum', options: ['single-column', 'two-column'], required: true } },
};
export const shippingMethodMeta = {
    name: 'ShippingMethod',
    label: 'Shipping Method',
    description: 'Shipping method selector with 3 layouts (list/cards/compact) + optional pickup option. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue, defaultSelection.',
    category: 'checkout', intent: ['shipping', 'delivery', 'checkout'], visualRole: 'block', dataDeps: ['methods (consumer)'],
    copyFields: [], themeable: [], a11yRisk: 'low', a11yNotes: 'Real <input type="radio"> + <button>. Lucide Truck/Clock replaced with inline SVG.', mobileBehavior: 'responsive',
    searchTags: ['shipping', 'delivery', 'checkout', 'method'],
    props: { layout: { type: 'enum', options: ['list', 'cards', 'compact'], required: true }, showDeliveryTime: { type: 'boolean', required: true }, showDeliveryDescription: { type: 'boolean', required: true }, showPickupOption: { type: 'boolean', required: true }, defaultSelection: { type: 'enum', options: ['standard', 'express', 'overnight'], required: true } },
};
//# sourceMappingURL=checkout.metas.js.map