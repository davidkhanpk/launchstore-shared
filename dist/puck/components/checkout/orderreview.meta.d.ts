export declare const orderReviewMeta: {
    readonly name: "OrderReview";
    readonly label: "Order Review & Place Order";
    readonly description: "Final order review block: shipping address, shipping method, payment method, terms checkbox, place-order button, security badge, policy links. Cart-library-agnostic: takes shippingAddress, shippingMethod, paymentMethod, onPlaceOrder, agreedToTerms/onAgreedChange, isProcessing, hrefs.";
    readonly category: "checkout";
    readonly intent: readonly ["order", "review", "place-order", "terms"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["shippingAddress/shippingMethod/paymentMethod (consumer)"];
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
export type OrderReviewMeta = typeof orderReviewMeta;
//# sourceMappingURL=orderreview.meta.d.ts.map