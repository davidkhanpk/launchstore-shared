export declare const collectionTitleMeta: {
    readonly name: "CollectionTitle";
    readonly label: "Collection Title";
    readonly description: "Collection title with HTML tag (h1-h4), font size, alignment, weight, and optional product count. Cart-library-agnostic: takes title and productCount.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "title", "heading"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["title (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Semantic <h1>-<h4> tags. Aligns with WCAG heading hierarchy.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "title", "heading", "h1"];
    readonly props: {
        readonly tag: {
            readonly type: "enum";
            readonly options: readonly ["h1", "h2", "h3", "h4"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["text-2xl", "text-3xl", "text-4xl", "text-5xl"];
            readonly required: true;
        };
        readonly textAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["mb-0", "mb-2", "mb-4", "mb-6", "mb-8"];
            readonly required: true;
        };
        readonly showProductCount: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type CollectionTitleMeta = typeof collectionTitleMeta;
//# sourceMappingURL=collectiontitle.meta.d.ts.map