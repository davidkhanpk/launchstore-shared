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
export const heroMeta = {
    /** Must match the Puck component name (the `type` field in Puck data) */
    name: 'HeroSection',
    /** Display name in the AI prompt */
    label: 'Hero Section',
    /** Short description — surfaced in Tier 3 catalog */
    description: 'A large above-the-fold banner with title, subtitle, optional image, and up to two CTAs.',
    /** Category for grouping in the AI prompt */
    category: 'homepage',
    /** User-intent keywords the AI can match against */
    intent: ['announce', 'showcase', 'promote', 'introduce'],
    /** Visual role on the page */
    visualRole: 'above-fold',
    /** Does the component need data fetched at render time? */
    dataDeps: [],
    /** Prop names that contain user-facing copy — useful for the LLM to know which fields to edit for "change the text" prompts */
    copyFields: ['title', 'subtitle', 'description', 'primaryButtonText', 'secondaryButtonText'],
    /** Prop names that accept theme tokens (CSS vars, hex, or design-system tokens) */
    themeable: ['backgroundColor', 'textColor', 'gradientFrom', 'gradientTo'],
    /** Accessibility risk level for AI-generated variants */
    a11yRisk: 'low',
    /** How the component behaves on small viewports */
    mobileBehavior: 'responsive',
    /** Tags for the discover_components semantic search (E2 T-006) */
    searchTags: ['banner', 'header', 'splash', 'landing', 'announcement', 'hero'],
    /**
     * Prop schema — mirrored from hero.types.ts but in a serializable form
     * so the build script can validate it without importing the React component.
     */
    props: {
        title: { type: 'string', required: true, description: 'Headline text' },
        subtitle: { type: 'string', description: 'Small uppercase text above the title' },
        description: { type: 'string', description: 'Body copy below the title' },
        showPrimaryButton: { type: 'boolean', required: true },
        primaryButtonText: { type: 'string' },
        primaryButtonLink: { type: 'string' },
        showSecondaryButton: { type: 'boolean', required: true },
        secondaryButtonText: { type: 'string' },
        secondaryButtonLink: { type: 'string' },
        showImage: { type: 'boolean', required: true },
        imageUrl: { type: 'string' },
        imagePosition: { type: 'enum', options: ['left', 'right', 'background'] },
        imageAlt: { type: 'string' },
        height: { type: 'enum', options: ['sm', 'md', 'lg', 'xl', 'full'] },
        contentAlignment: { type: 'enum', options: ['left', 'center', 'right'] },
        verticalAlignment: { type: 'enum', options: ['top', 'center', 'bottom'] },
        textColor: { type: 'string' },
        overlayOpacity: { type: 'number', min: 0, max: 100 },
        backgroundColor: { type: 'string' },
        backgroundGradient: { type: 'boolean', required: true },
        gradientFrom: { type: 'string' },
        gradientTo: { type: 'string' },
    },
};
//# sourceMappingURL=hero.meta.js.map