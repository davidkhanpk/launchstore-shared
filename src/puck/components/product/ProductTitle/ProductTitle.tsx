import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ProductTitleProps, ProductTitleTag } from './producttitle.types';
import type { ProductData } from '../ProductData';
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
  tag: {
    type: 'select' as const, label: 'HTML Tag',
    options: [
      { label: 'H1', value: 'h1' },
      { label: 'H2', value: 'h2' },
      { label: 'H3', value: 'h3' },
      { label: 'H4', value: 'h4' },
    ],
  },
  level: {
    type: 'select' as const, label: 'Heading Level',
    options: [
      { label: 'H1', value: 'h1' },
      { label: 'H2', value: 'h2' },
      { label: 'H3', value: 'h3' },
      { label: 'H4', value: 'h4' },
      { label: 'H5', value: 'h5' },
      { label: 'H6', value: 'h6' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

export interface ProductTitleWithProduct extends ProductTitleProps {
  /** Injected at render-time by the consumer wrapper. */
  product?: ProductData | null;
}

// ── Component ───────────────────────────────────────────────────────────────

export const ProductTitle: ComponentConfig<ProductTitleWithProduct> = {
  label: 'Product Title',
  fields: allFields as any,
  defaultProps: {
    tag: 'h1',
    level: 'h1',
    ...defaultTypographyProps,
    fontWeight: 'bold',
    textColor: '#111827',
    textAlign: 'left',
    ...defaultLayoutProps,
    marginBottom: 'md',
  } as ProductTitleProps,
  render: (rawProps: any) => {
    const {
      tag, fontSize, fontWeight, textAlign, textColor,
      marginTop, marginBottom, product,
    } = rawProps as ProductTitleWithProduct;

    const hasProduct = !!product;
    const content = product?.title || 'Product Title Will Appear Here';
    const Tag = (tag as ProductTitleTag) || 'h1';

    const className = [
      buildTypographyClasses({ fontSize, fontWeight, textAlign }),
      buildLayoutClasses({ marginTop, marginBottom }),
      hasProduct ? '' : 'italic',
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      color: hasProduct
        ? (resolveColor(textColor) || '#111827')
        : '#9ca3af',
    };

    return React.createElement(Tag, { className, style }, content);
  },
};

export default ProductTitle;
