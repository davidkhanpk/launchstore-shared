import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { resolvePaymentMeta, type PaymentProviderMeta } from '../../payment-info';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const paymentMethodFields = {
  layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Icons Only', value: 'icons' }] },
  showPaymentIcons: { type: 'radio', label: 'Show Payment Icons', options: RADIO_YES_NO },
  showSecurityBadges: { type: 'radio', label: 'Show Security Badges', options: RADIO_YES_NO },
  enableSaveCard: { type: 'radio', label: 'Allow Save Card', options: RADIO_YES_NO },
} as Record<string, Field>;

const Card = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
);
const Lock = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
);
const Shield = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
);
// Inline spinner (matches src/modules/common/icons/spinner.tsx in the
// storefront). Kept inline so the shared package has no icon-lib dep.
const Spinner = ({ size = 20 }: { size?: number }) => (
  <svg className="animate-spin" width={size} height={size} fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
  </svg>
);

export interface PaymentMethodProps {
  layout: 'list' | 'cards' | 'icons';
  showPaymentIcons: boolean;
  showSecurityBadges: boolean;
  enableSaveCard: boolean;
}

/**
 * Each `Method` only needs `id`. The shared component looks up the display
 * meta (title, description, icon) from `PAYMENT_INFO_MAP`. Wrappers can
 * override per-method by passing extra fields (name/description/icon).
 */
export interface PaymentMethodItem {
  id: string;
  name?: string;
  icon?: React.JSX.Element;
  description?: string;
}

export interface PaymentMethodWithData extends PaymentMethodProps {
  methods?: PaymentMethodItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  onContinue?: () => void;
  /**
   * When `false`, the "Review Order" button is hidden. Use in
   * single-page step-by-step checkouts to hide the button once the user
   * has picked a payment method. Defaults to `true` for the legacy
   * multi-step flow.
   */
  showContinueButton?: boolean;
  /**
   * When `true`, the "Review Order" button is disabled and shows a
   * spinner + "Saving..." label. Use during the API call that commits
   * the staging choice to Medusa. Defaults to `false`.
   */
  isLoading?: boolean;
  /** Optional label override for the button while loading. */
  loadingText?: string;
}

// No static MOCK — the storefront wrapper injects real Medusa payment
// providers via Puck context. The shared component looks up display meta
// from `PAYMENT_INFO_MAP` in `payment-info.tsx`. If no data is passed,
// we show an empty state. The shared component is purely presentational.

export const PaymentMethod: ComponentConfig<PaymentMethodWithData> = {
  label: 'Payment Method',
  fields: paymentMethodFields as ComponentConfig<PaymentMethodWithData>['fields'],
  defaultProps: { layout: 'list', showPaymentIcons: true, showSecurityBadges: true, enableSaveCard: true },
  render: (raw: any) => {
    const { layout = 'list', showPaymentIcons, showSecurityBadges, enableSaveCard } = raw as PaymentMethodWithData;
    const methods: PaymentMethodItem[] | undefined = (raw as any).methods;
    const selectedId: string = (raw as any).selectedId ?? '';
    const onSelect: (id: string) => void = (raw as any).onSelect ?? (() => {});
    const onContinue: () => void = (raw as any).onContinue ?? (() => {});
    const showContinueButton: boolean = (raw as any).showContinueButton ?? true;
    const isLoading: boolean = (raw as any).isLoading ?? false;
    const loadingText: string = (raw as any).loadingText ?? 'Saving…';

    // Empty state: no methods provided. This is the correct render when
    // the storefront wrapper hasn't injected data (e.g. region has no
    // payment providers configured, or a fetch failed). We deliberately
    // do NOT show static/fake methods here.
    if (!methods || methods.length === 0) {
      return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
            <Card />
            <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
          </div>
          <p className="text-sm text-gray-500">
            No payment methods are available for this region yet.
          </p>
        </div>
      );
    }

    // Resolve each method's display meta. Wrapper can override name/icon/
    // description per item; otherwise we use PAYMENT_INFO_MAP[id].
    const renderable = methods.map((m) => {
      const meta: PaymentProviderMeta = resolvePaymentMeta(m.id);
      return {
        id: m.id,
        name: m.name ?? meta.title,
        icon: m.icon ?? meta.icon,
        description: m.description ?? meta.description,
      };
    });

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <Card />
          <h2 className="text-xl font-semibold text-gray-900">Payment Method</h2>
        </div>

        <div className="space-y-4 mb-6">
          {renderable.map((method) => (
            <div key={method.id} onClick={() => onSelect(method.id)} className={`border-2 rounded-lg p-4 transition-colors cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`}>
              <div className="flex items-center gap-3">
                <input type="radio" name="payment" className="h-4 w-4" checked={method.id === selectedId} onChange={() => onSelect(method.id)} />
                {showPaymentIcons && method.icon && <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center text-gray-700">{method.icon}</span>}
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{method.name}</h4>
                  {method.description && <p className="text-sm text-gray-600">{method.description}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {enableSaveCard && (
          <div className="border-t border-gray-200 pt-4 mb-6">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2 h-4 w-4" />
              <span className="text-sm text-gray-700">Save card for future purchases</span>
            </label>
          </div>
        )}

        {showSecurityBadges && (
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Lock /> <span>SSL Encrypted</span></div>
              <div className="flex items-center gap-2"><Shield /> <span>PCI Compliant</span></div>
            </div>
          </div>
        )}

        {showContinueButton && (
          <div className="mt-6">
            <button type="button" onClick={onContinue} disabled={isLoading} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed">
              {isLoading && <Spinner size={18} />}
              {isLoading ? loadingText : 'Review Order'}
            </button>
          </div>
        )}
      </div>
    );
  },
};

export default PaymentMethod;
