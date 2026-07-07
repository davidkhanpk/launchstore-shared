import type { Field } from '@puckeditor/core';

export interface BundleItemImage {
  url: string;
}

export interface BundleItemVariant {
  id: string;
  title?: string;
  /** Calculated price string e.g. "$24.99" or numeric cents (consumer convention). */
  calculated_price?: { calculated_amount?: number; currency_code?: string } | number | string;
  original_price?: { original_amount?: number } | number | string;
}

export interface BundleItemProduct {
  id: string;
  title: string;
  images?: BundleItemImage[];
  variants?: BundleItemVariant[];
}

export interface BundleItem {
  id: string;
  quantity: number;
  product?: BundleItemProduct;
}

export interface BundleData {
  /** Optional title displayed in the bundle header. */
  title?: string;
  items: BundleItem[];
}

export type BundleAddItemsArg = Array<{ item_id: string; variant_id: string }>;

export interface BundledProductDetailProps {
  showSavingsBadge: boolean;
  showItemImages: boolean;
  buttonText: string;
  bundleIdOverride: string;
}

/**
 * Format-price callback. Consumers provide a function that
 * takes the bundle-item variant (which may have varying
 * calculated_price shapes) and returns a display string.
 * Defaults to `$X.XX` style for numbers or passthrough for strings.
 */
export type FormatBundlePrice = (variant: BundleItemVariant) => string;
