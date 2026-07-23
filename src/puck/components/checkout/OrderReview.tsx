import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderReviewFields = {
  showTermsCheckbox: { type: 'radio', label: 'Show Terms Checkbox', options: RADIO_YES_NO },
  showPolicies: { type: 'radio', label: 'Show Policy Links', options: RADIO_YES_NO },
  showSecurityBadge: { type: 'radio', label: 'Show Security Badge', options: RADIO_YES_NO },
  buttonText: { type: 'text', label: 'Button Text' },
  buttonSize: { type: 'select', label: 'Button Size', options: [{ label: 'Default', value: 'default' }, { label: 'Large', value: 'large' }] },
} as Record<string, Field>;

const Check = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
);
const Shield = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export interface OrderReviewProps {
  showTermsCheckbox: boolean;
  showPolicies: boolean;
  showSecurityBadge: boolean;
  buttonText: string;
  buttonSize: 'default' | 'large';
}

export interface OrderReviewWithData extends OrderReviewProps {
  shippingAddress?: { name: string; street: string; city: string; state: string; zip: string; country: string; email: string };
  shippingMethod?: { name: string; price: string; estimate: string };
  paymentMethod?: { description: string };
  termsHref?: string;
  privacyHref?: string;
  refundHref?: string;
  shippingPolicyHref?: string;
  contactHref?: string;
  onPlaceOrder?: () => void | Promise<void>;
  isProcessing?: boolean;
  agreedToTerms?: boolean;
  onAgreedChange?: (v: boolean) => void;
}

// No static MOCK — the storefront wrapper injects real Medusa shipping
// address / shipping method / payment method via Puck context. If no data
// is passed, we show empty fields instead of fake ones.

export const OrderReview: ComponentConfig<OrderReviewWithData> = {
  label: 'Order Review & Place Order',
  fields: orderReviewFields as ComponentConfig<OrderReviewWithData>['fields'],
  defaultProps: { showTermsCheckbox: true, showPolicies: true, showSecurityBadge: true, buttonText: 'Place Order', buttonSize: 'large' },
  render: (raw: any) => {
    const { showTermsCheckbox, showPolicies, showSecurityBadge, buttonText = 'Place Order', buttonSize = 'large' } = raw as OrderReviewWithData;
    const addr = (raw as any).shippingAddress;
    const ship = (raw as any).shippingMethod;
    const pay = (raw as any).paymentMethod;
    const termsHref = (raw as any).termsHref ?? '#';
    const privacyHref = (raw as any).privacyHref ?? '#';
    const refundHref = (raw as any).refundHref ?? '#';
    const shippingPolicyHref = (raw as any).shippingPolicyHref ?? '#';
    const contactHref = (raw as any).contactHref ?? '#';
    const onPlaceOrder: () => void | Promise<void> = (raw as any).onPlaceOrder ?? (() => {});
    const isProcessing: boolean = (raw as any).isProcessing ?? false;
    const agreed: boolean = (raw as any).agreedToTerms ?? false;
    const onAgreedChange: (v: boolean) => void = (raw as any).onAgreedChange ?? (() => {});

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <Check />
          <h2 className="text-xl font-semibold text-gray-900">Review Your Order</h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
            <h3 className="font-medium text-gray-900 mb-3">Shipping to:</h3>
            {addr ? (
              <>
                <p className="text-sm text-gray-700">{addr.name}<br />{addr.street}<br />{addr.city}, {addr.state} {addr.zip}<br />{addr.country}</p>
                {addr.email && <p className="text-sm text-gray-600 mt-2">{addr.email}</p>}
              </>
            ) : (
              <p className="text-sm text-gray-500">Please complete the shipping step.</p>
            )}
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
            <h3 className="font-medium text-gray-900 mb-2">Shipping Method:</h3>
            {ship ? (
              <>
                <p className="text-sm text-gray-700">{ship.name} - {ship.price}</p>
                {ship.estimate && <p className="text-xs text-gray-600 mt-1">Estimated delivery: {ship.estimate}</p>}
              </>
            ) : (
              <p className="text-sm text-gray-500">Please complete the delivery step.</p>
            )}
          </div>
          <div className="border border-gray-100 rounded-lg p-4 bg-gray-50">
            <h3 className="font-medium text-gray-900 mb-2">Payment Method:</h3>
            {pay ? (
              <p className="text-sm text-gray-700">{pay.description}</p>
            ) : (
              <p className="text-sm text-gray-500">Please complete the payment step.</p>
            )}
          </div>
        </div>

        {showTermsCheckbox && (
          <div className="mb-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={agreed} onChange={(e) => onAgreedChange(e.target.checked)} className="mt-1 h-4 w-4" />
              <span className="text-sm text-gray-700">I agree to the <a href={termsHref} className="text-blue-600 hover:underline">Terms and Conditions</a> and <a href={privacyHref} className="text-blue-600 hover:underline">Privacy Policy</a></span>
            </label>
          </div>
        )}

        <button onClick={onPlaceOrder} disabled={isProcessing || (showTermsCheckbox && !agreed)} className={`w-full bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 ${buttonSize === 'large' ? 'py-4 text-lg' : 'py-3 text-base'} disabled:opacity-50 disabled:cursor-not-allowed`}>
          <Check /> {buttonText}
        </button>

        {showSecurityBadge && (
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
            <Shield /> <span>Secure checkout - Your payment info is encrypted</span>
          </div>
        )}

        {showPolicies && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <a href={refundHref} className="hover:underline">Refund Policy</a>
              <span>•</span>
              <a href={shippingPolicyHref} className="hover:underline">Shipping Policy</a>
              <span>•</span>
              <a href={contactHref} className="hover:underline">Contact Us</a>
            </div>
          </div>
        )}
      </div>
    );
  },
};

export default OrderReview;
