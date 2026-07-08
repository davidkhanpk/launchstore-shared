import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { relatedProductsFields } from './relatedproducts.fields';
import type { RelatedProductsProps } from './relatedproducts.types';
import { ProductGridRenderer } from './productgrid';
import type { CarouselProduct } from '../../swiper/ProductCarousel';

export interface RelatedProductsWithData extends RelatedProductsProps {
  products?: CarouselProduct[];
  taglineRender?: (tagline: string) => React.ReactNode;
}

export const RelatedProducts: ComponentConfig<RelatedProductsWithData> = {
  label: 'Related Products',
  fields: relatedProductsFields as ComponentConfig<RelatedProductsWithData>['fields'],
  defaultProps: {
    showTitle: true, title: 'You Might Also Like',
    showTagline: true, tagline: 'Check out these related products',
    relatedBy: 'collection',
    displayStyle: 'grid', maxProducts: 8, productCardTemplateId: '',
    gridColumns: '4', containerPadding: 'md',
  },
  render: (rawProps: any) => {
    const { products = [], showTagline, tagline, ...gridProps } = rawProps as RelatedProductsWithData;
    return (
      <>
        {showTagline && tagline && (
          <div className="text-center mb-12 text-lg text-gray-600 max-w-2xl mx-auto">
            {tagline}
          </div>
        )}
        <ProductGridRenderer products={products} {...gridProps} />
      </>
    );
  },
};

export default RelatedProducts;
