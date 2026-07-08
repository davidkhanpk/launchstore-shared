export declare const productCardMeta: {
    readonly name: "ProductCard";
    readonly label: "Product Card";
    readonly description: "Single-product card with image / title / price / badges / add-to-cart. Stand-in product card for stores that don't ship a ProductPreview component. Optional renderProduct escape hatch: storefront passes its own renderer (HttpTypes.StoreProduct → themed Card) via the consumer wrapper. Default card renders a full feature set using only Tailwind classes — useful for editor preview and frontend (no Medusa SDK).";
    readonly category: "product";
    readonly intent: readonly ["product", "card", "item", "preview-card", "card-grid"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected or stub)", "renderProduct (optional)"];
    readonly copyFields: readonly ["buttonText"];
    readonly themeable: readonly ["priceColor", "cardBackground", "accentColor", "cardRadius", "cardBorder"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Image has alt from product.title. Add-to-cart uses real <button>. Badges are decorative <span>s (live region not needed — sale/new/low-stock already implied visually for screen readers via aria-label on the action button).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "card", "preview", "grid", "list", "item-card"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["vertical", "horizontal", "compact", "spacious"];
            readonly required: true;
        };
        readonly enableSwiper: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly aspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "full"];
            readonly required: true;
        };
        readonly showShadow: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly hoverZoom: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly titleSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg", "xl", "2xl"];
            readonly required: true;
        };
        readonly titleWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
        };
        readonly titleAlign: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
        readonly showPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly priceSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg", "xl"];
            readonly required: true;
        };
        readonly priceColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showCompareAtPrice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSavingsBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSaleBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showNewBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showLowStockBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly badgePosition: {
            readonly type: "enum";
            readonly options: readonly ["top-left", "top-right", "bottom-left", "bottom-right"];
            readonly required: true;
        };
        readonly showAddToCart: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly buttonStyle: {
            readonly type: "enum";
            readonly options: readonly ["filled", "outline", "ghost"];
            readonly required: true;
        };
        readonly buttonSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly showCartIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly cardRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
            readonly required: true;
        };
        readonly cardBorder: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
            readonly required: true;
        };
        readonly cardShadow: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly cardBackground: {
            readonly type: "string";
            readonly required: true;
        };
        readonly accentColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly fontFamily: {
            readonly type: "string";
            readonly required: true;
        };
        readonly productId: {
            readonly type: "string";
            readonly required: false;
        };
    };
};
export type ProductCardMeta = typeof productCardMeta;
//# sourceMappingURL=productcard.meta.d.ts.map