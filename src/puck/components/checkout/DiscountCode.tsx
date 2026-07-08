import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const discountCodeFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Always Visible', value: 'inline' }, { label: 'Expandable', value: 'expandable' }] },
  showAppliedDiscounts: { type: 'radio', label: 'Show Applied Discounts', options: RADIO_YES_NO },
  buttonText: { type: 'text', label: 'Button Text' },
  placeholder: { type: 'text', label: 'Input Placeholder' },
} as Record<string, Field>;

const Tag = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>
);
const X = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const ChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
);

export interface DiscountCodeProps {
  layout: 'inline' | 'expandable';
  showAppliedDiscounts: boolean;
  buttonText: string;
  placeholder: string;
}

export interface DiscountCodeWithData extends DiscountCodeProps {
  appliedDiscount?: { code: string; amount: number } | null;
  onApply?: (code: string) => void | Promise<void>;
  onRemove?: () => void;
  formatPrice?: (price: number) => string;
}

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const DiscountCode: ComponentConfig<DiscountCodeWithData> = {
  label: 'Discount Code',
  fields: discountCodeFields as ComponentConfig<DiscountCodeWithData>['fields'],
  defaultProps: { layout: 'inline', showAppliedDiscounts: true, buttonText: 'Apply', placeholder: 'Enter discount code' },
  render: (raw: any) => {
    const { layout = 'inline', showAppliedDiscounts, buttonText = 'Apply', placeholder = 'Enter discount code' } = raw as DiscountCodeWithData;
    const [code, setCode] = useState('');
    const [applying, setApplying] = useState(false);
    const appliedDiscount = (raw as any).appliedDiscount ?? { code: 'SAVE10', amount: 1099 };
    const onApply: (c: string) => void | Promise<void> = (raw as any).onApply ?? (() => {});
    const onRemove: () => void = (raw as any).onRemove ?? (() => {});
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    const handleApply = async () => {
      if (!code.trim()) return;
      setApplying(true);
      try { await onApply(code); setCode(''); } finally { setApplying(false); }
    };

    const inputEl = (
      <div className="flex gap-2">
        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm" placeholder={placeholder} disabled={applying} />
        <button onClick={handleApply} disabled={applying || !code.trim()} className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed">{applying ? 'Applying…' : buttonText}</button>
      </div>
    );

    return (
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        {layout === 'expandable' ? (
          <details className="group">
            <summary className="cursor-pointer flex items-center justify-between text-sm font-medium text-gray-900">
              <div className="flex items-center gap-2"><Tag /><span>Have a discount code?</span></div>
              <ChevronDown />
            </summary>
            <div className="mt-4">{inputEl}</div>
          </details>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2"><Tag /> Discount Code</label>
            {inputEl}
          </div>
        )}

        {showAppliedDiscounts && appliedDiscount && (
          <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Tag />
              <div>
                <span className="text-sm font-medium text-green-900">{appliedDiscount.code}</span>
                <span className="text-xs text-green-700 ml-2">-{formatPrice(appliedDiscount.amount)} off</span>
              </div>
            </div>
            <button onClick={onRemove} className="text-green-700 hover:text-green-900"><X /></button>
          </div>
        )}
      </div>
    );
  },
};

export default DiscountCode;
