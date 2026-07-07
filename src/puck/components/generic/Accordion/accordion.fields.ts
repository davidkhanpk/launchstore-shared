import type { Field } from '@puckeditor/core';
import type { AccordionProps } from './accordion.types';

export const accordionFields = {
  id: { type: 'text', label: 'ID' },
  items: {
    type: 'array', label: 'Accordion Items',
    arrayFields: {
      id: { type: 'text', label: 'Item ID' },
      title: { type: 'text', label: 'Title' },
      content: { type: 'textarea', label: 'Content' },
    },
    defaultItemProps: { id: 'item-1', title: 'Accordion Item', content: 'Accordion content goes here' },
  } as any,
  allowMultiple: { type: 'radio', label: 'Allow Multiple Open', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  bordered: { type: 'radio', label: 'Show Borders', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  rounded: { type: 'radio', label: 'Corner Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
} as Record<string, Field>;
