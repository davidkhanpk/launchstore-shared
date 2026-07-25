import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderDetailsFields = {
  showItemImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
  showItemQuantity: { type: 'radio', label: 'Show Item Quantity', options: RADIO_YES_NO },
  showItemPrice: { type: 'radio', label: 'Show Item Prices', options: RADIO_YES_NO },
  showShippingAddress: { type: 'radio', label: 'Show Shipping Address', options: RADIO_YES_NO },
  showBillingAddress: { type: 'radio', label: 'Show Billing Address', options: RADIO_YES_NO },
  showPaymentMethod: { type: 'radio', label: 'Show Payment Method', options: RADIO_YES_NO },
  showShippingMethod: { type: 'radio', label: 'Show Shipping Method', options: RADIO_YES_NO },
  showPricingBreakdown: { type: 'radio', label: 'Show Pricing Breakdown', options: RADIO_YES_NO },
  compactView: { type: 'radio', label: 'Compact View', options: RADIO_YES_NO },
} as Record<string, Field>;

export interface OrderItem { id: string; title: string; variant: string; thumbnail?: string; quantity: number; unit_price: number; total: number; isPreorder?: boolean; }
export interface OrderAddress { first_name: string; last_name: string; address_1: string; city: string; province: string; postal_code: string; country: string; }
export interface OrderPayment { provider: string; card_last4: string; card_brand: string; }

export interface OrderDetailsProps {
  showItemImages: boolean;
  showItemQuantity: boolean;
  showItemPrice: boolean;
  showShippingAddress: boolean;
  showBillingAddress: boolean;
  showPaymentMethod: boolean;
  showShippingMethod: boolean;
  showPricingBreakdown: boolean;
  compactView: boolean;
}

export interface OrderDetailsWithData extends OrderDetailsProps {
  items?: OrderItem[];
  shippingAddress?: OrderAddress;
  billingAddress?: OrderAddress;
  payment?: OrderPayment;
  shippingMethod?: { method: string; cost: number };
  totals?: { subtotal: number; shipping_total: number; tax_total: number; total: number };
  formatPrice?: (price: number) => string;
}

// No static MOCK — the storefront wrapper injects real Medusa order data via
// Puck context. If no data is passed (editor preview without sample order),
// the component renders an empty-state placeholder. The shared component is
// purely presentational.

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const OrderDetails: ComponentConfig<OrderDetailsWithData> = {
  label: 'Order Details',
  fields: orderDetailsFields as ComponentConfig<OrderDetailsWithData>['fields'],
  defaultProps: { showItemImages: true, showItemQuantity: true, showItemPrice: true, showShippingAddress: true, showBillingAddress: true, showPaymentMethod: true, showShippingMethod: true, showPricingBreakdown: true, compactView: false },
  render: (raw: any) => {
    const { showItemImages, showItemQuantity, showItemPrice, showShippingAddress, showBillingAddress, showPaymentMethod, showShippingMethod, showPricingBreakdown, compactView } = raw as OrderDetailsWithData;
    const items: OrderItem[] = (raw as any).items ?? [];
    const shippingAddress: OrderAddress | undefined = (raw as any).shippingAddress;
    const billingAddress: OrderAddress | undefined = (raw as any).billingAddress;
    const payment: OrderPayment | undefined = (raw as any).payment;
    const shippingMethod = (raw as any).shippingMethod;
    const totals = (raw as any).totals;
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    // Empty state: no order data. Show a placeholder so designers know
    // what this component will look like once data is passed.
    if (!items || items.length === 0) {
      return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-center text-gray-500">
          <p>Order details will appear here once an order is loaded.</p>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h3>
          <div className="space-y-4">
            {items.map((item: any) => (
              <div key={item.id} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                {showItemImages && item.thumbnail && <img src={item.thumbnail} alt={item.title} className={`${compactView ? 'w-16 h-16' : 'w-20 h-20'} object-cover rounded flex-shrink-0`} />}
                <div className="flex-1">
                  <h4 className={`${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`}>{item.title}</h4>
                  <p className={`${compactView ? 'text-xs' : 'text-sm'} text-gray-600 mt-1`}>{item.variant}</p>
                  {item.isPreorder && <p className="text-xs text-orange-600 mt-1">Pre-order · Ships on expected date</p>}
                  {showItemQuantity && <p className="text-sm text-gray-600 mt-1">Quantity: {item.quantity}</p>}
                </div>
                {showItemPrice && (
                  <div className="text-right">
                    <p className={`${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`}>{formatPrice(item.total)}</p>
                    {item.quantity > 1 && !compactView && <p className="text-xs text-gray-500 mt-1">{formatPrice(item.unit_price)} each</p>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {showShippingAddress && shippingAddress && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Shipping Address</h3>
              <div className={`${compactView ? 'text-sm' : 'text-base'} text-gray-600 space-y-1`}>
                <p>{shippingAddress.first_name} {shippingAddress.last_name}</p>
                <p>{shippingAddress.address_1}</p>
                <p>{shippingAddress.city}, {shippingAddress.province} {shippingAddress.postal_code}</p>
                <p>{shippingAddress.country}</p>
              </div>
            </div>
          )}
          {showBillingAddress && billingAddress && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Billing Address</h3>
              <div className={`${compactView ? 'text-sm' : 'text-base'} text-gray-600 space-y-1`}>
                <p>{billingAddress.first_name} {billingAddress.last_name}</p>
                <p>{billingAddress.address_1}</p>
                <p>{billingAddress.city}, {billingAddress.province} {billingAddress.postal_code}</p>
                <p>{billingAddress.country}</p>
              </div>
            </div>
          )}
          {showPaymentMethod && payment && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Payment Method</h3>
              <div className={`${compactView ? 'text-sm' : 'text-base'} text-gray-600`}>
                <p>{payment.card_brand} ending in {payment.card_last4}</p>
                <p className="text-xs text-gray-500 mt-1">via {payment.provider}</p>
              </div>
            </div>
          )}
          {showShippingMethod && shippingMethod && (
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-3">Shipping Method</h3>
              <div className={`${compactView ? 'text-sm' : 'text-base'} text-gray-600`}>
                <p>{shippingMethod.method}</p>
                <p className="text-sm text-gray-500 mt-1">{formatPrice(shippingMethod.cost)}</p>
              </div>
            </div>
          )}
        </div>

        {showPricingBreakdown && (
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Shipping</span><span>{formatPrice(totals.shipping_total)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Tax</span><span>{formatPrice(totals.tax_total)}</span></div>
              <div className="flex justify-between text-lg font-semibold text-gray-900 pt-2 border-t border-gray-200"><span>Total</span><span>{formatPrice(totals.total)}</span></div>
            </div>
          </div>
        )}
      </div>
    );
  },
};

export default OrderDetails;
