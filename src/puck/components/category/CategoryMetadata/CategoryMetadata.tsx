import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { categoryMetadataFields } from './categorymetadata.fields';
import type { CategoryMetadataProps } from './categorymetadata.types';

const TagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>);
const PackageIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m7.5 7.5 4.5-3 4.5 3-4.5 3z" /><path d="M2 7.5 12 2l10 5.5v9L12 22 2 16.5z" /><path d="M2 7.5v9" /><path d="M12 22v-9" /><path d="m16 11 5.5-3" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);

export const CategoryMetadata: ComponentConfig<CategoryMetadataProps> = {
  label: 'Category Metadata',
  fields: categoryMetadataFields as ComponentConfig<CategoryMetadataProps>['fields'],
  defaultProps: {
    showHandle: false, showProductCount: true, showUpdatedDate: false,
    layout: 'horizontal', fontSize: '0.875rem', textColor: '#666666', iconColor: '#999999',
    spacing: '1rem', className: '',
  },
  render: (rawProps: any) => {
    const { category, showHandle, showProductCount, showUpdatedDate, layout, fontSize, textColor, iconColor, spacing, className } = rawProps as CategoryMetadataProps;
    if (!category) return <></>;
    const items: React.ReactNode[] = [];
    const itemStyle: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize, color: textColor };

    if (showHandle) {
      items.push(<div key="handle" style={itemStyle}><span style={{ color: iconColor }}><TagIcon /></span><span>Handle: <span style={{ fontWeight: 500 }}>{category.handle}</span></span></div>);
    }
    if (showProductCount) {
      const count = category.product_count || 0;
      items.push(<div key="count" style={itemStyle}><span style={{ color: iconColor }}><PackageIcon /></span><span><span style={{ fontWeight: 500 }}>{count}</span> Product{count !== 1 ? 's' : ''}</span></div>);
    }
    if (showUpdatedDate && category.updated_at) {
      const date = new Date(category.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      items.push(<div key="updated" style={itemStyle}><span style={{ color: iconColor }}><CalendarIcon /></span><span>Updated: <span style={{ fontWeight: 500 }}>{date}</span></span></div>);
    }
    if (items.length === 0) return <></>;

    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: layout === 'vertical' ? 'column' : 'row',
      gap: spacing,
      alignItems: layout === 'vertical' ? 'flex-start' : 'center',
      flexWrap: 'wrap',
    };
    return <div className={className} style={containerStyle}>{items}</div>;
  },
};

export default CategoryMetadata;
