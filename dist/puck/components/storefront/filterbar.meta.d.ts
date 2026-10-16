export declare const filterBarMeta: {
    readonly name: "FilterBar";
    readonly label: "Filter Bar";
    readonly description: "Storefront listing controls: filter panel (sidebar/drawer), sort dropdown, result count, clear-all. Category/collection listing pages only; filters are resolved by the storefront at render.";
    readonly category: "storefront";
    readonly intent: readonly ["filter", "sort", "browse"];
    readonly visualRole: "listing-controls";
    readonly dataDeps: readonly ["facet data (storefront-resolved)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Drawer mode must be keyboard-reachable; filters should be announced.";
    readonly mobileBehavior: "drawer";
    readonly searchTags: readonly ["filter", "sort", "listing", "collection page", "facets"];
    readonly props: {
        readonly filterLayout: {
            readonly type: "enum";
            readonly options: readonly ["sidebar", "drawer", "horizontal"];
            readonly required: true;
            readonly description: "Filter placement. drawer is best on mobile.";
        };
        readonly showSort: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the sort dropdown.";
        };
        readonly showCount: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the result count.";
        };
        readonly showClearAll: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show a clear-all-filters action.";
        };
        readonly showFilters: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the filter controls at all.";
        };
    };
};
export type FilterBarMeta = typeof filterBarMeta;
//# sourceMappingURL=filterbar.meta.d.ts.map