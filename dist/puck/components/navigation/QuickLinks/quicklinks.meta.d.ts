export declare const quickLinksMeta: {
    readonly name: "QuickLinks";
    readonly label: "Quick Links";
    readonly description: "A titled list of plain links — typically used in footers or help areas (\"Shipping\", \"Returns\", \"Contact\"). Links data is consumer-injected; the editor shows placeholders.";
    readonly category: "navigation";
    readonly intent: readonly ["navigate", "links"];
    readonly visualRole: "footer-column";
    readonly dataDeps: readonly ["links (consumer-injected)"];
    readonly copyFields: readonly ["title"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["links", "footer", "quick links", "menu", "help"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Optional heading above the list.";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md"];
            readonly required: true;
            readonly description: "Link text size.";
        };
    };
};
export type QuickLinksMeta = typeof quickLinksMeta;
//# sourceMappingURL=quicklinks.meta.d.ts.map