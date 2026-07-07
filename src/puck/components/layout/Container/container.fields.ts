import type { Field } from '@puckeditor/core';
import type { ContainerProps } from './container.types';

export const containerFields = {
  maxWidth: {
    type: 'select',
    label: 'Max Width',
    options: [
      { label: 'Small (640px)', value: 'sm' },
      { label: 'Medium (768px)', value: 'md' },
      { label: 'Large (1024px)', value: 'lg' },
      { label: 'X-Large (1280px)', value: 'xl' },
      { label: '2X-Large (1536px)', value: '2xl' },
      { label: 'Full Width', value: 'full' },
    ],
  },
  padding: {
    type: 'select',
    label: 'Padding',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
} as Record<string, Field>;
