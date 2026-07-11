/**
 * PromotionalBannerGrid — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt.
 */
export declare const promotionalBannerGridMeta: {
    /** Must match the Puck `label` field */
    readonly name: "PromotionalBannerGrid";
    /** Display name in the AI prompt */
    readonly label: "Promotional Banner Grid";
    /** Short description */
    readonly description: "A grid of promotional banners (2/3 columns or 1-2/2-1 split) with background images, overlay opacity, text positioning, and CTA links. Pls use \"Announce\" or \"Promote\" intent keywords.";
    readonly category: "homepage";
    readonly intent: readonly ["promote", "showcase", "campaign", "collection", "featured", "cta"];
    readonly visualRole: "mid-page";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "subtitle", "banners[].title", "banners[].subtitle", "banners[].ctaText"];
    readonly themeable: readonly ["banners[].textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Banner CTAs are real <a href> elements so screen readers + tab navigation work. Image alt text is not exposed in the field set — follow-up epic should add it.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["banner", "grid", "campaign", "collection", "promotion", "cta", "image-overlay"];
    /** Prop schema — mirrors .types.ts */
    readonly props: {
        readonly title: {
            readonly type: "string";
        };
        readonly subtitle: {
            readonly type: "string";
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["2-column", "3-column", "1-2-split", "2-1-split"];
        };
        readonly spacing: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
        readonly banners: {
            readonly type: "array";
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg"];
        };
        readonly hoverEffect: {
            readonly type: "enum";
            readonly options: readonly ["zoom", "overlay", "lift", "none"];
        };
        readonly minHeight: {
            readonly type: "string";
        };
    };
};
export type PromotionalBannerGridMeta = typeof promotionalBannerGridMeta;
//# sourceMappingURL=promotionalbannergrid.meta.d.ts.map