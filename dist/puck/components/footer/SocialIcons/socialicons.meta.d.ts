export declare const socialIconsMeta: {
    readonly name: "SocialIcons";
    readonly label: "Social Icons";
    readonly description: "Row of social brand icons (Facebook / Instagram / Twitter / YouTube / LinkedIn / GitHub). Inline-SVG brand marks — no external dep. Style: circle / square / minimal (no bg). Hover state via JS handlers (color + background swap).";
    readonly category: "footer";
    readonly intent: readonly ["social", "social-icons", "social-links", "share", "follow"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["links[].url"];
    readonly themeable: readonly ["color", "hoverColor", "backgroundColor", "hoverBackgroundColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Each <a> has aria-label=platform. rel=\"noopener noreferrer\" auto-applied for external links. Icons are decorative (the link text is the platform name).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["social", "icons", "facebook", "instagram", "twitter", "youtube", "linkedin", "github"];
    readonly props: {
        readonly links: {
            readonly type: "array";
            readonly required: true;
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["circle", "square", "minimal"];
            readonly required: true;
        };
        readonly color: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly hoverBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
            readonly required: true;
        };
    };
};
export type SocialIconsMeta = typeof socialIconsMeta;
//# sourceMappingURL=socialicons.meta.d.ts.map