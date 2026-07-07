import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productMetadataFields } from './productmetadata.fields';
import type { ProductMetadataProps, ProductMetadataLayout } from './productmetadata.types';
import type { ProductData } from '../ProductData';

const PackageSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);
const RulerSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
    <path d="M2 12h20" /><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" /><path d="M2 12L8 6l4 4 4-4 6 6" />
  </svg>
);
const WeightSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
    <path d="M6.5 6.5h11v11h-11z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const GlobeSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export interface ProductMetadataWithProduct extends ProductMetadataProps {
  product?: ProductData | null;
}

export const ProductMetadata: ComponentConfig<ProductMetadataWithProduct> = {
  label: 'Product Metadata',
  fields: productMetadataFields as ComponentConfig<ProductMetadataWithProduct>['fields'],
  defaultProps: {
    showTitle: true, titleText: 'Product Details',
    showSku: true, showWeight: true, showDimensions: true, showOrigin: true,
    layout: 'list',
  },
  render: (rawProps: any) => {
    const { showTitle, titleText, showSku, showWeight, showDimensions, showOrigin, layout = 'list', product } = rawProps as ProductMetadataWithProduct;
    if (!product) return <></>;

    const firstVariant = product.variants?.[0];
    const sku = firstVariant?.sku || 'N/A';
    const weight = product.weight ?? firstVariant?.weight ?? null;
    const length = product.length ?? firstVariant?.length ?? null;
    const width = product.width ?? firstVariant?.width ?? null;
    const height = product.height ?? firstVariant?.height ?? null;
    const originCountry = (product.origin_country as string | null)
      ?? (product.metadata?.origin_country as string | null)
      ?? null;

    const items: { icon: React.ReactNode; label: string; value: string; key: string }[] = [];
    if (showSku && sku) items.push({ icon: <PackageSvg />, label: 'SKU', value: sku, key: 'sku' });
    if (showWeight && weight) items.push({ icon: <WeightSvg />, label: 'Weight', value: `${weight} g`, key: 'weight' });
    if (showDimensions && (length || width || height)) {
      const dimensions = [length, width, height].filter((d) => d != null).map((d) => `${d} cm`).join(' × ');
      items.push({ icon: <RulerSvg />, label: 'Dimensions', value: dimensions, key: 'dimensions' });
    }
    if (showOrigin && originCountry) items.push({ icon: <GlobeSvg />, label: 'Origin', value: originCountry, key: 'origin' });

    if (items.length === 0) return <></>;

    if (layout === 'list') {
      return (
        <div className="product-metadata">
          {showTitle && <h3 className="text-lg font-semibold text-gray-900 mb-4">{titleText}</h3>}
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.key} className="flex items-start gap-3">
                {item.icon}
                <div className="flex-1">
                  <dt className="text-sm font-medium text-gray-500">{item.label}</dt>
                  <dd className="text-sm text-gray-900 mt-1">{item.value}</dd>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    if (layout === 'grid') {
      return (
        <div className="product-metadata">
          {showTitle && <h3 className="text-lg font-semibold text-gray-900 mb-4">{titleText}</h3>}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map((item) => (
              <div key={item.key} className="text-center p-4 border border-gray-200 rounded-lg">
                <div className="flex justify-center mb-2">{item.icon}</div>
                <dt className="text-xs font-medium text-gray-500 mb-1">{item.label}</dt>
                <dd className="text-sm text-gray-900 font-medium">{item.value}</dd>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="product-metadata">
        {showTitle && <h3 className="text-lg font-semibold text-gray-900 mb-4">{titleText}</h3>}
        <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
          <tbody className="divide-y divide-gray-200">
            {items.map((item) => (
              <tr key={item.key} className="hover:bg-gray-50">
                <td className="px-4 py-3 flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm font-medium text-gray-500">{item.label}</span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
};

export default ProductMetadata;
