export declare const customerEmailMeta: {
    readonly name: "CustomerEmail";
    readonly label: "Customer Email Line";
    readonly description: "Order-confirmation atom: \"A confirmation email has been sent to {email}\". The email value comes from order context (storefront-injected).";
    readonly category: "order";
    readonly intent: readonly ["confirm"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["order email (page context)"];
    readonly copyFields: readonly ["label"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order confirmation", "email", "atom"];
    readonly props: {
        readonly label: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Text before the email address. Empty = email only.";
        };
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show a mail icon.";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md", "lg"];
            readonly required: true;
            readonly description: "Text size.";
        };
        readonly color: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.secondary\") or hex.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Alignment.";
        };
    };
};
export type CustomerEmailMeta = typeof customerEmailMeta;
//# sourceMappingURL=customeremail.meta.d.ts.map