import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productPriceFields } from './productprice.fields';
import type {
  ProductPriceProps, ProductPriceSize, ProductPriceColor,
  ProductPriceLayout, ProductPriceWeight,
} from './productprice.types';
import type { ProductData, ProductDataPrice } from '../ProductData';

const SIZE: Record<ProductPriceSize, string> = { sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const COLOR: Record<ProductPriceColor, string> = { default: 'text-gray-900', black: 'text-black', gray: 'text-gray-700', primary: 'text-blue-600' };
const WEIGHT: Record<ProductPriceWeight, string> = {
  normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};

const defaultResolvePrice = (_product: ProductData): ProductDataPrice | undefined => undefined;

export interface ProductPriceWithProduct extends ProductPriceProps {
  product?: ProductData | null;
}

export const ProductPrice: ComponentConfig<ProductPriceWithProduct> = {
  label: 'Product Price',
  fields: productPriceFields as ComponentConfig<ProductPriceWithProduct>['fields'],
  defaultProps: {
    fontSize: 'xl', color: 'black', showComparePrice: true,
    layout: 'horizontal', fontWeight: 'semibold', showSavingsPercentage: true,
  },
  render: (rawProps: any) => {
    const {
      fontSize, color, showComparePrice, layout, fontWeight,
      showSavingsPercentage, resolvePrice, product,
    } = rawProps as ProductPriceWithProduct;

    if (!product || !product.variants || product.variants.length === 0) {
      return <div className="text-gray-400 italic">Product price will appear here</div>;
    }

    const resolve = resolvePrice || defaultResolvePrice;
    const priceData = resolve(product);
    if (!priceData) return <div className="text-gray-400 italic">Price not available</div>;

    const sizeCls = SIZE[(fontSize as ProductPriceSize) || 'xl'] || 'text-xl';
    const colorCls = COLOR[(color as ProductPriceColor) || 'black'] || 'text-black';
    const weightCls = WEIGHT[(fontWeight as ProductPriceWeight) || 'semibold'] || 'font-semibold';
    const layoutCls = layout === 'horizontal' ? 'flex items-center gap-3' : 'flex flex-col gap-1';

    const isOnSale = priceData.price_type === 'sale' && !!priceData.percentage_diff;

    return (
      <div className={layoutCls}>
        <span className={`${sizeCls} ${colorCls} ${weightCls}`}>{priceData.calculated_price}</span>
        {showComparePrice && isOnSale && priceData.original_price && (
          <span className="text-gray-500 line-through text-sm">{priceData.original_price}</span>
        )}
        {isOnSale && showSavingsPercentage && priceData.percentage_diff && (
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
            Save {priceData.percentage_diff}
          </span>
        )}
      </div>
    );
  },
};

export default ProductPrice;
