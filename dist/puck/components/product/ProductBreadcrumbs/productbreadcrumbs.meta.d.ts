export declare const productBreadcrumbsMeta: {
    readonly name: "ProductBreadcrumbs";
    readonly label: "Product Breadcrumbs";
    readonly description: "Breadcrumb trail: Home → Shop → collection → categories → current product. Inactive items are linked; current product is plain text. Configurable separator (arrow/slash/dot), text-transform, and Home-icon visibility. Lucide Home + ChevronRight replaced with inline SVG.";
    readonly category: "product";
    readonly intent: readonly ["product", "breadcrumbs", "navigation", "path"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Renders semantic <nav aria-label=\"Breadcrumb\"> with <ol> list. Current page item is plain <span> (no link, no aria-current).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "breadcrumbs", "navigation", "path", "trail"];
    readonly props: {
        readonly showHomeIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly separator: {
            readonly type: "enum";
            readonly options: readonly ["arrow", "slash", "dot"];
            readonly required: true;
        };
        readonly textTransform: {
            readonly type: "enum";
            readonly options: readonly ["none", "uppercase", "capitalize"];
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductBreadcrumbsMeta = typeof productBreadcrumbsMeta;
//# sourceMappingURL=productbreadcrumbs.meta.d.ts.map