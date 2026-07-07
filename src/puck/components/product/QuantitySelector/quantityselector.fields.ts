import type { Field } from '@puckeditor/core';
import type { QuantitySelectorProps } from './quantityselector.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const MARGIN_OPTS = (prefix: string) => [
  { label: 'None', value: `${prefix}-0` },
  { label: 'Small', value: `${prefix}-2` },
  { label: 'Medium', value: `${prefix}-4` },
  { label: 'Large', value: `${prefix}-6` },
  { label: 'Extra Large', value: `${prefix}-8` },
];

export const quantitySelectorFields = {
  showLabel: { type: 'radio', label: 'Show Label', options: RADIO_YES_NO },
  labelText: { type: 'text', label: 'Label Text' },
  minQuantity: { type: 'number', label: 'Minimum Quantity' },
  maxQuantity: { type: 'number', label: 'Maximum Quantity' },
  defaultQuantity: { type: 'number', label: 'Default Quantity' },
  size: {
    type: 'select', label: 'Size',
    options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }],
  },
  style: {
    type: 'select', label: 'Style',
    options: [{ label: 'Default', value: 'default' }, { label: 'Minimal', value: 'minimal' }, { label: 'Rounded', value: 'rounded' }],
  },
  marginTop: { type: 'select', label: 'Margin Top', options: MARGIN_OPTS('mt') },
  marginBottom: { type: 'select', label: 'Margin Bottom', options: MARGIN_OPTS('mb') },
  marginLeft: { type: 'select', label: 'Margin Left', options: MARGIN_OPTS('ml').slice(0, 4) },
  marginRight: { type: 'select', label: 'Margin Right', options: MARGIN_OPTS('mr').slice(0, 4) },
  paddingX: { type: 'select', label: 'Padding Horizontal', options: MARGIN_OPTS('px') },
  paddingY: { type: 'select', label: 'Padding Vertical', options: MARGIN_OPTS('py') },
} as Record<string, Field>;
