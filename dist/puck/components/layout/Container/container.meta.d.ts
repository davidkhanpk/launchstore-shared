export declare const containerMeta: {
    readonly name: "Container";
    readonly label: "Container";
    readonly description: "Centered max-width container that wraps a DropZone (\"content\"). Tailwind max-w-screen-* breakpoints + horizontal padding preset.";
    readonly category: "layout";
    readonly intent: readonly ["container", "wrapper", "max-width", "center"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain presentational div — semantic role optional.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["container", "wrapper", "max-width", "center", "layout", "dropzone"];
    readonly props: {
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "2xl", "full"];
        };
        readonly padding: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
    };
};
export type ContainerMeta = typeof containerMeta;
//# sourceMappingURL=container.meta.d.ts.map