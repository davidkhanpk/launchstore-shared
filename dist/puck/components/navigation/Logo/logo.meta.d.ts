export declare const logoMeta: {
    readonly name: "Logo";
    readonly label: "Logo";
    readonly description: "Logo image + optional storefront name text. Renders as an <a href> linking to the configured URL. Image-only or text-only fallback when one of imageUrl/text is empty. Plain anchor link (consumers wrap with their Link component if next.js routing is needed).";
    readonly category: "navigation";
    readonly intent: readonly ["logo", "brand", "site-logo", "header", "navigation", "store-name"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["altText", "text"];
    readonly themeable: readonly ["textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Image <img> has alt text. Renders as <a> (whole element clickable) — focus ring inherited from browser default.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["logo", "brand", "site-logo", "header", "store-name", "nav"];
    readonly props: {
        readonly imageUrl: {
            readonly type: "string";
        };
        readonly altText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly linkTo: {
            readonly type: "string";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "string";
            readonly required: true;
        };
        readonly maxHeight: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showText: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textPosition: {
            readonly type: "enum";
            readonly options: readonly ["right", "below"];
            readonly required: true;
        };
        readonly textSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg", "xl"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
    };
};
export type LogoMeta = typeof logoMeta;
//# sourceMappingURL=logo.meta.d.ts.map