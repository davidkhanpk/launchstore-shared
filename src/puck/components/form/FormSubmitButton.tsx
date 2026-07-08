import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const formSubmitButtonFields = {
  label: { type: 'text', label: 'Button Label' },
  backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
  textColor: { type: 'text', label: 'Text Color (token or hex)' },
  fullWidth: { type: 'radio', label: 'Full Width', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  borderRadius: { type: 'select', label: 'Border Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Pill', value: 'full' }] },
} as Record<string, Field>;

const radiusMap = { none: '', sm: 'rounded', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full' } as const;

export interface FormSubmitButtonProps {
  label: string;
  backgroundColor: string;
  textColor: string;
  fullWidth: boolean;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
}

export const FormSubmitButton: ComponentConfig<FormSubmitButtonProps> = {
  label: 'Form Submit Button',
  fields: formSubmitButtonFields as ComponentConfig<FormSubmitButtonProps>['fields'],
  defaultProps: { label: 'Submit', backgroundColor: 'brand.primary', textColor: 'text.inverse', fullWidth: true, borderRadius: 'md' },
  render: ({ label, backgroundColor, textColor, fullWidth, borderRadius }: FormSubmitButtonProps) => (
    <div className={`mt-2 ${fullWidth ? '' : 'inline-block'}`}>
      <button type="submit" className={`px-6 py-2.5 text-sm font-medium transition-opacity hover:opacity-90 ${radiusMap[borderRadius]} ${fullWidth ? 'w-full' : ''}`} style={{ backgroundColor: resolveColor(backgroundColor), color: resolveColor(textColor) }}>
        {label}
      </button>
    </div>
  ),
};

export default FormSubmitButton;
