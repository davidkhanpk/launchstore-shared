import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const formHeadingFields = {
  text: { type: 'textarea', label: 'Text' },
  size: { type: 'select', label: 'Size', options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
  color: { type: 'text', label: 'Text Color (token or hex)' },
  marginBottom: { type: 'select', label: 'Bottom Spacing', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
} as Record<string, Field>;

const sizeMap = { xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl' } as const;
const marginMap = { none: '', sm: 'mb-2', md: 'mb-4', lg: 'mb-6' } as const;

export interface FormHeadingProps {
  text: string;
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color: string;
  marginBottom: 'none' | 'sm' | 'md' | 'lg';
}

export const FormHeading: ComponentConfig<FormHeadingProps> = {
  label: 'Form Heading / Instruction',
  fields: formHeadingFields as ComponentConfig<FormHeadingProps>['fields'],
  defaultProps: { text: 'Section heading or instruction text', size: 'md', color: 'text.primary', marginBottom: 'sm' },
  render: ({ text, size, color, marginBottom }: FormHeadingProps) => (
    <p className={`${sizeMap[size]} ${marginMap[marginBottom]}`} style={{ color: resolveColor(color) }}>{text}</p>
  ),
};

export default FormHeading;
