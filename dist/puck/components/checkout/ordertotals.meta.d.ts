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
    readonly a11yNotes: "Plain text only.";
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
export type OrderTotalsMeta = typeof orderTotalsMeta;
//# sourceMappingURL=ordertotals.meta.d.ts.map