import React from 'react';
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
export declare const PAYMENT_INFO_MAP: Record<string, PaymentProviderMeta>;
/**
 * Returns a default meta for a provider ID not in the map.
 * Strips `pp_` prefix and title-cases.
 */
export declare function defaultPaymentMeta(providerId: string): PaymentProviderMeta;
/**
 * Resolve the meta for a provider ID — explicit map first, fallback second.
 */
export declare function resolvePaymentMeta(providerId: string, overrides?: Record<string, Partial<PaymentProviderMeta>>): PaymentProviderMeta;
/**
 * True if the provider needs a Stripe Elements card form (or any card capture
 * UI). The actual card form is OPTIONAL — storefronts that don't include
 * `@stripe/stripe-js` will let Medusa/Stripe handle payment via redirect.
 */
export declare const isStripeLike: (providerId?: string | null) => boolean;
/** True if the provider is a PayPal integration. */
export declare const isPaypal: (providerId?: string | null) => boolean;
/** True if the provider is the Medusa manual / system default. */
export declare const isManual: (providerId?: string | null) => boolean;
/**
 * Map a Medusa payment provider ID to its display meta.
 * Convenience helper for wrappers that pass a list of `{id}` objects.
 */
export declare function paymentMethodShape(providerId: string, overrides?: Record<string, Partial<PaymentProviderMeta>>): {
    id: string;
    name: string;
    icon: React.JSX.Element;
    description: string;
};
//# sourceMappingURL=payment-info.d.ts.map