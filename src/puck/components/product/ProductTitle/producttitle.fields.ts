import type { Field } from '@puckeditor/core';
import type { ProductTitleProps } from './producttitle.types';

export const productTitleFields = {
  tag: {
    type: 'select', label: 'HTML Tag',
    options: [{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' }],
  },
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [
      { label: 'Theme Default', value: 'default' },
      { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
      { label: 'X-Large', value: 'xl' }, { label: '2X-Large', value: '2xl' }, { label: '3X-Large', value: '3xl' },
    ],
  },
  color: {
    type: 'select', label: 'Color',
    options: [
      { label: 'Theme Default', value: 'default' },
      { label: 'Black', value: 'black' }, { label: 'Gray', value: 'gray' },
      { label: 'Primary', value: 'primary' }, { label: 'White', value: 'white' },
    ],
  },
  alignment: {
    type: 'radio', label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },
  fontWeight: {
    type: 'select', label: 'Font Weight',
    options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }],
  },
  marginTop: {
    type: 'select', label: 'Margin Top',
    options: [
      { label: 'None', value: 'mt-0' }, { label: 'Small (0.5rem)', value: 'mt-2' },
      { label: 'Medium (1rem)', value: 'mt-4' }, { label: 'Large (1.5rem)', value: 'mt-6' },
      { label: 'X-Large (2rem)', value: 'mt-8' },
    ],
  },
  marginBottom: {
    type: 'select', label: 'Margin Bottom',
    options: [
      { label: 'None', value: 'mb-0' }, { label: 'Small (0.5rem)', value: 'mb-2' },
      { label: 'Medium (1rem)', value: 'mb-4' }, { label: 'Large (1.5rem)', value: 'mb-6' },
      { label: 'X-Large (2rem)', value: 'mb-8' },
    ],
  },
  paddingX: {
    type: 'select', label: 'Horizontal Padding',
    options: [
      { label: 'None', value: 'px-0' }, { label: 'Small', value: 'px-2' },
      { label: 'Medium', value: 'px-4' }, { label: 'Large', value: 'px-6' },
    ],
  },
  paddingY: {
    type: 'select', label: 'Vertical Padding',
    options: [
      { label: 'None', value: 'py-0' }, { label: 'Small', value: 'py-2' },
      { label: 'Medium', value: 'py-4' }, { label: 'Large', value: 'py-6' },
    ],
  },
} as Record<string, Field>;
