export declare const footerMeta: {
    readonly name: "Footer";
    readonly label: "Footer";
    readonly description: "Site footer with up to 5 columns. Each column can be a menu (data-injected) or a newsletter signup. Optional social-links row, payment-icons row, and a bottom bar with copyright + secondary links. Presentational only — accepts pre-fetched menus via menus prop keyed by handle.";
    readonly category: "layout";
    readonly intent: readonly ["footer", "site-footer", "page-footer", "menu", "social", "newsletter", "copyright"];
    readonly visualRole: "bottom";
    readonly dataDeps: readonly ["menus (consumer-injected keyed by handle)"];
    readonly copyFields: readonly ["newsletter.title", "newsletter.description", "bottomBar.copyright", "menuConfigs[].title"];
    readonly themeable: readonly ["backgroundColor", "textColor", "linkColor", "linkHoverColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Landmark role=contentinfo on <footer>. Icon-only social links must have aria-label (already added). Provide meaningful alt text on the payment icon SVGs if used.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["footer", "site-footer", "links", "social", "newsletter", "payment", "copyright"];
    readonly props: {
        readonly columns: {
            readonly type: "enum";
            readonly options: readonly ["1", "2", "3", "4", "5"];
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly linkColor: {
            readonly type: "string";
        };
        readonly linkHoverColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly menuConfigs: {
            readonly type: "array";
            readonly required: true;
        };
        readonly newsletter: {
            readonly type: "object";
        };
        readonly social: {
            readonly type: "object";
        };
        readonly paymentIcons: {
            readonly type: "object";
        };
        readonly bottomBar: {
            readonly type: "object";
        };
        readonly paddingTop: {
            readonly type: "string";
            readonly required: true;
        };
        readonly paddingBottom: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type FooterMeta = typeof footerMeta;
//# sourceMappingURL=footer.meta.d.ts.map