import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productTitleFields } from './producttitle.fields';
import type {
  ProductTitleProps, ProductTitleTag, ProductTitleSize, ProductTitleColor,
  ProductTitleAlignment, ProductTitleWeight,
} from './producttitle.types';
import type { ProductData } from '../ProductData';

const SIZE: Record<ProductTitleSize, string> = {
  default: 'text-3xl', sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl',
};
const COLOR: Record<ProductTitleColor, string> = {
  default: 'text-gray-900', black: 'text-black', gray: 'text-gray-700', primary: 'text-blue-600', white: 'text-white',
};
const ALIGN: Record<ProductTitleAlignment, string> = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT: Record<ProductTitleWeight, string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};

export interface ProductTitleWithProduct extends ProductTitleProps {
  /** Injected at render-time by the consumer wrapper. */
  product?: ProductData | null;
}

export const ProductTitle: ComponentConfig<ProductTitleWithProduct> = {
  label: 'Product Title',
  fields: productTitleFields as ComponentConfig<ProductTitleWithProduct>['fields'],
  defaultProps: {
    tag: 'h1', fontSize: '2xl', color: 'black', alignment: 'left', fontWeight: 'bold',
    marginTop: 'mt-0', marginBottom: 'mb-4', paddingX: 'px-0', paddingY: 'py-0',
  },
  render: (rawProps: any) => {
    const {
      tag = 'h1', fontSize = '2xl', color = 'black', alignment = 'left', fontWeight = 'bold',
      marginTop = 'mt-0', marginBottom = 'mb-4', paddingX = 'px-0', paddingY = 'py-0', product,
    } = rawProps as ProductTitleWithProduct;

    const className = `
      ${SIZE[(fontSize as ProductTitleSize) || 'default'] || 'text-2xl'}
      ${COLOR[(color as ProductTitleColor) || 'black'] || 'text-black'}
      ${ALIGN[(alignment as ProductTitleAlignment) || 'left'] || 'text-left'}
      ${WEIGHT[(fontWeight as ProductTitleWeight) || 'bold'] || 'font-bold'}
      ${marginTop || ''} ${marginBottom || ''}
      ${paddingX || ''} ${paddingY || ''}
      ${!product ? 'text-gray-400 italic' : ''}
    `;

    const content = product?.title || 'Product Title Will Appear Here';
    const Tag = (tag as ProductTitleTag) || 'h1';
    return React.createElement(Tag, { className: className.trim() }, content);
  },
};

export default ProductTitle;
