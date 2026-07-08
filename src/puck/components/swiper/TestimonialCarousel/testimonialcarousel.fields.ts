import type { Field } from '@puckeditor/core';
import type { TestimonialCarouselProps } from './testimonialcarousel.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const RADIUS_OPTS = (): { label: string; value: string }[] => [
  { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' }, { label: '2XL', value: '2xl' },
];
const SHADOW_OPTS = (): { label: string; value: string }[] => [
  { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
];

export const testimonialCarouselFields = {
  layout: {
    type: 'select', label: 'Layout Style',
    options: [{ label: 'Card', value: 'card' }, { label: 'Quote', value: 'quote' }, { label: 'Minimal', value: 'minimal' }],
  },
  cardsPerView: { type: 'number', label: 'Cards Per View (Desktop)' },
  cardsPerViewTablet: { type: 'number', label: 'Cards Per View (Tablet)' },
  cardsPerViewMobile: { type: 'number', label: 'Cards Per View (Mobile)' },
  effect: { type: 'select', label: 'Transition Effect', options: [{ label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' }] },
  showNavigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
  navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
  showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
  paginationType: { type: 'select', label: 'Pagination Type', options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction', value: 'fraction' }] },
  paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
  enableAutoplay: { type: 'radio', label: 'Enable Autoplay', options: RADIO_YES_NO },
  autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
  pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
  loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
  spaceBetween: { type: 'number', label: 'Space Between Cards (px)' },
  centeredSlides: { type: 'radio', label: 'Centered Slides', options: RADIO_YES_NO },
  showAvatar: { type: 'radio', label: 'Show Avatar', options: RADIO_YES_NO },
  showRating: { type: 'radio', label: 'Show Rating', options: RADIO_YES_NO },
  showRole: { type: 'radio', label: 'Show Role/Title', options: RADIO_YES_NO },
  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  cardBackground: { type: 'text', label: 'Card Background Color (hex)' },
  textColor: { type: 'text', label: 'Text Color (hex)' },
  accentColor: { type: 'text', label: 'Accent Color (ratings/quotes)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTS() },
  cardShadow: { type: 'select', label: 'Card Shadow', options: SHADOW_OPTS() },
  paddingY: { type: 'number', label: 'Padding Top/Bottom (px)' },
  paddingX: { type: 'number', label: 'Padding Left/Right (px)' },
} as Record<string, Field>;
