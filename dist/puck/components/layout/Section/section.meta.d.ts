export declare const sectionMeta: {
    readonly name: "Section";
    readonly label: "Section";
    readonly description: "Full ecommerce section: background scheme (light/dark/accent/subtle), background image with overlay, gradient, density (compact/comfortable/spacious), content width (narrow/standard/wide/full), content alignment (L/C/R), vertical alignment and min-height. Contains children via a content DropZone.";
    readonly category: "layout";
    readonly intent: readonly ["section", "page-section", "background", "hero-band", "layout-wrapper", "padding"];
    readonly visualRole: "block";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundScheme", "backgroundColor", "overlayColor", "gradientFrom", "gradientTo"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Renders <section>. Add aria-labelledby if it has a heading for landmark navigation. Ensure overlay keeps text contrast readable.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["section", "background image", "overlay", "gradient", "scheme", "alignment", "hero", "band"];
    readonly props: {
        readonly backgroundScheme: {
            readonly type: "enum";
            readonly options: readonly ["", "light", "dark", "accent", "subtle"];
        };
        readonly backgroundImage: {
            readonly type: "string";
            readonly description: "Image URL — renders with overlay when set";
        };
        readonly backgroundSize: {
            readonly type: "enum";
            readonly options: readonly ["cover", "contain", "auto"];
        };
        readonly backgroundPosition: {
            readonly type: "enum";
            readonly options: readonly ["center", "top", "bottom", "left", "right"];
        };
        readonly overlayColor: {
            readonly type: "color";
        };
        readonly overlayOpacity: {
            readonly type: "enum";
            readonly options: readonly ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"];
        };
        readonly gradientFrom: {
            readonly type: "color";
        };
        readonly gradientTo: {
            readonly type: "color";
        };
        readonly backgroundColor: {
            readonly type: "color";
        };
        readonly density: {
            readonly type: "enum";
            readonly options: readonly ["compact", "comfortable", "spacious"];
        };
        readonly contentWidth: {
            readonly type: "enum";
            readonly options: readonly ["narrow", "standard", "wide", "full"];
        };
        readonly contentAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly verticalAlign: {
            readonly type: "enum";
            readonly options: readonly ["top", "middle", "bottom"];
        };
        readonly minHeight: {
            readonly type: "enum";
            readonly options: readonly ["", "sm", "md", "lg", "xl", "screen"];
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "full"];
        };
    };
};
export type SectionMeta = typeof sectionMeta;
//# sourceMappingURL=section.meta.d.ts.map