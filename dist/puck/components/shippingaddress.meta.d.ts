export declare const shippingAddressMeta: {
    readonly name: "ShippingAddress";
    readonly label: "Shipping Address";
    readonly description: "Shipping address form (contact + address + optional company + same-as-billing) with 2 layouts (single/two column). Cart-library-agnostic: takes sameAsBilling, onSameAsBillingChange, onContinue, countries, states.";
    readonly category: "checkout";
    readonly intent: readonly ["shipping", "address", "checkout", "form"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["countries (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input> + <select> + <button>. All inputs uncontrolled for Puck preview.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["shipping", "address", "checkout", "form"];
    readonly props: {
        readonly showBillingAddress: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly requirePhone: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showCompanyField: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableAddressAutocomplete: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultSameAsBilling: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["single-column", "two-column"];
            readonly required: true;
        };
    };
};
export type ShippingAddressMeta = typeof shippingAddressMeta;
//# sourceMappingURL=shippingaddress.meta.d.ts.map