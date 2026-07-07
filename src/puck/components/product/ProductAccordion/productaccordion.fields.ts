import type { Field } from '@puckeditor/core';
import type { ProductAccordionProps } from './productaccordion.types';

export const productAccordionFields = {
  sections: {
    type: 'array', label: 'Accordion Sections',
    arrayFields: {
      id: { type: 'text', label: 'ID (unique)' },
      title: { type: 'text', label: 'Section Title' },
      contentType: {
        type: 'select', label: 'Content Type',
        options: [
          { label: 'Product Description', value: 'description' },
          { label: 'Material & Care', value: 'material' },
          { label: 'Dimensions', value: 'dimensions' },
          { label: 'Shipping Info', value: 'shipping' },
          { label: 'Custom HTML', value: 'custom' },
        ],
      },
      customContent: { type: 'textarea', label: 'Custom Content (HTML)' },
    },
    defaultItemProps: {
      id: 'section-1', title: 'Product Details', contentType: 'description', customContent: '',
    },
  },
  allowMultiple: {
    type: 'radio', label: 'Allow Multiple Open',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  defaultOpen: { type: 'text', label: 'Default Open (comma-separated IDs)' },
  borderStyle: {
    type: 'select', label: 'Border Style',
    options: [
      { label: 'No Borders', value: 'none' },
      { label: 'Top Border Only', value: 'top' },
      { label: 'Full Borders', value: 'full' },
    ],
  },
} as Record<string, Field>;
