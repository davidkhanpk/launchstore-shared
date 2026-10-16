export declare const headerActionsMeta: {
    readonly name: "HeaderActions";
    readonly label: "Header Actions";
    readonly description: "The header icon cluster: search, account, wishlist, cart (with item-count badge). Part of the site header; not a standalone section.";
    readonly category: "navigation";
    readonly intent: readonly ["navigate", "cart", "search"];
    readonly visualRole: "header-cluster";
    readonly dataDeps: readonly ["cart count (host-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Icons need accessible labels — verify the host provides aria-labels.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["header", "icons", "cart", "search", "account"];
    readonly props: {
        readonly showSearch: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the search icon.";
        };
        readonly showAccount: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the account icon.";
        };
        readonly showWishlist: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the wishlist icon.";
        };
        readonly showCart: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the cart icon with badge.";
        };
        readonly iconSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
            readonly description: "Icon size.";
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
            readonly description: "Spacing between icons.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Cluster alignment.";
        };
        readonly color: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Icon color. Token path (e.g. \"text.primary\") or hex.";
        };
        readonly cartCount: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Cart badge count (host overrides live).";
        };
    };
};
export type HeaderActionsMeta = typeof headerActionsMeta;
//# sourceMappingURL=headeractions.meta.d.ts.map