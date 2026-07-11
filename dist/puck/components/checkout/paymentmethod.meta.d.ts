export declare const paymentMethodMeta: {
    readonly name: "PaymentMethod";
    readonly label: "Payment Method";
    readonly description: "Payment method selector with 3 layouts (list/cards/icons), express checkout top/bottom, optional security badges, save-card checkbox. Cart-library-agnostic: takes methods[], selectedId, onSelect, onContinue.";
    readonly category: "checkout";
    readonly intent: readonly ["payment", "checkout", "card"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["methods (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"radio\"> + <button>. Card form uncontrolled for Puck preview.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["payment", "checkout", "card", "paypal", "apple-pay"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "cards", "icons"];
            readonly required: true;
        };
        readonly showPaymentIcons: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSecurityBadges: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableSaveCard: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly expressCheckoutPosition: {
            readonly type: "enum";
            readonly options: readonly ["top", "bottom", "none"];
            readonly required: true;
        };
    };
};
export type PaymentMethodMeta = typeof paymentMethodMeta;
//# sourceMappingURL=paymentmethod.meta.d.ts.map