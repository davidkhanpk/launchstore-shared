export declare const checkoutFormMeta: {
    readonly name: "CheckoutForm";
    readonly label: "Checkout Form";
    readonly description: "3-step checkout (Contact & Shipping → Delivery Method → Payment) with step indicator, optional guest checkout, optional phone/notes fields, optional same-as-billing. Cart-library-agnostic: takes shippingMethods[], paymentMethods[], onSubmit(data), onStepChange, isProcessing, initialStep, formatPrice. Lucide Check/ChevronRight/Loader2 replaced with inline SVG.";
    readonly category: "cart";
    readonly intent: readonly ["checkout", "form", "shipping", "payment", "multi-step"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["onSubmit (injected)", "shippingMethods (consumer)", "paymentMethods (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <form> + <input> + <button> elements. Step indicator uses aria-friendly text. Card form fields are real <input type=\"text\">. Submit is keyboard accessible. Note: card number / expiry / CVV are uncontrolled inputs (no PCI scope, Puck preview only).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["checkout", "form", "shipping", "payment", "multi-step"];
    readonly props: {
        readonly showStepIndicators: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly enableGuestCheckout: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly requirePhoneNumber: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showSaveAddressCheckbox: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultCountry: {
            readonly type: "enum";
            readonly options: readonly ["US", "CA", "GB", "AU"];
            readonly required: true;
        };
        readonly showOrderNotes: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type CheckoutFormMeta = typeof checkoutFormMeta;
//# sourceMappingURL=checkoutform.meta.d.ts.map