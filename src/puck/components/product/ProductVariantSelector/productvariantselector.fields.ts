import type { Field } from '@puckeditor/core';
import type { ProductVariantSelectorProps } from './productvariantselector.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const MARGIN_OPTS = (prefix: string) => [
  { label: 'None', value: `${prefix}-0` },
  { label: 'Small', value: `${prefix}-2` },
  { label: 'Medium', value: `${prefix}-4` },
  { label: 'Large', value: `${prefix}-6` },
  { label: 'Extra Large', value: `${prefix}-8` },
];

export const productVariantSelectorFields = {
  selectorStyle: {
    type: 'select', label: 'Selector Style',
    options: [
      { label: 'Dropdown', value: 'dropdown' },
      { label: 'Buttons', value: 'buttons' },
      { label: 'Color Swatches', value: 'color-swatches' },
    ],
  },
  showLabels: { type: 'radio', label: 'Show Option Labels', options: RADIO_YES_NO },
  showStock: { type: 'radio', label: 'Show Stock Status', options: RADIO_YES_NO },
  marginTop: { type: 'select', label: 'Margin Top', options: MARGIN_OPTS('mt') },
  marginBottom: { type: 'select', label: 'Margin Bottom', options: MARGIN_OPTS('mb') },
  marginLeft: { type: 'select', label: 'Margin Left', options: MARGIN_OPTS('ml').slice(0, 4) },
  marginRight: { type: 'select', label: 'Margin Right', options: MARGIN_OPTS('mr').slice(0, 4) },
  paddingX: { type: 'select', label: 'Padding Horizontal', options: MARGIN_OPTS('px') },
  paddingY: { type: 'select', label: 'Padding Vertical', options: MARGIN_OPTS('py') },
} as Record<string, Field>;
