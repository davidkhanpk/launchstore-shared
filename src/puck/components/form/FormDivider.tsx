import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const formDividerFields = {
  spacingTop: { type: 'select', label: 'Space Above', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
  spacingBottom: { type: 'select', label: 'Space Below', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
  color: { type: 'text', label: 'Line Color (token or hex)' },
} as Record<string, Field>;

const spacingMap = { none: '0', sm: '8px', md: '16px', lg: '24px' } as const;

export interface FormDividerProps {
  spacingTop: 'none' | 'sm' | 'md' | 'lg';
  spacingBottom: 'none' | 'sm' | 'md' | 'lg';
  color: string;
}

export const FormDivider: ComponentConfig<FormDividerProps> = {
  label: 'Form Divider',
  fields: formDividerFields as ComponentConfig<FormDividerProps>['fields'],
  defaultProps: { spacingTop: 'sm', spacingBottom: 'sm', color: 'ui.border' },
  render: ({ spacingTop, spacingBottom, color }: FormDividerProps) => (
    <hr style={{ marginTop: spacingMap[spacingTop], marginBottom: spacingMap[spacingBottom], borderColor: resolveColor(color), borderTopWidth: '1px' }} />
  ),
};

export default FormDivider;
