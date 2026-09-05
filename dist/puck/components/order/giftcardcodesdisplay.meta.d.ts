export declare const giftCardCodesDisplayMeta: {
    readonly name: "GiftCardCodesDisplay";
    readonly label: "Gift Card Codes";
    readonly description: "Displays gift card codes purchased in the order — for the order confirmation page. Shows code, value, copy button, and email note. Fetches codes automatically from the loyalty plugin.";
    readonly category: "order";
    readonly intent: readonly ["order-confirmation", "gift-card", "purchase", "success"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["giftCards (order gift card items)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Copy button has text label. Codes in monospace for readability.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["gift", "card", "code", "confirmation", "success", "purchase", "delivery"];
    readonly props: {
        readonly showCopyButton: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly showEmailNote: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly title: {
            readonly type: "string";
            readonly required: false;
        };
    };
};
export type GiftCardCodesDisplayMeta = typeof giftCardCodesDisplayMeta;
//# sourceMappingURL=giftcardcodesdisplay.meta.d.ts.map