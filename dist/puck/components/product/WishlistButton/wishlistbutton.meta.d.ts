export declare const wishlistButtonMeta: {
    readonly name: "WishlistButton";
    readonly label: "Wishlist Button";
    readonly description: "Toggle button for adding/removing the active variant from the user's wishlist. Auth-aware: hidden for guests. Wishlist state lives in the consumer's wishlist provider; shared takes `checkAuth()`, `isInWishlist(variantId)`, `toggleWishlist(variantId)` callbacks. Lucide Heart replaced with inline SVG.";
    readonly category: "product";
    readonly intent: readonly ["product", "wishlist", "favorite", "save"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)", "selectedVariantId (injected)", "checkAuth / isInWishlist / toggleWishlist (callbacks)"];
    readonly copyFields: readonly ["labelText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "aria-label updates between \"Add to Wishlist\" and \"Remove from Wishlist\" based on state. Disabled during in-flight toggle.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "wishlist", "favorite", "save", "heart"];
    readonly props: {
        readonly showLabel: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly labelText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["small", "medium", "large"];
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["default", "outline", "ghost", "icon-only"];
            readonly required: true;
        };
        readonly iconPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "right"];
            readonly required: true;
        };
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type WishlistButtonMeta = typeof wishlistButtonMeta;
//# sourceMappingURL=wishlistbutton.meta.d.ts.map