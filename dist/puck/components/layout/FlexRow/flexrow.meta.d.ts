export declare const flexRowMeta: {
    readonly name: "FlexRow";
    readonly label: "Flex Row";
    readonly description: "Horizontal flexbox row with justifyContent / alignItems / gap / wrap controls. Hosts a single DropZone (\"flex-row-content\") that repeats the flex layout so children align with parent. Background color and border radius via inline styles.";
    readonly category: "layout";
    readonly intent: readonly ["flex", "row", "horizontal", "inline", "layout"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain div wrapper. Use role=\"row\" only when inside a parent that establishes table semantics.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["flex", "row", "horizontal", "inline", "layout", "dropzone", "flexbox"];
    readonly props: {
        readonly justifyContent: {
            readonly type: "enum";
            readonly options: readonly ["start", "center", "end", "space-between", "space-around", "space-evenly"];
        };
        readonly alignItems: {
            readonly type: "enum";
            readonly options: readonly ["start", "center", "end", "stretch", "baseline"];
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["none", "xs", "sm", "md", "lg", "xl"];
        };
        readonly wrap: {
            readonly type: "enum";
            readonly options: readonly ["nowrap", "wrap", "wrap-reverse"];
        };
        readonly fullWidth: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxWidth: {
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
export type FlexRowMeta = typeof flexRowMeta;
//# sourceMappingURL=flexrow.meta.d.ts.map