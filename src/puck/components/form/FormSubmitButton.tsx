import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  SPACING_OPTIONS,
  RADIUS_OPTIONS,
  SHADOW_OPTIONS,
  resolveColor,
} from '../../design-system';

const RADIO_YES_NO = [
  { label: 'Yes', value: true },
  { label: 'No', value: false },
];

const formSubmitButtonFields = {
  // Content
  buttonText: { type: 'text', label: 'Button Text' },
  fullWidth: { type: 'radio', label: 'Full Width', options: RADIO_YES_NO },
  // Typography
  fontSize: { type: 'select', label: 'Font Size', options: FONT_SIZE_OPTIONS },
  fontWeight: { type: 'select', label: 'Font Weight', options: FONT_WEIGHT_OPTIONS },
  // Colors & effects
  backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
  textColor: { type: 'text', label: 'Text Color (token or hex)' },
  hoverBackgroundColor: { type: 'text', label: 'Hover Background (token or hex)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
  shadow: { type: 'select', label: 'Shadow', options: SHADOW_OPTIONS },
  // Layout
  paddingX: { type: 'select', label: 'Padding X', options: SPACING_OPTIONS },
  paddingY: { type: 'select', label: 'Padding Y', options: SPACING_OPTIONS },
  marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
} as Record<string, Field>;

export interface FormSubmitButtonProps {
  buttonText: string;
  fullWidth: boolean;
  fontSize: string;
  fontWeight: string;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  borderRadius: string;
  shadow: string;
  paddingX: string;
  paddingY: string;
  marginTop: string;
}

/**
 * FormSubmitButton — submits the live form. The storefront wrapper reads
 * isSubmitting from FormContext (disabled + "Submitting…" label swap).
 */
export const FormSubmitButton: ComponentConfig<FormSubmitButtonProps> = {
  label: 'Submit Button',
  fields: formSubmitButtonFields as ComponentConfig<FormSubmitButtonProps>['fields'],
  defaultProps: {
    buttonText: 'Submit',
    fullWidth: true,
    fontSize: 'sm',
    fontWeight: 'semibold',
    backgroundColor: '#111827',
    textColor: '#ffffff',
    hoverBackgroundColor: '#1f2937',
    borderRadius: 'md',
    shadow: 'sm',
    paddingX: '4',
    paddingY: '2',
    marginTop: '2',
  },
  render: ({
    buttonText, fullWidth, fontSize, fontWeight, backgroundColor, textColor,
    hoverBackgroundColor, borderRadius, shadow, paddingX, paddingY, marginTop,
  }: FormSubmitButtonProps) => {
    const hoverCss = `.form-submit-btn:hover { background-color: ${resolveColor(hoverBackgroundColor)} !important; }`;
    return (
      <div className={`mt-${marginTop} ${fullWidth ? 'w-full' : 'inline-block'}`}>
        <style dangerouslySetInnerHTML={{ __html: hoverCss }} />
        <button
          type="submit"
          className={[
            'form-submit-btn transition-all duration-200',
            `text-${fontSize} font-${fontWeight}`,
            `px-${paddingX} py-${paddingY}`,
            `rounded-${borderRadius} shadow-${shadow}`,
            fullWidth ? 'w-full' : '',
          ].filter(Boolean).join(' ')}
          style={{ backgroundColor: resolveColor(backgroundColor), color: resolveColor(textColor) }}
        >
          {buttonText}
        </button>
      </div>
    );
  },
};

export default FormSubmitButton;
