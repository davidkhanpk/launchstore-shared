export declare const cartSummaryMeta: {
    readonly name: "CartSummary";
    readonly label: "Cart Summary";
    readonly description: "Cart summary with subtotal, shipping (with free-shipping progress bar), tax, discount, total, optional coupon code input + applied coupon display, checkout button, and trust badges. Cart-library-agnostic: takes totals, appliedCoupon, onApplyCoupon, onRemoveCoupon, onCheckout, formatPrice. Lucide Bag/Tag/ArrowRight/Shield/Check replaced with inline SVG.";
    readonly category: "cart";
    readonly intent: readonly ["cart", "summary", "totals", "coupon", "checkout-button"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["totals (cart flow)", "appliedCoupon (cart flow)", "onApplyCoupon (injected)", "onRemoveCoupon (injected)", "onCheckout (injected)"];
    readonly copyFields: readonly ["checkoutButtonText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button> + <input> with onClick/onChange. Coupon remove and Checkout actions are keyboard accessible. Trust badges are decorative <img> with alt text.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "summary", "totals", "coupon", "checkout"];
    readonly props: {
        readonly showSubtotal: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showShipping: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTax: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDiscount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCouponInput: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCheckoutButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly checkoutButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly freeShippingThreshold: {
            readonly type: "number";
            readonly required: true;
        };
        readonly position: {
            readonly type: "enum";
            readonly options: readonly ["sidebar", "bottom"];
            readonly required: true;
        };
        readonly showTrustBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type CartSummaryMeta = typeof cartSummaryMeta;
//# sourceMappingURL=cartsummary.meta.d.ts.map