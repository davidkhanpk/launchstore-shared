export declare const cartItemsMeta: {
    readonly name: "CartItems";
    readonly label: "Cart Items";
    readonly description: "Cart line-item list with 3 layouts (table/list/card), 3 image sizes, optional preorder badge, optional quantity selector and delete. Cart-library-agnostic: takes items[], onQuantityChange, onDelete, updatingItems, formatPrice. Lucide Trash/Plus/Minus replaced with inline SVG.";
    readonly category: "cart";
    readonly intent: readonly ["cart", "line-items", "cart-table", "cart-list", "cart-card"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (cart flow)", "onQuantityChange (injected)", "onDelete (injected)"];
    readonly copyFields: readonly ["emptyMessage"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <table>/<button> elements with onClick. Quantity buttons convey direction via labels. Pre-order badge is decorative; actual product route via <a> tag with text. Mock item thumbnails use via.placeholder.com which is not a real product.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "items", "table", "line-items"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["table", "list", "card"];
            readonly required: true;
        };
        readonly showImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showVariantInfo: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showQuantitySelector: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDeleteButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly maxQuantity: {
            readonly type: "number";
            readonly required: true;
        };
        readonly emptyMessage: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type CartItemsMeta = typeof cartItemsMeta;
//# sourceMappingURL=cartitems.meta.d.ts.map