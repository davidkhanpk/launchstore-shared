import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface QuickLinkItem {
  text: string;
  href: string;
}

export interface QuickLinksProps {
  title: string;
  links: QuickLinkItem[];
  fontSize: 'xs' | 'sm' | 'base';
}

const FONT: Record<QuickLinksProps['fontSize'], string> = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };

const PLACEHOLDER: QuickLinkItem[] = [
  { text: 'New Arrivals', href: '#' },
  { text: 'Best Sellers', href: '#' },
  { text: 'Sale', href: '#' },
];

export const quickLinksFields: ComponentConfig<QuickLinksProps>['fields'] = {
  title: { type: 'text', label: 'Title' },
  links: {
    type: 'array', label: 'Links',
    getItemSummary: (item: QuickLinkItem) => item?.text || 'Link',
    arrayFields: { text: { type: 'text', label: 'Text' }, href: { type: 'text', label: 'URL' } },
  },
  fontSize: {
    type: 'select', label: 'Font Size',
    options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
  },
};

export const QuickLinks: ComponentConfig<QuickLinksProps> = {
  label: 'Quick Links',
  fields: quickLinksFields,
  defaultProps: {
    title: 'Quick Links',
    links: [],
    fontSize: 'sm',
  },
  render: ({ title, links, fontSize }) => {
    const items = links && links.length > 0 ? links : PLACEHOLDER;
    return (
      <div className="py-3">
        {title && <h4 className="text-sm font-semibold text-gray-900 m-0 mb-2">{title}</h4>}
        <ul className={`list-none p-0 m-0 flex flex-col gap-1.5 ${FONT[fontSize] || 'text-sm'}`}>
          {items.map((link, i) => (
            <li key={i}>
              <a href={link?.href || '#'} className="no-underline text-gray-600 hover:text-gray-900 transition-colors">
                {link?.text || 'Link'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export default QuickLinks;
