export declare const productSortMeta: {
    readonly name: "ProductSort";
    readonly label: "Product Sort";
    readonly description: "Product sort dropdown with 7 default options + custom options, optional result count, optional grid/list view toggle, 3 positions. Cart-library-agnostic: takes sortOptions, totalCount, showingCount, onSortChange, onViewChange. Heroicons Squares2X2/Bars3 replaced with inline SVG.";
    readonly category: "collection";
    readonly intent: readonly ["sort", "filter", "view"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["totalCount/showingCount (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <select> + <button> with onChange/onClick.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["sort", "filter", "view", "products"];
    readonly props: {
        readonly defaultSort: {
            readonly type: "enum";
            readonly options: readonly ["featured", "price_asc", "price_desc", "created_desc", "sales_desc", "title_asc", "title_desc"];
            readonly required: true;
        };
        readonly showResultCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showViewToggle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly position: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
    };
};
export type ProductSortMeta = typeof productSortMeta;
//# sourceMappingURL=productsort.meta.d.ts.map