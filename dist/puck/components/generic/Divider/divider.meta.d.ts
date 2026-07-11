export declare const dividerMeta: {
    readonly name: "Divider";
    readonly label: "Divider";
    readonly description: "Horizontal divider line with style/thickness/width/marginTop/marginBottom controls. Color accepts hex or theme tokens (resolved via var(--theme-*) at render).";
    readonly category: "generic";
    readonly intent: readonly ["divider", "hr", "separator", "horizontal-rule"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "<hr> conveys a thematic break to screen readers. Use sparingly inside dense lists.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["divider", "hr", "line", "separator", "horizontal-rule"];
    readonly props: {
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["solid", "dashed", "dotted"];
            readonly required: true;
        };
        readonly thickness: {
            readonly type: "enum";
            readonly options: readonly ["1", "2", "4"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
        readonly width: {
            readonly type: "enum";
            readonly options: readonly ["full", "3/4", "1/2", "1/4"];
            readonly required: true;
        };
        readonly marginTop: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type DividerMeta = typeof dividerMeta;
//# sourceMappingURL=divider.meta.d.ts.map