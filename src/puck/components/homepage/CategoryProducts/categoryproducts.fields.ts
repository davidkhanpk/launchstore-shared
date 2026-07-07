import type { Field } from '@puckeditor/core';
import type { CategoryProductsProps } from './categoryproducts.types';

export const categoryProductsFields = {
  sectionTitle: { type: 'text', label: 'Section Title' },
  sectionSubtitle: { type: 'textarea', label: 'Section Subtitle' },
  showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  categoryId: { type: 'text', label: 'Category ID' },
  categoryName: { type: 'text', label: 'Category Name (for display)' },
  displayMode: { type: 'select', label: 'Display Mode', options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel (Swiper)', value: 'carousel' }] },
  productsPerRow: { type: 'number', label: 'Products Per Row (Grid)', min: 2, max: 6 },
  maxProducts: { type: 'number', label: 'Maximum Products', min: 1, max: 50 },
  slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)', min: 1, max: 6 },
  slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)', min: 1, max: 4 },
  slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)', min: 1, max: 2 },
  spaceBetween: { type: 'number', label: 'Space Between Slides (px)', min: 0, max: 100 },
  autoplay: { type: 'radio', label: 'Auto-play Carousel', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  autoplayDelay: { type: 'number', label: 'Auto-play Delay (ms)', min: 1000, max: 10000 },
  loop: { type: 'radio', label: 'Loop Carousel', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  navigation: { type: 'radio', label: 'Show Navigation Arrows', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  pagination: { type: 'radio', label: 'Show Pagination Dots', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  imageAspectRatio: { type: 'select', label: 'Image Aspect Ratio', options: [
    { label: 'Square (1:1)', value: 'square' },
    { label: 'Portrait (3:4)', value: 'portrait' },
    { label: 'Landscape (4:3)', value: 'landscape' },
  ]},
  showPrice: { type: 'radio', label: 'Show Price', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showRating: { type: 'radio', label: 'Show Rating', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showBadges: { type: 'radio', label: 'Show Badges (New/Sale)', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showViewAllButton: { type: 'radio', label: 'Show View All Button', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  viewAllButtonText: { type: 'text', label: 'View All Button Text' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  textColor: { type: 'text', label: 'Text Color' },
  cardStyle: { type: 'select', label: 'Card Style', options: [
    { label: 'Minimal', value: 'minimal' }, { label: 'Bordered', value: 'bordered' }, { label: 'Shadow', value: 'shadow' },
  ]},
  borderRadius: { type: 'select', label: 'Border Radius', options: [
    { label: 'None', value: 'none' },
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]},
  buttonColor: { type: 'text', label: 'Button Color' },
  buttonTextColor: { type: 'text', label: 'Button Text Color' },
  buttonRadius: { type: 'select', label: 'Button Radius', options: [
    { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'None', value: 'none' },
  ]},
} as Record<string, Field>;
