export declare const collectionBreadcrumbsMeta: {
    readonly name: "CollectionBreadcrumbs";
    readonly label: "Collection Breadcrumbs";
    readonly description: "Breadcrumb trail with 3 separator styles (arrow/slash/chevron) and optional home icon. Cart-library-agnostic: takes trail array.";
    readonly category: "collection";
    readonly intent: readonly ["breadcrumb", "navigation", "trail"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["trail (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <a> + <nav>. Lucide Home/ChevronRight replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["breadcrumb", "navigation", "trail", "collection"];
    readonly props: {
        readonly showHomeIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly separator: {
            readonly type: "enum";
            readonly options: readonly ["arrow", "slash", "chevron"];
            readonly required: true;
        };
        readonly textSize: {
            readonly type: "enum";
            readonly options: readonly ["text-sm", "text-base"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "enum";
            readonly options: readonly ["text-gray-500", "text-gray-600", "text-blue-600"];
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["mb-2", "mb-4", "mb-6"];
            readonly required: true;
        };
    };
};
export declare const collectionDescriptionMeta: {
    readonly name: "CollectionDescription";
    readonly label: "Collection Description";
    readonly description: "Collection description text with font-size, alignment, color, and max-width. Cart-library-agnostic: takes text override.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "description", "summary"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["text (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <p> with alignment. No interactive elements.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "description", "summary"];
    readonly props: {
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["text-sm", "text-base", "text-lg"];
            readonly required: true;
        };
        readonly textAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "enum";
            readonly options: readonly ["text-gray-600", "text-gray-700", "text-gray-800", "text-black"];
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "enum";
            readonly options: readonly ["mb-0", "mb-2", "mb-4", "mb-6"];
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["max-w-full", "max-w-2xl", "max-w-3xl", "max-w-4xl"];
            readonly required: true;
        };
    };
};
export declare const collectionHeaderMeta: {
    readonly name: "CollectionHeader";
    readonly label: "Collection Header";
    readonly description: "Collection header with optional banner image, title (3 sizes), description, product count, and breadcrumbs. Cart-library-agnostic: takes title, description, bannerUrl, productCount, hrefs.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "header", "banner"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["title/description (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <img> + <a> + <nav>. Heroicons ChevronRight replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "header", "banner", "hero"];
    readonly props: {
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDescription: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showBanner: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly titleSize: {
            readonly type: "enum";
            readonly options: readonly ["2xl", "3xl", "4xl"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly bannerHeight: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export declare const collectionMetadataMeta: {
    readonly name: "CollectionMetadata";
    readonly label: "Collection Metadata";
    readonly description: "Collection metadata display (handle, created date, updated date) with font-size and color.";
    readonly category: "collection";
    readonly intent: readonly ["collection", "metadata", "admin"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["handle/createdAt/updatedAt (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text only.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "metadata", "admin", "handle"];
    readonly props: {
        readonly showHandle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCreatedDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showUpdatedDate: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["text-xs", "text-sm", "text-base"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "enum";
            readonly options: readonly ["text-gray-400", "text-gray-500", "text-gray-600"];
            readonly required: true;
        };
    };
};
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
export declare const productGridMeta: {
    readonly name: "ProductGrid";
    readonly label: "Product Grid";
    readonly description: "Product grid/list with 3 column counts, 3 image aspect ratios, optional quick view/wishlist/compare buttons, optional badges, 3 gap sizes. Cart-library-agnostic: takes products[], onQuickView, onAddToWishlist, onCompare. Lucide Heart/Eye replaced with inline SVG.";
    readonly category: "collection";
    readonly intent: readonly ["products", "grid", "list"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <a> + <button> with onClick. Quick view/wishlist hover-revealed on grid mode.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["products", "grid", "list", "shop"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["grid", "list"];
            readonly required: true;
        };
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4"];
            readonly required: true;
        };
        readonly showQuickView: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showWishlist: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCompare: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
            readonly required: true;
        };
        readonly showBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
    };
};
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
export type CollectionBreadcrumbsMeta = typeof collectionBreadcrumbsMeta;
export type CollectionDescriptionMeta = typeof collectionDescriptionMeta;
export type CollectionHeaderMeta = typeof collectionHeaderMeta;
export type CollectionMetadataMeta = typeof collectionMetadataMeta;
export type CollectionTitleMeta = typeof collectionTitleMeta;
export type PaginationMeta = typeof paginationMeta;
export type ProductSortMeta = typeof productSortMeta;
export type ProductGridMeta = typeof productGridMeta;
export type ProductFiltersMeta = typeof productFiltersMeta;
//# sourceMappingURL=collection.metas.d.ts.map