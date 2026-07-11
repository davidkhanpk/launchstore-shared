export declare const cartItemsPreviewMeta: {
    readonly name: "CartItemsPreview";
    readonly label: "Cart Items Preview";
    readonly description: "Static read-only cart preview (header, item list, prices). Pure presentational, no callbacks.";
    readonly category: "checkout";
    readonly intent: readonly ["cart", "preview", "review"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["items (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + images.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "preview", "review"];
    readonly props: {
        readonly showImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showQuantity: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showVariantInfo: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "compact"];
            readonly required: true;
        };
    };
};
export type CartItemsPreviewMeta = typeof cartItemsPreviewMeta;
//# sourceMappingURL=cartitemspreview.meta.d.ts.map