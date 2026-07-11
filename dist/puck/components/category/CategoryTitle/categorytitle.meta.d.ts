export declare const categoryTitleMeta: {
    readonly name: "CategoryTitle";
    readonly label: "Category Title";
    readonly description: "Category page title (h1-h4) with typography controls. Reads category.name from injected category prop. Renders placeholder when no category is set.";
    readonly category: "category";
    readonly intent: readonly ["title", "category-title", "h1", "header", "name"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["category.name"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Tag is configurable (h1-h4) — pick the right heading level for the surrounding page outline. Placeholder text uses italic gray and announces nothing harmful.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["title", "category-title", "h1", "h2", "header", "name"];
    readonly props: {
        readonly category: {
            readonly type: "object";
        };
        readonly tag: {
            readonly type: "enum";
            readonly options: readonly ["h1", "h2", "h3", "h4"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["default", "sm", "md", "lg", "xl", "2xl", "3xl"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "enum";
            readonly options: readonly ["default", "black", "gray", "primary", "white"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
    };
};
export type CategoryTitleMeta = typeof categoryTitleMeta;
//# sourceMappingURL=categorytitle.meta.d.ts.map