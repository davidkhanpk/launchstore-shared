import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { AddToCartProps, AddToCartVariant, AddToCartSize, AddToCartFn } from './addtocart.types';
import { resolveColor } from '../../../../theme/resolveColor';
import {
} from '../../../design-system';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  text: { type: 'text' as const, label: 'Button Text' },
  preorderText: { type: 'text' as const, label: 'Pre-order Button Text' },
  variant: {
    type: 'select' as const, label: 'Style',
    options: [
      { label: 'Primary', value: 'primary' },
      { label: 'Secondary', value: 'secondary' },
      { label: 'Outline', value: 'outline' },
      { label: 'Ghost', value: 'ghost' },
      { label: 'Custom Colors', value: 'custom' },
    ],
  },
  useThemeColors: { type: 'radio' as const, label: 'Use Theme Colors', options: RADIO_YES_NO },
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex, rgb, or theme token)' },
  textColor: { type: 'text' as const, label: 'Text Color (hex, rgb, or theme token)' },
  hoverBackgroundColor: { type: 'text' as const, label: 'Hover Background Color' },
  hoverTextColor: { type: 'text' as const, label: 'Hover Text Color' },
  borderColor: { type: 'text' as const, label: 'Border Color (for outline variant)' },
  size: {
    type: 'select' as const, label: 'Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  fullWidth: { type: 'radio' as const, label: 'Full Width', options: RADIO_YES_NO },
  showIcon: { type: 'radio' as const, label: 'Show Cart Icon', options: RADIO_YES_NO },
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'rounded-none' }, { label: 'Small', value: 'rounded-sm' },
      { label: 'Medium', value: 'rounded-md' }, { label: 'Large', value: 'rounded-lg' },
      { label: 'Extra Large', value: 'rounded-xl' }, { label: 'Full', value: 'rounded-full' },
    ],
  },
  marginTop: {
    type: 'select' as const, label: 'Margin Top',
    options: [
      { label: 'None', value: 'mt-0' }, { label: 'Small (0.5rem)', value: 'mt-2' },
      { label: 'Medium (1rem)', value: 'mt-4' }, { label: 'Large (1.5rem)', value: 'mt-6' }, { label: 'X-Large (2rem)', value: 'mt-8' },
    ],
  },
  marginBottom: {
    type: 'select' as const, label: 'Margin Bottom',
    options: [
      { label: 'None', value: 'mb-0' }, { label: 'Small (0.5rem)', value: 'mb-2' },
      { label: 'Medium (1rem)', value: 'mb-4' }, { label: 'Large (1.5rem)', value: 'mb-6' }, { label: 'X-Large (2rem)', value: 'mb-8' },
    ],
  },
  marginLeft: {
    type: 'select' as const, label: 'Margin Left',
    options: [
      { label: 'None', value: 'ml-0' }, { label: 'Auto', value: 'ml-auto' },
      { label: 'Small', value: 'ml-2' }, { label: 'Medium', value: 'ml-4' },
    ],
  },
  marginRight: {
    type: 'select' as const, label: 'Margin Right',
    options: [
      { label: 'None', value: 'mr-0' }, { label: 'Auto', value: 'mr-auto' },
      { label: 'Small', value: 'mr-2' }, { label: 'Medium', value: 'mr-4' },
    ],
  },
  paddingX: {
    type: 'select' as const, label: 'Horizontal Padding',
    options: [{ label: 'Small', value: 'px-4' }, { label: 'Medium', value: 'px-6' }, { label: 'Large', value: 'px-8' }, { label: 'X-Large', value: 'px-10' }],
  },
  paddingY: {
    type: 'select' as const, label: 'Vertical Padding',
    options: [{ label: 'Small', value: 'py-2' }, { label: 'Medium', value: 'py-3' }, { label: 'Large', value: 'py-4' }, { label: 'X-Large', value: 'py-5' }],
  },
  disabled: { type: 'radio' as const, label: 'Disabled State (Preview)', options: RADIO_YES_NO },
};

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
  fields: allFields as any,
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

    // Custom color styles — ALWAYS applied (regardless of `variant`), so that
    // the color overrides take effect on the canvas even when the user has
    // `variant` set to 'primary' / 'secondary' / 'outline' / 'ghost'.
    // Inline styles have higher CSS specificity than the Tailwind classes
    // from VARIANT[variant], so they win and the button shows the custom
    // colors. The hover state still works via isHovered below.
    //
    // Previously this was gated on `variant === 'custom'`, which meant any
    // non-custom variant silently ignored the color props — exactly the
    // symptom in the bug report. The generic Button.tsx in the same project
    // does NOT gate on variant; this aligns AddToCart with that pattern.
    const customStyles: React.CSSProperties = {
      backgroundColor: isHovered ? resolve(hoverBackgroundColor) : resolve(backgroundColor),
      color: isHovered ? resolve(hoverTextColor) : resolve(textColor),
    };
    if (borderColor) {
      customStyles.borderColor = resolve(borderColor);
      customStyles.borderWidth = '2px';
      customStyles.borderStyle = 'solid';
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
          style={customStyles}
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
          style={customStyles}
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
