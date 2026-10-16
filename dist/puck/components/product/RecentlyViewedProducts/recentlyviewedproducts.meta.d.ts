export declare const recentlyViewedProductsMeta: {
    readonly name: "RecentlyViewedProducts";
    readonly label: "Recently Viewed";
    readonly description: string;
    readonly category: "product";
    readonly intent: readonly ["re-engage", "browse-history", "personalize"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["visitor browsing history (storefront-injected)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly ["textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Carousel mode uses Swiper — enable navigation for keyboard users.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["recently viewed", "history", "browse", "carousel", "product grid"];
    readonly props: {
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Render the section heading.";
        };
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Section heading, e.g. \"Recently Viewed\".";
        };
        readonly displayStyle: {
            readonly type: "enum";
            readonly options: readonly ["grid", "carousel"];
            readonly required: true;
            readonly description: "grid = static rows; carousel = Swiper slider.";
        };
        readonly maxProducts: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Max products shown (4-8 recommended).";
        };
        readonly containerPadding: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
            readonly description: "Section padding.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.secondary\") or hex.";
        };
    };
};
export type RecentlyViewedProductsMeta = typeof recentlyViewedProductsMeta;
//# sourceMappingURL=recentlyviewedproducts.meta.d.ts.map