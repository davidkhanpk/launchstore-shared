import type { Field } from '@puckeditor/core';

export type QuantitySelectorSize = 'small' | 'medium' | 'large';
export type QuantitySelectorStyle = 'default' | 'minimal' | 'rounded';

export interface QuantitySelectorProps {
  showLabel: boolean;
  labelText: string;
  minQuantity: number;
  maxQuantity: number;
  defaultQuantity: number;
  size: QuantitySelectorSize;
  style: QuantitySelectorStyle;
  marginTop: string;
  marginBottom: string;
  marginLeft: string;
  marginRight: string;
  paddingX: string;
  paddingY: string;
}

/**
 * Optional controlled-quantity contract. When omitted, the
 * shared component manages its own internal state (Puck canvas
 * preview). When provided, the consumer wrapper passes the
 * live cart-flow quantity and a setter.
 */
export type SetQuantity = (q: number) => void;
