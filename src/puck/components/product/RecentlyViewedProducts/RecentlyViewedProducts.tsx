import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { recentlyViewedProductsFields } from './recentlyviewedproducts.fields';
import type { RecentlyViewedProductsProps } from './recentlyviewedproducts.types';
import { ProductGridRenderer } from '../RelatedProducts/productgrid';
import type { CarouselProduct } from '../../swiper/ProductCarousel';

export interface RecentlyViewedProductsWithData extends RecentlyViewedProductsProps {
  products?: CarouselProduct[];
}

export const RecentlyViewedProducts: ComponentConfig<RecentlyViewedProductsWithData> = {
  label: 'Recently Viewed Products',
  fields: recentlyViewedProductsFields as ComponentConfig<RecentlyViewedProductsWithData>['fields'],
  defaultProps: {
    showTitle: true, title: 'Recently Viewed',
    displayStyle: 'carousel', maxProducts: 8, containerPadding: 'md',
  },
  render: (rawProps: any) => {
    const { products = [], ...rest } = rawProps as RecentlyViewedProductsWithData;
    return <ProductGridRenderer products={products} {...rest} />;
  },
};

export default RecentlyViewedProducts;
