import type { Field } from '@puckeditor/core';
import type { ProductRatingProps } from './productrating.types';

export const productRatingFields = {
  showCount: {
    type: 'radio', label: 'Show Review Count',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  size: {
    type: 'select', label: 'Star Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
} as Record<string, Field>;
