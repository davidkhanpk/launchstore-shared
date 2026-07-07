import type { Field } from '@puckeditor/core';
import type { ButtonProps } from './button.types';

export const buttonFields = {
  text: { type: 'text', label: 'Button Text' },
  url: { type: 'text', label: 'Link URL' },
  openInNewTab: {
    type: 'radio',
    label: 'Open in New Tab',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  variant: {
    type: 'select',
    label: 'Button Variant',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Danger', value: 'danger' },
    ],
  },
  size: {
    type: 'select',
    label: 'Size',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  fullWidth: {
    type: 'radio',
    label: 'Full Width',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  // 5 color fields: shared = text input (hex or token).
  // Frontend consumer overrides each with ColorField widget.
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  borderColor: { type: 'text', label: 'Border Color (hex or theme token)' },
  hoverBackgroundColor: { type: 'text', label: 'Hover Background Color (hex or theme token)' },
  hoverTextColor: { type: 'text', label: 'Hover Text Color (hex or theme token)' },
  showIcon: {
    type: 'radio',
    label: 'Show Icon',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  iconPosition: {
    type: 'select',
    label: 'Icon Position',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Right', value: 'right' },
    ],
  },
  borderRadius: {
    type: 'select',
    label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Full (Pill)', value: 'full' },
    ],
  },
  shadow: {
    type: 'select',
    label: 'Shadow',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  alignment: {
    type: 'select',
    label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  marginTop: { type: 'number', label: 'Margin Top (px)', min: 0, max: 200 },
  marginBottom: { type: 'number', label: 'Margin Bottom (px)', min: 0, max: 200 },
} as Record<string, Field>;
