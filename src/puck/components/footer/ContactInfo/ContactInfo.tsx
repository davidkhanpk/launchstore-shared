import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { contactInfoFields } from './contactinfo.fields';
import type { ContactInfoProps } from './contactinfo.types';

// Inline SVG icons (replacing lucide-react) — MapPin / Phone / Mail / Clock
const ICONS = {
  map: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 10c0 7-8 13-8 13s-8-6-8-13a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>),
  phone: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>),
  mail: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 4-10 8L2 4" /></svg>),
  clock: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>),
};

const GAP: Record<ContactInfoProps['gap'], string> = { sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
const FONT: Record<ContactInfoProps['fontSize'], string> = { sm: 'text-sm', base: 'text-base' };
const LAYOUT: Record<ContactInfoProps['layout'], string> = {
  stacked: 'flex flex-col', grid: 'grid grid-cols-1 md:grid-cols-2',
};

export const ContactInfo: ComponentConfig<ContactInfoProps> = {
  label: 'Contact Info',
  fields: contactInfoFields as ComponentConfig<ContactInfoProps>['fields'],
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
  },
  render: ({
    showAddress, address, showPhone, phone, showEmail, email,
    showHours, hours, showIcons, layout, textColor, iconColor, fontSize, gap,
  }) => {
    const items: Array<{ icon: React.ReactNode; content: string; href: string | null }> = [];
    if (showAddress && address) items.push({ icon: ICONS.map, content: address, href: `https://maps.google.com/?q=${encodeURIComponent(address)}` });
    if (showPhone && phone) items.push({ icon: ICONS.phone, content: phone, href: `tel:${phone.replace(/\s/g, '')}` });
    if (showEmail && email) items.push({ icon: ICONS.mail, content: email, href: `mailto:${email}` });
    if (showHours && hours) items.push({ icon: ICONS.clock, content: hours, href: null });

    return (
      <div className={`${LAYOUT[layout] || 'flex flex-col'} ${GAP[gap] || 'gap-4'}`}>
        {items.map((item, i) => {
          const content = (
            <div className="flex items-start gap-3">
              {showIcons && (
                <span className="flex-shrink-0 mt-0.5" style={{ color: resolveColor(iconColor) }}>
                  {item.icon}
                </span>
              )}
              <div className={`${FONT[fontSize] || 'text-sm'} whitespace-pre-line`} style={{ color: resolveColor(textColor) }}>
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
