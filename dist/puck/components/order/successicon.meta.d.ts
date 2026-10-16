export declare const successIconMeta: {
    readonly name: "SuccessIcon";
    readonly label: "Success Icon";
    readonly description: "Order-confirmation atom: the large checkmark/celebration icon at the top of the confirmation page.";
    readonly category: "order";
    readonly intent: readonly ["confirm", "celebrate"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "fixed";
    readonly searchTags: readonly ["order", "success", "checkmark", "icon", "atom"];
    readonly props: {
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["md", "lg", "xl"];
            readonly required: true;
            readonly description: "Icon size.";
        };
        readonly color: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"status.success\") or hex.";
        };
        readonly animate: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Subtle entrance animation.";
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["standard", "luxury"];
            readonly required: true;
            readonly description: "luxury adds a ring.";
        };
    };
};
export type SuccessIconMeta = typeof successIconMeta;
//# sourceMappingURL=successicon.meta.d.ts.map