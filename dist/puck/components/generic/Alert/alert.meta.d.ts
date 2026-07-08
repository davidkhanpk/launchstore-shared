export declare const alertMeta: {
    readonly name: "Alert";
    readonly label: "Alert";
    readonly description: "Inline alert/banner with 4 severity types (info/success/warning/error). Optional title + message + icon + dismiss button. Renders role=\"alert\" for screen readers. Dark-mode aware color schemes.";
    readonly category: "generic";
    readonly intent: readonly ["alert", "banner", "notification", "callout", "info", "warning"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "message"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "role=\"alert\" sets the live-region flag — screen readers announce on mount. Dismissible control has aria-label. Ensure message copy is concise.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["alert", "banner", "notification", "callout", "info", "success", "warning", "error"];
    readonly props: {
        readonly type: {
            readonly type: "enum";
            readonly options: readonly ["info", "success", "warning", "error"];
            readonly required: true;
        };
        readonly title: {
            readonly type: "string";
        };
        readonly message: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly dismissible: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type AlertMeta = typeof alertMeta;
//# sourceMappingURL=alert.meta.d.ts.map