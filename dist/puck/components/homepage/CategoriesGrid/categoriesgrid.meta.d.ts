export declare const categoriesGridMeta: {
    readonly name: "CategoriesGrid";
    readonly label: "Categories Grid";
    readonly description: "Category tile grid. Consumer fetches categories via Medusa API (or stub); passes them as a `categories` prop along with loading/error flags. Supports 3 sources (all / featured / manual-id-list), 4 image aspect ratios, 4 card styles (incl. image-overlay), 4 hover effects. Renders loading skeleton + empty + error states when no data.";
    readonly category: "homepage";
    readonly intent: readonly ["categories", "tiles", "shop-by-category", "grid", "browse", "department"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["categories (consumer-injected)", "loading flag", "error string"];
    readonly copyFields: readonly ["sectionTitle", "sectionSubtitle"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Each <img> has alt=category.name. Cards are <a href> — focusable, keyboard-activated. Live region not announced on data load — consider role=status wrapping the section.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["categories", "tiles", "department", "browse", "shop", "homepage"];
    readonly props: {
        readonly sectionTitle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly sectionSubtitle: {
            readonly type: "string";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly columns: {
            readonly type: "number";
            readonly required: true;
        };
        readonly columnsTablet: {
            readonly type: "number";
            readonly required: true;
        };
        readonly columnsMobile: {
            readonly type: "number";
            readonly required: true;
        };
        readonly gap: {
            readonly type: "number";
            readonly required: true;
        };
        readonly showCategoryImage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCategoryName: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showProductCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape", "wide"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardStyle: {
            readonly type: "enum";
            readonly options: readonly ["minimal", "bordered", "shadow", "overlay"];
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly hoverEffect: {
            readonly type: "enum";
            readonly options: readonly ["none", "scale", "shadow", "lift"];
            readonly required: true;
        };
        readonly categorySource: {
            readonly type: "enum";
            readonly options: readonly ["all", "featured", "manual"];
            readonly required: true;
        };
        readonly selectedCategoryIds: {
            readonly type: "array";
        };
        readonly categories: {
            readonly type: "array";
        };
        readonly loading: {
            readonly type: "boolean";
        };
        readonly error: {
            readonly type: "string";
        };
    };
};
export type CategoriesGridMeta = typeof categoriesGridMeta;
//# sourceMappingURL=categoriesgrid.meta.d.ts.map