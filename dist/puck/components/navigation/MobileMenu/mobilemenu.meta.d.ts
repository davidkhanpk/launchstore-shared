export declare const mobileMenuMeta: {
    readonly name: "MobileMenu";
    readonly label: "Mobile Menu";
    readonly description: "Drawer-style mobile navigation menu with collapsible accordion items. Triggered open/closed via isOpen/onClose props from a parent (e.g. Header hamburger). Items support two recursive variants: (a) plain link, (b) accordion with children OR subcategories from megaMenu config. Slide-in direction is configurable (left/right).";
    readonly category: "navigation";
    readonly intent: readonly ["mobile", "menu", "drawer", "hamburger", "nav-mobile"];
    readonly visualRole: "overlay";
    readonly dataDeps: readonly ["items[]", "theme"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["background", "text", "border", "subText", "accordionBackground"];
    readonly a11yRisk: "high";
    readonly a11yNotes: "Drawer is role=\"dialog\" + aria-modal. Close button has aria-label. Accordion buttons use aria-expanded. Focus trap is the consumer wrapper's responsibility (next/modal library or backdrop focus). Escape key closes via backdrop click.";
    readonly mobileBehavior: "only-mobile";
    readonly searchTags: readonly ["mobile", "menu", "drawer", "hamburger", "nav-mobile", "accordion"];
    readonly props: {
        readonly items: {
            readonly type: "array";
            readonly required: true;
            readonly items: "$item";
        };
        readonly theme: {
            readonly type: "object";
            readonly required: false;
        };
        readonly isOpen: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly drawerMaxWidth: {
            readonly type: "string";
            readonly required: false;
        };
        readonly animationDirection: {
            readonly type: "enum";
            readonly options: readonly ["left", "right"];
            readonly required: false;
        };
    };
};
export type MobileMenuMeta = typeof mobileMenuMeta;
//# sourceMappingURL=mobilemenu.meta.d.ts.map