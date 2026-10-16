export declare const orderNumberMeta: {
    readonly name: "OrderNumber";
    readonly label: "Order Number Line";
    readonly description: "Order-confirmation atom: \"Order {number}\". The number comes from order context.";
    readonly category: "order";
    readonly intent: readonly ["confirm"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["order number (page context)"];
    readonly copyFields: readonly ["label"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "number", "atom"];
    readonly props: {
        readonly label: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Prefix text, e.g. \"Order\".";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
            readonly required: true;
            readonly description: "Text size.";
        };
        readonly color: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path or hex.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Alignment.";
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
            readonly required: true;
            readonly description: "Text weight.";
        };
    };
};
export type OrderNumberMeta = typeof orderNumberMeta;
//# sourceMappingURL=ordernumber.meta.d.ts.map