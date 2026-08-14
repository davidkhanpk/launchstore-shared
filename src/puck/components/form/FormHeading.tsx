import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  TEXT_ALIGN_OPTIONS,
  LINE_HEIGHT_OPTIONS,
  SPACING_OPTIONS,
  resolveColor,
} from '../../design-system';

const formHeadingFields = {
  // Content
  text: { type: 'textarea', label: 'Text' },
  // Typography
  fontSize: { type: 'select', label: 'Font Size', options: FONT_SIZE_OPTIONS },
  fontWeight: { type: 'select', label: 'Font Weight', options: FONT_WEIGHT_OPTIONS },
  textAlign: { type: 'select', label: 'Text Align', options: TEXT_ALIGN_OPTIONS },
  lineHeight: { type: 'select', label: 'Line Height', options: LINE_HEIGHT_OPTIONS },
  textColor: { type: 'text', label: 'Text Color (token or hex)' },
  // Layout
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
} as Record<string, Field>;

export interface FormHeadingProps {
  text: string;
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  lineHeight: string;
  textColor: string;
  marginBottom: string;
}

/** FormHeading — display-only heading/instruction text inside a form. */
export const FormHeading: ComponentConfig<FormHeadingProps> = {
  label: 'Form Heading',
  fields: formHeadingFields as ComponentConfig<FormHeadingProps>['fields'],
  defaultProps: {
    text: 'Section heading or instruction text',
    fontSize: 'base',
    fontWeight: 'semibold',
    textAlign: 'left',
    lineHeight: 'normal',
    textColor: '#111827',
    marginBottom: '2',
  },
  render: ({ text, fontSize, fontWeight, textAlign, lineHeight, textColor, marginBottom }: FormHeadingProps) => (
    <p
      className={`text-${fontSize} font-${fontWeight} text-${textAlign} leading-${lineHeight} mb-${marginBottom}`}
      style={{ color: resolveColor(textColor) }}
    >
      {text}
    </p>
  ),
};

export default FormHeading;
