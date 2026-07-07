import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productDescriptionFields } from './productdescription.fields';
import type {
  ProductDescriptionProps, ProductDescriptionSize, ProductDescriptionColor,
  ProductDescriptionLineHeight, ProductDescriptionMaxWidth,
} from './productdescription.types';
import type { ProductData } from '../ProductData';

const SIZE: Record<ProductDescriptionSize, string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
const COLOR: Record<ProductDescriptionColor, string> = { default: 'text-gray-900', gray: 'text-gray-700', black: 'text-black' };
const LINE: Record<ProductDescriptionLineHeight, string> = { tight: 'leading-tight', normal: 'leading-normal', relaxed: 'leading-relaxed' };
const MAX_WIDTH: Record<ProductDescriptionMaxWidth, string> = { full: 'max-w-full', prose: 'max-w-prose', narrow: 'max-w-2xl' };

const PLACEHOLDER = (
  <div className="text-gray-400 italic">
    <p>Product description will appear here. This could be a detailed explanation of the product features, materials, sizing information, and care instructions.</p>
    <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  </div>
);

export interface ProductDescriptionWithProduct extends ProductDescriptionProps {
  product?: ProductData | null;
}

export const ProductDescription: ComponentConfig<ProductDescriptionWithProduct> = {
  label: 'Product Description',
  fields: productDescriptionFields as ComponentConfig<ProductDescriptionWithProduct>['fields'],
  defaultProps: {
    fontSize: 'base', color: 'gray', lineHeight: 'normal', maxWidth: 'prose',
    marginTop: 'mt-4', marginBottom: 'mb-4', paddingX: 'px-0', paddingY: 'py-0',
  },
  render: (rawProps: any) => {
    const {
      fontSize = 'base', color = 'gray', lineHeight = 'normal', maxWidth = 'prose',
      marginTop = 'mt-4', marginBottom = 'mb-4', paddingX = 'px-0', paddingY = 'py-0', product,
    } = rawProps as ProductDescriptionWithProduct;

    const sizeCls = SIZE[(fontSize as ProductDescriptionSize) || 'base'] || 'text-base';
    const colorCls = COLOR[(color as ProductDescriptionColor) || 'gray'] || 'text-gray-700';
    const lineCls = LINE[(lineHeight as ProductDescriptionLineHeight) || 'normal'] || 'leading-normal';
    const maxCls = MAX_WIDTH[(maxWidth as ProductDescriptionMaxWidth) || 'prose'] || 'max-w-prose';
    const spacing = `${marginTop || ''} ${marginBottom || ''} ${paddingX || ''} ${paddingY || ''}`.trim();

    if (!product || !product.description) {
      return (
        <div className={spacing}>
          <div className={`text-gray-400 italic ${sizeCls} ${lineCls} ${maxCls}`}>
            {PLACEHOLDER}
          </div>
        </div>
      );
    }

    return (
      <div
        className={`${sizeCls} ${colorCls} ${lineCls} ${maxCls} ${spacing} prose prose-gray`}
        dangerouslySetInnerHTML={{ __html: product.description }}
      />
    );
  },
};

export default ProductDescription;
