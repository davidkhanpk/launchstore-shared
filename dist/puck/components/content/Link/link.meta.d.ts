export declare const linkMeta: {
    readonly name: "Link";
    readonly label: "Link";
    readonly description: "Inline anchor with typography controls (size, weight, underline behavior on hover/always/none). Color accepts theme tokens (e.g. brand.primary) or hex. Renders as <a href> with target=_self/_blank and rel=noopener noreferrer when target is _blank.";
    readonly category: "content";
    readonly intent: readonly ["link", "anchor", "href", "cta", "navigation"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text"];
    readonly themeable: readonly ["color"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Color contrast must clear WCAG AA. Avoid using only color to distinguish a link — label text and underline behavior should make the link affordant. When target=_blank, rel=noopener noreferrer is auto-applied.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["link", "a", "anchor", "href", "url", "click", "cta"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly href: {
            readonly type: "string";
            readonly required: true;
        };
        readonly target: {
            readonly type: "enum";
            readonly options: readonly ["_self", "_blank"];
        };
        readonly color: {
            readonly type: "string";
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base", "lg", "xl"];
        };
        readonly fontWeight: {
            readonly type: "enum";
            readonly options: readonly ["normal", "medium", "semibold", "bold"];
        };
        readonly underline: {
            readonly type: "enum";
            readonly options: readonly ["always", "hover", "none"];
        };
    };
};
export type LinkMeta = typeof linkMeta;
//# sourceMappingURL=link.meta.d.ts.map