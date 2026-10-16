export declare const subcategoryNavMeta: {
    readonly name: "SubcategoryNav";
    readonly label: "Subcategory Navigation";
    readonly description: "Links to a category's subcategories — horizontal links, vertical list, or pill chips. Subcategory data is consumer-injected; the editor shows placeholders.";
    readonly category: "category";
    readonly intent: readonly ["navigate", "browse"];
    readonly visualRole: "sub-header";
    readonly dataDeps: readonly ["subcategories (consumer-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["subcategory", "navigation", "links", "pills", "browse"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical", "pills"];
            readonly required: true;
            readonly description: "Link arrangement — pills = rounded chips.";
        };
        readonly showIcons: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show an icon per subcategory.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Alignment.";
        };
    };
};
export type SubcategoryNavMeta = typeof subcategoryNavMeta;
//# sourceMappingURL=subcategorynav.meta.d.ts.map