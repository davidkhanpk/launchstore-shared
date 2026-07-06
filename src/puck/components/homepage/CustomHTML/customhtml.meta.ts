/**
 * CustomHTML — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 *
 * Shape is validated by the build script — failed validations fail the CI
 * build.
 */

export const customHtmlMeta = {
  /** Must match the Puck `label` field (the type used in puck data) */
  name: 'CustomHTML',
  /** Display name in the AI prompt */
  label: 'Custom HTML',
  /** Short description — surfaced in Tier 3 catalog */
  description: 'A freeform HTML/CSS section. Use for one-off layouts the rest of the catalog does not cover. Best-effort HTML sanitization is built in.',
  /** Category for grouping in the AI prompt */
  category: 'homepage',
  /** User-intent keywords the AI can match against */
  intent: ['custom', 'embed', 'one-off', 'experimental', 'layout'],
  /** Visual role on the page */
  visualRole: 'freeform',
  /** Does the component need data fetched at render time? */
  dataDeps: [],
  /** Prop names that contain user-facing copy — useful for the LLM to know which fields to edit for "change the text" prompts */
  copyFields: ['htmlContent', 'cssContent'],
  /** Prop names that accept theme tokens (CSS vars, hex, or design-system tokens) */
  themeable: ['backgroundColor'],
  /** Accessibility risk level for AI-generated variants */
  a11yRisk: 'medium',
  /** Notes about a11y risk: user-supplied HTML can break semantic structure. Sanitizer strips scripts but does not enforce ARIA. */
  a11yNotes: 'User-supplied HTML/CSS can bypass design system a11y rules. Prefer purpose-built components over this escape hatch unless the layout truly is bespoke.',
  /** How the component behaves on small viewports */
  mobileBehavior: 'responsive',
  /** Tags for the discover_components semantic search (E2 T-006) */
  searchTags: ['custom', 'html', 'css', 'embed', 'one-off', 'escape-hatch', 'fallback'],

  /**
   * Prop schema — mirrored from customhtml.types.ts but in a serializable form
   * so the build script can validate it without importing the React component.
   */
  props: {
    htmlContent: { type: 'string', description: 'Free-form HTML content. Sanitized by default.' },
    cssContent: { type: 'string', description: 'Custom CSS injected via <style> tag.' },
    useContainer: { type: 'boolean', required: true },
    maxWidth: { type: 'enum', options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'] },
    paddingTop: { type: 'number', min: 0, max: 200 },
    paddingBottom: { type: 'number', min: 0, max: 200 },
    paddingLeft: { type: 'number', min: 0, max: 200 },
    paddingRight: { type: 'number', min: 0, max: 200 },
    backgroundColor: { type: 'string' },
    backgroundImage: { type: 'string' },
    sanitizeHTML: { type: 'boolean', required: true },
  },
} as const;

export type CustomHtmlMeta = typeof customHtmlMeta;
