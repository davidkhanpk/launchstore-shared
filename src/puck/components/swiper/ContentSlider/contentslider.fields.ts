import type { Field } from '@puckeditor/core';
import type { ContentSliderProps } from './contentslider.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const contentSliderFields = {
  slides: {
    type: 'array', label: 'Slides',
    arrayFields: {
      title: { type: 'text', label: 'Title' },
      description: { type: 'textarea', label: 'Description' },
      backgroundImage: { type: 'text', label: 'Background Image URL' },
      backgroundColor: { type: 'text', label: 'Background Color (hex)' },
      textColor: { type: 'text', label: 'Text Color (hex)' },
      buttonText: { type: 'text', label: 'Button Text' },
      buttonLink: { type: 'text', label: 'Button Link' },
      buttonColor: { type: 'text', label: 'Button Color (hex)' },
      htmlContent: { type: 'textarea', label: 'Custom HTML (optional)' },
    },
    defaultItemProps: {
      title: 'New Slide', description: 'Add your description here',
      backgroundImage: '', backgroundColor: '#1e293b', textColor: '#ffffff',
      buttonText: 'Learn More', buttonLink: '#', buttonColor: '#3b82f6', htmlContent: '',
    },
  },
  slideHeight: {
    type: 'select', label: 'Slide Height',
    options: [
      { label: 'Small (400px)', value: 'sm' }, { label: 'Medium (500px)', value: 'md' },
      { label: 'Large (600px)', value: 'lg' }, { label: 'Extra Large (700px)', value: 'xl' },
      { label: 'Full Screen', value: 'full' },
    ],
  },
  contentWidth: { type: 'select', label: 'Content Width', options: [{ label: 'Full Width', value: 'full' }, { label: 'Contained', value: 'contained' }] },
  contentPosition: { type: 'select', label: 'Content Position', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  effect: {
    type: 'select', label: 'Transition Effect',
    options: [
      { label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' }, { label: 'Cube', value: 'cube' },
      { label: 'Coverflow', value: 'coverflow' }, { label: 'Flip', value: 'flip' },
    ],
  },
  showNavigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
  navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
  navigationPosition: { type: 'select', label: 'Navigation Position', options: [{ label: 'Center', value: 'center' }, { label: 'Bottom', value: 'bottom' }] },
  showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
  paginationType: {
    type: 'select', label: 'Pagination Type',
    options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction (1/5)', value: 'fraction' }, { label: 'Progress Bar', value: 'progressbar' }],
  },
  paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
  enableAutoplay: { type: 'radio', label: 'Enable Autoplay', options: RADIO_YES_NO },
  autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
  pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
  loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
  speed: { type: 'number', label: 'Transition Speed (ms)' },
  enableOverlay: { type: 'radio', label: 'Enable Image Overlay', options: RADIO_YES_NO },
  overlayColor: { type: 'text', label: 'Overlay Color (hex)' },
  overlayOpacity: { type: 'number', label: 'Overlay Opacity (%)' },
} as Record<string, Field>;
