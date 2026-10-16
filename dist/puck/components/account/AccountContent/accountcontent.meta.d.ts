export declare const accountContentMeta: {
    readonly name: "AccountContent";
    readonly label: "Account Content";
    readonly description: "The customer account dashboard body — configurable panels: recent orders, wishlist, recommendations, loyalty points. Account data is storefront-injected; the editor shows sample panels. Pairs with AccountSidebar.";
    readonly category: "account";
    readonly intent: readonly ["account", "self-serve"];
    readonly visualRole: "main";
    readonly dataDeps: readonly ["customer account data (storefront-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "dashboard", "orders", "loyalty", "customer"];
    readonly props: {
        readonly defaultView: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Initially active panel, e.g. \"dashboard\".";
        };
        readonly showRecentOrders: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the recent orders panel.";
        };
        readonly showWishlist: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the wishlist panel.";
        };
        readonly showRecommendations: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show recommended products.";
        };
        readonly showLoyaltyPoints: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the loyalty points panel.";
        };
        readonly showPersonalStylist: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the personal-stylist panel.";
        };
        readonly luxuryStyle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Lighter typography variant.";
        };
    };
};
export type AccountContentMeta = typeof accountContentMeta;
//# sourceMappingURL=accountcontent.meta.d.ts.map