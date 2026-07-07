import type { Field } from '@puckeditor/core';
import type { ImageProps } from './image.types';

export const imageFields = {
  // src: text input accepts URL or media-library URL. Frontend wraps with MediaPickerField.
  src: { type: 'text', label: 'Image URL' },
  alt: { type: 'text', label: 'Alt Text (for accessibility)' },
  aspectRatio: {
    type: 'select', label: 'Aspect Ratio',
    options: [
      { label: 'Auto (Original)', value: 'auto' },
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Video (16:9)', value: 'video' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
    ],
  },
  objectFit: {
    type: 'select', label: 'Object Fit',
    options: [
      { label: 'Contain', value: 'contain' },
      { label: 'Cover', value: 'cover' },
      { label: 'Fill', value: 'fill' },
      { label: 'None', value: 'none' },
    ],
  },
  width: {
    type: 'select', label: 'Width',
    options: [
      { label: 'Auto', value: 'auto' },
      { label: 'Full', value: 'full' },
      { label: 'Custom', value: 'custom' },
    ],
  },
  customWidth: { type: 'text', label: 'Custom Width (e.g., 500px, 80%)' },
  showCaption: {
    type: 'radio', label: 'Show Caption',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  caption: { type: 'textarea', label: 'Caption Text' },
  captionPosition: {
    type: 'select', label: 'Caption Position',
    options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }],
  },
  captionAlign: {
    type: 'select', label: 'Caption Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  linkUrl: { type: 'text', label: 'Link URL (optional)' },
  openInNewTab: {
    type: 'radio', label: 'Open in New Tab',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  borderRadius: {
    type: 'select', label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
      { label: '2XL', value: '2xl' },
      { label: 'Full (Circle)', value: 'full' },
    ],
  },
  shadow: {
    type: 'select', label: 'Shadow',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
      { label: '2XL', value: '2xl' },
    ],
  },
  showBorder: {
    type: 'radio', label: 'Show Border',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  // Border color: text input accepts hex OR token. Frontend consumer wraps with ColorField.
  borderColor: { type: 'text', label: 'Border Color (hex or theme token)' },
  borderWidth: { type: 'number', label: 'Border Width (px)', min: 1, max: 10 },
  hoverEffect: {
    type: 'select', label: 'Hover Effect',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Zoom', value: 'zoom' },
      { label: 'Brightness', value: 'brightness' },
      { label: 'Grayscale to Color', value: 'grayscale' },
      { label: 'Lift (Shadow)', value: 'lift' },
    ],
  },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  marginTop: { type: 'number', label: 'Margin Top (px)', min: 0, max: 200 },
  marginBottom: { type: 'number', label: 'Margin Bottom (px)', min: 0, max: 200 },
} as Record<string, Field>;
