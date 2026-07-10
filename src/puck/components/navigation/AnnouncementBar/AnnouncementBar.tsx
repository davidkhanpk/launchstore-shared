import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';

export interface AnnouncementBarProps {
  text: string;
  linkText: string;
  linkUrl: string;
  backgroundColor: string;
  textColor: string;
  alignment: 'left' | 'center' | 'right';
  fontSize: 'xs' | 'sm' | 'base';
  paddingY: 'sm' | 'md' | 'lg';
}

const FONT: Record<AnnouncementBarProps['fontSize'], string> = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
const ALIGN: Record<AnnouncementBarProps['alignment'], string> = { left: 'justify-start text-left', center: 'justify-center text-center', right: 'justify-end text-right' };
const PADY: Record<AnnouncementBarProps['paddingY'], string> = { sm: 'py-1', md: 'py-2', lg: 'py-3' };

export const announcementBarFields: ComponentConfig<AnnouncementBarProps>['fields'] = {
  text: { type: 'text', label: 'Text' },
  linkText: { type: 'text', label: 'Link Text (optional)' },
  linkUrl: { type: 'text', label: 'Link URL (optional)' },
  backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
  },
  paddingY: {
    type: 'select', label: 'Vertical Padding',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
};

export const AnnouncementBar: ComponentConfig<AnnouncementBarProps> = {
  label: 'Announcement Bar',
  fields: announcementBarFields,
  defaultProps: {
    text: 'Free shipping on orders over $50',
    linkText: '',
    linkUrl: '',
    backgroundColor: '#000000',
    textColor: '#ffffff',
    alignment: 'center',
    fontSize: 'sm',
    paddingY: 'md',
  },
  render: ({ text, linkText, linkUrl, backgroundColor, textColor, alignment, fontSize, paddingY }) => {
    const bg = resolveColor(backgroundColor) || backgroundColor;
    const fg = resolveColor(textColor) || textColor;
    return (
      <div className="w-full" style={{ backgroundColor: bg, color: fg }}>
        <div className={`container mx-auto px-4 flex items-center gap-2 ${ALIGN[alignment] || 'justify-center text-center'} ${PADY[paddingY] || 'py-2'} ${FONT[fontSize] || 'text-sm'}`}>
          <span>{text}</span>
          {linkText && (
            <a href={linkUrl || '#'} className="underline font-medium" style={{ color: fg }}>
              {linkText}
            </a>
          )}
        </div>
      </div>
    );
  },
};

export default AnnouncementBar;
