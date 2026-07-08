export declare const spacerMeta: {
    readonly name: "Spacer";
    readonly label: "Spacer";
    readonly description: "Vertical whitespace with optional horizontal divider line. Height preset (xs..3xl → Tailwind h-* classes). Optional divider in solid/dashed/dotted variants.";
    readonly category: "generic";
    readonly intent: readonly ["spacer", "divider", "whitespace", "gap", "separator"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["dividerColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Decorative. <hr> is announced as a thematic break by screen readers — use sparingly.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["spacer", "divider", "whitespace", "gap", "hr", "separator"];
    readonly props: {
        readonly height: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"];
            readonly required: true;
        };
        readonly showDivider: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly dividerStyle: {
            readonly type: "enum";
            readonly options: readonly ["solid", "dashed", "dotted"];
        };
        readonly dividerColor: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type SpacerMeta = typeof spacerMeta;
//# sourceMappingURL=spacer.meta.d.ts.map