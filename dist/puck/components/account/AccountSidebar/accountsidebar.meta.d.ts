export declare const accountSidebarMeta: {
    readonly name: "AccountSidebar";
    readonly label: "Account Sidebar";
    readonly description: "The account area navigation: orders / profile / addresses / wishlist / payment methods / logout links. Controls which sections are reachable. Pairs with AccountContent.";
    readonly category: "account";
    readonly intent: readonly ["account", "navigate", "self-serve"];
    readonly visualRole: "sidebar";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "sidebar", "menu", "navigation", "customer"];
    readonly props: {
        readonly showOrders: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Orders link.";
        };
        readonly showProfile: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Profile link.";
        };
        readonly showAddresses: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Addresses link.";
        };
        readonly showWishlist: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Wishlist link.";
        };
        readonly showPaymentMethods: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Payment methods link.";
        };
        readonly showConcierge: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Concierge/support link.";
        };
        readonly showRewards: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Rewards link.";
        };
        readonly showLogout: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Logout link.";
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["standard", "luxury"];
            readonly required: true;
            readonly description: "Visual variant.";
        };
        readonly activeView: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Initially highlighted item, e.g. \"orders\".";
        };
    };
};
export type AccountSidebarMeta = typeof accountSidebarMeta;
//# sourceMappingURL=accountsidebar.meta.d.ts.map