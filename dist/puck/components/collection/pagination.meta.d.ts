export declare const paginationMeta: {
    readonly name: "Pagination";
    readonly label: "Pagination";
    readonly description: "Pagination with 3 styles (simple/numbered/load-more), 3 alignments, optional first/last buttons, and configurable max page numbers. Cart-library-agnostic: takes currentPage, totalPages, onPageChange, loadMoreText. Heroicons ChevronLeft/Right replaced with inline SVG.";
    readonly category: "collection";
    readonly intent: readonly ["pagination", "navigation", "pages"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["currentPage/totalPages (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <button> with onClick. Numbered mode renders ellipses for truncation. Disabled when at edge.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["pagination", "navigation", "pages", "load-more"];
    readonly props: {
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["simple", "numbered", "load-more"];
            readonly required: true;
        };
        readonly showPageNumbers: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showFirstLast: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxPageNumbers: {
            readonly type: "number";
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
    };
};
export type PaginationMeta = typeof paginationMeta;
//# sourceMappingURL=pagination.meta.d.ts.map