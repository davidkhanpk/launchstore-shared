import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { SPACING_OPTIONS, RADIUS_OPTIONS, resolveColor } from '../../design-system';
import { MAX_WIDTH_OPTIONS } from './FormContainer';

const Clipboard = ({ size = 32 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" /><rect x="9" y="3" width="6" height="4" rx="1" /></svg>
);

const formEmbedFields = {
  formId: { type: 'text', label: 'Form ID' },
  maxWidth: { type: 'select', label: 'Max Width', options: MAX_WIDTH_OPTIONS },
  paddingX: { type: 'select', label: 'Padding X', options: SPACING_OPTIONS },
  paddingY: { type: 'select', label: 'Padding Y', options: SPACING_OPTIONS },
  backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
  borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
} as Record<string, Field>;

export interface FormEmbedProps {
  formId: string;
  maxWidth: string;
  paddingX: string;
  paddingY: string;
  backgroundColor: string;
  borderRadius: string;
}

/**
 * FormEmbed — places a form designed in Dashboard → Forms onto any page.
 * This render is the editor fallback (placeholder card); both the dashboard
 * editor and the storefront override `render` to display the actual form.
 */
export const FormEmbed: ComponentConfig<FormEmbedProps> = {
  label: 'Form Embed',
  fields: formEmbedFields as ComponentConfig<FormEmbedProps>['fields'],
  defaultProps: {
    formId: '',
    maxWidth: 'md',
    paddingX: '0',
    paddingY: '0',
    backgroundColor: '',
    borderRadius: 'lg',
  },
  render: ({ formId, maxWidth, paddingX, paddingY, backgroundColor, borderRadius }: FormEmbedProps) => {
    const classes = [
      'w-full mx-auto',
      maxWidth && maxWidth !== 'full' ? `max-w-${maxWidth}` : '',
      `px-${paddingX} py-${paddingY}`,
      `rounded-${borderRadius}`,
    ].filter(Boolean).join(' ');

    return (
      <div
        className={classes}
        style={{ backgroundColor: backgroundColor ? resolveColor(backgroundColor) : undefined }}
      >
        <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 p-6 flex flex-col items-center justify-center text-center gap-3">
          <Clipboard />
          <div>
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">Form Embed</p>
            {formId ? (
              <p className="mt-1 text-xs font-mono text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded inline-block break-all">{formId}</p>
            ) : (
              <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">Paste a Form ID in the panel on the right →</p>
            )}
          </div>
          <p className="text-[10px] text-gray-400 dark:text-gray-500 max-w-xs">Create and design your form in <strong>Dashboard → Forms</strong>, then copy the Form ID and paste it here.</p>
        </div>
      </div>
    );
  },
};

export default FormEmbed;
