/**
 * Testimonials — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt (powers "what can you build").
 *
 * Shape is validated by the build script — failed validations fail the CI
 * build.
 */

export const testimonialsMeta = {
  /** Must match the Puck `label` field (the type used in puck data) */
  name: 'Testimonials',
  /** Display name in the AI prompt */
  label: 'Testimonials',
  /** Short description — surfaced in Tier 3 catalog */
  description: 'A grid or carousel of customer reviews with avatar, name, role, rating, and date. Currently uses hardcoded mock data — wire to a reviews collection when Medusa product reviews land.',
  /** Category for grouping in the AI prompt */
  category: 'homepage',
  /** User-intent keywords the AI can match against */
  intent: ['social-proof', 'reviews', 'testimonials', 'quotes', 'trust', 'ratings'],
  /** Visual role on the page */
  visualRole: 'mid-page',
  /** Does the component need data fetched at render time? */
  dataDeps: [],
  /** KNOWN LIMITATION: real testimonial data isn't yet wired — see Testimonials.tsx. */
  dataDepsNote: 'Hardcodes 4 mock testimonials and slices to maxTestimonials. Will be replaced with a Medusa reviews collection in a follow-up epic.',
  /** Prop names that contain user-facing copy */
  copyFields: ['sectionTitle', 'sectionSubtitle'],
  /** Prop names that accept theme tokens */
  themeable: ['backgroundColor', 'textColor', 'cardBackground', 'accentColor'],
  /** Accessibility risk level for AI-generated variants */
  a11yRisk: 'low',
  /** How the component behaves on small viewports */
  mobileBehavior: 'responsive',
  /** Tags for the discover_components semantic search (E2 T-006) */
  searchTags: ['testimonials', 'reviews', 'social-proof', 'quotes', 'ratings', 'carousel', 'trust', 'mid-page'],

  /** Prop schema — mirrors testimonials.types.ts for build-time validation */
  props: {
    sectionTitle: { type: 'string', description: 'Section heading' },
    sectionSubtitle: { type: 'string', description: 'Section subheading' },
    showTitle: { type: 'boolean', required: true },
    displayMode: { type: 'enum', options: ['grid', 'carousel'] },
    layout: { type: 'enum', options: ['card', 'quote', 'minimal'] },
    columns: { type: 'number', min: 1, max: 4 },
    maxTestimonials: { type: 'number', min: 1, max: 20 },
    slidesPerView: { type: 'number', min: 1, max: 3 },
    slidesPerViewTablet: { type: 'number', min: 1, max: 2 },
    slidesPerViewMobile: { type: 'number', min: 1, max: 1 },
    spaceBetween: { type: 'number', min: 0, max: 100 },
    autoplay: { type: 'boolean', required: true },
    autoplayDelay: { type: 'number', min: 2000, max: 10000 },
    loop: { type: 'boolean', required: true },
    navigation: { type: 'boolean', required: true },
    pagination: { type: 'boolean', required: true },
    effect: { type: 'enum', options: ['slide', 'fade'] },
    showAvatar: { type: 'boolean', required: true },
    showName: { type: 'boolean', required: true },
    showRole: { type: 'boolean', required: true },
    showRating: { type: 'boolean', required: true },
    showDate: { type: 'boolean', required: true },
    backgroundColor: { type: 'string' },
    textColor: { type: 'string' },
    cardBackground: { type: 'string' },
    accentColor: { type: 'string' },
    borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'] },
  },
} as const;

export type TestimonialsMeta = typeof testimonialsMeta;
