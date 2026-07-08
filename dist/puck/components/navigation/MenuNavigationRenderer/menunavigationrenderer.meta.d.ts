export declare const menuNavigationRendererMeta: {
    readonly name: "MenuNavigationRenderer";
    readonly label: "Menu Navigation Renderer";
    readonly description: "Live renderer for the storefront navigation menu. Replaces the @headlessui/react Popover-based MegaMenu UX with stateful CSS hover behavior, keeping the same UI. Items with megaMenu.enabled + enriched category data surface a CategoryMegaMenu popover; items with plain children surface a SimpleDropdown. Styled via theme tokens (navigation + megaMenu). Used by HeaderRenderer and storefront layout.tsx data injection.";
    readonly category: "navigation";
    readonly intent: readonly ["nav", "navigation", "menu", "mega-menu", "header"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items", "theme"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["navigation.background", "navigation.border", "navigation.text", "navigation.textHover", "megaMenu.background", "megaMenu.linkText"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Hover-driven popovers are not keyboard-navigable. A wrapper to add ARIA menu semantics is the consumer’s responsibility (the original @headlessui/react Popover provided menubar/menu roles; we stripped it). If a11y is critical, use the MenuNavigation Puck component instead which goes through @medusajs/ui DropdownMenu.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["nav", "navigation", "menu", "mega-menu", "header", "popover", "dropdown"];
    readonly props: {
        readonly items: {
            readonly type: "array";
            readonly required: true;
            readonly items: "$item";
        };
        readonly theme: {
            readonly type: "object";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical"];
            readonly required: false;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: false;
        };
    };
};
export type MenuNavigationRendererMeta = typeof menuNavigationRendererMeta;
//# sourceMappingURL=menunavigationrenderer.meta.d.ts.map