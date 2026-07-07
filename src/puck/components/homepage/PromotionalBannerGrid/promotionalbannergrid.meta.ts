/**
 * PromotionalBannerGrid — AI capability metadata.
 *
 * Consumed by scripts/build-registry.ts which generates dist/registry.json
 * for the backend's AI prompt.
 */

export const promotionalBannerGridMeta = {
  /** Must match the Puck `label` field */
  name: 'PromotionalBannerGrid',
  /** Display name in the AI prompt */
  label: 'Promotional Banner Grid',
  /** Short description */
  description: 'A grid of promotional banners (2/3 columns or 1-2/2-1 split) with background images, overlay opacity, text positioning, and CTA links. Pls use "Announce" or "Promote" intent keywords.',
  category: 'homepage',
  intent: ['promote', 'showcase', 'campaign', 'collection', 'featured', 'cta'],
  visualRole: 'mid-page',
  dataDeps: [],
  copyFields: ['title', 'subtitle', 'banners[].title', 'banners[].subtitle', 'banners[].ctaText'],
  themeable: ['banners[].textColor'],
  a11yRisk: 'low',
  a11yNotes: 'Banner CTAs are real <a href> elements so screen readers + tab navigation work. Image alt text is not exposed in the field set — follow-up epic should add it.',
  mobileBehavior: 'responsive',
  searchTags: ['banner', 'grid', 'campaign', 'collection', 'promotion', 'cta', 'image-overlay'],

  /** Prop schema — mirrors .types.ts */
  props: {
    title: { type: 'string' },
    subtitle: { type: 'string' },
    layout: { type: 'enum', options: ['2-column', '3-column', '1-2-split', '2-1-split'] },
    spacing: { type: 'enum', options: ['none', 'sm', 'md', 'lg'] },
    banners: { type: 'array' },
    borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg'] },
    hoverEffect: { type: 'enum', options: ['zoom', 'overlay', 'lift', 'none'] },
    minHeight: { type: 'string' },
  },
} as const;

export type PromotionalBannerGridMeta = typeof promotionalBannerGridMeta;
