import type { Field } from '@puckeditor/core';
import type { ProductPriceProps } from './productprice.types';

export const productPriceFields = {
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [
      { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }, { label: '2X-Large', value: '2xl' },
    ],
  },
  color: {
    type: 'select', label: 'Color',
    options: [
      { label: 'Theme Default', value: 'default' },
      { label: 'Black', value: 'black' }, { label: 'Gray', value: 'gray' }, { label: 'Primary', value: 'primary' },
    ],
  },
  showComparePrice: {
    type: 'radio', label: 'Show Compare Price',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  layout: {
    type: 'radio', label: 'Layout',
    options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }],
  },
  fontWeight: {
    type: 'select', label: 'Font Weight',
    options: [
      { label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' },
      { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' },
    ],
  },
  showSavingsPercentage: {
    type: 'radio', label: 'Show Savings Percentage',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
} as Record<string, Field>;
