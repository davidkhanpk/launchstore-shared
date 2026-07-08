/**
 * CustomHTML — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 *
 * Shape is validated by the build script — failed validations fail the CI
 * build.
 */
export declare const customHtmlMeta: {
    /** Must match the Puck `label` field (the type used in puck data) */
    readonly name: "CustomHTML";
    /** Display name in the AI prompt */
    readonly label: "Custom HTML";
    /** Short description — surfaced in Tier 3 catalog */
    readonly description: "A freeform HTML/CSS section. Use for one-off layouts the rest of the catalog does not cover. Best-effort HTML sanitization is built in.";
    /** Category for grouping in the AI prompt */
    readonly category: "homepage";
    /** User-intent keywords the AI can match against */
    readonly intent: readonly ["custom", "embed", "one-off", "experimental", "layout"];
    /** Visual role on the page */
    readonly visualRole: "freeform";
    /** Does the component need data fetched at render time? */
    readonly dataDeps: readonly [];
    /** Prop names that contain user-facing copy — useful for the LLM to know which fields to edit for "change the text" prompts */
    readonly copyFields: readonly ["htmlContent", "cssContent"];
    /** Prop names that accept theme tokens (CSS vars, hex, or design-system tokens) */
    readonly themeable: readonly ["backgroundColor"];
    /** Accessibility risk level for AI-generated variants */
    readonly a11yRisk: "medium";
    /** Notes about a11y risk: user-supplied HTML can break semantic structure. Sanitizer strips scripts but does not enforce ARIA. */
    readonly a11yNotes: "User-supplied HTML/CSS can bypass design system a11y rules. Prefer purpose-built components over this escape hatch unless the layout truly is bespoke.";
    /** How the component behaves on small viewports */
    readonly mobileBehavior: "responsive";
    /** Tags for the discover_components semantic search (E2 T-006) */
    readonly searchTags: readonly ["custom", "html", "css", "embed", "one-off", "escape-hatch", "fallback"];
    /**
     * Prop schema — mirrored from customhtml.types.ts but in a serializable form
     * so the build script can validate it without importing the React component.
     */
    readonly props: {
        readonly htmlContent: {
            readonly type: "string";
            readonly description: "Free-form HTML content. Sanitized by default.";
        };
        readonly cssContent: {
            readonly type: "string";
            readonly description: "Custom CSS injected via <style> tag.";
        };
        readonly useContainer: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxWidth: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "2xl", "full"];
        };
        readonly paddingTop: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 200;
        };
        readonly paddingBottom: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 200;
        };
        readonly paddingLeft: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 200;
        };
        readonly paddingRight: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 200;
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly backgroundImage: {
            readonly type: "string";
        };
        readonly sanitizeHTML: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type CustomHtmlMeta = typeof customHtmlMeta;
//# sourceMappingURL=customhtml.meta.d.ts.map