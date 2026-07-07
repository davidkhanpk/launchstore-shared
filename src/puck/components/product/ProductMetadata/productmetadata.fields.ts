import type { Field } from '@puckeditor/core';
import type { ProductMetadataProps } from './productmetadata.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const productMetadataFields = {
  showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
  titleText: { type: 'text', label: 'Title Text' },
  showSku: { type: 'radio', label: 'Show SKU', options: RADIO_YES_NO },
  showWeight: { type: 'radio', label: 'Show Weight', options: RADIO_YES_NO },
  showDimensions: { type: 'radio', label: 'Show Dimensions', options: RADIO_YES_NO },
  showOrigin: { type: 'radio', label: 'Show Origin Country', options: RADIO_YES_NO },
  layout: {
    type: 'select', label: 'Layout',
    options: [{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }, { label: 'Table', value: 'table' }],
  },
} as Record<string, Field>;
