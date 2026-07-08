import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const paymentMethodFields = {
  layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Icons Only', value: 'icons' }] },
  showPaymentIcons: { type: 'radio', label: 'Show Payment Icons', options: RADIO_YES_NO },
  showSecurityBadges: { type: 'radio', label: 'Show Security Badges', options: RADIO_YES_NO },
  enableSaveCard: { type: 'radio', label: 'Allow Save Card', options: RADIO_YES_NO },
  expressCheckoutPosition: { type: 'select', label: 'Express Checkout Position', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'None', value: 'none' }] },
} as Record<string, Field>;

const Card = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);
const Wallet = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
);
const Lock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const Shield = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);

export interface PaymentMethodProps {
  layout: 'list' | 'cards' | 'icons';
  showPaymentIcons: boolean;
  showSecurityBadges: boolean;
  enableSaveCard: boolean;
  expressCheckoutPosition: 'top' | 'bottom' | 'none';
}

export interface PaymentMethodWithData extends PaymentMethodProps {
  methods?: Array<{ id: string; name: string; icon: string; description: string }>;
  selectedId?: string;
  onSelect?: (id: string) => void;
  onContinue?: () => void;
}

const MOCK_METHODS = [
  { id: 'card', name: 'Credit/Debit Card', icon: '💳', description: 'Visa, Mastercard, Amex' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️', description: 'Pay securely with PayPal' },
  { id: 'apple', name: 'Apple Pay', icon: '🍎', description: 'One-click payment' },
];

export const PaymentMethod: ComponentConfig<PaymentMethodWithData> = {
  label: 'Payment Method',
  fields: paymentMethodFields as ComponentConfig<PaymentMethodWithData>['fields'],
  defaultProps: { layout: 'list', showPaymentIcons: true, showSecurityBadges: true, enableSaveCard: true, expressCheckoutPosition: 'top' },
  render: (raw: any) => {
    const { layout = 'list', showPaymentIcons, showSecurityBadges, enableSaveCard, expressCheckoutPosition = 'top' } = raw as PaymentMethodWithData;
    const methods = (raw as any).methods ?? MOCK_METHODS;
    const selectedId: string = (raw as any).selectedId ?? 'card';
    const onSelect: (id: string) => void = (raw as any).onSelect ?? (() => {});
    const onContinue: () => void = (raw as any).onContinue ?? (() => {});

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <Card />
          <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
        </div>

        {expressCheckoutPosition === 'top' && (
          <div className="mb-6 pb-6 border-b border-gray-200">
            <p className="text-sm text-gray-600 mb-3">Express checkout</p>
            <div className="grid grid-cols-2 gap-3">
              <button className="border-2 border-gray-900 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"><Wallet /> Shop Pay</button>
              <button className="border-2 border-gray-300 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">G Pay</button>
            </div>
            <div className="mt-4 text-center"><span className="text-sm text-gray-500">— OR —</span></div>
          </div>
        )}

        <div className="space-y-4 mb-6">
          {methods.map((method: any) => (
            <div key={method.id} className={`border-2 rounded-lg p-4 transition-colors cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`} onClick={() => onSelect(method.id)}>
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="h-4 w-4" checked={method.id === selectedId} onChange={() => onSelect(method.id)} />
                {showPaymentIcons && <span className="text-2xl">{method.icon}</span>}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{method.name}</h4>
                  <p className="text-sm text-gray-600">{method.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-6 mb-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Card Number</label>
              <div className="relative">
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="1234 5678 9012 3456" />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                  <img src="https://via.placeholder.com/30x20/4285F4/FFFFFF?text=V" alt="Visa" className="h-5" />
                  <img src="https://via.placeholder.com/30x20/EB001B/FFFFFF?text=M" alt="MC" className="h-5" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM / YY" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Cardholder Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John Doe" />
            </div>
            {enableSaveCard && (
              <div className="pt-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2 h-4 w-4" />
                  <span className="text-sm text-gray-700">Save card for future purchases</span>
                </label>
              </div>
            )}
          </div>
        </div>

        {showSecurityBadges && (
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Lock /> <span>SSL Encrypted</span></div>
              <div className="flex items-center gap-2"><Shield /> <span>PCI Compliant</span></div>
            </div>
          </div>
        )}

        {expressCheckoutPosition === 'bottom' && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-3">
              <button className="border-2 border-gray-900 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors">Shop Pay</button>
              <button className="border-2 border-gray-300 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors">G Pay</button>
            </div>
          </div>
        )}

        <div className="mt-6">
          <button onClick={onContinue} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">Review Order</button>
        </div>
      </div>
    );
  },
};

export default PaymentMethod;
