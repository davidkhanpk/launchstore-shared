import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { textFields } from './text.fields';
import type { TextProps } from './text.types';

const FONT_SIZE: Record<TextProps['fontSize'], string> = {
  xs: 'text-xs', sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl',
};
const WEIGHT: Record<TextProps['fontWeight'], string> = {
  light: 'font-light', normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const LINE_HEIGHT: Record<TextProps['lineHeight'], string> = {
  tight: 'leading-tight', snug: 'leading-snug', normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose',
};
const ALIGN: Record<TextProps['textAlign'], string> = {
  left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify',
};

export const Text: ComponentConfig<TextProps> = {
  label: 'Text',
  fields: textFields as ComponentConfig<TextProps>['fields'],
  defaultProps: {
    text: 'Add your text content here. You can write multiple paragraphs, include line breaks, and format your content as needed.',
    richText: false,
    fontSize: 'base',
    fontWeight: 'normal',
    lineHeight: 'relaxed',
    textAlign: 'left',
    color: '#374151',
    maxWidth: '',
    marginTop: 0,
    marginBottom: 16,
    paddingX: 0,
    paddingY: 0,
  },
  render: ({
    text, richText, fontSize, fontWeight, lineHeight, textAlign, color, maxWidth,
    marginTop, marginBottom, paddingX, paddingY,
  }) => (
    <div
      className={`text-component ${FONT_SIZE[fontSize] || 'text-base'} ${WEIGHT[fontWeight] || 'font-normal'} ${LINE_HEIGHT[lineHeight] || 'leading-relaxed'} ${ALIGN[textAlign] || 'text-left'}`}
      style={{
        color: resolveColor(color),
        maxWidth: maxWidth || undefined,
        marginTop: marginTop != null ? `${marginTop}px` : '0px',
        marginBottom: marginBottom != null ? `${marginBottom}px` : '16px',
        paddingLeft: paddingX != null ? `${paddingX}px` : '0px',
        paddingRight: paddingX != null ? `${paddingX}px` : '0px',
        paddingTop: paddingY != null ? `${paddingY}px` : '0px',
        paddingBottom: paddingY != null ? `${paddingY}px` : '0px',
      }}
    >
      {richText ? (
        <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }} />
      ) : (
        <p className="whitespace-pre-wrap">{text}</p>
      )}
    </div>
  ),
};

export default Text;
