export declare const productTitleMeta: {
    readonly name: "ProductTitle";
    readonly label: "Product Title";
    readonly description: "Product title heading. Configurable HTML tag (h1-h4), font size, color, alignment, weight, and Tailwind margin/padding shortcuts. Reads `product.title` from the shared product shape; consumer wrapper injects the product at render-time.";
    readonly category: "product";
    readonly intent: readonly ["product", "title", "heading"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Renders the chosen HTML tag (h1..h4); consumer should pick h1 for the canonical product page title for SEO/a11y. Style alone must not be the only signal of hierarchy.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "title", "heading", "h1", "h2", "h3"];
    readonly props: {
        readonly tag: {
            readonly type: "enum";
            readonly options: readonly ["h1", "h2", "h3", "h4"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["default", "sm", "md", "lg", "xl", "2xl", "3xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "enum";
            readonly options: readonly ["default", "black", "gray", "primary", "white"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
        readonly marginTop: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingX: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingY: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type ProductTitleMeta = typeof productTitleMeta;
//# sourceMappingURL=producttitle.meta.d.ts.map