import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { RichTextContentProps } from './richtext.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  sharedColorFields,
  buildTypographyClasses,
  buildLayoutClasses,
  buildColorClasses,
  defaultTypographyProps,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

const MAX_WIDTH_MAP: Record<string, string> = {
  'max-w-2xl': '640px',
  'max-w-3xl': '768px',
  'max-w-5xl': '1024px',
  'max-w-none': 'none',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  content: { type: 'textarea' as const, label: 'Content (HTML allowed)' },
  maxWidth: {
    type: 'select' as const, label: 'Max Width',
    options: [
      { label: 'Narrow (640px)', value: 'max-w-2xl' },
      { label: 'Normal (768px)', value: 'max-w-3xl' },
      { label: 'Wide (1024px)', value: 'max-w-5xl' },
      { label: 'Full Width', value: 'max-w-none' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Accordion config ─────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['content', 'maxWidth'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
    {
      label: 'Colors',
      fieldKeys: ['backgroundColor', 'borderRadius'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const RichTextContent: ComponentConfig<RichTextContentProps> = {
  label: 'Rich Text Content',
  fields: accordionFields as any,
  defaultProps: {
    content: '',
    maxWidth: 'max-w-3xl',
    ...defaultTypographyProps,
    lineHeight: 'relaxed',
    textColor: '#374151',
    ...defaultLayoutProps,
    paddingY: 'lg',
    ...defaultColorProps,
  } as RichTextContentProps,
  render: (rawProps: any) => {
    const {
      content, maxWidth,
      fontSize, fontWeight, textAlign, textColor, lineHeight,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps;

    // Guard against null/undefined/object content — prevents [object Object]
    const html = typeof content === 'string' ? content : '';
    const maxWidthCss = MAX_WIDTH_MAP[maxWidth] ?? '768px';

    const wrapperClassName = [
      'mx-auto px-4 sm:px-6',
      buildLayoutClasses(rawProps),
      buildColorClasses(rawProps),
    ].filter(Boolean).join(' ');

    const wrapperStyle: React.CSSProperties = {
      maxWidth: maxWidthCss,
      margin: '0 auto',
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    const proseClassName = [
      'prose prose-gray prose-lg max-w-none',
      buildTypographyClasses(rawProps),
    ].filter(Boolean).join(' ');

    const proseStyle: React.CSSProperties = {
      color: resolveColor(textColor) || '#374151',
    };

    return (
      <div className={wrapperClassName} style={wrapperStyle}>
        <div
          className={proseClassName}
          style={proseStyle}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    );
  },
};

export default RichTextContent;
