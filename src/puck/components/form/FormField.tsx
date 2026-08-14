import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  commonInputFields,
  commonInputDefaultProps,
  CommonInputProps,
  inputSurface,
  FieldLabel,
  FieldShell,
} from './form-field-shared';

export type FieldType = 'text' | 'email' | 'phone' | 'number' | 'textarea' | 'url';

const FIELD_TYPE_OPTIONS: { label: string; value: FieldType }[] = [
  { label: 'Text', value: 'text' },
  { label: 'Email', value: 'email' },
  { label: 'Phone', value: 'phone' },
  { label: 'Number', value: 'number' },
  { label: 'Textarea', value: 'textarea' },
  { label: 'URL', value: 'url' },
];

const inputTypeMap: Record<string, string> = {
  text: 'text', email: 'email', phone: 'tel', number: 'number', textarea: 'textarea', url: 'url',
};

const formFieldFields = {
  fieldType: { type: 'select', label: 'Field Type', options: FIELD_TYPE_OPTIONS },
  placeholder: { type: 'text', label: 'Placeholder' },
  rows: { type: 'number', label: 'Rows (textarea only)' },
  ...commonInputFields,
} as Record<string, Field>;

export interface FormFieldProps extends CommonInputProps {
  fieldType: FieldType;
  placeholder: string;
  rows: number;
}

/**
 * FormField — a single text-like input (text/email/phone/number/url/textarea).
 * Editor render is a read-only preview; the storefront wrapper registers the
 * real input with react-hook-form (required/min/max rules + type patterns).
 */
export const FormField: ComponentConfig<FormFieldProps> = {
  label: 'Input Field',
  fields: formFieldFields as ComponentConfig<FormFieldProps>['fields'],
  defaultProps: {
    fieldType: 'text',
    placeholder: '',
    rows: 4,
    ...commonInputDefaultProps,
  },
  render: (props: FormFieldProps) => {
    const surface = inputSurface(props);
    return (
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
        {props.fieldType === 'textarea' ? (
          <textarea className={surface.classes} placeholder={props.placeholder} rows={props.rows} style={surface.style} readOnly />
        ) : (
          <input type={inputTypeMap[props.fieldType] || 'text'} className={surface.classes} placeholder={props.placeholder} style={surface.style} readOnly />
        )}
      </FieldShell>
    );
  },
};

export default FormField;
