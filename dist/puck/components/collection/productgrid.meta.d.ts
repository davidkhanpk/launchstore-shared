export declare const productGridMeta: {
    readonly name: "ProductGrid";
    readonly label: "Product Grid";
    readonly description: "Product grid/list with 3 column counts, 3 image aspect ratios, optional quick view/wishlist/compare buttons, optional badges, 3 gap sizes. Cart-library-agnostic: takes products[], onQuickView, onAddToWishlist, onCompare. Lucide Heart/Eye replaced with inline SVG.";
    readonly category: "collection";
    readonly intent: readonly ["products", "grid", "list"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["products (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <a> + <button> with onClick. Quick view/wishlist hover-revealed on grid mode.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["products", "grid", "list", "shop"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["grid", "list"];
            readonly required: true;
        };
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4"];
            readonly required: true;
        };
        readonly showQuickView: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showWishlist: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCompare: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageAspectRatio: {
            readonly type: "enum";
            readonly options: readonly ["square", "portrait", "landscape"];
            readonly required: true;
        };
        readonly showBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type ProductGridMeta = typeof productGridMeta;
//# sourceMappingURL=productgrid.meta.d.ts.map