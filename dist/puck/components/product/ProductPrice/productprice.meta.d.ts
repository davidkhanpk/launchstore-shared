export declare const productPriceMeta: {
    readonly name: "ProductPrice";
    readonly label: "Product Price";
    readonly description: "Renders the product price with optional compare-at (strikethrough original) and savings percentage badge. Consumer provides `resolvePrice(product)` callback for region/currency-aware pricing (e.g., wrapping @lib/util/get-product-price). Font size, color, weight, and horizontal/vertical layout are configurable.";
    readonly category: "product";
    readonly intent: readonly ["product", "price", "sale", "compare-at"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)", "resolvePrice (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Compare-at price uses semantic <span> with line-through class (visual cue only, no role needed). Savings badge is plain text inside <span>.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "price", "sale", "compare-at", "savings"];
    readonly props: {
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "2xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "enum";
            readonly options: readonly ["default", "black", "gray", "primary"];
            readonly required: true;
        };
        readonly showComparePrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical"];
            readonly required: true;
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
        readonly showSavingsPercentage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductPriceMeta = typeof productPriceMeta;
//# sourceMappingURL=productprice.meta.d.ts.map