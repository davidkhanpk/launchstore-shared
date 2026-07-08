import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import type { CheckoutFormProps } from './cart.types';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const checkoutFormFields = {
  showStepIndicators: { type: 'radio', label: 'Show Step Indicators', options: RADIO_YES_NO },
  enableGuestCheckout: { type: 'radio', label: 'Enable Guest Checkout', options: RADIO_YES_NO },
  requirePhoneNumber: { type: 'radio', label: 'Require Phone Number', options: RADIO_YES_NO },
  showSaveAddressCheckbox: { type: 'radio', label: "Show 'Save Address' Checkbox", options: RADIO_YES_NO },
  defaultCountry: { type: 'select', label: 'Default Country', options: [{ label: 'United States', value: 'US' }, { label: 'Canada', value: 'CA' }, { label: 'United Kingdom', value: 'GB' }, { label: 'Australia', value: 'AU' }] },
  showOrderNotes: { type: 'radio', label: 'Show Order Notes Field', options: RADIO_YES_NO },
} as Record<string, Field>;

const Check = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);
const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
);
const Spinner = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin"><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg>
);

interface ShippingMethod { id: string; name: string; price: number; estimate: string; }
interface PaymentMethod { id: string; name: string; icon: string; }

const DEFAULT_SHIPPING: ShippingMethod[] = [
  { id: 'standard', name: 'Standard Shipping', price: 995, estimate: '5-7 business days' },
  { id: 'express', name: 'Express Shipping', price: 1995, estimate: '2-3 business days' },
  { id: 'overnight', name: 'Overnight Shipping', price: 3995, estimate: 'Next business day' },
];
const DEFAULT_PAYMENT: PaymentMethod[] = [
  { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
  { id: 'paypal', name: 'PayPal', icon: '🅿️' },
  { id: 'apple', name: 'Apple Pay', icon: '🍎' },
];

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  phone: string;
  shippingMethod: string;
  paymentMethod: string;
  orderNotes: string;
}

export interface CheckoutFormWithData extends CheckoutFormProps {
  initialStep?: number;
  shippingMethods?: ShippingMethod[];
  paymentMethods?: PaymentMethod[];
  onSubmit?: (data: CheckoutFormData) => void | Promise<void>;
  onStepChange?: (step: number) => void;
  isProcessing?: boolean;
  formatPrice?: (price: number) => string;
}

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const CheckoutForm: ComponentConfig<CheckoutFormWithData> = {
  label: 'Checkout Form',
  fields: checkoutFormFields as ComponentConfig<CheckoutFormWithData>['fields'],
  defaultProps: {
    showStepIndicators: true, enableGuestCheckout: true, requirePhoneNumber: false, showSaveAddressCheckbox: true,
    defaultCountry: 'US', showOrderNotes: true,
  },
  render: (raw: any) => {
    const { showStepIndicators, enableGuestCheckout, requirePhoneNumber, showSaveAddressCheckbox, defaultCountry = 'US', showOrderNotes } = raw as CheckoutFormWithData;
    const initialStep = (raw as any).initialStep ?? 1;
    const shippingMethods: ShippingMethod[] = (raw as any).shippingMethods ?? DEFAULT_SHIPPING;
    const paymentMethods: PaymentMethod[] = (raw as any).paymentMethods ?? DEFAULT_PAYMENT;
    const onSubmit: (d: CheckoutFormData) => void | Promise<void> = (raw as any).onSubmit ?? (() => {});
    const onStepChange: (s: number) => void = (raw as any).onStepChange ?? (() => {});
    const externalProcessing: boolean = (raw as any).isProcessing ?? false;
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    const [currentStep, setCurrentStep] = useState(initialStep);
    const [sameAsBilling, setSameAsBilling] = useState(true);
    const [internalProcessing, setInternalProcessing] = useState(false);
    const isProcessing = externalProcessing || internalProcessing;

    const [formData, setFormData] = useState<CheckoutFormData>({
      email: '', firstName: '', lastName: '', address: '', city: '', state: '', zipCode: '',
      country: defaultCountry, phone: '', shippingMethod: '', paymentMethod: '', orderNotes: '',
    });

    const setStep = (n: number) => { setCurrentStep(n); onStepChange(n); };
    const handleField = (field: keyof CheckoutFormData, value: string) => setFormData(p => ({ ...p, [field]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setInternalProcessing(true);
      try { await onSubmit(formData); } finally { setInternalProcessing(false); }
    };

    const steps = [
      { number: 1, label: 'Contact & Shipping', status: currentStep > 1 ? 'completed' : currentStep === 1 ? 'current' : 'upcoming' },
      { number: 2, label: 'Delivery Method', status: currentStep > 2 ? 'completed' : currentStep === 2 ? 'current' : 'upcoming' },
      { number: 3, label: 'Payment', status: currentStep === 3 ? 'current' : 'upcoming' },
    ] as const;

    return (
      <div className="max-w-3xl mx-auto">
        {showStepIndicators && (
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center flex-1">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${step.status === 'completed' ? 'bg-green-500 text-white' : step.status === 'current' ? 'bg-black text-white' : 'bg-gray-200 text-gray-500'}`}>
                      {step.status === 'completed' ? <Check /> : step.number}
                    </div>
                    <span className="text-xs mt-2 text-center text-gray-600">{step.label}</span>
                  </div>
                  {index < steps.length - 1 && <div className={`flex-1 h-1 mx-2 ${step.status === 'completed' ? 'bg-green-500' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {currentStep === 1 && (
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Contact & Shipping Information</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input type="email" value={formData.email} onChange={(e) => handleField('email', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
              </div>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input type="text" value={formData.firstName} onChange={(e) => handleField('firstName', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input type="text" value={formData.lastName} onChange={(e) => handleField('lastName', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                <input type="text" value={formData.address} onChange={(e) => handleField('address', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
              </div>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                  <input type="text" value={formData.city} onChange={(e) => handleField('city', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                  <input type="text" value={formData.state} onChange={(e) => handleField('state', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Zip Code *</label>
                  <input type="text" value={formData.zipCode} onChange={(e) => handleField('zipCode', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
              </div>
              {requirePhoneNumber && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" value={formData.phone} onChange={(e) => handleField('phone', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                </div>
              )}
              <div className="mb-4">
                <label className="flex items-center">
                  <input type="checkbox" checked={sameAsBilling} onChange={(e) => setSameAsBilling(e.target.checked)} className="mr-2 h-4 w-4" />
                  <span className="text-sm text-gray-700">Billing address same as shipping</span>
                </label>
              </div>
              {showOrderNotes && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Order Notes (Optional)</label>
                  <textarea value={formData.orderNotes} onChange={(e) => handleField('orderNotes', e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" rows={3} placeholder="Any special instructions for your order?" />
                </div>
              )}
              {enableGuestCheckout && (
                <div className="mb-4 text-sm text-gray-600">Or <a href="#" className="text-blue-600 hover:underline">continue as guest</a></div>
              )}
              <div className="flex justify-end">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 flex items-center gap-2">Continue to Delivery <ChevronRight /></button>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Choose Delivery Method</h2>
              <div className="space-y-3 mb-6">
                {shippingMethods.map((method) => (
                  <label key={method.id} className={`flex items-center justify-between p-4 border rounded cursor-pointer transition-colors ${formData.shippingMethod === method.id ? 'border-black bg-gray-50' : 'border-gray-300 hover:border-gray-400'}`}>
                    <div className="flex items-center">
                      <input type="radio" name="shippingMethod" value={method.id} checked={formData.shippingMethod === method.id} onChange={(e) => handleField('shippingMethod', e.target.value)} className="mr-4" />
                      <div>
                        <p className="font-medium text-gray-900">{method.name}</p>
                        <p className="text-sm text-gray-600">{method.estimate}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-gray-900">{formatPrice(method.price)}</span>
                  </label>
                ))}
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(1)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Back</button>
                <button type="button" onClick={() => setStep(3)} disabled={!formData.shippingMethod} className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">Continue to Payment <ChevronRight /></button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Information</h2>
              <div className="space-y-3 mb-6">
                {paymentMethods.map((method) => (
                  <label key={method.id} className={`flex items-center p-4 border rounded cursor-pointer transition-colors ${formData.paymentMethod === method.id ? 'border-black bg-gray-50' : 'border-gray-300 hover:border-gray-400'}`}>
                    <input type="radio" name="paymentMethod" value={method.id} checked={formData.paymentMethod === method.id} onChange={(e) => handleField('paymentMethod', e.target.value)} className="mr-4" />
                    <span className="text-2xl mr-3">{method.icon}</span>
                    <span className="font-medium text-gray-900">{method.name}</span>
                  </label>
                ))}
              </div>
              {formData.paymentMethod === 'card' && (
                <div className="space-y-4 mb-6 p-4 bg-gray-50 rounded">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Card Number *</label>
                    <input type="text" placeholder="1234 5678 9012 3456" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date *</label>
                      <input type="text" placeholder="MM/YY" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CVV *</label>
                      <input type="text" placeholder="123" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black" required />
                    </div>
                  </div>
                </div>
              )}
              <div className="flex justify-between">
                <button type="button" onClick={() => setStep(2)} className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Back</button>
                <button type="submit" disabled={!formData.paymentMethod || isProcessing} className="px-8 py-3 bg-black text-white rounded hover:bg-gray-800 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isProcessing ? <><Spinner /> Processing…</> : 'Complete Order'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    );
  },
};

export default CheckoutForm;
