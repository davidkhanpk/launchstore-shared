export declare const sectionMeta: {
    readonly name: "Section";
    readonly label: "Section";
    readonly description: "Semantic <section> wrapper with vertical padding preset (none..xl) and a fixed set of background presets (transparent/white/gray/brand-primary). Contains children — typically a Container with DropZones inside.";
    readonly category: "layout";
    readonly intent: readonly ["section", "page-section", "layout-wrapper", "background", "padding"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Renders <section>. Add aria-labelledby if it has a heading for landmark navigation.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["section", "page-section", "wrapper", "background", "padding", "layout"];
    readonly props: {
        readonly paddingY: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
        readonly backgroundColor: {
            readonly type: "enum";
            readonly options: readonly ["transparent", "white", "gray", "primary"];
        };
    };
};
export type SectionMeta = typeof sectionMeta;
//# sourceMappingURL=section.meta.d.ts.map