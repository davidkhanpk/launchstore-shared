/**
 * Newsletter — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 */
export declare const newsletterMeta: {
    /** Must match the Puck `label` field */
    readonly name: "Newsletter";
    /** Display name in the AI prompt */
    readonly label: "Newsletter";
    /** Short description — surfaced in Tier 3 catalog */
    readonly description: "A newsletter signup form with email and optional name fields. Renders the form shell only — actual subscription wiring is platform-controlled (Mailchimp / Klaviyo / etc.). Three layouts: centered, split with image, inline.";
    /** Category for grouping in the AI prompt */
    readonly category: "homepage";
    /** User-intent keywords the AI can match against */
    readonly intent: readonly ["subscribe", "capture-email", "newsletter-signup", "lead-generation", "mailing-list"];
    /** Visual role on the page */
    readonly visualRole: "mid-page";
    /** Does the component need data fetched at render time? */
    readonly dataDeps: readonly [];
    /** Prop names that contain user-facing copy */
    readonly copyFields: readonly ["title", "subtitle", "description", "privacyText", "buttonText", "placeholderText"];
    /** Prop names that accept theme tokens */
    readonly themeable: readonly ["backgroundColor", "textColor", "inputBackground", "inputBorder", "buttonBackground", "buttonTextColor"];
    /** Accessibility risk level */
    readonly a11yRisk: "low";
    /** Notes about a11y risk: form has built-in label placeholders + required email attribute */
    readonly a11yNotes: "Form has semantic <input type=\"email\" required> with placeholder text. Privacy text is shown when toggled. Layout shifts: split + inline layouts need viewport testing.";
    /** How the component behaves on small viewports */
    readonly mobileBehavior: "responsive";
    /** Tags for discover_components semantic search */
    readonly searchTags: readonly ["newsletter", "subscribe", "email-capture", "signup", "lead-generation", "mailing-list", "form"];
    /** Prop schema — mirrors newsletter.types.ts for build-time validation */
    readonly props: {
        readonly title: {
            readonly type: "string";
        };
        readonly subtitle: {
            readonly type: "string";
        };
        readonly description: {
            readonly type: "string";
        };
        readonly placeholderText: {
            readonly type: "string";
        };
        readonly buttonText: {
            readonly type: "string";
        };
        readonly showPrivacyText: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly privacyText: {
            readonly type: "string";
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["centered", "split", "inline"];
        };
        readonly showImage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageUrl: {
            readonly type: "string";
        };
        readonly collectName: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly nameRequired: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly successMessage: {
            readonly type: "string";
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly inputBackground: {
            readonly type: "string";
        };
        readonly inputBorder: {
            readonly type: "string";
        };
        readonly buttonBackground: {
            readonly type: "string";
        };
        readonly buttonTextColor: {
            readonly type: "string";
        };
        readonly borderRadius: {
            readonly type: "enum";
            readonly options: readonly ["none", "sm", "md", "lg", "full"];
        };
    };
};
export type NewsletterMeta = typeof newsletterMeta;
//# sourceMappingURL=newsletter.meta.d.ts.map