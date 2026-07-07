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
    backgroundColor: { type: 'string' },
    textColor: { type: 'string' },
    inputBackground: { type: 'string' },
    inputBorder: { type: 'string' },
    buttonBackground: { type: 'string' },
    buttonTextColor: { type: 'string' },
    borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'full'] },
  },
} as const;

export type NewsletterMeta = typeof newsletterMeta;
