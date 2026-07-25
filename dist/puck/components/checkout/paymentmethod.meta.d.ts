export declare const paymentMethodMeta: {
    readonly name: "PaymentMethod";
    readonly label: "Payment Method";
    readonly description: "Payment method selector with 3 layouts (list/cards/icons), optional security badges, save-card checkbox. Display info (name, description, icon) comes from the shared PAYMENT_INFO_MAP keyed by Medusa provider id. No express checkout — those are the same Medusa provider IDs (pp_apple_pay_apple, pp_google_pay_google) shown with friendly names.";
    readonly category: "checkout";
    readonly intent: readonly ["payment", "checkout", "card"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["methods (consumer)", "selectedId? (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"radio\"> + <button>.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["payment", "checkout", "card", "paypal", "apple-pay", "google-pay", "manual"];
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
    };
};
export type PaymentMethodMeta = typeof paymentMethodMeta;
//# sourceMappingURL=paymentmethod.meta.d.ts.map