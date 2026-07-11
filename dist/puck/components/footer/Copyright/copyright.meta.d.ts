export declare const copyrightMeta: {
    readonly name: "Copyright";
    readonly label: "Copyright";
    readonly description: "Footer copyright line. Optional auto-prepended \"© <current year>\" prefix. Top divider toggle for separating from content above. Padding controls (text fields, accepts CSS length values).";
    readonly category: "footer";
    readonly intent: readonly ["copyright", "footer-text", "legal", "footer-copyright"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["textColor", "dividerColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text. Decorative only — no interactivity.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["copyright", "legal", "footer", "©", "year"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showYear: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "base"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showDivider: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly dividerColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingTop: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingBottom: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type CopyrightMeta = typeof copyrightMeta;
//# sourceMappingURL=copyright.meta.d.ts.map