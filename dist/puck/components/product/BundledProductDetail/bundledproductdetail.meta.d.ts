export declare const bundledProductDetailMeta: {
    readonly name: "BundledProductDetail";
    readonly label: "Bundled Product Detail";
    readonly description: "Bundle-of-products widget: lists items, lets user pick a variant per item, computes total + savings, calls onAdd(items) on submit. All 4 lucide icons (ShoppingCart/AlertCircle/Loader/ChevronDown) replaced with inline SVG. shared is SDK-agnostic: bundle data + onAdd(items) + formatPrice are consumer-injected; defaults render gracefully when omitted (Puck canvas preview).";
    readonly category: "product";
    readonly intent: readonly ["product", "bundle", "kits", "combo"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["bundle (injected)", "onAdd (injected)"];
    readonly copyFields: readonly ["buttonText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Each item has a native <select> for variant — full keyboard a11y. Image thumbnails have alt text from the product title. The submit button uses a real <button> element.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "bundle", "kits", "combo", "multi-product"];
    readonly props: {
        readonly showSavingsBadge: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showItemImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly bundleIdOverride: {
            readonly type: "string";
            readonly required: true;
        };
        readonly bundle: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type BundledProductDetailMeta = typeof bundledProductDetailMeta;
//# sourceMappingURL=bundledproductdetail.meta.d.ts.map