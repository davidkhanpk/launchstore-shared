import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';
import {
  commonInputFields,
  commonInputDefaultProps,
  CommonInputProps,
  FieldLabel,
  FieldShell,
} from './form-field-shared';

const formChoiceFieldFields = {
  choiceType: {
    type: 'radio',
    label: 'Choice Type',
    options: [
      { label: 'Radio (single choice)', value: 'radio' },
      { label: 'Checkbox (multiple)', value: 'checkbox' },
    ],
  },
  options: {
    type: 'array',
    label: 'Options',
    arrayFields: { label: { type: 'text', label: 'Option Label' } } as any,
    defaultItemProps: { label: 'Option' },
  },
  accentColor: { type: 'text', label: 'Accent Color (token or hex)' },
  ...commonInputFields,
} as Record<string, Field>;

export interface FormChoiceFieldProps extends CommonInputProps {
  choiceType: 'radio' | 'checkbox';
  options: { label: string }[];
  accentColor: string;
}

/**
 * FormChoiceField — radio group (single) or checkbox group (multiple).
 * The storefront wrapper registers the group with react-hook-form; checkbox
 * groups submit an array of selected labels.
 */
export const FormChoiceField: ComponentConfig<FormChoiceFieldProps> = {
  label: 'Radio / Checkbox Group',
  fields: formChoiceFieldFields as ComponentConfig<FormChoiceFieldProps>['fields'],
  defaultProps: {
    choiceType: 'radio',
    options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }],
    accentColor: '#2563eb',
    ...commonInputDefaultProps,
  },
  render: (props: FormChoiceFieldProps) => (
    <FieldShell
      props={props}
      labelNode={
        <FieldLabel
          label={props.label}
          required={props.required}
          labelFontSize={props.labelFontSize}
          labelFontWeight={props.labelFontWeight}
          labelColor={props.labelColor}
        />
      }
    >
      <div className="flex flex-col gap-2">
        {(props.options || []).map((opt, i) => (
          <label key={i} className="flex items-center gap-2 text-sm" style={{ color: resolveColor(props.inputTextColor) }}>
            <input type={props.choiceType} name={`choice-${props.label}`} value={opt.label} style={{ accentColor: resolveColor(props.accentColor) }} readOnly />
            {opt.label}
          </label>
        ))}
      </div>
    </FieldShell>
  ),
};

export default FormChoiceField;
