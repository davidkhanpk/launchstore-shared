import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import {
  sharedTypographyFields,
  buildTypographyClasses,
  buildLayoutClasses,
  FONT_SIZE_OPTIONS,
  FONT_WEIGHT_OPTIONS,
  SPACING_OPTIONS,
} from '../../design-system';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const collectionTitleFields = {
  tag: { type: 'select', label: 'HTML Tag', options: [{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' }] },
  ...sharedTypographyFields,
  marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
  showProductCount: { type: 'radio', label: 'Show Product Count', options: RADIO_YES_NO },
} as Record<string, Field>;

export interface CollectionTitleProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4';
  fontSize: string;
  fontWeight: string;
  textAlign: string;
  textColor: string;
  lineHeight: string;
  letterSpacing: string;
  textTransform: string;
  marginBottom: string;
  showProductCount: boolean;
}

export interface CollectionTitleWithData extends CollectionTitleProps {
  title?: string;
  productCount?: number;
}

export const CollectionTitle: ComponentConfig<CollectionTitleWithData> = {
  label: 'Collection Title',
  fields: collectionTitleFields as ComponentConfig<CollectionTitleWithData>['fields'],
  defaultProps: {
    tag: 'h1',
    fontSize: '3xl',
    fontWeight: 'bold',
    textAlign: 'left',
    textColor: '#111827',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textTransform: 'none',
    marginBottom: '4',
    showProductCount: true,
  },
  render: (raw: any) => {
    const { tag = 'h1', showProductCount } = raw as CollectionTitleWithData;
    const title = (raw as any).title ?? 'Sample Collection';
    const productCount: number = (raw as any).productCount ?? 24;
    const Tag = tag as any;
    return (
      <Tag className={`${buildTypographyClasses(raw)} ${buildLayoutClasses(raw)}`}>
        {title}
        {showProductCount && <span className="text-gray-500 text-base font-normal ml-2">({productCount} products)</span>}
      </Tag>
    );
  },
};

export default CollectionTitle;
