export declare const discountCodeMeta: {
    readonly name: "DiscountCode";
    readonly label: "Discount Code";
    readonly description: "Discount code input + applied-coupon display, with 2 layouts (always-visible / expandable accordion). Cart-library-agnostic: takes appliedDiscount, onApply(code), onRemove, formatPrice.";
    readonly category: "checkout";
    readonly intent: readonly ["cart", "discount", "coupon"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["appliedDiscount (cart flow)"];
    readonly copyFields: readonly ["buttonText", "placeholder"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input> + <button>. <details> for expandable.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "discount", "coupon", "promo-code"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["inline", "expandable"];
            readonly required: true;
        };
        readonly showAppliedDiscounts: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly placeholder: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type DiscountCodeMeta = typeof discountCodeMeta;
//# sourceMappingURL=discountcode.meta.d.ts.map