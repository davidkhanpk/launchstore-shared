export declare const orderSummaryMeta: {
    readonly name: "OrderSummary";
    readonly label: "Order Summary";
    readonly description: "Order summary with item list (image, quantity badge, variant info, line total), totals breakdown (subtotal, shipping, tax, discount, total), and security lock icon. Cart-library-agnostic: takes items[], totals, formatPrice. Lucide LockClosedIcon replaced with inline SVG.";
    readonly category: "cart";
    readonly intent: readonly ["order", "summary", "review", "checkout"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (cart flow)", "totals (cart flow)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + decorative icons. All inputs are static — no form fields. Real product images should be passed via items[].thumbnail.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "summary", "review", "checkout", "totals"];
    readonly props: {
        readonly position: {
            readonly type: "enum";
            readonly options: readonly ["sidebar", "inline"];
            readonly required: true;
        };
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
        readonly compactView: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type OrderSummaryMeta = typeof orderSummaryMeta;
//# sourceMappingURL=ordersummary.meta.d.ts.map