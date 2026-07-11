export declare const textMeta: {
    readonly name: "Text";
    readonly label: "Text";
    readonly description: "A text block with typography controls (size, weight, line-height, alignment), color, max-width, and padding/margin spacing. Supports a rich-text switch that renders content via dangerouslySetInnerHTML inside the Tailwind prose container.";
    readonly category: "content";
    readonly intent: readonly ["text", "paragraph", "copy", "body", "content"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "When richText is true, ensure HTML content is sanitized upstream (avoid raw user input as HTML).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["text", "paragraph", "copy", "p", "body", "rich text", "typography"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly richText: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "base", "lg", "xl", "2xl"];
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["light", "normal", "medium", "semibold", "bold"];
        };
        readonly lineHeight: {
            readonly type: "enum";
            readonly options: readonly ["tight", "snug", "normal", "relaxed", "loose"];
        };
        readonly textAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right", "justify"];
        };
        readonly color: {
            readonly type: "string";
        };
        readonly maxWidth: {
            readonly type: "string";
        };
        readonly marginTop: {
            readonly type: "number";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "number";
            readonly required: true;
        };
        readonly paddingX: {
            readonly type: "number";
            readonly required: true;
        };
        readonly paddingY: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type TextMeta = typeof textMeta;
//# sourceMappingURL=text.meta.d.ts.map