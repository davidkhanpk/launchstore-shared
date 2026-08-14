import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  SPACING_OPTIONS,
  RADIUS_OPTIONS,
  SHADOW_OPTIONS,
  BORDER_WIDTH_OPTIONS,
  resolveColor,
} from '../../design-system';

export const MAX_WIDTH_OPTIONS = [
  { label: 'Full', value: 'full' },
  { label: 'S (384px)', value: 'sm' },
  { label: 'M (448px)', value: 'md' },
  { label: 'L (512px)', value: 'lg' },
  { label: 'XL (576px)', value: 'xl' },
  { label: '2XL (672px)', value: '2xl' },
];

const BORDER_WIDTH_CLASS: Record<string, string> = {
  '0': 'border-0',
  '': 'border',
  '2': 'border-2',
  '4': 'border-4',
};

const formContainerFields = {
  // Layout
  maxWidth: { type: 'select', label: 'Max Width', options: MAX_WIDTH_OPTIONS },
  gap: { type: 'select', label: 'Field Spacing', options: SPACING_OPTIONS },
  paddingX: { type: 'select', label: 'Padding X', options: SPACING_OPTIONS },
  paddingY: { type: 'select', label: 'Padding Y', options: SPACING_OPTIONS },
  marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
  // Colors & effects
  backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
  borderWidth: { type: 'select', label: 'Border Width', options: BORDER_WIDTH_OPTIONS },
  borderColor: { type: 'text', label: 'Border Color (token or hex)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
  shadow: { type: 'select', label: 'Shadow', options: SHADOW_OPTIONS },
} as Record<string, Field>;

export interface FormContainerProps {
  /**
   * Bound to the Form record id by the designer (injected on load and
   * force-kept on save). NOT a visible field — the id comes from the URL.
   */
  formId: string;
  maxWidth: string;
  gap: string;
  paddingX: string;
  paddingY: string;
  marginTop: string;
  marginBottom: string;
  backgroundColor: string;
  borderWidth: string;
  borderColor: string;
  borderRadius: string;
  shadow: string;
}

/**
 * FormContainer — the shell of a Puck-designed form. Pure layout/styling:
 * field spacing, padding, background, border, radius. Submit behavior
 * (button text, success message, redirect) lives on the FormSubmitButton.
 * Presentational in the editor (a DropZone that accepts field components);
 * the storefront wrapper renders the same tree inside a live <form>.
 */
export const FormContainer: ComponentConfig<FormContainerProps> = {
  label: 'Form Container',
  fields: formContainerFields as ComponentConfig<FormContainerProps>['fields'],
  defaultProps: {
    formId: '',
    maxWidth: 'md',
    gap: '4',
    paddingX: '4',
    paddingY: '4',
    marginTop: '0',
    marginBottom: '0',
    backgroundColor: '',
    borderWidth: '0',
    borderColor: '',
    borderRadius: 'lg',
    shadow: 'none',
  },
  render: ({
    formId, maxWidth, gap, paddingX, paddingY, marginTop, marginBottom,
    backgroundColor, borderWidth, borderColor, borderRadius, shadow,
  }: FormContainerProps) => {
    const classes = [
      'w-full mx-auto flex flex-wrap',
      maxWidth && maxWidth !== 'full' ? `max-w-${maxWidth}` : '',
      `gap-${gap}`,
      `px-${paddingX} py-${paddingY}`,
      `mt-${marginTop} mb-${marginBottom}`,
      `rounded-${borderRadius}`,
      `shadow-${shadow}`,
      BORDER_WIDTH_CLASS[borderWidth] ?? 'border-0',
    ].filter(Boolean).join(' ');

    return (
      <div
        data-form-id={formId}
        className={classes}
        style={{
          backgroundColor: backgroundColor ? resolveColor(backgroundColor) : undefined,
          borderColor: borderColor ? resolveColor(borderColor) : undefined,
        }}
      >
        <DropZone zone="fields" />
      </div>
    );
  },
};

export default FormContainer;
