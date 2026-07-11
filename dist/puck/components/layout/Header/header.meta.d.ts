export declare const headerMeta: {
    readonly name: "Header";
    readonly label: "Header";
    readonly description: "Site header (top bar + sticky nav + mobile drawer) with layout presets, logo, navigation menu (data injected by consumer via menuItems prop), action icons (search/wishlist/account/cart) with cart badge, and top-bar announcement. Presentational only — accepts pre-fetched menu items as props.";
    readonly category: "layout";
    readonly intent: readonly ["header", "navigation", "nav", "site-header", "top-nav", "menu", "header-bar"];
    readonly visualRole: "top";
    readonly dataDeps: readonly ["menuItems (consumer-injected)", "cartBadgeCount"];
    readonly copyFields: readonly ["logoAlt", "topBar.leftText", "topBar.centerText", "topBar.rightText"];
    readonly themeable: readonly ["backgroundColor", "textColor", "menuTextColor", "menuHoverColor", "topBar.backgroundColor", "topBar.textColor"];
    readonly a11yRisk: "high";
    readonly a11yNotes: "Landmark element (role=banner on <header>). Keyboard: menu drawer must trap focus and escape must close. Use aria-label on icon-only buttons (already provided via aria-label={action}).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["header", "nav", "navigation", "logo", "menu", "cart", "search", "drawer", "mobile-menu"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["left-center-right", "stacked", "centered"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly sticky: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly shadow: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly transparent: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly logoPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly logoMaxWidth: {
            readonly type: "string";
            readonly required: true;
        };
        readonly logoUrl: {
            readonly type: "string";
            readonly required: true;
        };
        readonly logoAlt: {
            readonly type: "string";
            readonly required: true;
        };
        readonly menuPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly menuStyle: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "vertical"];
            readonly required: true;
        };
        readonly menuTextColor: {
            readonly type: "string";
        };
        readonly menuHoverColor: {
            readonly type: "string";
        };
        readonly actions: {
            readonly type: "array";
            readonly required: true;
        };
        readonly actionsPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "right"];
            readonly required: true;
        };
        readonly showCartBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showLabels: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly cartBadgeCount: {
            readonly type: "number";
            readonly required: true;
        };
        readonly mobileBreakpoint: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly mobileMenuStyle: {
            readonly type: "enum";
            readonly options: readonly ["drawer", "fullscreen"];
            readonly required: true;
        };
    };
};
export type HeaderMeta = typeof headerMeta;
//# sourceMappingURL=header.meta.d.ts.map