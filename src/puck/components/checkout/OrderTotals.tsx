import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderTotalsFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Default', value: 'default' }, { label: 'Compact', value: 'compact' }] },
  showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
  showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
  showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
  showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
  showTotal: { type: 'radio', label: 'Show Total', options: RADIO_YES_NO },
  highlightTotal: { type: 'radio', label: 'Highlight Total', options: RADIO_YES_NO },
} as Record<string, Field>;

const Dollar = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
);

export interface OrderTotalsProps {
  showSubtotal: boolean;
  showShipping: boolean;
  showTax: boolean;
  showDiscount: boolean;
  showTotal: boolean;
  highlightTotal: boolean;
  layout: 'default' | 'compact';
}

export interface OrderTotalsWithData extends OrderTotalsProps {
  totals?: { subtotal: string; shipping: string; tax: string; discount: string; total: string; discountCode?: string };
}

// No static MOCK — the storefront wrapper injects real Medusa cart totals
// via Puck context. If no data is passed, we show zeros (the cart is empty).

export const OrderTotals: ComponentConfig<OrderTotalsWithData> = {
  label: 'Order Totals',
  fields: orderTotalsFields as ComponentConfig<OrderTotalsWithData>['fields'],
  defaultProps: { showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showTotal: true, highlightTotal: true, layout: 'default' },
  render: (raw: any) => {
    const { showSubtotal, showShipping, showTax, showDiscount, showTotal, highlightTotal, layout = 'default' } = raw as OrderTotalsWithData;
    const totals = (raw as any).totals ?? { subtotal: '', shipping: '', tax: '', discount: '', total: '' };
    const textSize = layout === 'compact' ? 'text-sm' : 'text-base';
    const spacing = layout === 'compact' ? 'space-y-2' : 'space-y-3';

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
          <Dollar />
          <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
        </div>
        <div className={spacing}>
          {showSubtotal && <div className={`flex justify-between ${textSize} text-gray-700`}><span>Subtotal</span><span>{totals.subtotal}</span></div>}
          {showShipping && <div className={`flex justify-between ${textSize} text-gray-700`}><span>Shipping</span><span>{totals.shipping}</span></div>}
          {showTax && <div className={`flex justify-between ${textSize} text-gray-700`}><span>Tax</span><span>{totals.tax}</span></div>}
          {showDiscount && <div className={`flex justify-between ${textSize} text-green-600`}><span>Discount{totals.discountCode ? ` (${totals.discountCode})` : ''}</span><span>{totals.discount}</span></div>}
        </div>
        {showTotal && (
          <div className={`mt-4 pt-4 border-t border-gray-200 ${highlightTotal ? 'bg-gray-50 -mx-6 -mb-6 px-6 pb-6 rounded-b-lg' : ''}`}>
            <div className="flex justify-between items-center">
              <span className={`${layout === 'compact' ? 'text-base' : 'text-lg'} font-semibold text-gray-900`}>Total</span>
              <span className={`${layout === 'compact' ? 'text-xl' : 'text-2xl'} font-bold text-gray-900`}>{totals.total}</span>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-right">Including {totals.tax} in taxes</p>
          </div>
        )}
      </div>
    );
  },
};

export default OrderTotals;
