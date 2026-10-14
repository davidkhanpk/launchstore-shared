export declare const categoryGridMeta: {
    readonly name: "CategoryGrid";
    readonly label: "Category Grid";
    readonly description: string;
    readonly category: "category";
    readonly intent: readonly ["navigate", "browse", "organize", "group"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["categories (consumer-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["categories", "collections", "grid", "browse", "navigation"];
    readonly props: {
        readonly columns: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Category cards per row (1-4).";
        };
        readonly gap: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Spacing between cards: sm | md | lg.";
        };
        readonly showImages: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show each category's image.";
        };
        readonly showCounts: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the product count per category.";
        };
        readonly showDescriptions: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show category descriptions.";
        };
        readonly cardStyle: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Card look: standard | bordered | shadow.";
        };
    };
};
export type CategoryGridMeta = typeof categoryGridMeta;
//# sourceMappingURL=categorygrid.meta.d.ts.map