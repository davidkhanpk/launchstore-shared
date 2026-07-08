export declare const cardMeta: {
    readonly name: "Card";
    readonly label: "Card";
    readonly description: "Container card with padding, shadow, border, rounded corner radius, background color (hex or theme token), and optional hover-lift effect. Hosts a single DropZone (\"content\") for nested children.";
    readonly category: "generic";
    readonly intent: readonly ["card", "container", "panel", "surface", "box"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain div wrapper. If card is interactive (acts like a button/link), consider adding role + tabindex. Otherwise no special a11y concerns.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["card", "panel", "container", "surface", "box", "dropzone", "wrapper"];
    readonly props: {
        readonly padding: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly shadow: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly border: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly rounded: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "full"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverEffect: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type CardMeta = typeof cardMeta;
//# sourceMappingURL=card.meta.d.ts.map