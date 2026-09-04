export declare const giftCardCodeMeta: {
    readonly name: "GiftCardCode";
    readonly label: "Gift Card Code";
    readonly description: "Gift card code input for checkout — customers enter a code to apply store credit balance to their order total. Expandable layout, applied-card chip with remove button, specific error feedback for invalid/expired/redeemed codes.";
    readonly category: "checkout";
    readonly intent: readonly ["checkout", "payment", "gift-card", "credit", "redeem"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["appliedGiftCard (cart credit_lines)"];
    readonly copyFields: readonly ["buttonText", "placeholder"];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <input> + <button>. Enter key submits.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["gift", "card", "code", "credit", "redeem", "checkout", "balance", "voucher"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["inline", "expandable"];
            readonly required: false;
        };
        readonly showAppliedGiftCard: {
            readonly type: "boolean";
            readonly required: false;
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: false;
        };
        readonly placeholder: {
            readonly type: "string";
            readonly required: false;
        };
    };
};
export type GiftCardCodeMeta = typeof giftCardCodeMeta;
//# sourceMappingURL=giftcardcode.meta.d.ts.map