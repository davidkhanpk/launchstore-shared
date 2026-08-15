import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ContactInfoProps } from './contactinfo.types';
import {
  SPACING_OPTIONS,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

// Inline SVG icons (replacing lucide-react) — MapPin / Phone / Mail / Clock
const ICONS = {
  map: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>),
  phone: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
  mail: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 4-10 8L2 4" /></svg>),
  clock: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
};

const FONT: Record<NonNullable<ContactInfoProps['fontSize']>, string> = { sm: 'text-sm', base: 'text-base' };

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  showAddress: { type: 'radio' as const, label: 'Show Address', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  address: { type: 'textarea' as const, label: 'Address' },
  showPhone: { type: 'radio' as const, label: 'Show Phone', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  phone: { type: 'text' as const, label: 'Phone Number' },
  showEmail: { type: 'radio' as const, label: 'Show Email', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  email: { type: 'text' as const, label: 'Email Address' },
  showHours: { type: 'radio' as const, label: 'Show Business Hours', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  hours: { type: 'textarea' as const, label: 'Business Hours' },
  showIcons: { type: 'radio' as const, label: 'Show Icons', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  layout: {
    type: 'select' as const, label: 'Layout',
    options: [{ label: 'Stacked', value: 'stacked' }, { label: 'Grid', value: 'grid' }],
  },
};

// ── Style fields (component-specific colors/sizing) ─────────────────────────

const styleFields = {
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  iconColor: { type: 'text' as const, label: 'Icon Color (hex or theme token)' },
  fontSize: {
    type: 'select' as const, label: 'Font Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
  },
  gap: { type: 'select' as const, label: 'Spacing', options: SPACING_OPTIONS },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...styleFields,
  ...sharedLayoutFields,
};

// Legacy semantic gap values still resolve.
const LEGACY_GAP: Record<string, string> = { sm: '2', md: '4', lg: '6' };
const LAYOUT_CLASS: Record<string, string> = {
  stacked: 'flex flex-col', grid: 'grid grid-cols-1 md:grid-cols-2',
};

// ── Component ───────────────────────────────────────────────────────────────

export const ContactInfo: ComponentConfig<ContactInfoProps> = {
  label: 'Contact Info',
  fields: allFields as any,
  defaultProps: {
    showAddress: true,
    address: '123 Main Street\nCity, State 12345\nCountry',
    showPhone: true,
    phone: '+1 (555) 123-4567',
    showEmail: true,
    email: 'contact@example.com',
    showHours: true,
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: 10:00 AM - 4:00 PM',
    showIcons: true,
    layout: 'stacked',
    textColor: '#6b7280',
    iconColor: '#9ca3af',
    fontSize: 'sm',
    gap: 'md',
    ...defaultLayoutProps,
  } as ContactInfoProps,
  render: (rawProps: any) => {
    const {
      showAddress, address, showPhone, phone, showEmail, email,
      showHours, hours, showIcons, layout, textColor, iconColor, fontSize, gap,
      marginTop, marginBottom, paddingX, paddingY,
    } = rawProps;

    const items: Array<{ icon: React.ReactNode; content: string; href: string | null }> = [];
    if (showAddress && address) items.push({ icon: ICONS.map, content: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}` });
    if (showPhone && phone) items.push({ icon: ICONS.phone, content: phone, href: `tel:${phone.replace(/\s/g, '')}` });
    if (showEmail && email) items.push({ icon: ICONS.mail, content: email, href: `mailto:${email}` });
    if (showHours && hours) items.push({ icon: ICONS.clock, content: hours, href: null });

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div className={`${LAYOUT_CLASS[layout || 'stacked'] || 'flex flex-col'} ${`gap-${LEGACY_GAP[gap] ?? gap ?? '4'}`} ${layoutClasses}`}>
        {items.map((item, i) => {
          const content = (
            <div className="flex items-start gap-3">
              {showIcons && (
                <span className="flex-shrink-0 mt-0.5" style={{ color: resolveColor(iconColor) }}>
                  {item.icon}
                </span>
              )}
              <div className={`${FONT[fontSize || 'sm'] || 'text-sm'} whitespace-pre-line`} style={{ color: resolveColor(textColor) }}>
                {item.content}
              </div>
            </div>
          );
          return item.href ? (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              {content}
            </a>
          ) : (
            <div key={i}>{content}</div>
          );
        })}
      </div>
    );
  },
};

export default ContactInfo;
