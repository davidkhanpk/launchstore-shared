import type { Field } from '@puckeditor/core';
import type { GridProps } from './grid.types';

export const gridFields = {
  id: { type: 'text', label: 'ID' },
  columns: { type: 'radio', label: 'Desktop Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }] },
  tabletColumns: { type: 'radio', label: 'Tablet Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }] },
  mobileColumns: { type: 'radio', label: 'Mobile Columns', options: [{ label: '1', value: '1' }, { label: '2', value: '2' }] },
  gap: { type: 'radio', label: 'Gap', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
} as Record<string, Field>;
