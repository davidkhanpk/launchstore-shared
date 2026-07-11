export declare const addToCartMeta: {
    readonly name: "AddToCart";
    readonly label: "Add to Cart Button";
    readonly description: "Add-to-cart button with 5 visual styles (primary/secondary/outline/ghost/custom), 3 sizes, hover state, success state, optional preorder indicator. Cart-library-agnostic: takes onAdd(variantId, quantity), isLoading, inStock, isPreorder, preorderAvailableDate. Lucide ShoppingCart/Check/Clock replaced with inline SVG. Theme color resolution via shared resolveColor() if useThemeColors enabled.";
    readonly category: "product";
    readonly intent: readonly ["cart", "add-to-cart", "checkout", "cta", "buy"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["selectedVariantId (cart flow)", "quantity (cart flow)", "onAdd (injected)"];
    readonly copyFields: readonly ["text", "preorderText"];
    readonly themeable: readonly ["backgroundColor", "textColor", "hoverBackgroundColor", "hoverTextColor", "borderColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button> with onClick. disabled state reflected via the disabled attribute. Success state is decorative (spans are not announced); the actual cart update comes from consumer cart context which has its own ARIA. Preorder ship date is plain text under the button.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "add-to-cart", "checkout", "cta", "buy", "preorder"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly preorderText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly variant: {
            readonly type: "enum";
            readonly options: readonly ["primary", "secondary", "outline", "ghost", "custom"];
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly fullWidth: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly disabled: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverTextColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly useThemeColors: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly marginTop: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginLeft: {
            readonly type: "string";
            readonly required: true;
        };
        readonly marginRight: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingX: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingY: {
            readonly type: "string";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type AddToCartMeta = typeof addToCartMeta;
//# sourceMappingURL=addtocart.meta.d.ts.map