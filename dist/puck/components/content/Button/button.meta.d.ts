export declare const buttonMeta: {
    readonly name: "Button";
    readonly label: "Button";
    readonly description: "CTA button rendered as <a href> with hover effects. 5 colors (bg / text / border / hover-bg / hover-text) accept hex or theme tokens; resolveColor() resolves tokens via var(--theme-*) CSS variables. Variant (primary/secondary/outline/ghost/danger) toggles border treatment; size scales padding+font; alignment controls flexbox justify.";
    readonly category: "content";
    readonly intent: readonly ["button", "cta", "call-to-action", "action", "link", "submit"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["text", "url"];
    readonly themeable: readonly ["backgroundColor", "textColor", "borderColor", "hoverBackgroundColor", "hoverTextColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Renders as <a href> — if the destination is not a real URL, use # sparingly. Confirm target=_blank triggers rel=noopener noreferrer automatically. Color contrast must meet WCAG AA against the background. Hover-only color changes fail accessibility — provide a non-color affordance (shadow change, scale).";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["button", "cta", "action", "a", "href", "click", "submit"];
    readonly props: {
        readonly text: {
            readonly type: "string";
            readonly required: true;
        };
        readonly url: {
            readonly type: "string";
            readonly required: true;
        };
        readonly openInNewTab: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly variant: {
            readonly type: "enum";
            readonly options: readonly ["primary", "secondary", "outline", "ghost", "danger"];
        };
        readonly size: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl"];
        };
        readonly fullWidth: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly borderColor: {
            readonly type: "string";
        };
        readonly hoverBackgroundColor: {
            readonly type: "string";
        };
        readonly hoverTextColor: {
            readonly type: "string";
        };
        readonly showIcon: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly iconPosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "right"];
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "full"];
        };
        readonly shadow: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "xl"];
        };
        readonly alignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly marginTop: {
            readonly type: "number";
            readonly required: true;
        };
        readonly marginBottom: {
            readonly type: "number";
            readonly required: true;
        };
    };
};
export type ButtonMeta = typeof buttonMeta;
//# sourceMappingURL=button.meta.d.ts.map