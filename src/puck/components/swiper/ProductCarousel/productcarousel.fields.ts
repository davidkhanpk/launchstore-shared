import type { Field } from '@puckeditor/core';
import type { ProductCarouselProps } from './productcarousel.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const productCarouselFields = {
  sectionTitle: { type: 'text', label: 'Section Title' },
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  productSource: {
    type: 'select', label: 'Product Source',
    options: [
      { label: 'Manual Selection', value: 'manual' },
      { label: 'From Collection', value: 'collection' },
      { label: 'From Category', value: 'category' },
      { label: 'Featured Products', value: 'featured' },
      { label: 'Best Sellers', value: 'bestsellers' },
    ],
  },
  productIds: { type: 'textarea', label: 'Product IDs (comma-separated)' },
  collectionId: { type: 'text', label: 'Collection ID (optional on product pages)' },
  categoryId: { type: 'text', label: 'Category ID (optional on product pages)' },
  maxProducts: { type: 'number', label: 'Maximum Products' },
  slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)' },
  slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)' },
  slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)' },
  spaceBetween: { type: 'number', label: 'Space Between Slides (px)' },
  effect: {
    type: 'select', label: 'Transition Effect',
    options: [
      { label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' },
      { label: 'Cube', value: 'cube' }, { label: 'Coverflow', value: 'coverflow' }, { label: 'Flip', value: 'flip' },
    ],
  },
  speed: { type: 'number', label: 'Transition Speed (ms)' },
  navigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
  navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
  pagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
  paginationType: {
    type: 'select', label: 'Pagination Type',
    options: [
      { label: 'Bullets', value: 'bullets' },
      { label: 'Fraction (1/10)', value: 'fraction' },
      { label: 'Progress Bar', value: 'progressbar' },
    ],
  },
  paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
  autoplay: { type: 'radio', label: 'Autoplay', options: RADIO_YES_NO },
  autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
  pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
  loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
  centeredSlides: { type: 'radio', label: 'Center Slides', options: RADIO_YES_NO },
  freeMode: { type: 'radio', label: 'Free Mode (continuous sliding)', options: RADIO_YES_NO },
  showProductImage: { type: 'radio', label: 'Show Product Image', options: RADIO_YES_NO },
  showProductTitle: { type: 'radio', label: 'Show Product Title', options: RADIO_YES_NO },
  showProductPrice: { type: 'radio', label: 'Show Product Price', options: RADIO_YES_NO },
  showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: RADIO_YES_NO },
  imageAspectRatio: {
    type: 'select', label: 'Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
    ],
  },
  backgroundColor: { type: 'text', label: 'Background Color (hex)' },
  cardBackground: { type: 'text', label: 'Card Background (hex)' },
  cardBorderRadius: {
    type: 'select', label: 'Card Border Radius',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
    ],
  },
  cardShadow: { type: 'radio', label: 'Card Shadow', options: RADIO_YES_NO },
} as Record<string, Field>;
