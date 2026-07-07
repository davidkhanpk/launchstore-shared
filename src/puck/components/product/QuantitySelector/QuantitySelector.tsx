import React, { useState, useEffect } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { quantitySelectorFields } from './quantityselector.fields';
import type { QuantitySelectorProps, QuantitySelectorSize, QuantitySelectorStyle, SetQuantity } from './quantityselector.types';

const MinusSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const PlusSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);

const SIZE_INPUT: Record<QuantitySelectorSize, string> = { small: 'h-8 text-sm', medium: 'h-10 text-base', large: 'h-12 text-lg' };
const SIZE_BUTTON: Record<QuantitySelectorSize, string> = { small: 'w-8 h-8', medium: 'w-10 h-10', large: 'w-12 h-12' };
const SIZE_ICON: Record<QuantitySelectorSize, number> = { small: 12, medium: 16, large: 20 };
const STYLE: Record<QuantitySelectorStyle, string> = {
  default: 'border border-gray-300 rounded-lg shadow-sm',
  minimal: 'border-b border-gray-300',
  rounded: 'border border-gray-300 rounded-full shadow-sm',
};

export interface QuantitySelectorWithState extends QuantitySelectorProps {
  /** Optional cart-flow quantity + setter. When omitted, internal state. */
  quantity?: number;
  setQuantity?: SetQuantity;
}

export const QuantitySelector: ComponentConfig<QuantitySelectorWithState> = {
  label: 'Quantity Selector',
  fields: quantitySelectorFields as ComponentConfig<QuantitySelectorWithState>['fields'],
  defaultProps: {
    showLabel: true, labelText: 'Quantity',
    minQuantity: 1, maxQuantity: 99, defaultQuantity: 1,
    size: 'medium', style: 'default',
    marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
    paddingX: 'px-0', paddingY: 'py-0',
  },
  render: (rawProps: any) => {
    const {
      showLabel, labelText, minQuantity = 1, maxQuantity = 99, defaultQuantity = 1,
      size = 'medium', style = 'default', marginTop, marginBottom, marginLeft,
      marginRight, paddingX, paddingY,
      quantity: externalQuantity, setQuantity: externalSet,
    } = rawProps as QuantitySelectorWithState;

    const [localQ, setLocalQ] = useState(defaultQuantity);
    const controlled = externalQuantity !== undefined;
    const quantity = controlled ? externalQuantity : localQ;
    const setQuantity: SetQuantity = externalSet || setLocalQ;

    useEffect(() => {
      if (defaultQuantity !== quantity) setQuantity(defaultQuantity);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const increment = () => { if (quantity < maxQuantity) setQuantity(quantity + 1); };
    const decrement = () => { if (quantity > minQuantity) setQuantity(quantity - 1); };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value) || minQuantity;
      if (value >= minQuantity && value <= maxQuantity) setQuantity(value);
    };

    const sz = (size as QuantitySelectorSize) || 'medium';
    const sty = (style as QuantitySelectorStyle) || 'default';

    return (
      <div className={`quantity-selector ${marginTop || ''} ${marginBottom || ''} ${marginLeft || ''} ${marginRight || ''} ${paddingX || ''} ${paddingY || ''}`}>
        {showLabel && (
          <label className="block text-sm font-medium text-gray-800 mb-2">{labelText}</label>
        )}
        <div className={`inline-flex items-center ${STYLE[sty]} bg-white overflow-hidden hover:border-gray-400 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-20 transition-all duration-200`}>
          <button
            type="button" onClick={decrement} disabled={quantity <= minQuantity}
            className={`${SIZE_BUTTON[sz]} flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 border-r border-gray-200`}
            aria-label="Decrease quantity"
          >
            <MinusSvg size={SIZE_ICON[sz]} />
          </button>
          <input
            type="number" value={quantity} onChange={handleInputChange}
            min={minQuantity} max={maxQuantity}
            className={`${SIZE_INPUT[sz]} w-16 text-center font-semibold text-gray-900 border-none focus:outline-none appearance-none bg-transparent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
            aria-label="Quantity"
          />
          <button
            type="button" onClick={increment} disabled={quantity >= maxQuantity}
            className={`${SIZE_BUTTON[sz]} flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed active:scale-95 transition-all duration-150 border-l border-gray-200`}
            aria-label="Increase quantity"
          >
            <PlusSvg size={SIZE_ICON[sz]} />
          </button>
        </div>
      </div>
    );
  },
};

export default QuantitySelector;
