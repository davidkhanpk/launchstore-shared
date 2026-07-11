export declare const categoryMetadataMeta: {
    readonly name: "CategoryMetadata";
    readonly label: "Category Metadata";
    readonly description: "Compact metadata row (handle, product count, updated date) below the category title. Each item toggles independently. Horizontal or vertical layout. SVG icons (tag/package/calendar) inline (no external dep).";
    readonly category: "category";
    readonly intent: readonly ["metadata", "info", "category-meta", "stats", "product-count"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["category.handle", "category.product_count", "category.updated_at"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["textColor", "iconColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain flex container with semantic spans; icons are decorative (no aria attributes needed for purely visual glyphs).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["metadata", "category-meta", "stats", "product-count", "info"];
    readonly props: {
        readonly category: {
            readonly type: "object";
        };
        readonly showHandle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showUpdatedDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical"];
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly iconColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly spacing: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type CategoryMetadataMeta = typeof categoryMetadataMeta;
//# sourceMappingURL=categorymetadata.meta.d.ts.map