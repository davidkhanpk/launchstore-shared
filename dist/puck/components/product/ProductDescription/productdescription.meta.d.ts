export declare const productDescriptionMeta: {
    readonly name: "ProductDescription";
    readonly label: "Product Description";
    readonly description: "Renders product.description (HTML). Configurable font size, text color, line height, max-width (Tailwind prose + narrow), and margin/padding shortcuts. Reads the description from the shared product shape; consumer wrapper injects the product at render-time. Falls back to placeholder text when product is missing.";
    readonly category: "product";
    readonly intent: readonly ["product", "description", "prose"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Renders HTML via dangerouslySetInnerHTML — the source (Medusa product description) is trusted in this codebase but new callers should sanitize. Tailwind `prose` class applies sensible default heading/paragraph spacing.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "description", "prose", "long-form"];
    readonly props: {
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "enum";
            readonly options: readonly ["default", "gray", "black"];
            readonly required: true;
        };
        readonly lineHeight: {
            readonly type: "enum";
            readonly options: readonly ["tight", "normal", "relaxed"];
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["full", "prose", "narrow"];
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
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductDescriptionMeta = typeof productDescriptionMeta;
//# sourceMappingURL=productdescription.meta.d.ts.map