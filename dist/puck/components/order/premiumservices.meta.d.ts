export declare const premiumServicesMeta: {
    readonly name: "PremiumServices";
    readonly label: "Premium Services";
    readonly description: "Order-confirmation atom: highlight cards for premium perks (warranty, gift wrap, support). Service items are consumer-injected.";
    readonly category: "order";
    readonly intent: readonly ["confirm", "upsell"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["services (consumer-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "premium", "services", "perks", "atom"];
    readonly props: {
        readonly columns: {
            readonly type: "number";
            readonly required: true;
            readonly description: "Cards per row (1-3).";
        };
    };
};
export type PremiumServicesMeta = typeof premiumServicesMeta;
//# sourceMappingURL=premiumservices.meta.d.ts.map