import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import type { CartTotals, CartCoupon, CartSummaryProps } from './cart.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const cartSummaryFields = {
  position: { type: 'select', label: 'Position', options: [{ label: 'Sidebar (Sticky)', value: 'sidebar' }, { label: 'Bottom', value: 'bottom' }] },
  showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
  showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
  showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
  showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
  showCouponInput: { type: 'radio', label: 'Show Coupon Input', options: RADIO_YES_NO },
  showCheckoutButton: { type: 'radio', label: 'Show Checkout Button', options: RADIO_YES_NO },
  checkoutButtonText: { type: 'text', label: 'Checkout Button Text' },
  freeShippingThreshold: { type: 'number', label: 'Free Shipping Threshold ($)' },
  showTrustBadges: { type: 'radio', label: 'Show Trust Badges', options: RADIO_YES_NO },
} as Record<string, Field>;

const Bag = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
);
const Tag = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
);
const ArrowRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
);
const Shield = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
const Check = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);

// No static MOCK_TOTALS — the storefront wrapper injects real Medusa cart
// totals via Puck context. If no data is passed, we show zeros.

export interface CartSummaryWithData extends CartSummaryProps {
  totals?: CartTotals;
  appliedCoupon?: CartCoupon | null;
  onApplyCoupon?: (code: string) => void | Promise<void>;
  onRemoveCoupon?: () => void;
  onCheckout?: () => void;
  formatPrice?: (price: number) => string;
}

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const CartSummary: ComponentConfig<CartSummaryWithData> = {
  label: 'Cart Summary',
  fields: cartSummaryFields as ComponentConfig<CartSummaryWithData>['fields'],
  defaultProps: {
    showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showCouponInput: true, showCheckoutButton: true,
    checkoutButtonText: 'Proceed to Checkout', freeShippingThreshold: 50, position: 'sidebar', showTrustBadges: true,
  },
  render: (raw: any) => {
    const { showSubtotal, showShipping, showTax, showDiscount, showCouponInput, showCheckoutButton, checkoutButtonText = 'Proceed to Checkout', freeShippingThreshold = 50, position = 'sidebar', showTrustBadges } = raw as CartSummaryWithData;

    const [code, setCode] = useState('');
    const [applying, setApplying] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const totals: CartTotals = (raw as any).totals ?? { subtotal: 0, shipping: 0, tax: 0, discount: 0, total: 0 };
    const appliedCoupon: CartCoupon | null = (raw as any).appliedCoupon ?? null;
    const onApply: (c: string) => void | Promise<void> = (raw as any).onApplyCoupon ?? (() => {});
    const onRemove: () => void = (raw as any).onRemoveCoupon ?? (() => {});
    const onCheckout: () => void = (raw as any).onCheckout ?? (() => {});
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    const amountToFreeShipping = Math.max(0, freeShippingThreshold * 100 - totals.subtotal);
    const freeShippingProgress = Math.min(100, (totals.subtotal / (freeShippingThreshold * 100)) * 100);
    const shippingIsFree = totals.shipping === 0;

    const handleApply = async () => {
      if (!code.trim()) return;
      setApplying(true); setError(null);
      try { await onApply(code); setCode(''); } catch (e: any) { setError(e?.message || 'Failed to apply'); }
      finally { setApplying(false); }
    };

    const containerClass = position === 'sidebar' ? 'sticky top-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm' : 'border border-gray-200 rounded-lg p-6 bg-white';

    return (
      <div className={containerClass}>
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
          <Bag />
          <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
        </div>

        {showShipping && amountToFreeShipping > 0 && (
          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900 mb-2">Add <span className="font-semibold">{formatPrice(amountToFreeShipping)}</span> more for free shipping!</p>
            <div className="w-full bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${freeShippingProgress}%` }} />
            </div>
          </div>
        )}

        {showCouponInput && !appliedCoupon && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">Have a coupon code?</label>
            <div className="flex gap-2">
              <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter code" className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" disabled={applying} />
              <button onClick={handleApply} disabled={applying || !code.trim()} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed">{applying ? 'Applying…' : 'Apply'}</button>
            </div>
            {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
          </div>
        )}

        {showDiscount && appliedCoupon && (
          <div className="mb-6 p-3 bg-green-50 border border-green-200 rounded flex items-center justify-between">
            <div className="flex items-center gap-2"><Tag /><span className="text-sm font-medium text-green-900">{appliedCoupon.code}</span></div>
            <button onClick={onRemove} className="text-sm text-green-700 hover:text-green-900 underline">Remove</button>
          </div>
        )}

        <div className="space-y-3 mb-6">
          {showSubtotal && <div className="flex justify-between text-gray-700"><span>Subtotal</span><span>{formatPrice(totals.subtotal)}</span></div>}
          {showShipping && (
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>{shippingIsFree ? <span className="text-green-600 font-medium">FREE</span> : formatPrice(totals.shipping)}</span>
            </div>
          )}
          {showTax && <div className="flex justify-between text-gray-700"><span>Tax</span><span>{formatPrice(totals.tax)}</span></div>}
          {showDiscount && totals.discount > 0 && <div className="flex justify-between text-green-600"><span>Discount</span><span>-{formatPrice(totals.discount)}</span></div>}
        </div>

        <div className="pt-4 border-t border-gray-200 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-gray-900">{formatPrice(totals.total)}</span>
          </div>
        </div>

        {showCheckoutButton && (
          <button onClick={onCheckout} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 mb-4">
            <span className="font-medium">{checkoutButtonText}</span>
            <ArrowRight />
          </button>
        )}

        {showTrustBadges && (
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center justify-center gap-4 text-xs text-gray-600">
              <div className="flex items-center gap-1"><Shield /><span>Secure Checkout</span></div>
              <div className="flex items-center gap-1"><Check /><span>30-Day Returns</span></div>
            </div>
            <div className="flex items-center justify-center gap-3 mt-3">
              <img src="https://via.placeholder.com/40x25/4285F4/FFFFFF?text=Visa" alt="Visa" className="h-6" />
              <img src="https://via.placeholder.com/40x25/EB001B/FFFFFF?text=MC" alt="Mastercard" className="h-6" />
              <img src="https://via.placeholder.com/40x25/0070BA/FFFFFF?text=PP" alt="PayPal" className="h-6" />
            </div>
          </div>
        )}
      </div>
    );
  },
};

export default CartSummary;
