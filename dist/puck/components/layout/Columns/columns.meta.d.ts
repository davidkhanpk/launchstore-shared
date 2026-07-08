export declare const columnsMeta: {
    readonly name: "Columns";
    readonly label: "Columns";
    readonly description: "Grid layout with 2/3/4 columns and per-ratio layout for 2-col mode (50/50, 60/40, 70/30, etc). Each column hosts a numbered DropZone (column-1, column-2...). Stacks on mobile unless disabled.";
    readonly category: "layout";
    readonly intent: readonly ["columns", "grid", "multi-column", "row", "layout"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain grid — visually hidden stacking at mobile breakpoints is auto.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["columns", "grid", "layout", "multi-column", "dropzone", "responsive"];
    readonly props: {
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4"];
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["equal", "60-40", "40-60", "70-30", "30-70", "50-50"];
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
        readonly mobileStack: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly alignItems: {
            readonly type: "enum";
            readonly options: readonly ["start", "center", "end", "stretch"];
        };
    };
};
export type ColumnsMeta = typeof columnsMeta;
//# sourceMappingURL=columns.meta.d.ts.map