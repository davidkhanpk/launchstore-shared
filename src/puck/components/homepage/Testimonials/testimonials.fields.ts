/**
 * Puck field config for the Testimonials component.
 *
 * This is the *base* config used by the renderer (launchstore-storefront).
 * The editor (launchstore-frontend) extends these fields with custom widgets
 * (ColorField for the color inputs) — see the wrapper file in
 * components/page-builder/components/homepage/Testimonials.tsx.
 */
import type { Field } from '@puckeditor/core';
import type { TestimonialsProps } from './testimonials.types';

export const testimonialsFields: Record<Exclude<keyof TestimonialsProps, 'id'>, Field> = {
  // Section Header
  sectionTitle: { type: 'text', label: 'Section Title' },
  sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
  showTitle: {
    type: 'radio',
    label: 'Show Section Title',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },

  // Display Mode
  displayMode: {
    type: 'select',
    label: 'Display Mode',
    options: [
      { label: 'Grid', value: 'grid' },
      { label: 'Carousel (Swiper)', value: 'carousel' },
    ],
  },
  layout: {
    type: 'select',
    label: 'Testimonial Layout',
    options: [
      { label: 'Card', value: 'card' },
      { label: 'Quote', value: 'quote' },
      { label: 'Minimal', value: 'minimal' },
    ],
  },

  // Grid Settings
  columns: { type: 'number', label: 'Columns (Grid)', min: 1, max: 4 },
  maxTestimonials: { type: 'number', label: 'Maximum Testimonials', min: 1, max: 20 },

  // Carousel Settings
  slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)', min: 1, max: 3 },
  slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)', min: 1, max: 2 },
  slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)', min: 1, max: 1 },
  spaceBetween: { type: 'number', label: 'Space Between Slides (px)', min: 0, max: 100 },
  autoplay: {
    type: 'radio',
    label: 'Auto-play Carousel',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  autoplayDelay: { type: 'number', label: 'Auto-play Delay (ms)', min: 2000, max: 10000 },
  loop: {
    type: 'radio',
    label: 'Loop Carousel',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  navigation: {
    type: 'radio',
    label: 'Show Navigation Arrows',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  pagination: {
    type: 'radio',
    label: 'Show Pagination',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  effect: {
    type: 'select',
    label: 'Transition Effect',
    options: [
      { label: 'Slide', value: 'slide' },
      { label: 'Fade', value: 'fade' },
    ],
  },

  // Display Options
  showAvatar: {
    type: 'radio',
    label: 'Show Avatar',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showName: {
    type: 'radio',
    label: 'Show Customer Name',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showRole: {
    type: 'radio',
    label: 'Show Role/Company',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showRating: {
    type: 'radio',
    label: 'Show Star Rating',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  showDate: {
    type: 'radio',
    label: 'Show Date',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },

  // Styling
  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  textColor: { type: 'text', label: 'Text Color (hex)' },
  cardBackground: { type: 'text', label: 'Card Background (hex)' },
  accentColor: { type: 'text', label: 'Accent Color (hex)' },
  borderRadius: {
    type: 'select',
    label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
};
