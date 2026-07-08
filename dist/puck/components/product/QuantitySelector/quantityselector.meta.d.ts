export declare const quantitySelectorMeta: {
    readonly name: "QuantitySelector";
    readonly label: "Quantity Selector";
    readonly description: "Stepped quantity input with +/- buttons. Optional label, three sizes, three border styles, margin/padding shortcuts. Optional controlled mode: pass `quantity` + `setQuantity` to drive from the cart context; otherwise the component uses internal state. Lucide Minus/Plus replaced with inline SVG.";
    readonly category: "product";
    readonly intent: readonly ["product", "quantity", "qty", "cart-input"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly ["quantity (optional)", "setQuantity (optional)"];
    readonly copyFields: readonly ["labelText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Decrease/increase buttons have aria-label. Number input has aria-label=\"Quantity\". Min/max enforced on increment/decrement + manual input.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["product", "quantity", "qty", "cart", "input", "stepper"];
    readonly props: {
        readonly showLabel: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly labelText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly minQuantity: {
            readonly type: "number";
            readonly required: true;
        };
        readonly maxQuantity: {
            readonly type: "number";
            readonly required: true;
        };
        readonly defaultQuantity: {
            readonly type: "number";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["small", "medium", "large"];
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["default", "minimal", "rounded"];
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
    };
};
export type QuantitySelectorMeta = typeof quantitySelectorMeta;
//# sourceMappingURL=quantityselector.meta.d.ts.map