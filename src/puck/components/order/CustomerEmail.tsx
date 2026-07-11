import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';

export interface CustomerEmailProps {
  label: string;
  showIcon: boolean;
  fontSize: 'sm' | 'base' | 'lg';
  color: string;
  alignment: 'left' | 'center' | 'right';
  /** Injected by the consumer wrapper. */
  email?: string;
}

const FONT: Record<CustomerEmailProps['fontSize'], string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
const ALIGN: Record<CustomerEmailProps['alignment'], string> = { left: 'justify-start text-left', center: 'justify-center text-center', right: 'justify-end text-right' };

const MailIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);

export const customerEmailFields: ComponentConfig<CustomerEmailProps>['fields'] = {
  label: { type: 'text', label: 'Label' },
  showIcon: { type: 'radio', label: 'Show Icon', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }] },
  color: { type: 'text', label: 'Color (hex or theme token)' },
  alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
};

export const CustomerEmail: ComponentConfig<CustomerEmailProps> = {
  label: 'Customer Email',
  fields: customerEmailFields,
  defaultProps: { label: 'A confirmation email has been sent to', showIcon: true, fontSize: 'sm', color: '#6b7280', alignment: 'center' },
  render: ({ label, showIcon, fontSize, color, alignment, email }) => (
    <p
      className={`flex items-center gap-2 ${ALIGN[alignment] || 'justify-center text-center'} ${FONT[fontSize] || 'text-sm'} m-0`}
      style={{ color: resolveColor(color) || color }}
    >
      {showIcon && <MailIcon />}
      <span>
        {label ? `${label} ` : ''}
        <strong>{email || 'customer@example.com'}</strong>
      </span>
    </p>
  ),
};

export default CustomerEmail;
