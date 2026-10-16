export declare const collectionHeroMeta: {
    readonly name: "CollectionHero";
    readonly label: "Collection Hero";
    readonly description: "Collection page banner: collection image, title, and description over the full section background model (image > gradient > scheme > color). Collection data comes from page context (storefront-injected).";
    readonly category: "collection";
    readonly intent: readonly ["announce", "introduce"];
    readonly visualRole: "above-fold";
    readonly dataDeps: readonly ["collection title/description/image (page context)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["collection", "hero", "banner", "header"];
    readonly props: {
        readonly showImage: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the collection image.";
        };
        readonly showTitle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the collection title.";
        };
        readonly showDescription: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the collection description.";
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["standard", "luxury"];
            readonly required: true;
            readonly description: "luxury = lighter type, wider tracking.";
        };
        readonly backgroundColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path or hex. PRECEDENCE: backgroundImage > gradient > backgroundScheme > backgroundColor — clear backgroundScheme to \"\" when using a custom color.";
        };
        readonly textColor: {
            readonly type: "color";
            readonly required: true;
            readonly description: "Token path or hex. Ignored while a scheme is active.";
        };
        readonly backgroundScheme: {
            readonly type: "enum";
            readonly options: readonly ["", "light", "dark", "accent", "subtle"];
            readonly description: "Theme scheme — overrides backgroundColor while set.";
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
            readonly description: "Overlay strength in percent.";
        };
        readonly gradientFrom: {
            readonly type: "color";
            readonly description: "Gradient start — overrides scheme/color.";
        };
        readonly gradientTo: {
            readonly type: "color";
            readonly description: "Gradient end.";
        };
        readonly density: {
            readonly type: "string";
            readonly description: "Section padding.";
        };
        readonly contentWidth: {
            readonly type: "string";
            readonly description: "Content width.";
        };
        readonly contentAlign: {
            readonly type: "string";
            readonly description: "left | center | right.";
        };
        readonly verticalAlign: {
            readonly type: "string";
            readonly description: "top | middle | bottom.";
        };
    };
};
export type CollectionHeroMeta = typeof collectionHeroMeta;
//# sourceMappingURL=collectionhero.meta.d.ts.map