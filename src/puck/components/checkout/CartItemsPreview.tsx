import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const cartItemsPreviewFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'List', value: 'list' }, { label: 'Compact', value: 'compact' }] },
  showImages: { type: 'radio', label: 'Show Product Images', options: RADIO_YES_NO },
  showQuantity: { type: 'radio', label: 'Show Quantity', options: RADIO_YES_NO },
  showVariantInfo: { type: 'radio', label: 'Show Variant Info', options: RADIO_YES_NO },
  imageSize: { type: 'select', label: 'Image Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
} as Record<string, Field>;

const Bag = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);

export interface CartItemsPreviewProps {
  showImages: boolean;
  showQuantity: boolean;
  showVariantInfo: boolean;
  imageSize: 'sm' | 'md' | 'lg';
  layout: 'list' | 'compact';
}

export interface CartItemsPreviewWithData extends CartItemsPreviewProps {
  items?: Array<{ id: string; title: string; variant: string; price: string; quantity: number; total: string; image?: string }>;
}

const MOCK: NonNullable<CartItemsPreviewWithData['items']> = [
  { id: '1', title: 'Classic T-Shirt', variant: 'Medium / Black', price: '$29.99', quantity: 2, total: '$59.98', image: 'https://via.placeholder.com/100' },
  { id: '2', title: 'Denim Jeans', variant: '32x34 / Blue', price: '$79.99', quantity: 1, total: '$79.99', image: 'https://via.placeholder.com/100' },
];

const SIZES = { sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' } as const;

export const CartItemsPreview: ComponentConfig<CartItemsPreviewWithData> = {
  label: 'Cart Items Preview',
  fields: cartItemsPreviewFields as ComponentConfig<CartItemsPreviewWithData>['fields'],
  defaultProps: { showImages: true, showQuantity: true, showVariantInfo: true, imageSize: 'md', layout: 'list' },
  render: (raw: any) => {
    const { showImages, showQuantity, showVariantInfo, imageSize = 'md', layout = 'list' } = raw as CartItemsPreviewWithData;
    const items = (raw as any).items ?? MOCK;
    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <Bag />
          <h3 className="text-lg font-semibold text-gray-900">Order Items ({items.length})</h3>
        </div>
        <div className={`space-y-${layout === 'compact' ? '3' : '4'}`}>
          {items.map((item: any) => (
            <div key={item.id} className={`flex gap-4 ${layout === 'list' ? 'pb-4 border-b border-gray-100 last:border-0' : ''}`}>
              {showImages && item.image && (
                <div className="relative flex-shrink-0">
                  <img src={item.image} alt={item.title} className={`${SIZES[imageSize]} object-cover rounded`} />
                  {showQuantity && <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{item.quantity}</div>}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium text-gray-900 ${layout === 'compact' ? 'text-sm' : 'text-base'} truncate`}>{item.title}</h4>
                {showVariantInfo && <p className={`text-gray-600 mt-1 ${layout === 'compact' ? 'text-xs' : 'text-sm'}`}>{item.variant}</p>}
                {showQuantity && !showImages && <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>}
              </div>
              <div className="text-right flex-shrink-0">
                <p className={`font-medium text-gray-900 ${layout === 'compact' ? 'text-sm' : 'text-base'}`}>{item.total}</p>
                {item.quantity > 1 && layout === 'list' && <p className="text-xs text-gray-500 mt-1">{item.price} each</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

export default CartItemsPreview;
