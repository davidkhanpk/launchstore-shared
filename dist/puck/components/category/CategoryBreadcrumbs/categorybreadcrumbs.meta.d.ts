export declare const categoryBreadcrumbsMeta: {
    readonly name: "CategoryBreadcrumbs";
    readonly label: "Category Breadcrumbs";
    readonly description: "Breadcrumb trail from category root to current. Walks parent_category chain automatically. Renders semantic <nav aria-label=\"Breadcrumb\"> with aria-current=\"page\" on the active segment.";
    readonly category: "category";
    readonly intent: readonly ["breadcrumb", "navigation", "trail", "path", "category-nav"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["category (consumer-injected, includes parent_category chain)"];
    readonly copyFields: readonly ["homeText"];
    readonly themeable: readonly ["textColor", "activeColor", "hoverColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Uses semantic <nav aria-label=\"Breadcrumb\"> + <span aria-current=\"page\"> on the active item. Tailwind hover-only styles; the hoverColor prop is set inline via JS handlers in storefront variant (we use Tailwind hover:opacity-80 for now).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["breadcrumb", "navigation", "trail", "nav", "aria-current"];
    readonly props: {
        readonly category: {
            readonly type: "object";
        };
        readonly countryCode: {
            readonly type: "string";
        };
        readonly separator: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showHome: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly homeText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly activeColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type CategoryBreadcrumbsMeta = typeof categoryBreadcrumbsMeta;
//# sourceMappingURL=categorybreadcrumbs.meta.d.ts.map