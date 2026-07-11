export declare const categoryDescriptionMeta: {
    readonly name: "CategoryDescription";
    readonly label: "Category Description";
    readonly description: "Rich-text description block for a category page. Reads category.description from injected category prop. Typography + line-height + max-width + alignment controls. Returns null when description is empty (graceful absence).";
    readonly category: "category";
    readonly intent: readonly ["description", "category-description", "intro", "summary", "about"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["category.description"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain div wrapper; content is a <p> so screen readers parse paragraphs correctly.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["description", "category", "intro", "summary", "about", "paragraph"];
    readonly props: {
        readonly category: {
            readonly type: "object";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "enum";
            readonly options: readonly ["default", "black", "gray", "muted", "white"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right", "justify"];
            readonly required: true;
        };
        readonly lineHeight: {
            readonly type: "enum";
            readonly options: readonly ["tight", "normal", "relaxed", "loose"];
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl", "2xl", "full"];
            readonly required: true;
        };
    };
};
export type CategoryDescriptionMeta = typeof categoryDescriptionMeta;
//# sourceMappingURL=categorydescription.meta.d.ts.map