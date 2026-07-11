export declare const productFiltersMeta: {
    readonly name: "ProductFilters";
    readonly label: "Product Filters";
    readonly description: "Product filter sidebar with collapsible sections (category, price range, brand, color, size, rating), 3 layouts (sidebar/top-bar/drawer). Cart-library-agnostic: takes categories/brands/colors/sizes/priceMin/priceMax, selected, onChange.";
    readonly category: "collection";
    readonly intent: readonly ["filters", "facet", "search"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["categories/brands/colors/sizes (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <input> + <button> + <input type=\"range\">. Drawer layout uses fixed overlay with onClick dismiss. Heroicons + StarIcon replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["filters", "facet", "search", "collection"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["sidebar", "top", "drawer"];
            readonly required: true;
        };
        readonly showPriceFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCategoryFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showBrandFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showColorFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSizeFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showRatingFilter: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultExpanded: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type ProductFiltersMeta = typeof productFiltersMeta;
//# sourceMappingURL=productfilters.meta.d.ts.map