import type { Field } from '@puckeditor/core';
import type { BundledProductDetailProps } from './bundledproductdetail.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const bundledProductDetailFields = {
  showSavingsBadge: { type: 'radio', label: 'Show Savings Badge', options: RADIO_YES_NO },
  showItemImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
  buttonText: { type: 'text', label: 'Button Text' },
  bundleIdOverride: { type: 'text', label: 'Bundle ID Override (optional)' },
} as Record<string, Field>;
