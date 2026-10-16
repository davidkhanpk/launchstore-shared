export declare const nextStepsMeta: {
    readonly name: "NextSteps";
    readonly label: "Next Steps";
    readonly description: "Order-confirmation atom: a numbered list of \"what happens next\" steps (processing → shipped → delivered). Step content is consumer-injected; editor shows placeholders.";
    readonly category: "order";
    readonly intent: readonly ["confirm", "guide"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["steps (consumer-injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "next steps", "timeline", "atom"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["vertical", "horizontal"];
            readonly required: true;
            readonly description: "Step arrangement.";
        };
    };
};
export type NextStepsMeta = typeof nextStepsMeta;
//# sourceMappingURL=nextsteps.meta.d.ts.map