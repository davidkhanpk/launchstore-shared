import type { Field } from '@puckeditor/core';
import type { FlexRowProps } from './flexrow.types';

export const flexRowFields = {
  justifyContent: {
    type: 'select',
    label: 'Horizontal Alignment',
    options: [
      { label: 'Start (Left)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Right)', value: 'end' },
      { label: 'Space Between', value: 'space-between' },
      { label: 'Space Around', value: 'space-around' },
      { label: 'Space Evenly', value: 'space-evenly' },
    ],
  },
  alignItems: {
    type: 'select',
    label: 'Vertical Alignment',
    options: [
      { label: 'Start (Top)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Bottom)', value: 'end' },
      { label: 'Stretch', value: 'stretch' },
      { label: 'Baseline', value: 'baseline' },
    ],
  },
  gap: {
    type: 'select',
    label: 'Gap Between Items',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Extra Small', value: 'xs' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  wrap: {
    type: 'select',
    label: 'Wrap Behavior',
    options: [
      { label: 'No Wrap', value: 'nowrap' },
      { label: 'Wrap', value: 'wrap' },
      { label: 'Wrap Reverse', value: 'wrap-reverse' },
    ],
  },
  fullWidth: {
    type: 'radio',
    label: 'Full Width',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  maxWidth: { type: 'text', label: 'Max Width (if not full width)' },
  padding: { type: 'text', label: 'Padding (e.g., 1rem)' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  borderRadius: { type: 'text', label: 'Border Radius (e.g., 0.5rem)' },
} as Record<string, Field>;
