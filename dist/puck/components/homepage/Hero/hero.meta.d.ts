/**
 * Hero — AI capability metadata.
 *
 * Consumed by:
 *   - build:registry script (generates dist/registry.json for the backend AI)
 *   - E2 T-005: Tier 3 deferred catalog ("discover_components" tool)
 *   - E2 T-006: semantic search of components
 *
 * Shape is validated by Zod in scripts/build-registry.ts.
 */
export declare const heroMeta: {
    /** Must match the Puck component name (the `type` field in Puck data) */
    readonly name: "HeroSection";
    /** Display name in the AI prompt */
    readonly label: "Hero Section";
    /** Short description — surfaced in Tier 3 catalog */
    readonly description: "A large above-the-fold banner with title, subtitle, optional image, and up to two CTAs.";
    /** Category for grouping in the AI prompt */
    readonly category: "homepage";
    /** User-intent keywords the AI can match against */
    readonly intent: readonly ["announce", "showcase", "promote", "introduce"];
    /** Visual role on the page */
    readonly visualRole: "above-fold";
    /** Does the component need data fetched at render time? */
    readonly dataDeps: readonly [];
    /** Prop names that contain user-facing copy — useful for the LLM to know which fields to edit for "change the text" prompts */
    readonly copyFields: readonly ["title", "subtitle", "description", "primaryButtonText", "secondaryButtonText"];
    /** Prop names that accept theme tokens (CSS vars, hex, or design-system tokens) */
    readonly themeable: readonly ["backgroundColor", "textColor", "gradientFrom", "gradientTo"];
    /** Accessibility risk level for AI-generated variants */
    readonly a11yRisk: "low";
    /** How the component behaves on small viewports */
    readonly mobileBehavior: "responsive";
    /** Tags for the discover_components semantic search (E2 T-006) */
    readonly searchTags: readonly ["banner", "header", "splash", "landing", "announcement", "hero"];
    /**
     * Prop schema — mirrored from hero.types.ts but in a serializable form
     * so the build script can validate it without importing the React component.
     */
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Headline text";
        };
        readonly subtitle: {
            readonly type: "string";
            readonly description: "Small uppercase text above the title";
        };
        readonly description: {
            readonly type: "string";
            readonly description: "Body copy below the title";
        };
        readonly showPrimaryButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly primaryButtonText: {
            readonly type: "string";
        };
        readonly primaryButtonLink: {
            readonly type: "string";
        };
        readonly showSecondaryButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly secondaryButtonText: {
            readonly type: "string";
        };
        readonly secondaryButtonLink: {
            readonly type: "string";
        };
        readonly showImage: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly imageUrl: {
            readonly type: "string";
        };
        readonly imagePosition: {
            readonly type: "enum";
            readonly options: readonly ["left", "right", "background"];
        };
        readonly imageAlt: {
            readonly type: "string";
        };
        readonly height: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg", "xl", "full"];
        };
        readonly contentAlignment: {
            readonly type: "enum";
            readonly options: readonly ["left", "center", "right"];
        };
        readonly verticalAlignment: {
            readonly type: "enum";
            readonly options: readonly ["top", "center", "bottom"];
        };
        readonly textColor: {
            readonly type: "string";
        };
        readonly overlayOpacity: {
            readonly type: "number";
            readonly min: 0;
            readonly max: 100;
        };
        readonly backgroundColor: {
            readonly type: "string";
        };
        readonly backgroundGradient: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly gradientFrom: {
            readonly type: "string";
        };
        readonly gradientTo: {
            readonly type: "string";
        };
    };
};
export type HeroMeta = typeof heroMeta;
//# sourceMappingURL=hero.meta.d.ts.map