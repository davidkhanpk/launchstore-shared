export declare const orderDateMeta: {
    readonly name: "OrderDate";
    readonly label: "Order Date Line";
    readonly description: "Order-confirmation atom: \"Placed on {date}\". Date comes from order context.";
    readonly category: "order";
    readonly intent: readonly ["confirm"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["order date (page context)"];
    readonly copyFields: readonly ["label"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "date", "atom"];
    readonly props: {
        readonly label: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Prefix text, e.g. \"Placed on\". Empty = date only.";
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
            readonly description: "Token path or hex.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Alignment.";
        };
    };
};
export type OrderDateMeta = typeof orderDateMeta;
//# sourceMappingURL=orderdate.meta.d.ts.map