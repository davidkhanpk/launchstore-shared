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
export type CollectionHeaderMeta = typeof collectionHeaderMeta;
//# sourceMappingURL=collectionheader.meta.d.ts.map