import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const formFieldFields = {
  fieldType: { type: 'select', label: 'Field Type', options: [{ label: 'Text', value: 'text' }, { label: 'Email', value: 'email' }, { label: 'Phone', value: 'phone' }, { label: 'Number', value: 'number' }, { label: 'Textarea', value: 'textarea' }, { label: 'URL', value: 'url' }] },
  label: { type: 'text', label: 'Label' },
  placeholder: { type: 'text', label: 'Placeholder' },
  helpText: { type: 'text', label: 'Help Text' },
  required: { type: 'radio', label: 'Required', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  minLength: { type: 'number', label: 'Min Length / Min Value' },
  maxLength: { type: 'number', label: 'Max Length / Max Value' },
  rows: { type: 'number', label: 'Rows (textarea only)' },
  labelColor: { type: 'text', label: 'Label Color (token or hex)' },
  inputBackground: { type: 'text', label: 'Input Background (token or hex)' },
  borderColor: { type: 'text', label: 'Border Color (token or hex)' },
} as Record<string, Field>;

const inputTypeMap: Record<string, string> = { text: 'text', email: 'email', phone: 'tel', number: 'number', textarea: 'textarea', url: 'url' };

export type FieldType = 'text' | 'email' | 'phone' | 'number' | 'textarea' | 'url';

export interface FormFieldProps {
  fieldType: FieldType;
  label: string;
  placeholder?: string;
  helpText?: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  rows: number;
  labelColor: string;
  inputBackground: string;
  borderColor: string;
}

export const FormField: ComponentConfig<FormFieldProps> = {
  label: 'Form Field',
  fields: formFieldFields as ComponentConfig<FormFieldProps>['fields'],
  defaultProps: { fieldType: 'text', label: 'Field Label', placeholder: '', helpText: '', required: false, rows: 4, labelColor: 'text.primary', inputBackground: 'ui.surface', borderColor: 'ui.border' },
  render: ({ fieldType, label, placeholder, helpText, required, rows, labelColor, inputBackground, borderColor }: FormFieldProps) => {
    const inputStyle: React.CSSProperties = { backgroundColor: resolveColor(inputBackground), borderColor: resolveColor(borderColor), color: 'inherit' };
    const labelStyle: React.CSSProperties = { color: resolveColor(labelColor) };
    const inputClass = 'w-full px-3 py-2 border rounded-md text-sm outline-none focus:ring-2 focus:ring-offset-0';

    return (
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" style={labelStyle}>
          {label}{required && <span className="text-red-500 ml-1">*</span>}
        </label>
        {fieldType === 'textarea' ? (
          <textarea className={inputClass} placeholder={placeholder} rows={rows} style={inputStyle} readOnly />
        ) : (
          <input type={inputTypeMap[fieldType]} className={inputClass} placeholder={placeholder} style={inputStyle} readOnly />
        )}
        {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
      </div>
    );
  },
};

export default FormField;
