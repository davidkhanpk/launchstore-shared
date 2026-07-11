export declare const categoryMegaMenuMeta: {
    readonly name: "CategoryMegaMenu";
    readonly label: "Category Mega Menu";
    readonly description: "Sub-renderer used inside MenuNavigationRenderer. Renders a category with subcategories in a configurable-column grid, with optional banner image, \"View All\" heading, and per-subcategory description snippet. Styled via theme tokens (heading/linking colors, font sizes, padding, border-radius, box-shadow).";
    readonly category: "navigation";
    readonly intent: readonly ["mega-menu", "mega", "category-grid", "nav-submenu"];
    readonly visualRole: "overlay";
    readonly dataDeps: readonly ["item", "megaMenu", "theme"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["background", "sectionHeading", "linkText", "linkHover", "headingFontSize", "headingFontWeight", "linkFontSize", "linkFontWeight", "padding", "columnGap", "borderRadius", "boxShadow"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Renders inside a parent <nav> provided by MenuNavigationRenderer. Links use semantic <a> tags. No standalone ARIA needed.";
    readonly mobileBehavior: "desktop-only";
    readonly searchTags: readonly ["mega-menu", "mega", "category-grid", "nav-submenu"];
    readonly props: {
        readonly item: {
            readonly type: "object";
            readonly required: true;
        };
        readonly megaMenu: {
            readonly type: "object";
            readonly required: true;
        };
        readonly theme: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type CategoryMegaMenuMeta = typeof categoryMegaMenuMeta;
//# sourceMappingURL=categorymegamenu.meta.d.ts.map