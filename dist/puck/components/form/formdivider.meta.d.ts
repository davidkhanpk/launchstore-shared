export declare const formDividerMeta: {
    readonly name: "FormDivider";
    readonly label: "Form Divider";
    readonly description: "Form section divider with top/bottom margin + theme color.";
    readonly category: "form";
    readonly intent: readonly ["form", "divider"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <hr>. ColorField → text+resolveColor.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["form", "divider", "separator"];
    readonly props: {
        readonly spacingTop: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly spacingBottom: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FormDividerMeta = typeof formDividerMeta;
//# sourceMappingURL=formdivider.meta.d.ts.map