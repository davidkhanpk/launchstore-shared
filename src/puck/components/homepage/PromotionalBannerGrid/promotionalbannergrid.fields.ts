/**
 * Puck field config for the PromotionalBannerGrid component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends color/image fields with custom
 * widgets (ColorField, MediaPickerField).
 */
import type { Field } from '@puckeditor/core';
import type { PromotionalBannerGridProps } from './promotionalbannergrid.types';

/**
 * Puck's array fields have a different shape — wrap with type assertion.
 * The Puck type for arrayFields is intentionally loose; we declare the
 * inner shape explicitly here.
 */
const BANNER_ARRAY_FIELDS = {
  title: { type: 'text', label: 'Title' },
  subtitle: { type: 'text', label: 'Subtitle' },
  imageUrl: { type: 'text', label: 'Image URL' },
  ctaText: { type: 'text', label: 'CTA Text' },
  ctaLink: { type: 'text', label: 'CTA Link' },
  overlayOpacity: { type: 'number', label: 'Overlay Opacity', min: 0, max: 100 },
  textColor: { type: 'text', label: 'Text Color' },
  textPosition: {
    type: 'select',
    label: 'Text Position',
    options: [
      { label: 'Top Left', value: 'top-left' },
      { label: 'Top Center', value: 'top-center' },
      { label: 'Top Right', value: 'top-right' },
      { label: 'Center', value: 'center' },
      { label: 'Bottom Left', value: 'bottom-left' },
      { label: 'Bottom Center', value: 'bottom-center' },
      { label: 'Bottom Right', value: 'bottom-right' },
    ],
  },
} as any; // Puck's arrayFields types don't match our strict shape

export const promotionalBannerGridFields = {
  title: { type: 'text', label: 'Title' },
  subtitle: { type: 'text', label: 'Subtitle' },
  layout: {
    type: 'select',
    label: 'Layout',
    options: [
      { label: '2 Column', value: '2-column' },
      { label: '3 Column', value: '3-column' },
      { label: '1-2 Split', value: '1-2-split' },
      { label: '2-1 Split', value: '2-1-split' },
    ],
  },
  spacing: {
    type: 'select',
    label: 'Spacing',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  banners: {
    type: 'array',
    label: 'Banners',
    arrayFields: BANNER_ARRAY_FIELDS,
  },
  borderRadius: {
    type: 'select',
    label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  hoverEffect: {
    type: 'select',
    label: 'Hover Effect',
    options: [
      { label: 'Zoom', value: 'zoom' },
      { label: 'Overlay', value: 'overlay' },
      { label: 'Lift', value: 'lift' },
      { label: 'None', value: 'none' },
    ],
  },
  minHeight: { type: 'text', label: 'Min Height (e.g. 300px)' },
} satisfies Record<Exclude<keyof PromotionalBannerGridProps, 'id'>, Field>;
