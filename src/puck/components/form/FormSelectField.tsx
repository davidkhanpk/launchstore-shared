import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const formSelectFieldFields = {
  label: { type: 'text', label: 'Label' },
  placeholder: { type: 'text', label: 'Placeholder' },
  helpText: { type: 'text', label: 'Help Text' },
  required: { type: 'radio', label: 'Required', options: RADIO_YES_NO },
  options: { type: 'array', label: 'Options', arrayFields: { label: { type: 'text', label: 'Option Label' } } as any, defaultItemProps: { label: 'Option' } },
  labelColor: { type: 'text', label: 'Label Color (token or hex)' },
  inputBackground: { type: 'text', label: 'Input Background (token or hex)' },
  borderColor: { type: 'text', label: 'Border Color (token or hex)' },
} as Record<string, Field>;

export interface FormSelectFieldProps {
  label: string;
  placeholder?: string;
  helpText?: string;
  required: boolean;
  options: { label: string }[];
  labelColor: string;
  inputBackground: string;
  borderColor: string;
}

export const FormSelectField: ComponentConfig<FormSelectFieldProps> = {
  label: 'Form Select (Dropdown)',
  fields: formSelectFieldFields as ComponentConfig<FormSelectFieldProps>['fields'],
  defaultProps: { label: 'Select an option', placeholder: 'Choose...', helpText: '', required: false, options: [{ label: 'Option 1' }, { label: 'Option 2' }], labelColor: 'text.primary', inputBackground: 'ui.surface', borderColor: 'ui.border' },
  render: ({ label, placeholder, helpText, required, options, labelColor, inputBackground, borderColor }: FormSelectFieldProps) => (
    <div className="mb-4">
      <label className="block text-sm font-medium mb-1" style={{ color: resolveColor(labelColor) }}>
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <select className="w-full px-3 py-2 border rounded-md text-sm outline-none" style={{ backgroundColor: resolveColor(inputBackground), borderColor: resolveColor(borderColor), color: 'inherit' }}>
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt, i) => <option key={i} value={opt.label}>{opt.label}</option>)}
      </select>
      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
    </div>
  ),
};

export default FormSelectField;
