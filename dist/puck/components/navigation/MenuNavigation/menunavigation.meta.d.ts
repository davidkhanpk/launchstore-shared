export declare const menuNavigationMeta: {
    readonly name: "MenuNavigation";
    readonly label: "Menu Navigation";
    readonly description: "Top-level storefront navigation menu. Puck canvas uses CSS-popover dropdowns (no @medusajs/ui dependency) with hover-driven sub-panels. Items can be plain links or have a dropdown of children. Mega-menu style is configurable (default dropdown or grid). Data is injected at render-time via the `menuData` prop by the consumer wrapper (frontend reads from useMenu hook, storefront projects layout-level menu fetch).";
    readonly category: "navigation";
    readonly intent: readonly ["nav", "navigation", "menu", "header", "dropdown"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["menuData"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["textColor", "hoverColor", "dropdownBackground", "dropdownBorder", "dropdownShadow", "dropdownRadius"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Trigger button uses aria-expanded. Dropdown panel is hover-driven (not keyboard-navigable in this implementation; consumer can add focus tracking if needed). Replaces the original @medusajs/ui DropdownMenu which had idiomatic ARIA menu semantics — if a11y is critical, the consumer should layer in keyboard handlers.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["nav", "navigation", "menu", "header", "dropdown", "popover"];
    readonly props: {
        readonly menuHandle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical", "stacked"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly hoverEffect: {
            readonly type: "enum";
            readonly options: readonly ["underline", "background", "color", "none"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg"];
            readonly required: true;
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
        readonly showDropdownArrows: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly dropdownStyle: {
            readonly type: "enum";
            readonly options: readonly ["default", "mega"];
            readonly required: true;
        };
        readonly maxDepth: {
            readonly type: "enum";
            readonly options: readonly ["1", "2", "3"];
            readonly required: true;
        };
        readonly menuData: {
            readonly type: "array";
            readonly required: false;
            readonly items: "$item";
        };
        readonly dropdownBackground: {
            readonly type: "string";
            readonly required: false;
        };
        readonly dropdownBorder: {
            readonly type: "string";
            readonly required: false;
        };
        readonly dropdownShadow: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
            readonly required: false;
        };
        readonly dropdownRadius: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
            readonly required: false;
        };
    };
};
export type MenuNavigationMeta = typeof menuNavigationMeta;
//# sourceMappingURL=menunavigation.meta.d.ts.map