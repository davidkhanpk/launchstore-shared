import type { Field } from '@puckeditor/core';
import type { CategoryDescriptionProps } from './categorydescription.types';

export const categoryDescriptionFields = {
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [
      { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' },
      { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' },
    ],
  },
  color: {
    type: 'select', label: 'Color',
    options: [
      { label: 'Theme Default', value: 'default' },
      { label: 'Black', value: 'black' }, { label: 'Gray', value: 'gray' },
      { label: 'Muted', value: 'muted' }, { label: 'White', value: 'white' },
    ],
  },
  alignment: {
    type: 'radio', label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }, { label: 'Justify', value: 'justify' }],
  },
  lineHeight: {
    type: 'select', label: 'Line Height',
    options: [{ label: 'Tight', value: 'tight' }, { label: 'Normal', value: 'normal' }, { label: 'Relaxed', value: 'relaxed' }, { label: 'Loose', value: 'loose' }],
  },
  maxWidth: {
    type: 'select', label: 'Max Width',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' }, { label: 'X-Large', value: 'xl' }, { label: '2X-Large', value: '2xl' }, { label: 'Full', value: 'full' },
    ],
  },
  marginBottom: { type: 'text', label: 'Margin Bottom' },
  className: { type: 'text', label: 'Custom CSS Classes' },
} as Record<string, Field>;
