import type { Field } from '@puckeditor/core';

export type AddToCartVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'custom';
export type AddToCartSize = 'sm' | 'md' | 'lg';

export interface AddToCartProps {
  variant: AddToCartVariant;
  size: AddToCartSize;
  fullWidth: boolean;
  text: string;
  preorderText: string;
  showIcon: boolean;
  disabled: boolean;
  backgroundColor: string;
  textColor: string;
  hoverBackgroundColor: string;
  hoverTextColor: string;
  borderColor: string;
  useThemeColors: boolean;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  paddingX: string;
  paddingY: string;
  borderRadius: string;
}

/**
 * Cart-action contract. The shared component does NOT import
 * any cart SDK. The consumer wrapper provides:
 *   - onAdd(variantId, quantity) -> Promise<void>
 *   - isLoading: boolean (submitting state)
 *   - inStock: boolean (precomputed by consumer; defaults to true)
 *   - isPreorder: boolean (default false)
 *   - preorderAvailableDate: string | undefined (ISO date)
 *   - hasVariant: boolean (selectedVariant not null)
 */
export type AddToCartFn = (variantId: string, quantity: number) => Promise<void>;
