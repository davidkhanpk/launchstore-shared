import React from 'react';

/**
 * Shared payment provider metadata for the Puck PaymentMethod component.
 *
 * Medusa's `/store/payment-providers` API returns just `[{id: 'pp_xxx'}]` —
 * no name, no icon. This file is the shared source of truth for friendly
 * names + icons + helper predicates (isStripeLike, isPaypal, isManual).
 *
 * Pattern matches the legacy `paymentInfoMap` in
 * `nextjs-starter-original/src/lib/constants.tsx` but lives in the shared
 * package so all consumers (launchstore-storefront, future apps) use the
 * same names and icons. Consumers can override by passing a `providerMeta`
 * prop to the shared PaymentMethod component.
 */

const CreditCard = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="1" y="4" width="22" height="16" rx="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const PayPal = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 7h7a3 3 0 0 1 3 3v0a3 3 0 0 1-3 3h-4l-1 5H6l1-5H4l1-6z" />
    <path d="M11 7l-1 6" />
  </svg>
);

const Apple = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

const Google = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Cash = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

export interface PaymentProviderMeta {
  /** Friendly display name shown to the customer */
  title: string;
  /** Short description for the option (e.g. "Visa, Mastercard, Amex — via Stripe") */
  description: string;
  /** Icon element (JSX) shown next to the title */
  icon: React.JSX.Element;
}

/**
 * Map of Medusa payment provider IDs to their display info.
 * Extend this map as we onboard more providers.
 */
export const PAYMENT_INFO_MAP: Record<string, PaymentProviderMeta> = {
  pp_stripe_stripe: {
    title: 'Credit / Debit Card',
    description: 'Visa, Mastercard, Amex — via Stripe',
    icon: <CreditCard />,
  },
  'pp_medusa-payments_default': {
    title: 'Credit / Debit Card',
    description: 'Visa, Mastercard, Amex — via Medusa Payments',
    icon: <CreditCard />,
  },
  'pp_stripe-ideal_stripe': {
    title: 'iDEAL',
    description: 'Pay with iDEAL (Netherlands)',
    icon: <CreditCard />,
  },
  'pp_stripe-bancontact_stripe': {
    title: 'Bancontact',
    description: 'Pay with Bancontact (Belgium)',
    icon: <CreditCard />,
  },
  pp_paypal_paypal: {
    title: 'PayPal',
    description: 'Pay securely with your PayPal account',
    icon: <PayPal />,
  },
  pp_apple_pay_apple: {
    title: 'Apple Pay',
    description: 'Pay with Apple Pay (via Stripe)',
    icon: <Apple />,
  },
  pp_google_pay_google: {
    title: 'Google Pay',
    description: 'Pay with Google Pay (via Stripe)',
    icon: <Google />,
  },
  pp_system_default: {
    title: 'Manual Payment',
    description: 'Pay by invoice (no online payment required)',
    icon: <Cash />,
  },
};

/**
 * Returns a default meta for a provider ID not in the map.
 * Strips `pp_` prefix and title-cases.
 */
export function defaultPaymentMeta(providerId: string): PaymentProviderMeta {
  const stripped = providerId.replace(/^pp_/, '').replace(/_/g, ' ').trim();
  const title = stripped
    ? stripped.charAt(0).toUpperCase() + stripped.slice(1)
    : providerId;
  return {
    title,
    description: 'Payment provider',
    icon: <CreditCard />,
  };
}

/**
 * Resolve the meta for a provider ID — explicit map first, fallback second.
 */
export function resolvePaymentMeta(
  providerId: string,
  overrides?: Record<string, Partial<PaymentProviderMeta>>
): PaymentProviderMeta {
  const override = overrides?.[providerId];
  if (override) {
    return { ...defaultPaymentMeta(providerId), ...override };
  }
  return PAYMENT_INFO_MAP[providerId] ?? defaultPaymentMeta(providerId);
}

/**
 * True if the provider needs a Stripe Elements card form (or any card capture
 * UI). The actual card form is OPTIONAL — storefronts that don't include
 * `@stripe/stripe-js` will let Medusa/Stripe handle payment via redirect.
 */
export const isStripeLike = (providerId?: string | null): boolean => {
  return (
    !!providerId &&
    (providerId.startsWith('pp_stripe_') || providerId.startsWith('pp_medusa-'))
  );
};

/** True if the provider is a PayPal integration. */
export const isPaypal = (providerId?: string | null): boolean => {
  return !!providerId && providerId.startsWith('pp_paypal');
};

/** True if the provider is the Medusa manual / system default. */
export const isManual = (providerId?: string | null): boolean => {
  return providerId === 'pp_system_default';
};

/**
 * Map a Medusa payment provider ID to its display meta.
 * Convenience helper for wrappers that pass a list of `{id}` objects.
 */
export function paymentMethodShape(
  providerId: string,
  overrides?: Record<string, Partial<PaymentProviderMeta>>
) {
  const meta = resolvePaymentMeta(providerId, overrides);
  return {
    id: providerId,
    name: meta.title,
    icon: meta.icon, // React element (JSX)
    description: meta.description,
  };
}
