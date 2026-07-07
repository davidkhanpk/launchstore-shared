import type { Field } from '@puckeditor/core';
import type { TextProps } from './text.types';

export const textFields = {
  text: { type: 'textarea', label: 'Text Content' },
  richText: {
    type: 'radio',
    label: 'Rich Text (preserve formatting)',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  fontSize: {
    type: 'select',
    label: 'Font Size',
    options: [
      { label: 'Extra Small', value: 'xs' },
      { label: 'Small', value: 'sm' },
      { label: 'Base', value: 'base' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
      { label: '2XL', value: '2xl' },
    ],
  },
  fontWeight: {
    type: 'select',
    label: 'Font Weight',
    options: [
      { label: 'Light', value: 'light' },
      { label: 'Normal', value: 'normal' },
      { label: 'Medium', value: 'medium' },
      { label: 'Semi Bold', value: 'semibold' },
      { label: 'Bold', value: 'bold' },
    ],
  },
  lineHeight: {
    type: 'select',
    label: 'Line Height',
    options: [
      { label: 'Tight', value: 'tight' },
      { label: 'Snug', value: 'snug' },
      { label: 'Normal', value: 'normal' },
      { label: 'Relaxed', value: 'relaxed' },
      { label: 'Loose', value: 'loose' },
    ],
  },
  textAlign: {
    type: 'select',
    label: 'Text Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
      { label: 'Justify', value: 'justify' },
    ],
  },
  // Color uses storefront-style "text field" (hex or token path).
  // Frontend consumer wrapper overrides this with ColorField widget.
  color: { type: 'text', label: 'Text Color (hex or theme token, e.g. text.primary)' },
  maxWidth: { type: 'text', label: 'Max Width (e.g., 800px, 80ch)' },
  marginTop: { type: 'number', label: 'Margin Top (px)', min: 0, max: 200 },
  marginBottom: { type: 'number', label: 'Margin Bottom (px)', min: 0, max: 200 },
  paddingX: { type: 'number', label: 'Padding Left/Right (px)', min: 0, max: 100 },
  paddingY: { type: 'number', label: 'Padding Top/Bottom (px)', min: 0, max: 100 },
} satisfies Record<Exclude<keyof TextProps, 'id'>, Field>;
