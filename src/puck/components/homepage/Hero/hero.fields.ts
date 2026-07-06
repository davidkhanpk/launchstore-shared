/**
 * Puck field config for the Hero component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (MediaPickerField, ColorField) — see `components/page-builder/config.ts`
 * in the editor project.
 */
import type { Field } from '@puckeditor/core';
import type { HeroSectionProps } from './hero.types';

export const heroFields: Record<Exclude<keyof HeroSectionProps, 'id'>, Field> = {
  // id is assigned by Puck and round-trips through props automatically.
  title: { type: 'text', label: 'Title' },
  subtitle: { type: 'text', label: 'Subtitle' },
  description: { type: 'textarea', label: 'Description' },

  showPrimaryButton: {
    type: 'radio',
    label: 'Show Primary Button',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  primaryButtonText: { type: 'text', label: 'Primary Button Text' },
  primaryButtonLink: { type: 'text', label: 'Primary Button Link' },

  showSecondaryButton: {
    type: 'radio',
    label: 'Show Secondary Button',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  secondaryButtonText: { type: 'text', label: 'Secondary Button Text' },
  secondaryButtonLink: { type: 'text', label: 'Secondary Button Link' },

  showImage: {
    type: 'radio',
    label: 'Show Image',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  imageUrl: { type: 'text', label: 'Image URL' },
  imagePosition: {
    type: 'select',
    label: 'Image Position',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
      { label: 'Background', value: 'background' },
    ],
  },
  imageAlt: { type: 'text', label: 'Image Alt Text' },

  height: {
    type: 'select',
    label: 'Hero Height',
    options: [
      { label: 'Small (400px)', value: 'sm' },
      { label: 'Medium (500px)', value: 'md' },
      { label: 'Large (600px)', value: 'lg' },
      { label: 'Extra Large (700px)', value: 'xl' },
      { label: 'Full Screen', value: 'full' },
    ],
  },
  contentAlignment: {
    type: 'select',
    label: 'Horizontal Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  verticalAlignment: {
    type: 'select',
    label: 'Vertical Alignment',
    options: [
      { label: 'Top', value: 'top' },
      { label: 'Center', value: 'center' },
      { label: 'Bottom', value: 'bottom' },
    ],
  },
  textColor: { type: 'text', label: 'Text Color (hex)' },
  overlayOpacity: {
    type: 'number',
    label: 'Overlay Opacity (0-100)',
    min: 0,
    max: 100,
  },

  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  backgroundGradient: {
    type: 'radio',
    label: 'Use Gradient Background',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  gradientFrom: { type: 'text', label: 'Gradient From (hex)' },
  gradientTo: { type: 'text', label: 'Gradient To (hex)' },
};
