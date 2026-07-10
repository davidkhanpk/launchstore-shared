import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface CategoryNavItem {
  name: string;
  icon?: string;
  href: string;
}

export interface CategoryNavProps {
  title: string;
  showIcons: boolean;
  style: 'standard' | 'luxury';
  categories: CategoryNavItem[];
}

const StarSvg = () => (<svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" /></svg>);
const CrownSvg = () => (<svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M2 18h20l-2-9-5 4-3-7-3 7-5-4z" /></svg>);
const HeartSvg = () => (<svg width={16} height={16} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z" /></svg>);
const DotSvg = () => (<svg width={16} height={16} fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /></svg>);

const ICON: Record<string, React.ReactNode> = { star: <StarSvg />, crown: <CrownSvg />, heart: <HeartSvg /> };

const PLACEHOLDER: CategoryNavItem[] = [
  { name: 'New Arrivals', icon: 'star', href: '#' },
  { name: 'Exclusive', icon: 'crown', href: '#' },
  { name: 'Curated', icon: 'heart', href: '#' },
];

export const categoryNavFields: ComponentConfig<CategoryNavProps>['fields'] = {
  title: { type: 'text', label: 'Title' },
  showIcons: { type: 'radio', label: 'Show Icons', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  style: { type: 'select', label: 'Style', options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }] },
  categories: {
    type: 'array', label: 'Categories',
    getItemSummary: (item: CategoryNavItem) => item?.name || 'Category',
    arrayFields: {
      name: { type: 'text', label: 'Name' },
      icon: { type: 'select', label: 'Icon', options: [{ label: 'None', value: '' }, { label: 'Star', value: 'star' }, { label: 'Crown', value: 'crown' }, { label: 'Heart', value: 'heart' }] },
      href: { type: 'text', label: 'URL' },
    },
  },
};

export const CategoryNav: ComponentConfig<CategoryNavProps> = {
  label: 'Category Nav',
  fields: categoryNavFields,
  defaultProps: {
    title: 'Featured',
    showIcons: true,
    style: 'standard',
    categories: [],
  },
  render: ({ title, showIcons, style, categories }) => {
    const items = categories && categories.length > 0 ? categories : PLACEHOLDER;
    const luxury = style === 'luxury';
    return (
      <div className={`py-3 ${luxury ? 'font-light tracking-wide' : ''}`}>
        {title && <h4 className="text-sm font-semibold text-gray-900 m-0 mb-2">{title}</h4>}
        <ul className="list-none p-0 m-0 flex flex-col gap-1.5">
          {items.map((cat, i) => (
            <li key={i}>
              <a href={cat?.href || '#'} className="no-underline flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
                {showIcons && <span className="text-gray-400">{ICON[cat?.icon || ''] || <DotSvg />}</span>}
                {cat?.name || 'Category'}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  },
};

export default CategoryNav;
