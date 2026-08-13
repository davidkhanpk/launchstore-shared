import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { RelatedProductsProps } from './relatedproducts.types';
import { ProductGridRenderer } from './productgrid';
import type { CarouselProduct } from '../../swiper/ProductCarousel';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

export interface RelatedProductsWithData extends RelatedProductsProps {
  products?: CarouselProduct[];
  taglineRender?: (tagline: string) => React.ReactNode;
}

// ── Content fields (component-specific) ─────────────────────────────────────

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const contentFields = {
  showTitle: { type: 'radio' as const, label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text' as const, label: 'Title' },
  showTagline: { type: 'radio' as const, label: 'Show Tagline', options: RADIO_YES_NO },
  tagline: { type: 'textarea' as const, label: 'Tagline' },
  relatedBy: {
    type: 'select' as const, label: 'Show Products Related By',
    options: [
      { label: 'Same Collection', value: 'collection' },
      { label: 'Similar Tags', value: 'tags' },
      { label: 'Same Category', value: 'category' },
      { label: 'Upsells (Manual)', value: 'upsell' },
      { label: 'Cross-sells (Manual)', value: 'crosssell' },
      { label: 'Frequently Bought Together', value: 'frequently_bought' },
    ],
  },
  displayStyle: {
    type: 'select' as const, label: 'Display Style',
    options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
  },
  maxProducts: { type: 'number' as const, label: 'Number of Products' },
  productCardTemplateId: { type: 'text' as const, label: 'Product Card Template ID (optional)' },
  gridColumns: {
    type: 'select' as const, label: 'Grid Columns',
    options: [
      { label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' },
      { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' },
    ],
  },
  containerPadding: {
    type: 'select' as const, label: 'Container Padding',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
    ],
  },
};

// ── All flat fields (for the accordion to reference by key) ─────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: [
        'showTitle', 'title', 'showTagline', 'tagline',
        'relatedBy', 'displayStyle', 'maxProducts',
        'productCardTemplateId', 'gridColumns', 'containerPadding',
      ],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const RelatedProducts: ComponentConfig<RelatedProductsWithData> = {
  label: 'Related Products',
  fields: accordionFields as any,
  defaultProps: {
    showTitle: true,
    title: 'You Might Also Like',
    showTagline: true,
    tagline: 'Check out these related products',
    relatedBy: 'collection',
    displayStyle: 'grid',
    maxProducts: 8,
    productCardTemplateId: '',
    gridColumns: '4',
    containerPadding: 'md',
    ...defaultTypographyProps,
    textColor: '#374151',
    ...defaultLayoutProps,
    marginBottom: 'md',
  } as RelatedProductsWithData,
  render: (rawProps: any) => {
    const {
      products = [], showTagline, tagline,
      marginTop, marginBottom,
      fontSize, fontWeight, lineHeight, textAlign, textColor,
      ...gridProps
    } = rawProps as RelatedProductsWithData & {
      marginTop?: string; marginBottom?: string;
      fontSize?: string; fontWeight?: string; lineHeight?: string;
      textAlign?: string; textColor?: string;
    };

    const taglineStyle: React.CSSProperties = {
      textAlign: (textAlign as React.CSSProperties['textAlign']) || 'center',
      fontSize: fontSize || '1.125rem',
      fontWeight: Number(fontWeight) || 400,
      lineHeight: lineHeight || '1.625',
      color: resolveColor(textColor) || '#374151',
      maxWidth: '42rem',
      margin: '0 auto 3rem auto',
    };

    const wrapperStyle: React.CSSProperties = {
      marginTop: marginTop || undefined,
      marginBottom: marginBottom || undefined,
    };

    return (
      <div style={wrapperStyle}>
        {showTagline && tagline && (
          <div style={taglineStyle}>{tagline}</div>
        )}
        <ProductGridRenderer products={products} {...gridProps} />
      </div>
    );
  },
};

export default RelatedProducts;
