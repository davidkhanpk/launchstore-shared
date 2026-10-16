/**
 * Newsletter — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 */
export const newsletterMeta = {
    /** Must match the Puck `label` field */
    name: 'Newsletter',
    /** Display name in the AI prompt */
    label: 'Newsletter',
    /** Short description — surfaced in Tier 3 catalog */
    description: 'A newsletter signup form with email and optional name fields. Renders the form shell only — actual subscription wiring is platform-controlled (Mailchimp / Klaviyo / etc.). Three layouts: centered, split with image, inline.',
    /** Category for grouping in the AI prompt */
    category: 'homepage',
    /** User-intent keywords the AI can match against */
    intent: ['subscribe', 'capture-email', 'newsletter-signup', 'lead-generation', 'mailing-list'],
    /** Visual role on the page */
    visualRole: 'mid-page',
    /** Does the component need data fetched at render time? */
    dataDeps: [],
    /** Prop names that contain user-facing copy */
    copyFields: ['title', 'subtitle', 'description', 'privacyText', 'buttonText', 'placeholderText'],
    /** Prop names that accept theme tokens */
    themeable: ['backgroundColor', 'textColor', 'inputBackground', 'inputBorder', 'buttonBackground', 'buttonTextColor'],
    /** Accessibility risk level */
    a11yRisk: 'low',
    /** Notes about a11y risk: form has built-in label placeholders + required email attribute */
    a11yNotes: 'Form has semantic <input type="email" required> with placeholder text. Privacy text is shown when toggled. Layout shifts: split + inline layouts need viewport testing.',
    /** How the component behaves on small viewports */
    mobileBehavior: 'responsive',
    /** Tags for discover_components semantic search */
    searchTags: ['newsletter', 'subscribe', 'email-capture', 'signup', 'lead-generation', 'mailing-list', 'form'],
    /** Prop schema — mirrors newsletter.types.ts for build-time validation */
    props: {
        title: { type: 'string' },
        subtitle: { type: 'string' },
        description: { type: 'string' },
        placeholderText: { type: 'string' },
        buttonText: { type: 'string' },
        showPrivacyText: { type: 'boolean', required: true },
        privacyText: { type: 'string' },
        layout: { type: 'enum', options: ['centered', 'split', 'inline'] },
        showImage: { type: 'boolean', required: true },
        imageUrl: { type: 'string' },
        collectName: { type: 'boolean', required: true },
        nameRequired: { type: 'boolean', required: true },
        successMessage: { type: 'string' },
        backgroundColor: { type: 'color', description: 'Section background. Token path (e.g. "brand.primary") or hex. PRECEDENCE: backgroundImage > gradientFrom/To > backgroundScheme > backgroundColor — this only applies when backgroundScheme is empty and no image/gradient is set. If the user asks for a background color and a scheme is active, also set backgroundScheme to "".' },
        textColor: { type: 'color', description: 'Text color over the background. Token path or hex. Only applies when backgroundScheme is empty (schemes control their own text color).' },
        inputBackground: { type: 'color', description: 'Email input field background. Token path (e.g. "ui.surface") or hex.' },
        inputBorder: { type: 'color', description: 'Email input border color. Token path (e.g. "ui.border") or hex.' },
        buttonBackground: { type: 'color', description: 'Subscribe button background. Token path (e.g. "button.primary.background") or hex.' },
        buttonTextColor: { type: 'color', description: 'Subscribe button label color. Token path or hex.' },
        borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'full'] },
        // Shared section control model (SectionShell) — precedence: image > gradient > scheme > color
        backgroundScheme: { type: 'enum', options: ['', 'light', 'dark', 'accent', 'subtle'], description: 'Theme background scheme. Takes precedence over backgroundColor — set to "" to use a custom backgroundColor. Schemes also control text color (textColor is ignored while a scheme is active).' },
        backgroundImage: { type: 'string', description: 'Optional background image URL — overrides all other background settings.' },
        overlayColor: { type: 'color', description: 'Overlay tint over a background image (with overlayOpacity).' },
        overlayOpacity: { type: 'string', description: 'Overlay strength, e.g. "50" (percent) — used with backgroundImage.' },
        gradientFrom: { type: 'color', description: 'Gradient start color — when set (with gradientTo), overrides scheme/color backgrounds.' },
        gradientTo: { type: 'color', description: 'Gradient end color.' },
        density: { type: 'string', description: 'Section padding: sm | md | lg | xl.' },
        contentWidth: { type: 'string', description: 'Content container width: sm | md | lg | full.' },
        contentAlign: { type: 'string', description: 'Content alignment: left | center | right.' },
        minHeight: { type: 'string', description: 'Minimum section height.' },
    },
};
//# sourceMappingURL=newsletter.meta.js.map