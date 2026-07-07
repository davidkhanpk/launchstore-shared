import type { Field } from '@puckeditor/core';
import type { SpacerProps } from './spacer.types';

export const spacerFields = {
  id: { type: 'text', label: 'ID' },
  height: {
    type: 'radio', label: 'Height',
    options: [
      { label: 'Extra Small (0.5rem)', value: 'xs' },
      { label: 'Small (1rem)', value: 'sm' },
      { label: 'Medium (2rem)', value: 'md' },
      { label: 'Large (3rem)', value: 'lg' },
      { label: 'Extra Large (4rem)', value: 'xl' },
      { label: '2XL (6rem)', value: '2xl' },
      { label: '3XL (8rem)', value: '3xl' },
    ],
  },
  showDivider: { type: 'radio', label: 'Show Divider Line', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  dividerStyle: {
    type: 'radio', label: 'Divider Style',
    options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }],
  },
  dividerColor: { type: 'text', label: 'Divider Color (hex or theme token)' },
} as Record<string, Field>;
