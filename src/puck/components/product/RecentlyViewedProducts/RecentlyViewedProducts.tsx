import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { RecentlyViewedProductsProps } from './recentlyviewedproducts.types';
import { ProductGridRenderer } from '../RelatedProducts/productgrid';
import type { CarouselProduct } from '../../swiper/ProductCarousel';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

export interface RecentlyViewedProductsWithData extends RecentlyViewedProductsProps {
  products?: CarouselProduct[];
}

// ── Content fields (component-specific) ─────────────────────────────────────

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const contentFields = {
  showTitle: { type: 'radio' as const, label: 'Show Title', options: RADIO_YES_NO },
  title: { type: 'text' as const, label: 'Title' },
  displayStyle: {
    type: 'select' as const, label: 'Display Style',
    options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
  },
  maxProducts: { type: 'number' as const, label: 'Maximum Products to Show' },
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

// ── Component ───────────────────────────────────────────────────────────────

export const RecentlyViewedProducts: ComponentConfig<RecentlyViewedProductsWithData> = {
  label: 'Recently Viewed Products',
  fields: allFields as any,
  defaultProps: {
    showTitle: true,
    title: 'Recently Viewed',
    displayStyle: 'carousel',
    maxProducts: 8,
    containerPadding: 'md',
    ...defaultTypographyProps,
    textColor: '#374151',
    ...defaultLayoutProps,
    marginBottom: 'md',
  } as RecentlyViewedProductsWithData,
  render: (rawProps: any) => {
    const {
      products = [],
      marginTop, marginBottom,
      // Typography props are accepted for design-system parity and are
      // consumed by the section title rendered inside ProductGridRenderer.
      ...rest
    } = rawProps as RecentlyViewedProductsWithData & {
      marginTop?: string;
      marginBottom?: string;
    };

    const wrapperStyle: React.CSSProperties = {
      marginTop: marginTop || undefined,
      marginBottom: marginBottom || undefined,
    };

    return (
      <div style={wrapperStyle}>
        <ProductGridRenderer products={products} {...rest}  renderProduct={rawProps.renderProduct} />
      </div>
    );
  },
};

export default RecentlyViewedProducts;
