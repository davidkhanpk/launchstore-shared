export declare const flexColumnMeta: {
    readonly name: "FlexColumn";
    readonly label: "Flex Column";
    readonly description: "Vertical flexbox column with justifyContent / alignItems / gap controls. Hosts a DropZone (\"flex-column-content\"). Optional fullHeight mode, min-height, padding, background color, and border radius. Renders with a faint dashed border to make the editable area visible in the canvas.";
    readonly category: "layout";
    readonly intent: readonly ["flex", "column", "vertical", "stack", "layout"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain div wrapper.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["flex", "column", "vertical", "stack", "layout", "dropzone", "flexbox"];
    readonly props: {
        readonly justifyContent: {
            readonly type: "enum";
            readonly options: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        };
        readonly alignItems: {
            readonly type: "enum";
            readonly options: readonly ["start", "center", "end", "stretch"];
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        };
        readonly fullHeight: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly minHeight: {
            readonly type: "string";
        };
        readonly padding: {
            readonly type: "string";
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly borderRadius: {
            readonly type: "string";
        };
    };
};
export type FlexColumnMeta = typeof flexColumnMeta;
//# sourceMappingURL=flexcolumn.meta.d.ts.map