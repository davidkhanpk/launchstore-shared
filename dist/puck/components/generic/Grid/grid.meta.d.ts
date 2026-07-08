export declare const gridMeta: {
    readonly name: "Grid";
    readonly label: "Grid";
    readonly description: "Responsive grid with independent column controls per breakpoint (mobile / tablet / desktop) and configurable gap. Hosts a single DropZone (\"items\"). Tailwind responsive prefixes mobile/tablet/desktop based on selected counts.";
    readonly category: "generic";
    readonly intent: readonly ["grid", "responsive-grid", "tile", "multi-column", "responsive", "layout"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain grid wrapper. No semantic role added — combine with section/article/heading for accessibility context.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["grid", "responsive", "tile", "multi-column", "layout", "dropzone"];
    readonly props: {
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["1", "2", "3", "4", "5", "6"];
            readonly required: true;
        };
        readonly tabletColumns: {
            readonly type: "enum";
            readonly options: readonly ["1", "2", "3", "4"];
            readonly required: true;
        };
        readonly mobileColumns: {
            readonly type: "enum";
            readonly options: readonly ["1", "2"];
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
    };
};
export type GridMeta = typeof gridMeta;
//# sourceMappingURL=grid.meta.d.ts.map