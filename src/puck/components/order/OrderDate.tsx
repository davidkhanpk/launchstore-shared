import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

export interface OrderDateProps {
  label: string;
  fontSize: 'sm' | 'base' | 'lg';
  color: string;
  alignment: 'left' | 'center' | 'right';
  /** Injected by the consumer wrapper (ISO date string). */
  date?: string;
}

const FONT: Record<OrderDateProps['fontSize'], string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
const ALIGN: Record<OrderDateProps['alignment'], string> = { left: 'text-left', center: 'text-center', right: 'text-right' };

const formatDate = (iso?: string): string => {
  const d = iso ? new Date(iso) : new Date();
  try {
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  } catch {
    return d.toDateString();
  }
};

export const orderDateFields: ComponentConfig<OrderDateProps>['fields'] = {
  label: { type: 'text', label: 'Label' },
  fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }] },
  color: { type: 'text', label: 'Color (hex or theme token)' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
};

export const OrderDate: ComponentConfig<OrderDateProps> = {
  label: 'Order Date',
  fields: orderDateFields,
  defaultProps: { label: 'Placed on', fontSize: 'sm', color: '#6b7280', alignment: 'center' },
  render: ({ label, fontSize, color, alignment, date }) => (
    <p
      className={`${FONT[fontSize] || 'text-sm'} ${ALIGN[alignment] || 'text-center'} m-0`}
      style={{ color: resolveColor(color) || color }}
    >
      {label ? `${label} ` : ''}
      {formatDate(date)}
    </p>
  ),
};

export default OrderDate;
