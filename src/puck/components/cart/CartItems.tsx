import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import type { CartItem, CartItemUpdateFn, CartItemDeleteFn, CartItemsProps } from './cart.types';
import { CartItemRow } from './CartItemRow';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const cartItemsFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Table', value: 'table' }, { label: 'List', value: 'list' }, { label: 'Card', value: 'card' }] },
  showImages: { type: 'radio', label: 'Show Product Images', options: RADIO_YES_NO },
  showVariantInfo: { type: 'radio', label: 'Show Variant Info', options: RADIO_YES_NO },
  showQuantitySelector: { type: 'radio', label: 'Show Quantity Selector', options: RADIO_YES_NO },
  showDeleteButton: { type: 'radio', label: 'Show Delete Button', options: RADIO_YES_NO },
  imageSize: { type: 'select', label: 'Image Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
  maxQuantity: { type: 'number', label: 'Max Quantity' },
  emptyMessage: { type: 'text', label: 'Empty Cart Message' },
} as Record<string, Field>;

// No static MOCK_ITEMS — the storefront wrapper injects real Medusa cart
// items via Puck context. If no data is passed, the component shows an
// empty state (the configurable `emptyMessage` field). The wrapper
// provides `sampleItems` from context for editor preview.

export interface CartItemsWithData extends CartItemsProps {
  items?: CartItem[];
  onQuantityChange?: CartItemUpdateFn;
  onDelete?: CartItemDeleteFn;
  updatingItems?: Record<string, boolean>;
  formatPrice?: (price: number) => string;
}

const defaultFormat = (price: number) => `$${(price / 100).toFixed(2)}`;

export const CartItems: ComponentConfig<CartItemsWithData> = {
  label: 'Cart Items',
  fields: cartItemsFields as ComponentConfig<CartItemsWithData>['fields'],
  defaultProps: {
    layout: 'table', showImages: true, showVariantInfo: true, showQuantitySelector: true, showDeleteButton: true,
    imageSize: 'md', maxQuantity: 10, emptyMessage: 'Your cart is empty',
  },
  render: (raw: any) => {
    const { layout = 'table', showImages, showVariantInfo, showQuantitySelector, showDeleteButton, imageSize = 'md', maxQuantity = 10, emptyMessage = 'Your cart is empty' } = raw as CartItemsWithData;
    const items: CartItem[] = (raw as any).items ?? [];
    const updating: Record<string, boolean> = (raw as any).updatingItems ?? {};
    const onQuantityChange: CartItemUpdateFn = (raw as any).onQuantityChange ?? (() => {});
    const onDelete: CartItemDeleteFn = (raw as any).onDelete ?? (() => {});
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    if (items.length === 0) {
      return (
        <div className="text-center py-12 px-4 border border-dashed border-gray-300 rounded-lg">
          <p className="text-gray-500 text-lg">{emptyMessage}</p>
        </div>
      );
    }

    const rowProps = { layout, showImages, showVariantInfo, showQuantitySelector, showDeleteButton, imageSize, maxQuantity, onQuantityChange, onDelete, formatPrice };

    if (layout === 'card') {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => <CartItemRow key={item.id} {...item} {...rowProps} updating={!!updating[item.id]} />)}
        </div>
      );
    }

    if (layout === 'list') {
      return (
        <div className="space-y-4">
          {items.map(item => <CartItemRow key={item.id} {...item} {...rowProps} updating={!!updating[item.id]} />)}
        </div>
      );
    }

    return (
      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-4 font-medium text-gray-700">Item</th>
              {showQuantitySelector && <th className="text-center py-4 px-4 font-medium text-gray-700">Quantity</th>}
              <th className="text-right py-4 px-4 font-medium text-gray-700">Price</th>
              <th className="text-right py-4 px-4 font-medium text-gray-700">Total</th>
              {showDeleteButton && <th className="w-12"></th>}
            </tr>
          </thead>
          <tbody>
            {items.map(item => <CartItemRow key={item.id} {...item} {...rowProps} updating={!!updating[item.id]} />)}
          </tbody>
        </table>
      </div>
    );
  },
};

export default CartItems;
