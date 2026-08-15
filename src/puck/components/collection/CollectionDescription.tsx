import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';
import {
  sharedTypographyFields,
  buildTypographyClasses,
  buildLayoutClasses,
  SPACING_OPTIONS,
} from '../../design-system';

const collectionDescriptionFields = {
  ...sharedTypographyFields,
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
  maxWidth: { type: 'text', label: 'Max Width (e.g. max-w-3xl or 768px)' },
} as Record<string, Field>;

export interface CollectionDescriptionProps {
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  textColor: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;
  marginBottom: string;
  maxWidth: string;
}

export interface CollectionDescriptionWithData extends CollectionDescriptionProps {
  text?: string;
}

export const CollectionDescription: ComponentConfig<CollectionDescriptionWithData> = {
  label: 'Collection Description',
  fields: collectionDescriptionFields as ComponentConfig<CollectionDescriptionWithData>['fields'],
  defaultProps: {
    fontSize: 'base',
    fontWeight: 'normal',
    textAlign: 'left',
    textColor: '#6b7280',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textTransform: 'none',
    marginBottom: '6',
    maxWidth: 'max-w-3xl',
  },
  render: (raw: any) => {
    const { textAlign = 'left', textColor, maxWidth } = raw as CollectionDescriptionWithData;
    const text = (raw as any).text ?? 'Explore our curated collection of premium products, carefully selected for quality and style.';
    const alignmentClass = textAlign === 'center' ? 'mx-auto' : textAlign === 'right' ? 'ml-auto' : '';
    return (
      <p
        className={`${buildTypographyClasses(raw)} ${buildLayoutClasses(raw)} ${maxWidth || ''} ${alignmentClass}`}
        style={textColor ? { color: resolveColor(textColor) } : undefined}
      >
        {text}
      </p>
    );
  },
};

export default CollectionDescription;
