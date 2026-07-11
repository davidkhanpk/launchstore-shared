import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

export interface OrderTotalProps {
  label: string;
  fontSize: 'base' | 'lg' | 'xl' | '2xl';
  color: string;
  alignment: 'left' | 'center' | 'right';
  fontWeight: 'medium' | 'semibold' | 'bold';
  /** Injected by the consumer wrapper. */
  total?: number;
  formatPrice?: (amount: number) => string;
}

const FONT: Record<OrderTotalProps['fontSize'], string> = { base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const ALIGN: Record<OrderTotalProps['alignment'], string> = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT: Record<OrderTotalProps['fontWeight'], string> = { medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };

const defaultFormat = (amount: number) => `$${(Number(amount) || 0).toFixed(2)}`;

export const orderTotalFields: ComponentConfig<OrderTotalProps>['fields'] = {
  label: { type: 'text', label: 'Label' },
  fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: '2XL', value: '2xl' }] },
  color: { type: 'text', label: 'Color (hex or theme token)' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  fontWeight: { type: 'select', label: 'Font Weight', options: [{ label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
};

export const OrderTotal: ComponentConfig<OrderTotalProps> = {
  label: 'Order Total',
  fields: orderTotalFields,
  defaultProps: { label: 'Total', fontSize: 'xl', color: '#111827', alignment: 'center', fontWeight: 'bold' },
  render: ({ label, fontSize, color, alignment, fontWeight, total, formatPrice }) => {
    const fmt = formatPrice || defaultFormat;
    return (
      <p
        className={`${FONT[fontSize] || 'text-xl'} ${ALIGN[alignment] || 'text-center'} ${WEIGHT[fontWeight] || 'font-bold'} m-0`}
        style={{ color: resolveColor(color) || color }}
      >
        {label ? `${label}: ` : ''}
        {fmt(Number(total) || 0)}
      </p>
    );
  },
};

export default OrderTotal;
