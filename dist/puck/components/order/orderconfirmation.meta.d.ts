export declare const orderConfirmationMeta: {
    readonly name: "OrderConfirmation";
    readonly label: "Order Confirmation";
    readonly description: "Post-purchase success page (3 styles: success/minimal/detailed) with optional order number, email confirmation, and continue-shopping button. Cart-library-agnostic: takes orderId, email, viewOrderHref, continueShoppingHref.";
    readonly category: "order";
    readonly intent: readonly ["order", "confirmation", "success"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["orderId/email (consumer)"];
    readonly copyFields: readonly ["titleText", "messageText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + <a> tags. Lucide Check + Heroicons EnvelopeIcon replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "confirmation", "success", "thank-you"];
    readonly props: {
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["success", "minimal", "detailed"];
            readonly required: true;
        };
        readonly titleText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly messageText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showCheckmark: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showOrderNumber: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showEmailConfirmation: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showContinueShopping: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type OrderConfirmationMeta = typeof orderConfirmationMeta;
//# sourceMappingURL=orderconfirmation.meta.d.ts.map