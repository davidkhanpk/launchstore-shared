export declare const headingMeta: {
    readonly name: "Heading";
    readonly label: "Heading";
    readonly description: "HTML heading (h1-h6) with size preset (xs..5xl), typography (weight, line-height, letter-spacing, alignment), color, margin, and entrance animation (fadeIn/slideUp/slideDown) with optional delay.";
    readonly category: "content";
    readonly intent: readonly ["heading", "title", "header", "section-title", "seo-h1", "seo-h2"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Heading levels must be logical and sequential (h1 > h2 > h3). The default level is h2 — pages must use exactly one h1 (typically set by a Hero or page title component).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["heading", "title", "h1", "h2", "h3", "h4", "h5", "h6", "section", "header", "text"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly level: {
            readonly type: "enum";
            readonly options: readonly ["h1", "h2", "h3", "h4", "h5", "h6"];
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "base", "lg", "xl", "2xl", "3xl", "4xl", "5xl"];
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["light", "normal", "medium", "semibold", "bold"];
        };
        readonly textAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly color: {
            readonly type: "string";
        };
        readonly fontSize: {
            readonly type: "string";
        };
        readonly lineHeight: {
            readonly type: "enum";
            readonly options: readonly ["tight", "snug", "normal", "relaxed", "loose"];
        };
        readonly letterSpacing: {
            readonly type: "enum";
            readonly options: readonly ["tighter", "tight", "normal", "wide", "wider", "widest"];
        };
        readonly marginTop: {
            readonly type: "number";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "number";
            readonly required: true;
        };
        readonly animation: {
            readonly type: "enum";
            readonly options: readonly ["none", "fadeIn", "slideUp", "slideDown"];
        };
        readonly animationDelay: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type HeadingMeta = typeof headingMeta;
//# sourceMappingURL=heading.meta.d.ts.map