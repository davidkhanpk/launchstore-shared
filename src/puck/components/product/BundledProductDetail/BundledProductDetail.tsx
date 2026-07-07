import React, { useState, useMemo } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { bundledProductDetailFields } from './bundledproductdetail.fields';
import type {
  BundledProductDetailProps, BundleItem, BundleData, BundleItemVariant,
  FormatBundlePrice, BundleAddItemsArg,
} from './bundledproductdetail.types';

const AlertSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
);
const LoaderSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="animate-spin"><line x1="12" y1="2" x2="12" y2="6" /><line x1="12" y1="18" x2="12" y2="22" /><line x1="4.93" y1="4.93" x2="7.76" y2="7.76" /><line x1="16.24" y1="16.24" x2="19.07" y2="19.07" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /><line x1="4.93" y1="19.07" x2="7.76" y2="16.24" /><line x1="16.24" y1="7.76" x2="19.07" y2="4.93" /></svg>
);
const CartSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);
const ChevronDownSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
);

const defaultFormat: FormatBundlePrice = (v) => {
  if (typeof v.calculated_price === 'number') return `$${v.calculated_price.toFixed(2)}`;
  if (v.calculated_price && typeof (v.calculated_price as any).calculated_amount === 'number') {
    return `$${((v.calculated_price as any).calculated_amount as number).toFixed(2)}`;
  }
  return 'Price unavailable';
};

const getNumericPrice = (p: BundleItemVariant['calculated_price'] | BundleItemVariant['original_price']): number => {
  if (typeof p === 'number') return p;
  if (p && typeof (p as any).calculated_amount === 'number') return (p as any).calculated_amount;
  if (p && typeof (p as any).original_amount === 'number') return (p as any).original_amount;
  return 0;
};

export interface BundledProductDetailWithData extends BundledProductDetailProps {
  bundle?: BundleData | null;
  isLoading?: boolean;
  error?: string | null;
  onAdd?: (items: BundleAddItemsArg) => Promise<void> | void;
  isAdding?: boolean;
  formatPrice?: FormatBundlePrice;
}

export const BundledProductDetail: ComponentConfig<BundledProductDetailWithData> = {
  label: 'Bundled Product Detail',
  fields: bundledProductDetailFields as ComponentConfig<BundledProductDetailWithData>['fields'],
  defaultProps: {
    showSavingsBadge: true, showItemImages: true,
    buttonText: 'Add Bundle to Cart', bundleIdOverride: '',
  },
  render: (rawProps: any) => {
    const {
      showSavingsBadge = true, showItemImages = true,
      buttonText = 'Add Bundle to Cart', bundleIdOverride = '',
      bundle, isLoading, error, onAdd, isAdding, formatPrice,
    } = rawProps as BundledProductDetailWithData;

    const fmt = formatPrice || defaultFormat;
    const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
    const [addError, setAddError] = useState<string | null>(null);

    // Auto-select first variant for each item when the bundle loads
    const items = bundle?.items;
    useMemo(() => {
      if (!items) return;
      const auto: Record<string, string> = {};
      items.forEach((it: BundleItem) => {
        const v0 = it.product?.variants?.[0]?.id;
        if (v0 && !selectedVariants[it.id]) auto[it.id] = v0;
      });
      if (Object.keys(auto).length > 0) {
        setSelectedVariants((prev) => ({ ...prev, ...auto }));
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [items]);

    const totals = useMemo(() => {
      if (!items) return { total: 0, individual: 0, savings: 0, savingsPercent: 0 };
      let total = 0; let individual = 0;
      items.forEach((it: BundleItem) => {
        const vid = selectedVariants[it.id];
        const v = it.product?.variants?.find((x: any) => x.id === vid);
        if (v) {
          const cap = getNumericPrice(v.calculated_price);
          const orig = getNumericPrice(v.original_price || v.calculated_price);
          total += cap * it.quantity;
          individual += orig * it.quantity;
        }
      });
      const savings = individual - total;
      const savingsPercent = individual > 0 ? Math.round((savings / individual) * 100) : 0;
      return { total, individual, savings, savingsPercent };
    }, [items, selectedVariants]);

    if (isLoading) {
      return (
        <div className="p-6 flex items-center justify-center gap-2 text-gray-600">
          <LoaderSvg /><span className="text-sm">Loading bundle...</span>
        </div>
      );
    }
    if (error) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2">
          <span className="text-red-600"><AlertSvg /></span>
          <div>
            <p className="text-sm font-medium text-red-800">Failed to load bundle</p>
            <p className="text-xs text-red-600 mt-1">{error}</p>
          </div>
        </div>
      );
    }
    if (!bundle) {
      // Empty state — no bundle available (preview)
      return (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm">This bundle has no items</div>
      );
    }
    if (!items || items.length === 0) {
      return (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-gray-600 text-sm">This bundle has no items</div>
      );
    }

    const allSelected = items.every((it) => selectedVariants[it.id]);

    const handleAdd = async () => {
      if (!onAdd || !allSelected) return;
      setAddError(null);
      try {
        await onAdd(items.map((it) => ({ item_id: it.id, variant_id: selectedVariants[it.id] })));
      } catch (err: any) {
        setAddError(err?.message || 'Failed to add bundle to cart');
      }
    };

    return (
      <div className="bundled-product-detail space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{bundle.title || 'Product Bundle'}</h2>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={item.id} className="p-4 border border-gray-200 rounded-lg space-y-3">
              <div className="flex gap-4">
                {showItemImages && item.product?.images?.[0]?.url && (
                  <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                    <img src={item.product.images[0].url} alt={item.product.title} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    Item {idx + 1}{item.quantity > 1 && ` (\u00d7${item.quantity})`}
                  </p>
                  <p className="font-semibold text-gray-900">{item.product?.title || 'Unknown Product'}</p>
                </div>
              </div>
              {item.product?.variants && item.product.variants.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Variant{item.product.variants.length > 1 && <span className="text-red-500">*</span>}
                  </label>
                  <div className="relative">
                    <select
                      value={selectedVariants[item.id] || ''}
                      onChange={(e) => setSelectedVariants((prev) => ({ ...prev, [item.id]: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900"
                    >
                      <option value="" disabled>Choose a variant...</option>
                      {item.product.variants.map((v) => (
                        <option key={v.id} value={v.id}>{v.title} - {fmt(v)}</option>
                      ))}
                    </select>
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none">
                      <ChevronDownSvg />
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
          {showSavingsBadge && totals.savingsPercent > 0 && (
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
              Save {totals.savingsPercent}%
            </div>
          )}
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-gray-900">${totals.total.toFixed(2)}</span>
            {totals.savingsPercent > 0 && (
              <span className="text-lg text-gray-500 line-through">${totals.individual.toFixed(2)}</span>
            )}
          </div>
          {totals.savings > 0 && (
            <p className="text-sm text-green-600">You save ${totals.savings.toFixed(2)}</p>
          )}
        </div>

        {addError && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{addError}</div>
        )}

        <button
          type="button"
          onClick={handleAdd}
          disabled={!onAdd || !allSelected || !!isAdding}
          className="w-full px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          {isAdding ? <><LoaderSvg /> Adding...</> : <><CartSvg /> {buttonText}</>}
        </button>
      </div>
    );
  },
};

export default BundledProductDetail;
