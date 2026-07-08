import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const formChoiceFieldFields = {
  choiceType: { type: 'radio', label: 'Choice Type', options: [{ label: 'Radio (single)', value: 'radio' }, { label: 'Checkbox (multiple)', value: 'checkbox' }] },
  label: { type: 'text', label: 'Group Label' },
  helpText: { type: 'text', label: 'Help Text' },
  required: { type: 'radio', label: 'Required', options: RADIO_YES_NO },
  options: { type: 'array', label: 'Options', arrayFields: { label: { type: 'text', label: 'Option Label' } } as any, defaultItemProps: { label: 'Option' } },
  labelColor: { type: 'text', label: 'Label Color (token or hex)' },
  accentColor: { type: 'text', label: 'Accent Color (token or hex)' },
} as Record<string, Field>;

export interface FormChoiceFieldProps {
  choiceType: 'radio' | 'checkbox';
  label: string;
  helpText?: string;
  required: boolean;
  options: { label: string }[];
  labelColor: string;
  accentColor: string;
}

export const FormChoiceField: ComponentConfig<FormChoiceFieldProps> = {
  label: 'Form Choice (Radio / Checkbox)',
  fields: formChoiceFieldFields as ComponentConfig<FormChoiceFieldProps>['fields'],
  defaultProps: { choiceType: 'radio', label: 'Choose one', helpText: '', required: false, options: [{ label: 'Option 1' }, { label: 'Option 2' }], labelColor: 'text.primary', accentColor: 'brand.primary' },
  render: ({ choiceType, label, helpText, required, options, labelColor }: FormChoiceFieldProps) => (
    <div className="mb-4">
      <p className="block text-sm font-medium mb-2" style={{ color: resolveColor(labelColor) }}>
        {label}{required && <span className="text-red-500 ml-1">*</span>}
      </p>
      <div className="space-y-2">
        {options.map((opt, i) => (
          <label key={i} className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: resolveColor(labelColor) }}>
            <input type={choiceType} name={`choice-${label}`} value={opt.label} readOnly />
            {opt.label}
          </label>
        ))}
      </div>
      {helpText && <p className="mt-1 text-xs text-gray-500">{helpText}</p>}
    </div>
  ),
};

export default FormChoiceField;
