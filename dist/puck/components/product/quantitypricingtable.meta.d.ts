export declare const quantityPricingTableMeta: {
    readonly name: "QuantityPricingTable";
    readonly label: "Quantity Pricing";
    readonly description: "Displays quantity-based tier pricing (volume discounts) on the product page. Shows tier cards or table with quantity ranges, unit prices, and savings percentages. Automatically highlights the active tier based on current cart quantity.";
    readonly category: "product";
    readonly intent: readonly ["product-page", "pricing", "quantity", "volume", "tier", "discount"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["tiers (variant prices with min_quantity)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Standard table/card markup. Tier information is text-readable.";
    readonly mobileBehavior: "responsive (cards stack on mobile)";
    readonly searchTags: readonly ["quantity", "volume", "tier", "pricing", "breaks", "discount", "buy more", "save", "bulk", "wholesale"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["cards", "table"];
            readonly required: false;
        };
        readonly showSavings: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly showBasePrice: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly highlightActiveTier: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly title: {
            readonly type: "string";
            readonly required: false;
        };
    };
};
export type QuantityPricingTableMeta = typeof quantityPricingTableMeta;
//# sourceMappingURL=quantitypricingtable.meta.d.ts.map