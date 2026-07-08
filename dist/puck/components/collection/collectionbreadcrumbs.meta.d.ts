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
export type CollectionBreadcrumbsMeta = typeof collectionBreadcrumbsMeta;
//# sourceMappingURL=collectionbreadcrumbs.meta.d.ts.map