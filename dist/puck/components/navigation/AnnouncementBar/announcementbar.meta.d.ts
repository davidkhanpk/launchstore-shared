export declare const announcementBarMeta: {
    readonly name: "AnnouncementBar";
    readonly label: "Announcement Bar";
    readonly description: "Thin top-of-page banner for short promotions (\"Free shipping over $50\"). Sits above the header on every page. Keep text under ~80 characters.";
    readonly category: "navigation";
    readonly intent: readonly ["announce", "promote", "shipping-offer"];
    readonly visualRole: "top-strip";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text", "linkText"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["announcement", "banner", "top bar", "promo strip", "free shipping"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
            readonly description: "The announcement message.";
        };
        readonly linkText: {
            readonly type: "string";
            readonly description: "Optional CTA label; adds a link inside the bar.";
        };
        readonly linkUrl: {
            readonly type: "string";
            readonly description: "URL for the CTA link.";
        };
        readonly backgroundColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"brand.primary\") or hex.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path (e.g. \"text.inverse\") or hex.";
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
            readonly description: "Text alignment.";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["xs", "sm", "md"];
            readonly required: true;
            readonly description: "Text size.";
        };
        readonly paddingY: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
            readonly description: "Vertical padding.";
        };
    };
};
export type AnnouncementBarMeta = typeof announcementBarMeta;
//# sourceMappingURL=announcementbar.meta.d.ts.map