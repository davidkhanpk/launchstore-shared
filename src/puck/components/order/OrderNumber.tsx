import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

export interface OrderNumberProps {
  label: string;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  color: string;
  alignment: 'left' | 'center' | 'right';
  fontWeight: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Injected by the consumer wrapper. */
  orderNumber?: string;
}

const FONT: Record<OrderNumberProps['fontSize'], string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl' };
const ALIGN: Record<OrderNumberProps['alignment'], string> = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT: Record<OrderNumberProps['fontWeight'], string> = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };

export const orderNumberFields: ComponentConfig<OrderNumberProps>['fields'] = {
  label: { type: 'text', label: 'Label' },
  fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }] },
  color: { type: 'text', label: 'Color (hex or theme token)' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  fontWeight: { type: 'select', label: 'Font Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
};

export const OrderNumber: ComponentConfig<OrderNumberProps> = {
  label: 'Order Number',
  fields: orderNumberFields,
  defaultProps: { label: 'Order', fontSize: 'lg', color: '#111827', alignment: 'center', fontWeight: 'semibold' },
  render: ({ label, fontSize, color, alignment, fontWeight, orderNumber }) => (
    <p
      className={`${FONT[fontSize] || 'text-lg'} ${ALIGN[alignment] || 'text-center'} ${WEIGHT[fontWeight] || 'font-semibold'} m-0`}
      style={{ color: resolveColor(color) || color }}
    >
      {label ? `${label} ` : ''}
      {orderNumber || '#00000'}
    </p>
  ),
};

export default OrderNumber;
