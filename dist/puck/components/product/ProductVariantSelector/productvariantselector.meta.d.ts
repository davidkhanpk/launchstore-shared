export declare const productVariantSelectorMeta: {
    readonly name: "ProductVariantSelector";
    readonly label: "Product Variant Selector";
    readonly description: "Variant selector with three styles: dropdown, button group, or color swatches. When the user selects options, the matching variant is auto-detected and the active selection is exposed back via the setSelectedVariant callback. Controlled mode: pass selectedOptions + setSelectedOptions + selectedVariant + setSelectedVariant from the cart flow. Dropped an 18-line dev console.log block from the storefront source (was debug noise).";
    readonly category: "product";
    readonly intent: readonly ["product", "variant", "options", "picker", "color-swatch"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["product (injected)", "selectedOptions/setSelectedOptions (cart flow)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Native select for dropdown style (full keyboard a11y). Buttons for buttons + color-swatches styles. Each visible value has an aria-current or visual-selected state via class. Color swatches use title= attribute as accessible label fallback.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "variant", "options", "color", "size", "picker"];
    readonly props: {
        readonly selectorStyle: {
            readonly type: "enum";
            readonly options: readonly ["dropdown", "buttons", "color-swatches"];
            readonly required: true;
        };
        readonly showLabels: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showStock: {
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
        readonly product: {
            readonly type: "object";
            readonly required: false;
        };
        readonly selectedOptions: {
            readonly type: "object";
            readonly required: false;
        };
        readonly selectedVariant: {
            readonly type: "object";
            readonly required: false;
        };
    };
};
export type ProductVariantSelectorMeta = typeof productVariantSelectorMeta;
//# sourceMappingURL=productvariantselector.meta.d.ts.map