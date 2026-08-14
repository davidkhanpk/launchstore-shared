import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  BORDER_WIDTH_OPTIONS,
  SPACING_OPTIONS,
  resolveColor,
} from '../../design-system';

const formDividerFields = {
  marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
  borderWidth: { type: 'select', label: 'Line Width', options: BORDER_WIDTH_OPTIONS },
  borderColor: { type: 'text', label: 'Line Color (token or hex)' },
} as Record<string, Field>;

const BORDER_WIDTH_CLASS: Record<string, string> = {
  '0': 'border-0',
  '': 'border-t',
  '2': 'border-t-2',
  '4': 'border-t-4',
};

export interface FormDividerProps {
  marginTop: string;
  marginBottom: string;
  borderWidth: string;
  borderColor: string;
}

/** FormDivider — display-only horizontal rule inside a form. */
export const FormDivider: ComponentConfig<FormDividerProps> = {
  label: 'Form Divider',
  fields: formDividerFields as ComponentConfig<FormDividerProps>['fields'],
  defaultProps: { marginTop: '2', marginBottom: '2', borderWidth: '', borderColor: '#e5e7eb' },
  render: ({ marginTop, marginBottom, borderWidth, borderColor }: FormDividerProps) => (
    <hr
      className={`mt-${marginTop} mb-${marginBottom} w-full ${BORDER_WIDTH_CLASS[borderWidth] ?? 'border-t'}`}
      style={{ borderColor: resolveColor(borderColor) }}
    />
  ),
};

export default FormDivider;
