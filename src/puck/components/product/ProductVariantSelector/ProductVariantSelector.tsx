import React, { useEffect, useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productVariantSelectorFields } from './productvariantselector.fields';
import type {
  ProductVariantSelectorProps, VariantSelectorStyle,
  SelectedOptions, SetSelectedOptions, SetSelectedVariant,
  ProductVariantSelectorVariantLike,
} from './productvariantselector.types';
import type { ProductData, ProductDataOption } from '../ProductData';

const CheckSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);

const renderOptionRow = (option: ProductDataOption, selectorStyle: VariantSelectorStyle, showLabels: boolean, selected: string | undefined, onChange: (val: string) => void) => {
  if (selectorStyle === 'dropdown') {
    return (
      <div key={option.id} className="mb-4">
        {showLabels && <label className="block text-sm font-medium text-gray-700 mb-2">{option.title}</label>}
        <select
          value={selected || ''}
          onChange={(e) => onChange(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {(option.values || []).map((v) => (
            <option key={v.id} value={v.value}>{v.value}</option>
          ))}
        </select>
      </div>
    );
  }
  if (selectorStyle === 'buttons') {
    return (
      <div key={option.id} className="mb-4">
        {showLabels && <label className="block text-sm font-medium text-gray-700 mb-2">{option.title}</label>}
        <div className="flex flex-wrap gap-2">
          {(option.values || []).map((v) => {
            const isSelected = selected === v.value;
            return (
              <button
                key={v.id} type="button"
                onClick={() => onChange(v.value)}
                className={`px-4 py-2 border rounded-md transition-colors ${isSelected ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-300 hover:border-gray-400'}`}
              >
                {v.value}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
  // color-swatches
  return (
    <div key={option.id} className="mb-4">
      {showLabels && <label className="block text-sm font-medium text-gray-700 mb-2">{option.title}</label>}
      <div className="flex flex-wrap gap-2">
        {(option.values || []).map((v) => {
          const isSelected = selected === v.id;
          const colorValue = v.metadata?.color || v.value.toLowerCase();
          return (
            <button
              key={v.id} type="button" title={v.value}
              onClick={() => onChange(v.id)}
              className={`w-10 h-10 rounded-full border-2 transition-all ${isSelected ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-300'}`}
              style={{ backgroundColor: colorValue }}
            />
          );
        })}
      </div>
    </div>
  );
};

export interface ProductVariantSelectorWithState extends ProductVariantSelectorProps {
  product?: ProductData | null;
  selectedOptions?: SelectedOptions;
  setSelectedOptions?: SetSelectedOptions;
  selectedVariant?: ProductVariantSelectorVariantLike | null;
  setSelectedVariant?: SetSelectedVariant;
}

export const ProductVariantSelector: ComponentConfig<ProductVariantSelectorWithState> = {
  label: 'Product Variant Selector',
  fields: productVariantSelectorFields as ComponentConfig<ProductVariantSelectorWithState>['fields'],
  defaultProps: {
    selectorStyle: 'buttons', showLabels: true, showStock: true,
    marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
    paddingX: 'px-0', paddingY: 'py-0',
  },
  render: (rawProps: any) => {
    const {
      selectorStyle = 'buttons', showLabels, showStock = true, marginTop, marginBottom,
      marginLeft, marginRight, paddingX, paddingY,
      product, selectedOptions: externalOpts, setSelectedOptions: externalSetOpts,
      selectedVariant, setSelectedVariant: externalSetVariant,
    } = rawProps as ProductVariantSelectorWithState;

    const controlled = externalOpts !== undefined && typeof externalSetOpts === 'function';
    const [localOpts, setLocalOpts] = useState<SelectedOptions>({});
    const selectedOptions = controlled ? (externalOpts as SelectedOptions) : localOpts;
    const setOptions: SetSelectedOptions = controlled ? (externalSetOpts as SetSelectedOptions) : setLocalOpts;

    console.log('[PVS render]', {
      controlled,
      productId: product?.id,
      variantsLen: product?.variants?.length,
      optionsLen: (product?.options || []).length,
      selectedOptionsKeys: Object.keys(selectedOptions),
      selectedVariantId: selectedVariant?.id,
    });

    if (!product || !product.variants || product.variants.length === 0) {
      console.log('[PVS render] early return: no product/variants');
      return <div className="text-gray-400 italic">No variants available</div>;
    }
    if (product.variants.length === 1 && (!product.options || product.options.length === 0)) {
      console.log('[PVS render] early return: single variant, no options');
      return <div />;
    }
    const options = product.options || [];

    // Initialize selection when options become available and nothing is
    // selected yet. Runs in BOTH controlled and uncontrolled modes, and
    // RE-RUNS whenever options.length changes (e.g. when the product
    // loads asynchronously after the selector mounts, or when the user
    // navigates to a different product). The previous version had `[]`
    // as deps, which meant the effect only ran once at mount — if the
    // product wasn't loaded yet, the effect saw options=[] and silently
    // did nothing, and nothing re-ran when the product finally arrived.
    // Now: when options transitions from 0 → N, the effect re-fires and
    // seeds the first value of each option. The matching-variant effect
    // (below) then sees the new selectedOptions and calls externalSetVariant,
    // so the AddToCart's selectedVariant gets populated and the button
    // enables correctly on first paint.
    useEffect(() => {
      console.log('[PVS init effect] fired. options.length=', options.length, 'selectedOptions=', JSON.stringify(selectedOptions));
      if (options.length > 0 && Object.keys(selectedOptions).length === 0) {
        const init: SelectedOptions = {};
        options.forEach((opt) => {
          if (opt.values && opt.values.length > 0) init[opt.id] = opt.values[0].value;
        });
        console.log('[PVS init effect] setting init=', JSON.stringify(init));
        setOptions(init);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options.length]);

    // Find matching variant when options change
    useEffect(() => {
      console.log('[PVS match effect] fired. selectedOptions=', JSON.stringify(selectedOptions), 'options.length=', options.length);
      if (Object.keys(selectedOptions).length === options.length) {
        const match = product.variants?.find((variant) =>
          variant.options?.every((vo) => {
            const oid = vo.option_id; const v = vo.value; return oid && v && selectedOptions[oid] === v;
          })
        );
        console.log('[PVS match effect] match=', match?.id, 'externalSetVariant?', typeof externalSetVariant);
        if (externalSetVariant && match) {
          externalSetVariant({
            id: match.id, sku: match.sku ?? undefined,
            inventory_quantity: match.inventory_quantity ?? null,
            options: match.options,
          });
        } else if (externalSetVariant) {
          externalSetVariant(null);
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedOptions]);

    const sty = (selectorStyle as VariantSelectorStyle) || 'buttons';

    return (
      <div className={`space-y-4 ${marginTop || ''} ${marginBottom || ''} ${marginLeft || ''} ${marginRight || ''} ${paddingX || ''} ${paddingY || ''}`}>
        {options.map((opt) => renderOptionRow(opt, sty, !!showLabels, selectedOptions[opt.id], (val) => setOptions({ ...selectedOptions, [opt.id]: val })))}

        {showStock && selectedVariant && (
          <div className="mt-4 text-sm flex items-center gap-1">
            {selectedVariant.inventory_quantity && selectedVariant.inventory_quantity > 0 ? (
              <span className="text-green-600 inline-flex items-center gap-1">
                <CheckSvg /> In stock ({selectedVariant.inventory_quantity} available)
              </span>
            ) : (
              <span className="text-red-600">✗ Out of stock</span>
            )}
          </div>
        )}
      </div>
    );
  },
};

export default ProductVariantSelector;
