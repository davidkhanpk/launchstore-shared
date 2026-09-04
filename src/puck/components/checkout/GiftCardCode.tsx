import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const giftCardCodeFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Always Visible', value: 'inline' }, { label: 'Expandable', value: 'expandable' }] },
  showAppliedGiftCard: { type: 'radio', label: 'Show Applied Gift Card', options: RADIO_YES_NO },
  buttonText: { type: 'text', label: 'Button Text' },
  placeholder: { type: 'text', label: 'Input Placeholder' },
} as Record<string, Field>;

// ── Inline SVG icons (no external dependency) ──────────────────────────────────

const GiftIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
  </svg>
);

const XIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ChevronDown = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const Spinner = ({ size = 16 }: { size?: number }) => (
  <svg className="animate-spin" width={size} height={size} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

const CheckCircle = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const AlertCircle = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

// ── Error message mapping ─────────────────────────────────────────────────────

const ERROR_MESSAGES: Record<string, string> = {
  invalid: 'Invalid gift card code — please check and try again',
  expired: 'This gift card has expired',
  redeemed: 'This gift card has already been fully redeemed',
  insufficient: 'This gift card has no remaining balance',
  network: 'Something went wrong — please try again',
};

// ── Types ─────────────────────────────────────────────────────────────────────

export interface GiftCardCodeProps {
  layout: 'inline' | 'expandable';
  showAppliedGiftCard: boolean;
  buttonText: string;
  placeholder: string;
}

export interface GiftCardApplyResult {
  success: boolean;
  error?: 'invalid' | 'expired' | 'redeemed' | 'insufficient' | 'network';
  amountApplied?: number;
  remainingBalance?: number;
}

export interface GiftCardCodeWithData extends GiftCardCodeProps {
  /** Injected by the storefront wrapper; mock in editor preview */
  appliedGiftCard?: {
    code: string;
    amount: number;
    remaining: number;
  } | null;
  onApply?: (code: string) => Promise<GiftCardApplyResult>;
  onRemove?: () => void | Promise<void>;
  formatPrice?: (price: number) => string;
}

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

// No static MOCK — the storefront wrapper injects real gift card data via
// Puck context. If no data is passed (editor preview), we show a mock applied
// card so the merchant can see the component's full state.

export const GiftCardCode: ComponentConfig<GiftCardCodeWithData> = {
  label: 'Gift Card Code',
  fields: giftCardCodeFields as ComponentConfig<GiftCardCodeWithData>['fields'],
  defaultProps: {
    layout: 'expandable',
    showAppliedGiftCard: true,
    buttonText: 'Apply',
    placeholder: 'Enter gift card code',
  },
  render: (raw: any) => {
    const {
      layout = 'expandable',
      showAppliedGiftCard = true,
      buttonText = 'Apply',
      placeholder = 'Enter gift card code',
    } = raw as GiftCardCodeWithData;

    const [code, setCode] = useState('');
    const [applying, setApplying] = useState(false);
    const [result, setResult] = useState<GiftCardApplyResult | null>(null);

    const appliedGiftCard: GiftCardCodeWithData['appliedGiftCard'] =
      (raw as any).appliedGiftCard ??
      { code: 'GC-DEMO-••••', amount: 5000, remaining: 0 };

    const onApply: (c: string) => Promise<GiftCardApplyResult> =
      (raw as any).onApply ?? (async () => ({ success: true, amountApplied: 5000 }));

    const onRemove: () => void | Promise<void> = (raw as any).onRemove ?? (() => {});
    const formatPrice: (p: number) => string = (raw as any).formatPrice ?? defaultFormat;

    const handleApply = async () => {
      if (!code.trim()) return;
      setApplying(true);
      setResult(null);
      try {
        const res = await onApply(code.trim());
        setResult(res);
        if (res.success) setCode('');
      } catch {
        setResult({ success: false, error: 'network' });
      } finally {
        setApplying(false);
      }
    };

    const handleRemove = async () => {
      setApplying(true);
      try {
        await onRemove();
        setResult(null);
      } finally {
        setApplying(false);
      }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleApply();
      }
    };

    // ── Input + Button ─────────────────────────────────────────────────────

    const inputEl = (
      <div className="flex gap-2">
        <input
          type="text"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setResult(null);
          }}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm uppercase tracking-wide"
          placeholder={placeholder}
          disabled={applying}
          autoComplete="off"
        />
        <button
          onClick={handleApply}
          disabled={applying || !code.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {applying ? <Spinner size={14} /> : null}
          {applying ? 'Applying…' : buttonText}
        </button>
      </div>
    );

    // ── Success / Error feedback ───────────────────────────────────────────

    const feedbackEl = result && (
      <div className={`mt-2 flex items-center gap-2 text-sm ${result.success ? 'text-green-700' : 'text-red-600'}`}>
        {result.success ? (
          <>
            <CheckCircle />
            <span>
              Gift card applied — {formatPrice(result.amountApplied ?? 0)} credit
              {result.remainingBalance !== undefined && result.remainingBalance > 0 && (
                <> ({formatPrice(result.remainingBalance)} remaining for future use)</>
              )}
            </span>
          </>
        ) : (
          <>
            <AlertCircle />
            <span>{ERROR_MESSAGES[result.error ?? 'network']}</span>
          </>
        )}
      </div>
    );

    // ── Applied gift card chip ─────────────────────────────────────────────

    const appliedEl = showAppliedGiftCard && appliedGiftCard && (
      <div className="mt-3 flex items-center justify-between gap-3 rounded-lg border border-green-200 bg-green-50 px-3 py-2">
        <div className="flex items-center gap-2">
          <GiftIcon />
          <div>
            <p className="text-sm font-medium text-green-900">{appliedGiftCard.code}</p>
            <p className="text-xs text-green-600">
              Credit: {formatPrice(appliedGiftCard.amount)}
              {appliedGiftCard.remaining > 0 && (
                <> · {formatPrice(appliedGiftCard.remaining)} remaining</>
              )}
            </p>
          </div>
        </div>
        <button
          onClick={handleRemove}
          disabled={applying}
          className="p-1 rounded-full hover:bg-green-100 text-green-600 transition-colors"
          title="Remove gift card"
        >
          <XIcon size={14} />
        </button>
      </div>
    );

    // ── Wrapper ────────────────────────────────────────────────────────────

    return (
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        {layout === 'expandable' ? (
          <details className="group" open={!!appliedGiftCard}>
            <summary className="cursor-pointer flex items-center justify-between text-sm font-medium text-gray-900">
              <div className="flex items-center gap-2">
                <GiftIcon />
                <span>Have a gift card?</span>
              </div>
              <ChevronDown />
            </summary>
            <div className="mt-4">
              {inputEl}
              {feedbackEl}
              {appliedEl}
            </div>
          </details>
        ) : (
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <GiftIcon /> Gift Card
            </label>
            {inputEl}
            {feedbackEl}
            {appliedEl}
          </div>
        )}
      </div>
    );
  },
};
