import type { Field } from '@puckeditor/core';
import type { RecentlyViewedProductsProps } from './recentlyviewedproducts.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const recentlyViewedProductsFields = {
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text', label: 'Title' },
  displayStyle: {
    type: 'select', label: 'Display Style',
    options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
  },
  maxProducts: { type: 'number', label: 'Maximum Products to Show' },
  containerPadding: {
    type: 'select', label: 'Container Padding',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
    ],
  },
} as Record<string, Field>;
