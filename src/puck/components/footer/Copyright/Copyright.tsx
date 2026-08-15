import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CopyrightProps } from './copyright.types';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  buildLayoutClasses,
  buildTypographyClasses,
  TEXT_ALIGN_OPTIONS,
  FONT_SIZE_OPTIONS,
  LETTER_SPACING_OPTIONS,
  TEXT_TRANSFORM_OPTIONS,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

const ALIGN: Record<string, string> = { left: 'text-left', center: 'text-center', right: 'text-right' };

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  text: { type: 'textarea' as const, label: 'Copyright Text' },
  showYear: { type: 'radio' as const, label: 'Show Current Year', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showDivider: { type: 'radio' as const, label: 'Show Top Divider', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  dividerColor: { type: 'text' as const, label: 'Divider Color (hex or theme token)' },
};

// ── Typography fields (component-specific alignment + shared) ───────────────

const typographyFields = {
  textAlign: { type: 'select' as const, label: 'Text Align', options: TEXT_ALIGN_OPTIONS },
  fontSize: { type: 'select' as const, label: 'Font Size', options: FONT_SIZE_OPTIONS },
  letterSpacing: { type: 'select' as const, label: 'Letter Spacing', options: LETTER_SPACING_OPTIONS },
  textTransform: { type: 'select' as const, label: 'Text Transform', options: TEXT_TRANSFORM_OPTIONS },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...typographyFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Copyright: ComponentConfig<CopyrightProps> = {
  label: 'Copyright',
  fields: allFields as any,
  defaultProps: {
    text: 'All rights reserved.',
    showYear: true,
    ...defaultTypographyProps,
    textAlign: 'center',
    fontSize: 'sm',
    textColor: '#6b7280',
    showDivider: true,
    dividerColor: '#e5e7eb',
    ...defaultLayoutProps,
    paddingY: 'md',
  } as CopyrightProps,
  render: (rawProps: any) => {
    const {
      text, showYear, textAlign, textColor,
      showDivider, dividerColor, paddingY, marginTop, marginBottom, paddingX,
    } = rawProps;

    const currentYear = new Date().getFullYear();
    const typographyClasses = buildTypographyClasses(rawProps);
    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div
        className={`w-full ${layoutClasses}`}
        style={{
          borderTop: showDivider ? `1px solid ${resolveColor(dividerColor) || dividerColor}` : 'none',
        }}
      >
        <div className="container mx-auto">
          <p
            className={`${typographyClasses}`}
            style={{ color: resolveColor(textColor) }}
          >
            {showYear && `© ${currentYear} `}
            {text}
          </p>
        </div>
      </div>
    );
  },
};

export default Copyright;
