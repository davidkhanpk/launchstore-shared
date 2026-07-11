export declare const categoryProductsGridMeta: {
    readonly name: "CategoryProductsGrid";
    readonly label: "Category Products Grid";
    readonly description: "Category page product grid with title, 5 column options, 4 gap sizes, optional sort+filter bar (uses shared ProductSort), pagination (uses shared Pagination), and per-page dropdown. Cart-library-agnostic: takes products[], totalCount, sortOptions, onSortChange, onPageChange, renderProduct (render-prop escape hatch for consumer-specific product card).";
    readonly category: "category";
    readonly intent: readonly ["category", "products", "grid"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (consumer)", "renderProduct (consumer)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <a> + <select> + <button>. renderProduct prop allows consumer to inject their own ProductPreview card.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["category", "products", "grid", "pagination", "sort"];
    readonly props: {
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly title: {
            readonly type: "string";
            readonly required: true;
        };
        readonly titleAlignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4", "5", "6"];
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly gridLocation: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly showSortFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly sortPosition: {
            readonly type: "enum";
            readonly options: readonly ["top-left", "top-center", "top-right"];
            readonly required: true;
        };
        readonly showPagination: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly paginationPosition: {
            readonly type: "enum";
            readonly options: readonly ["bottom-left", "bottom-center", "bottom-right"];
            readonly required: true;
        };
        readonly showProductsPerPageDropdown: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly productsPerPageOptions: {
            readonly type: "string";
            readonly required: true;
        };
        readonly productsPerPage: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type CategoryProductsGridMeta = typeof categoryProductsGridMeta;
//# sourceMappingURL=categoryproductsgrid.meta.d.ts.map