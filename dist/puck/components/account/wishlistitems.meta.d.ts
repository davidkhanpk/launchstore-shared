export declare const wishlistItemsMeta: {
    readonly name: "WishlistItems";
    readonly label: "Wishlist Items";
    readonly description: "Customer wishlist with item list, add-to-cart, remove actions, and empty state. Cart-library-agnostic: takes items[], onAddToCart(variantId), onRemove(id).";
    readonly category: "account";
    readonly intent: readonly ["account", "wishlist", "favorites"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (consumer)"];
    readonly copyFields: readonly ["title", "emptyTitle", "emptyMessage", "addToCartLabel", "removeLabel"];
    readonly themeable: readonly ["backgroundColor", "cardBackgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button> with onClick. Lucide icons replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "wishlist", "favorites", "saved"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showEmptyMessage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly emptyTitle: {
            readonly type: "string";
            readonly required: true;
        };
        readonly emptyMessage: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly addToCartLabel: {
            readonly type: "string";
            readonly required: true;
        };
        readonly removeLabel: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
        };
        readonly padding: {
            readonly type: "string";
            readonly required: true;
        };
        readonly shadow: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type WishlistItemsMeta = typeof wishlistItemsMeta;
//# sourceMappingURL=wishlistitems.meta.d.ts.map