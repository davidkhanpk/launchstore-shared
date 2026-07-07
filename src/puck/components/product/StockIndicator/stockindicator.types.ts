import type { Field } from '@puckeditor/core';
import type { ProductData } from '../ProductData';

export type StockIndicatorStyle = 'default' | 'badge' | 'minimal';
export type StockStatus = 'in-stock' | 'low-stock' | 'out-of-stock' | 'pre-order';

export interface StockIndicatorProps {
  showIcon: boolean;
  showText: boolean;
  showQuantity: boolean;
  lowStockThreshold: number;
  style: StockIndicatorStyle;
}

export interface StockIndicatorResolved {
  status: StockStatus;
  text: string;
  iconColor: string;
  bgColor?: string;
  borderColor?: string;
  quantity: number;
  isPreOrder: boolean;
}

export const evaluateStock = (product: ProductData | null | undefined, threshold: number): StockIndicatorResolved => {
  const total = (product?.variants || []).reduce((acc, v) => acc + (v.inventory_quantity || 0), 0);
  const isPreOrder = !!(product?.metadata as any)?.is_pre_order;
  if (isPreOrder) {
    return {
      status: 'pre-order', text: 'Pre-Order',
      iconColor: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200',
      quantity: total, isPreOrder,
    };
  }
  if (total === 0) {
    return {
      status: 'out-of-stock', text: 'Out of Stock',
      iconColor: 'text-red-600', bgColor: 'bg-red-50', borderColor: 'border-red-200',
      quantity: 0, isPreOrder,
    };
  }
  if (total <= threshold) {
    return {
      status: 'low-stock', text: 'Low Stock',
      iconColor: 'text-orange-600', bgColor: 'bg-orange-50', borderColor: 'border-orange-200',
      quantity: total, isPreOrder,
    };
  }
  return {
    status: 'in-stock', text: 'In Stock',
    iconColor: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200',
    quantity: total, isPreOrder,
  };
};
