export declare const stockIndicatorMeta: {
    readonly name: "StockIndicator";
    readonly label: "Stock Indicator";
    readonly description: "Stock-availability indicator: in-stock / low-stock / out-of-stock / pre-order. Inventory is aggregated across all variants. Lucide Check/AlertCircle/XCircle/Clock replaced with inline SVG. Pre-order flag comes from product.metadata.is_pre_order.";
    readonly category: "product";
    readonly intent: readonly ["product", "stock", "inventory", "availability", "preorder"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Status text is the primary indicator (a11y-safe). Icons are decorative; status text conveys meaning.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "stock", "inventory", "availability", "pre-order"];
    readonly props: {
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showText: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showQuantity: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly lowStockThreshold: {
            readonly type: "number";
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["default", "badge", "minimal"];
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type StockIndicatorMeta = typeof stockIndicatorMeta;
//# sourceMappingURL=stockindicator.meta.d.ts.map