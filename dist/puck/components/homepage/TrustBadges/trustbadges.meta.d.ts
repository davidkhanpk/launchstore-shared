export declare const trustBadgesMeta: {
    readonly name: "TrustBadges";
    readonly label: "Trust Badges";
    readonly description: "A row or grid of trust-signal badges with emoji icons, titles, and short descriptions (e.g. \"Free Shipping\", \"Secure Checkout\", \"24/7 Support\"). 13 icons available covering common e-commerce trust signals.";
    readonly category: "homepage";
    readonly intent: readonly ["trust", "reassurance", "shipping", "support", "security"];
    readonly visualRole: "mid-page";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "subtitle", "badges[].title", "badges[].description"];
    readonly themeable: readonly ["backgroundColor", "textColor", "badges[].iconColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Emoji icons are visual only — titles carry the meaning for screen readers. Decorative emoji should ideally be aria-hidden, but current implementation reads both.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["trust", "badges", "icons", "shipping", "security", "support", "reassurance"];
    readonly props: {
        readonly title: {
            readonly type: "string";
        };
        readonly subtitle: {
            readonly type: "string";
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["horizontal", "grid", "stacked"];
        };
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["2", "3", "4", "5"];
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly badges: {
            readonly type: "array";
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["compact", "normal", "spacious"];
        };
        readonly showBorder: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
    };
};
export type TrustBadgesMeta = typeof trustBadgesMeta;
//# sourceMappingURL=trustbadges.meta.d.ts.map