export declare const paginationBarMeta: {
    readonly name: "PaginationBar";
    readonly label: "Pagination Bar";
    readonly description: "Listing page pagination: numbered pages or prev/next, plus an optional per-page selector. The storefront drives actual navigation.";
    readonly category: "storefront";
    readonly intent: readonly ["paginate", "browse"];
    readonly visualRole: "listing-controls";
    readonly dataDeps: readonly ["page state (storefront-driven)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Current page must be marked for screen readers (aria-current).";
    readonly mobileBehavior: "compact";
    readonly searchTags: readonly ["pagination", "pages", "listing", "next", "prev"];
    readonly props: {
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["numbered", "compact", "load-more"];
            readonly required: true;
            readonly description: "numbered = page buttons; compact = prev/next; load-more = single button.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Bar alignment.";
        };
        readonly maxPageNumbers: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Max visible page buttons before ellipsis.";
        };
        readonly showPerPageSelector: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the per-page dropdown.";
        };
        readonly perPageOptions: {
            readonly type: "array";
            readonly required: true;
            readonly description: "Choices for per-page, e.g. [12, 24, 48].";
        };
    };
};
export type PaginationBarMeta = typeof paginationBarMeta;
//# sourceMappingURL=paginationbar.meta.d.ts.map