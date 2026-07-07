import type { Field } from '@puckeditor/core';
import type { SectionProps } from './section.types';

export const sectionFields = {
  paddingY: {
    type: 'select',
    label: 'Vertical Padding',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'X-Large', value: 'xl' },
    ],
  },
  backgroundColor: {
    type: 'select',
    label: 'Background Color',
    options: [
      { label: 'Transparent', value: 'transparent' },
      { label: 'White', value: 'white' },
      { label: 'Gray', value: 'gray' },
      { label: 'Primary', value: 'primary' },
    ],
  },
} as Record<string, Field>;
