import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { TextProps } from './text.types';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  text: { type: 'textarea' as const, label: 'Text' },
  richText: { type: 'radio' as const, label: 'Rich Text', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  maxWidth: { type: 'text' as const, label: 'Max Width (CSS value, e.g. 600px)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Text: ComponentConfig<TextProps> = {
  label: 'Text',
  fields: allFields as any,
  defaultProps: {
    text: 'Add your text content here. You can write multiple paragraphs, include line breaks, and format your content as needed.',
    richText: false,
    maxWidth: '',
    ...defaultTypographyProps,
    lineHeight: 'relaxed',
    textColor: '#374151',
    ...defaultLayoutProps,
    marginBottom: 'md',
  } as TextProps,
  render: (rawProps: any) => {
    const {
      text, richText, maxWidth,
      fontSize, fontWeight, lineHeight, textAlign, textColor,
      marginTop, marginBottom, paddingX, paddingY,
    } = rawProps;

    const className = [
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      color: resolveColor(textColor) || '#374151',
      maxWidth: maxWidth || undefined,
    };

    const html = typeof text === 'string' ? text.replace(/\n/g, '<br />') : '';

    return (
      <div className={className} style={style}>
        {richText ? (
          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <p style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
        )}
      </div>
    );
  },
};

export default Text;
