import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import type { CartItem, OrderSummaryProps } from './cart.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderSummaryFields = {
  position: { type: 'select', label: 'Position', options: [{ label: 'Sidebar (Sticky)', value: 'sidebar' }, { label: 'Inline', value: 'inline' }] },
  showItemImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
  showItemQuantity: { type: 'radio', label: 'Show Item Quantity', options: RADIO_YES_NO },
  showItemPrice: { type: 'radio', label: 'Show Item Prices', options: RADIO_YES_NO },
  showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
  showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
  showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
  showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
  showTotal: { type: 'radio', label: 'Show Total', options: RADIO_YES_NO },
  compactView: { type: 'radio', label: 'Compact View', options: RADIO_YES_NO },
} as Record<string, Field>;

const Lock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);

const MOCK_ITEMS: CartItem[] = [
  { id: '1', title: 'Sample Product', product_title: 'Sample Product', product_handle: 'sample', thumbnail: 'https://via.placeholder.com/80', variant: { id: 'v1', title: 'Medium / Black', options: [{ value: 'Medium' }, { value: 'Black' }] }, quantity: 2, unit_price: 2999, total: 5998 },
  { id: '2', title: 'Another Product', product_title: 'Another Product', product_handle: 'another', thumbnail: 'https://via.placeholder.com/80', variant: { id: 'v2', title: 'Large / White', options: [{ value: 'Large' }, { value: 'White' }] }, quantity: 1, unit_price: 4999, total: 4999 },
];

const MOCK_TOTALS = { subtotal: 10997, shipping: 995, tax: 880, discount: 1099, total: 11773 };

export interface OrderSummaryWithData extends OrderSummaryProps {
  items?: CartItem[];
  totals?: { subtotal: number; shipping: number; tax: number; discount: number; total: number };
  formatPrice?: (price: number) => string;
}

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const OrderSummary: ComponentConfig<OrderSummaryWithData> = {
  label: 'Order Summary',
  fields: orderSummaryFields as ComponentConfig<OrderSummaryWithData>['fields'],
  defaultProps: {
    position: 'sidebar', showItemImages: true, showItemQuantity: true, showItemPrice: true,
    showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showTotal: true, compactView: false,
  },
  render: (raw: any) => {
    const { position = 'sidebar', showItemImages, showItemQuantity, showItemPrice, showSubtotal, showShipping, showTax, showDiscount, showTotal, compactView } = raw as OrderSummaryWithData;
    const items: CartItem[] = (raw as any).items ?? MOCK_ITEMS;
    const totals = (raw as any).totals ?? MOCK_TOTALS;
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;
    const containerClass = position === 'sidebar' ? 'sticky top-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm' : 'border border-gray-200 rounded-lg p-6 bg-white';

    return (
      <div className={containerClass}>
        <h3 className="text-lg font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-200">Order Summary</h3>

        <div className={`${compactView ? 'space-y-2' : 'space-y-4'} mb-6`}>
          {items.map((item) => (
            <div key={item.id} className={`flex gap-3 ${!compactView && 'pb-4 border-b border-gray-100'}`}>
              {showItemImages && item.thumbnail && (
                <div className="relative flex-shrink-0">
                  <img src={item.thumbnail} alt={item.title} className={`${compactView ? 'w-12 h-12' : 'w-16 h-16'} object-cover rounded`} />
                  {showItemQuantity && (
                    <div className="absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">{item.quantity}</div>
                  )}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h4 className={`${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900 truncate`}>{item.title}</h4>
                <p className={`${compactView ? 'text-xs' : 'text-sm'} text-gray-600 mt-1`}>{item.variant.options.map(o => o.value).join(' / ')}</p>
                {showItemQuantity && !showItemImages && <p className="text-sm text-gray-600 mt-1">Qty: {item.quantity}</p>}
              </div>
              {showItemPrice && (
                <div className="text-right flex-shrink-0">
                  <p className={`${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`}>{formatPrice(item.total)}</p>
                  {item.quantity > 1 && !compactView && <p className="text-xs text-gray-500 mt-1">{formatPrice(item.unit_price)} each</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-3 mb-6">
          {showSubtotal && <div className="flex justify-between text-gray-700"><span className={compactView ? 'text-sm' : ''}>Subtotal</span><span className={compactView ? 'text-sm' : ''}>{formatPrice(totals.subtotal)}</span></div>}
          {showShipping && <div className="flex justify-between text-gray-700"><span className={compactView ? 'text-sm' : ''}>Shipping</span><span className={compactView ? 'text-sm' : ''}>{formatPrice(totals.shipping)}</span></div>}
          {showTax && <div className="flex justify-between text-gray-700"><span className={compactView ? 'text-sm' : ''}>Tax</span><span className={compactView ? 'text-sm' : ''}>{formatPrice(totals.tax)}</span></div>}
          {showDiscount && totals.discount > 0 && <div className="flex justify-between text-green-600"><span className={compactView ? 'text-sm' : ''}>Discount</span><span className={compactView ? 'text-sm' : ''}>-{formatPrice(totals.discount)}</span></div>}
        </div>

        {showTotal && (
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className={`${compactView ? 'text-base' : 'text-lg'} font-semibold text-gray-900`}>Total</span>
              <span className={`${compactView ? 'text-xl' : 'text-2xl'} font-bold text-gray-900`}>{formatPrice(totals.total)}</span>
            </div>
          </div>
        )}

        {!compactView && (
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
              <Lock />
              <span>Secure and encrypted payment</span>
            </div>
          </div>
        )}
      </div>
    );
  },
};

export default OrderSummary;
