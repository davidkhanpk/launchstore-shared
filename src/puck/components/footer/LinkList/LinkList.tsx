import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';

export interface LinkListItem {
  text: string;
  url: string;
}

export interface LinkListProps {
  links: LinkListItem[];
  color: string;
  hoverColor: string;
  fontSize: 'xs' | 'sm' | 'base';
  spacing: 'sm' | 'md' | 'lg';
  alignment: 'left' | 'center' | 'right';
}

const FONT: Record<LinkListProps['fontSize'], string> = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
const SPACING: Record<LinkListProps['spacing'], string> = { sm: 'space-y-1', md: 'space-y-2', lg: 'space-y-3' };
const ALIGN: Record<LinkListProps['alignment'], string> = { left: 'text-left', center: 'text-center', right: 'text-right' };

export const linkListFields: ComponentConfig<LinkListProps>['fields'] = {
  links: {
    type: 'array',
    label: 'Links',
    getItemSummary: (item: LinkListItem) => item?.text || 'Link',
    arrayFields: {
      text: { type: 'text', label: 'Text' },
      url: { type: 'text', label: 'URL' },
    },
  },
  color: { type: 'text', label: 'Text Color (hex or theme token)' },
  hoverColor: { type: 'text', label: 'Hover Color (hex or theme token)' },
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
  },
  spacing: {
    type: 'select', label: 'Spacing',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  alignment: {
    type: 'select', label: 'Alignment',
    options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
  },
};

export const LinkList: ComponentConfig<LinkListProps> = {
  label: 'Link List',
  fields: linkListFields,
  defaultProps: {
    links: [
      { text: 'Link One', url: '#' },
      { text: 'Link Two', url: '#' },
      { text: 'Link Three', url: '#' },
    ],
    color: '#6b7280',
    hoverColor: '#111827',
    fontSize: 'sm',
    spacing: 'md',
    alignment: 'left',
  },
  render: ({ links = [], color, hoverColor, fontSize, spacing, alignment }) => {
    const resolved = resolveColor(color) || color;
    const resolvedHover = resolveColor(hoverColor) || hoverColor;
    return (
      <ul className={`${SPACING[spacing] || 'space-y-2'} ${ALIGN[alignment] || 'text-left'} ${FONT[fontSize] || 'text-sm'} list-none p-0 m-0`}>
        {links.map((link, i) => (
          <li key={i}>
            <a
              href={link?.url || '#'}
              className="transition-colors duration-150 no-underline hover:underline"
              style={{ color: resolved }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = resolvedHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = resolved; }}
            >
              {link?.text || 'Link'}
            </a>
          </li>
        ))}
      </ul>
    );
  },
};

export default LinkList;
