export declare const promotionCardMeta: {
    readonly name: "PromotionCard";
    readonly label: "Promotion Card";
    readonly description: "A single promotional card: headline, description, CTA button — with the full section background model (image > gradient > scheme > color). Use inside PromotionalBannerGrid for multi-offer layouts.";
    readonly category: "homepage";
    readonly intent: readonly ["promote", "offer", "announce"];
    readonly visualRole: "card";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "description", "buttonText"];
    readonly themeable: readonly ["backgroundColor", "textColor", "buttonColor", "buttonTextColor"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["promo", "offer", "card", "sale", "banner", "cta"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Headline, e.g. \"Special Offer\".";
        };
        readonly description: {
            readonly type: "string";
            readonly required: true;
            readonly description: "One-line offer description.";
        };
        readonly buttonText: {
            readonly type: "string";
            readonly required: true;
            readonly description: "CTA button label.";
        };
        readonly buttonHref: {
            readonly type: "string";
            readonly required: true;
            readonly description: "CTA link URL.";
        };
        readonly backgroundColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Card background. Token path or hex. PRECEDENCE: backgroundImage > gradient > backgroundScheme > backgroundColor — clear backgroundScheme to \"\" when using a custom color.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Text color. Token path or hex. Ignored while a scheme is active.";
        };
        readonly buttonColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "CTA button background. Token path (e.g. \"button.primary.background\") or hex.";
        };
        readonly buttonTextColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "CTA label color.";
        };
        readonly borderRadius: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Corner radius: none | sm | md | lg | full.";
        };
        readonly backgroundScheme: {
            readonly type: "enum";
            readonly options: readonly ["", "light", "dark", "accent", "subtle"];
            readonly description: "Theme scheme — overrides backgroundColor while set; also controls text color.";
        };
        readonly backgroundImage: {
            readonly type: "string";
            readonly description: "Background image URL — overrides all other backgrounds.";
        };
        readonly overlayColor: {
            readonly type: "color";
            readonly description: "Overlay tint over a background image.";
        };
        readonly overlayOpacity: {
            readonly type: "string";
            readonly description: "Overlay strength in percent, e.g. \"40\".";
        };
        readonly gradientFrom: {
            readonly type: "color";
            readonly description: "Gradient start — overrides scheme/color when set.";
        };
        readonly gradientTo: {
            readonly type: "color";
            readonly description: "Gradient end.";
        };
    };
};
export type PromotionCardMeta = typeof promotionCardMeta;
//# sourceMappingURL=promotioncard.meta.d.ts.map