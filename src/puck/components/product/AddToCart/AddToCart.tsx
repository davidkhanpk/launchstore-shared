import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { addToCartFields } from './addtocart.fields';
import type { AddToCartProps, AddToCartVariant, AddToCartSize, AddToCartFn } from './addtocart.types';
import { resolveColor } from '../../../../theme/resolveColor';

const CartSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);
const CheckSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);
const ClockSvg = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

const VARIANT: Record<AddToCartVariant, string> = {
  primary: 'bg-black text-white hover:bg-gray-900',
  secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
  outline: 'border-2 border-black text-black hover:bg-black hover:text-white bg-transparent',
  ghost: 'text-black hover:bg-gray-100 bg-transparent',
  custom: '',
};
const SIZE: Record<AddToCartSize, string> = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };

const formatPreorderDate = (iso: string): string => {
  try {
    return new Date(iso).toLocaleDateString();
  } catch { return iso; }
};

export interface AddToCartWithData extends AddToCartProps {
  /** Selected variant id (from consumer's useVariantSelection). */
  selectedVariantId?: string | null;
  /** Quantity selector state. Defaults to 1 if omitted. */
  quantity?: number;
  /** Consumer's add-to-cart action. */
  onAdd?: AddToCartFn;
  /** In-flight state from consumer. */
  isLoading?: boolean;
  /** Whether the selected variant is in stock. Defaults to true. */
  inStock?: boolean;
  /** Whether the selected variant is a preorder. Defaults to false. */
  isPreorder?: boolean;
  /** Optional preorder ship date (ISO string). */
  preorderAvailableDate?: string;
  /** Optional theme object for color token resolution. */
  theme?: any;
}

const noopAdd: AddToCartFn = async () => {};

export const AddToCart: ComponentConfig<AddToCartWithData> = {
  label: 'Add to Cart Button',
  fields: addToCartFields as ComponentConfig<AddToCartWithData>['fields'],
  defaultProps: {
    text: 'Add to Cart', preorderText: 'Pre-order',
    variant: 'primary', size: 'md', fullWidth: false, showIcon: true, disabled: false,
    backgroundColor: '#000000', textColor: '#ffffff',
    hoverBackgroundColor: '#1f2937', hoverTextColor: '#ffffff', borderColor: '#000000',
    useThemeColors: false,
    marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
    paddingX: 'px-6', paddingY: 'py-3', borderRadius: 'rounded-lg',
  },
  render: (rawProps: any) => {
    const {
      text, preorderText, variant = 'primary', size = 'md', fullWidth = false,
      showIcon = true, disabled = false,
      backgroundColor = '#000000', textColor = '#ffffff',
      hoverBackgroundColor = '#1f2937', hoverTextColor = '#ffffff', borderColor = '#000000',
      useThemeColors = false,
      marginTop = 'mt-4', marginBottom = 'mb-4', marginLeft = 'ml-0', marginRight = 'mr-0',
      paddingX = 'px-6', paddingY = 'py-3', borderRadius = 'rounded-lg',
      selectedVariantId, quantity = 1, onAdd, isLoading = false,
      inStock = true, isPreorder = false, preorderAvailableDate, theme,
    } = rawProps as AddToCartWithData;

    const [justAdded, setJustAdded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const hasVariant = !!selectedVariantId;
    const add = onAdd || noopAdd;

    const handleClick = async () => {
      if (!hasVariant || disabled) return;
      try {
        await add(selectedVariantId as string, quantity);
        setJustAdded(true);
        setTimeout(() => setJustAdded(false), 2000);
      } catch {}
    };

    const resolve = (color: string) => useThemeColors ? resolveColor(color) : color;

    // Custom color styles — computed once so BOTH the editor preview (no
    // product/variant selected) and the live storefront render honor them.
    // Previously this only ran in the product-present branch, so changing
    // Background/Text/Hover/Border colors in the editor had no visible effect.
    const customStyles: React.CSSProperties = {};
    if (variant === 'custom') {
      customStyles.backgroundColor = isHovered ? resolve(hoverBackgroundColor) : resolve(backgroundColor);
      customStyles.color = isHovered ? resolve(hoverTextColor) : resolve(textColor);
      if (borderColor) {
        customStyles.borderColor = resolve(borderColor);
        customStyles.borderWidth = '2px';
        customStyles.borderStyle = 'solid';
      }
    }

    // Editor preview OR live render with no variant selected yet (multi-variant
    // product, user hasn't picked). Same UI: the button is disabled because
    // we don't have a variant to add, but the TEXT reflects stock state so
    // the shopper sees "Out of Stock" instead of a misleading "Add to Cart"
    // when the product is actually unavailable.
    if (!hasVariant) {
      const previewText = !inStock ? 'Out of Stock' : (text || 'Add to Cart');
      return (
        <button type="button" disabled className={`
          ${variant === 'custom' ? '' : VARIANT[(variant as AddToCartVariant) || 'primary']} ${SIZE[(size as AddToCartSize) || 'md']}
          ${fullWidth ? 'w-full' : ''} ${marginTop} ${marginBottom} ${marginLeft} ${marginRight}
          ${paddingX} ${paddingY} ${borderRadius}
          font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-2 ${variant === 'outline' ? 'border-2' : ''}
        `}
          style={variant === 'custom' ? customStyles : undefined}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showIcon && <CartSvg />}
          {previewText}
        </button>
      );
    }

    const isBtnDisabled = disabled || !inStock || isLoading;
    const widthClass = fullWidth ? 'w-full' : '';

    return (
      <>
        <button
          type="button" disabled={isBtnDisabled}
          className={`
            ${variant === 'custom' ? '' : VARIANT[(variant as AddToCartVariant) || 'primary']}
            ${SIZE[(size as AddToCartSize) || 'md']} ${widthClass}
            ${marginTop} ${marginBottom} ${marginLeft} ${marginRight}
            ${paddingX} ${paddingY} ${borderRadius}
            font-medium transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
            ${justAdded ? '!bg-green-600 !text-white' : ''}
            ${variant === 'outline' ? 'border-2' : ''}
          `}
          style={variant === 'custom' ? customStyles : undefined}
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {showIcon && (
            justAdded ? <CheckSvg /> : isPreorder ? <ClockSvg /> : <CartSvg />
          )}
          <span>
            {isLoading ? 'Adding…' : justAdded ? 'Added!' : !inStock ? 'Out of Stock' : isPreorder ? (preorderText || 'Pre-order') : (text || 'Add to Cart')}
          </span>
        </button>
        {isPreorder && preorderAvailableDate && (
          <p className="text-sm text-ui-fg-subtle mt-1">Ships on {formatPreorderDate(preorderAvailableDate)}</p>
        )}
      </>
    );
  },
};

export default AddToCart;
