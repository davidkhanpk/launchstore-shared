export declare const orderTotalMeta: {
    readonly name: "OrderTotal";
    readonly label: "Order Total Line";
    readonly description: "Order-confirmation atom: \"Total: {amount}\". Amount and price formatting come from order context.";
    readonly category: "order";
    readonly intent: readonly ["confirm"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["order total (page context)"];
    readonly copyFields: readonly ["label"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "total", "price", "atom"];
    readonly props: {
        readonly label: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Prefix text, e.g. \"Total\".";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["md", "lg", "xl", "2xl"];
            readonly required: true;
            readonly description: "Text size — typically larger than other atoms.";
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
            readonly options: readonly ["semibold", "bold"];
            readonly required: true;
            readonly description: "Text weight.";
        };
    };
};
export type OrderTotalMeta = typeof orderTotalMeta;
//# sourceMappingURL=ordertotal.meta.d.ts.map