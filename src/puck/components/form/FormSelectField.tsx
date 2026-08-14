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

const formSelectFieldFields = {
  placeholder: { type: 'text', label: 'Placeholder' },
  options: {
    type: 'array',
    label: 'Options',
    arrayFields: { label: { type: 'text', label: 'Option Label' } } as any,
    defaultItemProps: { label: 'Option' },
  },
  ...commonInputFields,
} as Record<string, Field>;

export interface FormSelectFieldProps extends CommonInputProps {
  placeholder: string;
  options: { label: string }[];
}

/**
 * FormSelectField — a dropdown select. Options are designed in the editor
 * (array field); the storefront wrapper registers the live <select> with
 * react-hook-form.
 */
export const FormSelectField: ComponentConfig<FormSelectFieldProps> = {
  label: 'Dropdown Select',
  fields: formSelectFieldFields as ComponentConfig<FormSelectFieldProps>['fields'],
  defaultProps: {
    placeholder: 'Choose an option',
    options: [{ label: 'Option 1' }, { label: 'Option 2' }, { label: 'Option 3' }],
    ...commonInputDefaultProps,
  },
  render: (props: FormSelectFieldProps) => {
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
        <select className={surface.classes} style={surface.style} disabled>
          {props.placeholder && <option value="">{props.placeholder}</option>}
          {(props.options || []).map((opt, i) => (
            <option key={i} value={opt.label}>{opt.label}</option>
          ))}
        </select>
      </FieldShell>
    );
  },
};

export default FormSelectField;
