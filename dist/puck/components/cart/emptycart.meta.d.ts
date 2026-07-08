export declare const emptyCartMeta: {
    readonly name: "EmptyCart";
    readonly label: "Empty Cart Message";
    readonly description: "Empty-cart placeholder with title, message, link CTA, optional auto-hide when cart has items. Heroicons ArrowUpRightIcon replaced with inline SVG.";
    readonly category: "cart";
    readonly intent: readonly ["cart", "empty", "no-items", "cta"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["isEmpty (cart flow)"];
    readonly copyFields: readonly ["title", "message", "linkText", "linkUrl"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain <a> with href. Returns <></> if showOnlyWhenEmpty && !isEmpty. Mock fallback renders the empty state.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["cart", "empty", "no-items", "cta"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
        };
        readonly message: {
            readonly type: "string";
            readonly required: true;
        };
        readonly linkText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly linkUrl: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showOnlyWhenEmpty: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type EmptyCartMeta = typeof emptyCartMeta;
//# sourceMappingURL=emptycart.meta.d.ts.map