import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CopyrightProps } from './copyright.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  buildLayoutClasses,
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
  alignment: {
    type: 'select' as const, label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },
  fontSize: {
    type: 'select' as const, label: 'Font Size',
    options: [
      { label: 'Extra Small', value: 'xs' },
      { label: 'Small', value: 'sm' },
      { label: 'Base', value: 'base' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...typographyFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['text', 'showYear', 'showDivider', 'dividerColor'],
    },
    {
      label: 'Typography',
      fieldKeys: ['alignment', 'fontSize', 'textColor'],
    },
    {
      label: 'Layout',
      fieldKeys: ['paddingY', 'marginTop', 'marginBottom', 'paddingX'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Copyright: ComponentConfig<CopyrightProps> = {
  label: 'Copyright',
  fields: accordionFields as any,
  defaultProps: {
    text: 'All rights reserved.',
    showYear: true,
    alignment: 'center',
    ...defaultTypographyProps,
    fontSize: 'sm',
    textColor: '#6b7280',
    showDivider: true,
    dividerColor: '#e5e7eb',
    ...defaultLayoutProps,
    paddingY: 'md',
  } as CopyrightProps,
  render: (rawProps: any) => {
    const {
      text, showYear, alignment, fontSize, textColor,
      showDivider, dividerColor, paddingY, marginTop, marginBottom, paddingX,
    } = rawProps;

    const currentYear = new Date().getFullYear();
    const fsClass = fontSize === 'xs' ? 'text-xs' : fontSize === 'sm' ? 'text-sm' : 'text-base';
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
            className={`${ALIGN[alignment || 'center'] || 'text-center'} ${fsClass}`}
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
