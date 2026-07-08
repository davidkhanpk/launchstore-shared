import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const formContainerFields = {
  formId: { type: 'text', label: 'Form ID (auto-generated, do not change)' },
  formName: { type: 'text', label: 'Form Name' },
  submitButtonText: { type: 'text', label: 'Submit Button Text' },
  successMessage: { type: 'text', label: 'Success Message' },
  successRedirectUrl: { type: 'text', label: 'Redirect URL after submit (optional)' },
  padding: { type: 'select', label: 'Padding', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
  backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
  maxWidth: { type: 'select', label: 'Max Width', options: [{ label: 'Small (384px)', value: 'sm' }, { label: 'Medium (448px)', value: 'md' }, { label: 'Large (512px)', value: 'lg' }, { label: 'Extra Large (576px)', value: 'xl' }, { label: 'Full', value: 'full' }] },
} as Record<string, Field>;

const PAD = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8', xl: 'p-12' } as const;
const RAD = { none: '', sm: 'rounded', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-2xl' } as const;
const MAX = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', full: 'max-w-full' } as const;

export interface FormContainerProps {
  formId: string;
  formName: string;
  submitButtonText: string;
  successMessage: string;
  successRedirectUrl?: string;
  padding: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  backgroundColor: string;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  maxWidth: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const FormContainer: ComponentConfig<FormContainerProps> = {
  label: 'Form Container',
  fields: formContainerFields as ComponentConfig<FormContainerProps>['fields'],
  defaultProps: {
    formId: `form-${Math.random().toString(36).slice(2, 10)}`,
    formName: 'Contact Form', submitButtonText: 'Submit', successMessage: 'Thank you! Your message has been sent.',
    padding: 'lg', backgroundColor: 'ui.background', borderRadius: 'md', maxWidth: 'lg',
  },
  render: ({ formId, formName, padding, backgroundColor, borderRadius, maxWidth }: FormContainerProps) => (
    <div className={`${MAX[maxWidth]} mx-auto`} data-form-id={formId} data-form-name={formName}>
      <div className={`${PAD[padding]} ${RAD[borderRadius]}`} style={{ backgroundColor: resolveColor(backgroundColor) }}>
        <DropZone zone="fields" />
      </div>
    </div>
  ),
};

export default FormContainer;
