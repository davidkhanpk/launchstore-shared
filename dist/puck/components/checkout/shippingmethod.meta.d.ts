export declare const shippingMethodMeta: {
    readonly name: "ShippingMethod";
    readonly label: "Shipping Method";
    readonly description: "Shipping method selector with 3 layouts (list/cards/compact) + optional pickup option. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue, defaultSelection.";
    readonly category: "checkout";
    readonly intent: readonly ["shipping", "delivery", "checkout"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["methods (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"radio\"> + <button>. Lucide Truck/Clock replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["shipping", "delivery", "checkout", "method"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "cards", "compact"];
            readonly required: true;
        };
        readonly showDeliveryTime: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showDeliveryDescription: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPickupOption: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultSelection: {
            readonly type: "enum";
            readonly options: readonly ["standard", "express", "overnight"];
            readonly required: true;
        };
    };
};
export type ShippingMethodMeta = typeof shippingMethodMeta;
//# sourceMappingURL=shippingmethod.meta.d.ts.map