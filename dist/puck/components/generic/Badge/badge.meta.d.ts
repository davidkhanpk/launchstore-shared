export declare const badgeMeta: {
    readonly name: "Badge";
    readonly label: "Badge";
    readonly description: "Inline badge with 6 variants (default/primary/success/warning/error/info) or fully custom bg+text colors. 3 sizes (sm/md/lg) and 4 corner-radius presets. Dark-mode aware variant styles.";
    readonly category: "generic";
    readonly intent: readonly ["badge", "tag", "chip", "pill", "label", "status"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["customBgColor", "customTextColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Inline <span> — no semantic role by default. If badge conveys status use role=\"status\" or aria-label.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["badge", "tag", "chip", "pill", "label", "status", "inline"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly variant: {
            readonly type: "enum";
            readonly options: readonly ["default", "primary", "success", "warning", "error", "info"];
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly rounded: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "full"];
            readonly required: true;
        };
        readonly customBgColor: {
            readonly type: "string";
        };
        readonly customTextColor: {
            readonly type: "string";
        };
    };
};
export type BadgeMeta = typeof badgeMeta;
//# sourceMappingURL=badge.meta.d.ts.map