import type { Field } from '@puckeditor/core';
import type { RichTextContentProps } from './richtext.types';

export const richTextContentFields = {
  content: {
    type: 'richtext',
    label: 'Content',
    contentEditable: true,
  },
  maxWidth: {
    type: 'select',
    label: 'Max Width',
    options: [
      { label: 'Narrow (640px)', value: 'max-w-2xl' },
      { label: 'Normal (768px)', value: 'max-w-3xl' },
      { label: 'Wide (1024px)', value: 'max-w-5xl' },
      { label: 'Full Width', value: 'max-w-none' },
    ],
  },
  padding: {
    type: 'select',
    label: 'Vertical Padding',
    options: [
      { label: 'Small', value: 'py-6' },
      { label: 'Medium', value: 'py-12' },
      { label: 'Large', value: 'py-20' },
    ],
  },
} as Record<string, Field>;
