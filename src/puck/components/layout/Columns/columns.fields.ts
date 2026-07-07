import type { Field } from '@puckeditor/core';
import type { ColumnsProps } from './columns.types';

export const columnsFields = {
  columns: {
    type: 'select',
    label: 'Number of Columns',
    options: [
      { label: '2 Columns', value: '2' },
      { label: '3 Columns', value: '3' },
      { label: '4 Columns', value: '4' },
    ],
  },
  layout: {
    type: 'select',
    label: 'Column Layout (2 columns only)',
    options: [
      { label: 'Equal (50/50)', value: '50-50' },
      { label: 'Left Larger (60/40)', value: '60-40' },
      { label: 'Right Larger (40/60)', value: '40-60' },
      { label: 'Left Much Larger (70/30)', value: '70-30' },
      { label: 'Right Much Larger (30/70)', value: '30-70' },
    ],
  },
  gap: {
    type: 'select',
    label: 'Gap Between Columns',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'X-Large', value: 'xl' },
    ],
  },
  mobileStack: {
    type: 'radio',
    label: 'Stack on Mobile',
    options: [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ],
  },
  alignItems: {
    type: 'select',
    label: 'Vertical Alignment',
    options: [
      { label: 'Start', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End', value: 'end' },
      { label: 'Stretch', value: 'stretch' },
    ],
  },
} as Record<string, Field>;
