import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type {
  ProductPriceProps,
  ProductPriceSize,
  ProductPriceLayout,
} from './productprice.types';
import type { ProductData, ProductDataPrice } from '../ProductData';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

// ── Price has its own size ladder (not shared fontSize) ─────────────────────

const SIZE_MAP: Record<ProductPriceSize, string> = {
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  size: {
    type: 'select' as const, label: 'Size',
    options: [
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'X-Large', value: 'xl' },
      { label: '2X-Large', value: '2xl' },
    ],
  },
  showComparePrice: {
    type: 'radio' as const, label: 'Show Compare Price',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  showSavingsBadge: {
    type: 'radio' as const, label: 'Show Savings Badge',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  layout: {
    type: 'radio' as const, label: 'Layout',
    options: [
      { label: 'Horizontal', value: 'horizontal' },
      { label: 'Vertical', value: 'vertical' },
    ],
  },
};

// ── Typography fields (price has its own size — exclude fontSize) ────────────

const typographyFields = {
  fontWeight: sharedTypographyFields.fontWeight,
  textColor: sharedTypographyFields.textColor,
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...typographyFields,
  ...sharedLayoutFields,
};

const defaultResolvePrice = (_product: ProductData): ProductDataPrice | undefined => undefined;

export interface ProductPriceWithProduct extends ProductPriceProps {
  product?: ProductData | null;
}

// ── Component ───────────────────────────────────────────────────────────────

export const ProductPrice: ComponentConfig<ProductPriceWithProduct> = {
  label: 'Product Price',
  fields: allFields as any,
  defaultProps: {
    size: 'xl',
    showComparePrice: true,
    showSavingsBadge: true,
    layout: 'horizontal',
    fontWeight: 'semibold',
    textColor: '#111827',
    ...defaultLayoutProps,
  } as ProductPriceProps,
  render: (rawProps: any) => {
    const {
      size, showComparePrice, showSavingsBadge, layout, fontWeight, textColor,
      marginTop, marginBottom, resolvePrice, product,
    } = rawProps as ProductPriceWithProduct;

    const placeholderClassName = [
      'italic',
      buildLayoutClasses({ marginTop, marginBottom }),
    ].filter(Boolean).join(' ');

    const placeholderStyle: React.CSSProperties = {
      color: '#9ca3af',
    };

    if (!product || !product.variants || product.variants.length === 0) {
      return <div className={placeholderClassName} style={placeholderStyle}>Product price will appear here</div>;
    }

    const resolve = resolvePrice || defaultResolvePrice;
    const priceData = resolve(product);
    if (!priceData) return <div className={placeholderClassName} style={placeholderStyle}>Price not available</div>;

    const isHorizontal = (layout as ProductPriceLayout) !== 'vertical';
    const resolvedSize = SIZE_MAP[(size as ProductPriceSize) || 'xl'] || SIZE_MAP.xl;

    const containerClassName = [
      'flex',
      isHorizontal ? 'flex-row' : 'flex-col',
      'items-center',
      buildLayoutClasses({ marginTop, marginBottom }),
    ].filter(Boolean).join(' ');

    const containerStyle: React.CSSProperties = {
      gap: isHorizontal ? '12px' : '4px',
    };

    const priceClassName = fontWeight ? `font-${fontWeight}` : '';

    const priceStyle: React.CSSProperties = {
      fontSize: resolvedSize,
      color: resolveColor(textColor) || '#111827',
    };

    const isOnSale = priceData.price_type === 'sale' && !!priceData.percentage_diff;

    const compareStyle: React.CSSProperties = {
      color: '#6b7280',
      textDecoration: 'line-through',
      fontSize: '0.875rem',
    };

    const badgeStyle: React.CSSProperties = {
      backgroundColor: '#fee2e2',
      color: '#dc2626',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '0.75rem',
      fontWeight: 500,
    };

    return (
      <div className={containerClassName} style={containerStyle}>
        <span className={priceClassName} style={priceStyle}>{priceData.calculated_price}</span>
        {showComparePrice && isOnSale && priceData.original_price && (
          <span style={compareStyle}>{priceData.original_price}</span>
        )}
        {isOnSale && showSavingsBadge && priceData.percentage_diff && (
          <span style={badgeStyle}>Save {priceData.percentage_diff}</span>
        )}
      </div>
    );
  },
};

export default ProductPrice;
