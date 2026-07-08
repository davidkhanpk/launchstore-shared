import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderConfirmationFields = {
  style: { type: 'select', label: 'Style', options: [{ label: 'Success (Large checkmark)', value: 'success' }, { label: 'Minimal', value: 'minimal' }, { label: 'Detailed', value: 'detailed' }] },
  titleText: { type: 'text', label: 'Title Text' },
  messageText: { type: 'textarea', label: 'Message Text' },
  showCheckmark: { type: 'radio', label: 'Show Checkmark Icon', options: RADIO_YES_NO },
  showOrderNumber: { type: 'radio', label: 'Show Order Number', options: RADIO_YES_NO },
  showEmailConfirmation: { type: 'radio', label: 'Show Email Confirmation Message', options: RADIO_YES_NO },
  showContinueShopping: { type: 'radio', label: 'Show Continue Shopping Button', options: RADIO_YES_NO },
} as Record<string, Field>;

const Check = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);
const Mail = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

export interface OrderConfirmationProps {
  showCheckmark: boolean;
  titleText: string;
  messageText: string;
  showOrderNumber: boolean;
  showEmailConfirmation: boolean;
  showContinueShopping: boolean;
  style: 'success' | 'minimal' | 'detailed';
}

export interface OrderConfirmationWithData extends OrderConfirmationProps {
  orderId?: string;
  email?: string;
  createdAt?: string;
  viewOrderHref?: string;
  continueShoppingHref?: string;
}

export const OrderConfirmation: ComponentConfig<OrderConfirmationWithData> = {
  label: 'Order Confirmation',
  fields: orderConfirmationFields as ComponentConfig<OrderConfirmationWithData>['fields'],
  defaultProps: { showCheckmark: true, titleText: 'Order Confirmed!', messageText: "Thank you for your order. We've received your order and will begin processing it right away.", showOrderNumber: true, showEmailConfirmation: true, showContinueShopping: true, style: 'success' },
  render: (raw: any) => {
    const { showCheckmark, titleText = 'Order Confirmed!', messageText, showOrderNumber, showEmailConfirmation, showContinueShopping, style = 'success' } = raw as OrderConfirmationWithData;
    const orderId: string = (raw as any).orderId ?? 'ORD-2025-12345';
    const email: string = (raw as any).email ?? 'customer@example.com';
    const viewOrderHref: string = (raw as any).viewOrderHref ?? '/account/orders';
    const continueShoppingHref: string = (raw as any).continueShoppingHref ?? '/';

    if (style === 'success') {
      return (
        <div className="max-w-2xl mx-auto text-center py-12">
          {showCheckmark && <div className="mb-6"><div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center"><Check /></div></div>}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{titleText}</h1>
          {showOrderNumber && <p className="text-lg text-gray-600 mb-2">Order Number: <strong className="text-gray-900">{orderId}</strong></p>}
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">{messageText}</p>
          {showEmailConfirmation && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="flex items-center justify-center gap-2 text-sm text-blue-900"><Mail /> A confirmation email has been sent to <strong>{email}</strong></p>
            </div>
          )}
          {showContinueShopping && (
            <div className="flex gap-4 justify-center">
              <a href={viewOrderHref} className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800">View Order Details</a>
              <a href={continueShoppingHref} className="px-6 py-3 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">Continue Shopping</a>
            </div>
          )}
        </div>
      );
    }

    if (style === 'minimal') {
      return (
        <div className="max-w-lg mx-auto text-center py-8">
          {showCheckmark && <div className="flex justify-center mb-4 text-green-600"><Check size={40} /></div>}
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{titleText}</h2>
          {showOrderNumber && <p className="text-gray-600 mb-4">Order #{orderId}</p>}
          <p className="text-gray-600 mb-6">{messageText}</p>
          {showContinueShopping && <a href={continueShoppingHref} className="text-blue-600 hover:underline">← Back to Home</a>}
        </div>
      );
    }

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
          <div className="flex items-start">
            {showCheckmark && <div className="flex-shrink-0 text-green-600"><Check size={32} /></div>}
            <div className="ml-3">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{titleText}</h2>
              {showOrderNumber && <p className="text-gray-700 mb-1">Order Number: <strong>{orderId}</strong></p>}
              <p className="text-gray-600">{messageText}</p>
            </div>
          </div>
        </div>
        {showEmailConfirmation && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
            <h3 className="font-semibold text-gray-900 mb-2">What happens next?</h3>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start"><span className="mr-2">✓</span><span>Confirmation email sent to {email}</span></li>
              <li className="flex items-start"><span className="mr-2">✓</span><span>We'll process your order within 24 hours</span></li>
              <li className="flex items-start"><span className="mr-2">✓</span><span>You'll receive a shipping notification when your order ships</span></li>
            </ul>
          </div>
        )}
        {showContinueShopping && (
          <div className="flex gap-4">
            <a href={viewOrderHref} className="flex-1 px-6 py-3 bg-black text-white text-center rounded hover:bg-gray-800">Track Your Order</a>
            <a href={continueShoppingHref} className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 text-center rounded hover:bg-gray-50">Continue Shopping</a>
          </div>
        )}
      </div>
    );
  },
};

export default OrderConfirmation;
