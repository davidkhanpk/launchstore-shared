export declare const orderDetailsMeta: {
    readonly name: "OrderDetails";
    readonly label: "Order Details";
    readonly description: "Full order details page: items list (with optional preorder badge), shipping + billing addresses, payment method, shipping method, pricing breakdown. Cart-library-agnostic: takes items, shippingAddress, billingAddress, payment, shippingMethod, totals, formatPrice.";
    readonly category: "order";
    readonly intent: readonly ["order", "details", "receipt"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items/totals (consumer)", "addresses (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + <img>. No interactive elements. Compact view toggles font size.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "details", "receipt", "invoice"];
    readonly props: {
        readonly showItemImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showItemQuantity: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showItemPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showShippingAddress: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showBillingAddress: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPaymentMethod: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showShippingMethod: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPricingBreakdown: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly compactView: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type OrderDetailsMeta = typeof orderDetailsMeta;
//# sourceMappingURL=orderdetails.meta.d.ts.map