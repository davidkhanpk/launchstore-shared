import type { Field } from '@puckeditor/core';
import type { AddToCartProps } from './addtocart.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

export const addToCartFields = {
  text: { type: 'text', label: 'Button Text' },
  preorderText: { type: 'text', label: 'Pre-order Button Text' },
  variant: {
    type: 'select', label: 'Style',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Custom Colors', value: 'custom' },
    ],
  },
  useThemeColors: { type: 'radio', label: 'Use Theme Colors', options: RADIO_YES_NO },
  backgroundColor: { type: 'text', label: 'Background Color (hex, rgb, or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex, rgb, or theme token)' },
  hoverBackgroundColor: { type: 'text', label: 'Hover Background Color' },
  hoverTextColor: { type: 'text', label: 'Hover Text Color' },
  borderColor: { type: 'text', label: 'Border Color (for outline variant)' },
  size: {
    type: 'select', label: 'Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  fullWidth: { type: 'radio', label: 'Full Width', options: RADIO_YES_NO },
  showIcon: { type: 'radio', label: 'Show Cart Icon', options: RADIO_YES_NO },
  borderRadius: {
    type: 'select', label: 'Border Radius',
    options: [
      { label: 'None', value: 'rounded-none' }, { label: 'Small', value: 'rounded-sm' },
      { label: 'Medium', value: 'rounded-md' }, { label: 'Large', value: 'rounded-lg' },
      { label: 'Extra Large', value: 'rounded-xl' }, { label: 'Full', value: 'rounded-full' },
    ],
  },
  marginTop: {
    type: 'select', label: 'Margin Top',
    options: [
      { label: 'None', value: 'mt-0' }, { label: 'Small (0.5rem)', value: 'mt-2' },
      { label: 'Medium (1rem)', value: 'mt-4' }, { label: 'Large (1.5rem)', value: 'mt-6' }, { label: 'X-Large (2rem)', value: 'mt-8' },
    ],
  },
  marginBottom: {
    type: 'select', label: 'Margin Bottom',
    options: [
      { label: 'None', value: 'mb-0' }, { label: 'Small (0.5rem)', value: 'mb-2' },
      { label: 'Medium (1rem)', value: 'mb-4' }, { label: 'Large (1.5rem)', value: 'mb-6' }, { label: 'X-Large (2rem)', value: 'mb-8' },
    ],
  },
  marginLeft: {
    type: 'select', label: 'Margin Left',
    options: [
      { label: 'None', value: 'ml-0' }, { label: 'Auto', value: 'ml-auto' },
      { label: 'Small', value: 'ml-2' }, { label: 'Medium', value: 'ml-4' },
    ],
  },
  marginRight: {
    type: 'select', label: 'Margin Right',
    options: [
      { label: 'None', value: 'mr-0' }, { label: 'Auto', value: 'mr-auto' },
      { label: 'Small', value: 'mr-2' }, { label: 'Medium', value: 'mr-4' },
    ],
  },
  paddingX: {
    type: 'select', label: 'Horizontal Padding',
    options: [{ label: 'Small', value: 'px-4' }, { label: 'Medium', value: 'px-6' }, { label: 'Large', value: 'px-8' }, { label: 'X-Large', value: 'px-10' }],
  },
  paddingY: {
    type: 'select', label: 'Vertical Padding',
    options: [{ label: 'Small', value: 'py-2' }, { label: 'Medium', value: 'py-3' }, { label: 'Large', value: 'py-4' }, { label: 'X-Large', value: 'py-5' }],
  },
  disabled: { type: 'radio', label: 'Disabled State (Preview)', options: RADIO_YES_NO },
} as Record<string, Field>;
