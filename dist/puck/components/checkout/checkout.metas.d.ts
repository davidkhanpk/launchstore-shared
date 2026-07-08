export declare const cartItemsPreviewMeta: {
    readonly name: "CartItemsPreview";
    readonly label: "Cart Items Preview";
    readonly description: "Static read-only cart preview (header, item list, prices). Pure presentational, no callbacks.";
    readonly category: "checkout";
    readonly intent: readonly ["cart", "preview", "review"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (consumer)", "countryCode (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + images. No interactive elements.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "preview", "review"];
    readonly props: {
        readonly showImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showQuantity: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showVariantInfo: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "compact"];
            readonly required: true;
        };
    };
};
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
    readonly a11yNotes: "Real <input> + <button> with onClick/onChange. <details> for expandable layout.";
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
export declare const orderReviewMeta: {
    readonly name: "OrderReview";
    readonly label: "Order Review & Place Order";
    readonly description: "Final order review block showing shipping address, shipping method, payment method, terms checkbox, place-order button, security badge, and policy links. Cart-library-agnostic: takes shippingAddress, shippingMethod, paymentMethod, onPlaceOrder, agreedToTerms/onAgreedChange, isProcessing, hrefs.";
    readonly category: "checkout";
    readonly intent: readonly ["order", "review", "place-order", "terms"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["shippingAddress/shippingMethod/paymentMethod (consumer)", "agreedToTerms (consumer)"];
    readonly copyFields: readonly ["buttonText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <button>, <input type=\"checkbox\">. Disabled when terms not agreed.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "review", "place-order", "terms", "confirmation"];
    readonly props: {
        readonly showTermsCheckbox: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPolicies: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSecurityBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly buttonSize: {
            readonly type: "enum";
            readonly options: readonly ["default", "large"];
            readonly required: true;
        };
    };
};
export declare const orderTotalsMeta: {
    readonly name: "OrderTotals";
    readonly label: "Order Totals";
    readonly description: "Order totals breakdown (subtotal, shipping, tax, discount, total) with optional highlight box. Pre-formatted strings; no currency math in shared.";
    readonly category: "checkout";
    readonly intent: readonly ["order", "totals", "summary"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["totals (cart flow)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text only. No interactive elements.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "totals", "summary", "subtotal"];
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
        readonly showTotal: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly highlightTotal: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["default", "compact"];
            readonly required: true;
        };
    };
};
export declare const paymentMethodMeta: {
    readonly name: "PaymentMethod";
    readonly label: "Payment Method";
    readonly description: "Payment method selector with 3 layouts (list/cards/icons), express checkout top/bottom, optional security badges, save-card checkbox. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue.";
    readonly category: "checkout";
    readonly intent: readonly ["payment", "checkout", "card"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["methods (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"radio\"> + <button>. Card form is uncontrolled for Puck preview.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["payment", "checkout", "card", "paypal", "apple-pay"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "cards", "icons"];
            readonly required: true;
        };
        readonly showPaymentIcons: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSecurityBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableSaveCard: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly expressCheckoutPosition: {
            readonly type: "enum";
            readonly options: readonly ["top", "bottom", "none"];
            readonly required: true;
        };
    };
};
export declare const shippingAddressMeta: {
    readonly name: "ShippingAddress";
    readonly label: "Shipping Address";
    readonly description: "Shipping address form (contact + address + optional company + same-as-billing) with 2 layouts (single/two column). Cart-library-agnostic: takes sameAsBilling, onSameAsBillingChange, onContinue, countries, states.";
    readonly category: "checkout";
    readonly intent: readonly ["shipping", "address", "checkout", "form"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["countries (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input> + <select> + <button>. All inputs are uncontrolled for Puck preview.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["shipping", "address", "checkout", "form"];
    readonly props: {
        readonly showBillingAddress: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly requirePhone: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCompanyField: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableAddressAutocomplete: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultSameAsBilling: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["single-column", "two-column"];
            readonly required: true;
        };
    };
};
export declare const shippingMethodMeta: {
    readonly name: "ShippingMethod";
    readonly label: "Shipping Method";
    readonly description: "Shipping method selector with 3 layouts (list/cards/compact) + optional pickup option. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue, defaultSelection.";
    readonly category: "checkout";
    readonly intent: readonly ["shipping", "delivery", "checkout"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["methods (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"radio\"> + <button>. Lucide Truck/Clock replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["shipping", "delivery", "checkout", "method"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "cards", "compact"];
            readonly required: true;
        };
        readonly showDeliveryTime: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDeliveryDescription: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPickupOption: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultSelection: {
            readonly type: "enum";
            readonly options: readonly ["standard", "express", "overnight"];
            readonly required: true;
        };
    };
};
export type CartItemsPreviewMeta = typeof cartItemsPreviewMeta;
export type DiscountCodeMeta = typeof discountCodeMeta;
export type OrderReviewMeta = typeof orderReviewMeta;
export type OrderTotalsMeta = typeof orderTotalsMeta;
export type PaymentMethodMeta = typeof paymentMethodMeta;
export type ShippingAddressMeta = typeof shippingAddressMeta;
export type ShippingMethodMeta = typeof shippingMethodMeta;
//# sourceMappingURL=checkout.metas.d.ts.map