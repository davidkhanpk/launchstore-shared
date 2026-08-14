import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ProductDescriptionProps } from './productdescription.types';
import type { ProductData } from '../ProductData';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

const PLACEHOLDER = (
  <>
    <p>Product description will appear here. This could be a detailed explanation of the product features, materials, sizing information, and care instructions.</p>
    <p style={{ marginTop: '8px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </>
);

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  maxLines: { type: 'number' as const, label: 'Max Lines (0 = unlimited)' },
};

// ── Typography fields (no textAlign — description is left-aligned block) ─────

const typographyFields = {
  fontSize: sharedTypographyFields.fontSize,
  fontWeight: sharedTypographyFields.fontWeight,
  textColor: sharedTypographyFields.textColor,
  lineHeight: sharedTypographyFields.lineHeight,
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...typographyFields,
  ...sharedLayoutFields,
};

export interface ProductDescriptionWithProduct extends ProductDescriptionProps {
  product?: ProductData | null;
}

// ── Component ───────────────────────────────────────────────────────────────

export const ProductDescription: ComponentConfig<ProductDescriptionWithProduct> = {
  label: 'Product Description',
  fields: allFields as any,
  defaultProps: {
    maxLines: 0,
    ...defaultTypographyProps,
    fontSize: 'base',
    fontWeight: 'normal',
    textColor: '#4b5563',
    lineHeight: 'normal',
    ...defaultLayoutProps,
    marginTop: 'md',
    marginBottom: 'md',
  } as ProductDescriptionProps,
  render: (rawProps: any) => {
    const {
      maxLines, fontSize, fontWeight, textColor, lineHeight,
      marginTop, marginBottom, product,
    } = rawProps as ProductDescriptionWithProduct;

    const className = [
      buildTypographyClasses({ fontSize, fontWeight, lineHeight }),
      buildLayoutClasses({ marginTop, marginBottom }),
    ].filter(Boolean).join(' ');

    const color = resolveColor(textColor) || '#4b5563';

    const lineClamp = typeof maxLines === 'number' && maxLines > 0;

    const contentStyle: React.CSSProperties = lineClamp
      ? {
          color,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: maxLines,
          overflow: 'hidden',
        }
      : { color };

    if (!product || !product.description) {
      const placeholderStyle: React.CSSProperties = {
        ...contentStyle,
        color: '#9ca3af',
        fontStyle: 'italic',
      };
      return (
        <div className={className} style={placeholderStyle}>
          {PLACEHOLDER}
        </div>
      );
    }

    return (
      <div
        className={className}
        style={contentStyle}
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    );
  },
};

export default ProductDescription;
