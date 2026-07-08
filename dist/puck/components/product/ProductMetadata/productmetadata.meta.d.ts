export declare const productMetadataMeta: {
    readonly name: "ProductMetadata";
    readonly label: "Product Metadata";
    readonly description: "Renders SKU, weight, dimensions, and origin country in a list, grid, or table layout. Lucide icons replaced with inline SVG (Package, Ruler, Weight, Globe). Per-field on/off toggles. Reads from the shared product shape; consumer wrapper injects the product at render-time.";
    readonly category: "product";
    readonly intent: readonly ["product", "metadata", "sku", "specs"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly ["titleText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "List/grid use semantic <dt>/<dd>. Table uses <table>/<tbody>. Each icon has decorative-only class — text label accompanies it.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "metadata", "sku", "specs", "dimensions", "weight"];
    readonly props: {
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly titleText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showSku: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showWeight: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDimensions: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showOrigin: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "grid", "table"];
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductMetadataMeta = typeof productMetadataMeta;
//# sourceMappingURL=productmetadata.meta.d.ts.map