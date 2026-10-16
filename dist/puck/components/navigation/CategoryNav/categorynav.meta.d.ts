export declare const categoryNavMeta: {
    readonly name: "CategoryNav";
    readonly label: "Category Navigation";
    readonly description: string;
    readonly category: "navigation";
    readonly intent: readonly ["navigate", "browse", "menu"];
    readonly visualRole: "sidebar";
    readonly dataDeps: readonly ["categories (consumer-injected)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["categories", "menu", "sidebar", "navigation", "browse"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Optional heading above the list.";
        };
        readonly showIcons: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show an icon per category.";
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["standard", "luxury"];
            readonly required: true;
            readonly description: "standard = normal; luxury = lighter type with wider tracking.";
        };
    };
};
export type CategoryNavMeta = typeof categoryNavMeta;
//# sourceMappingURL=categorynav.meta.d.ts.map