import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { categoryBreadcrumbsFields } from './categorybreadcrumbs.fields';
import type { CategoryBreadcrumbsProps, SharedCategoryNode } from './categorybreadcrumbs.types';

export const CategoryBreadcrumbs: ComponentConfig<CategoryBreadcrumbsProps> = {
  label: 'Category Breadcrumbs',
  fields: categoryBreadcrumbsFields as ComponentConfig<CategoryBreadcrumbsProps>['fields'],
  defaultProps: {
    separator: '/',
    showHome: true,
    homeText: 'Home',
    fontSize: '0.875rem',
    textColor: '#666666',
    activeColor: '#000000',
    hoverColor: '#333333',
    marginBottom: '1.5rem',
    className: '',
  },
  render: (rawProps: any) => {
    const { category, countryCode = 'us', separator, showHome, homeText, fontSize, textColor, activeColor, hoverColor, marginBottom, className } = rawProps as CategoryBreadcrumbsProps;
    if (!category) return <></>;
    const baseStyle: React.CSSProperties = { fontSize, color: textColor, marginBottom };
    const breadcrumbs: SharedCategoryNode[] = [];
    let cur = category;
    while (cur.parent_category) {
      breadcrumbs.unshift(cur.parent_category);
      cur = cur.parent_category;
    }
    return (
      <nav aria-label="Breadcrumb" className={`flex items-center gap-2 ${className || ''}`} style={baseStyle}>
        {showHome && (
          <>
            <a href="/" className="hover:opacity-80 transition-opacity">{homeText}</a>
            <span>{separator}</span>
          </>
        )}
        {breadcrumbs.map((p) => (
          <span key={p.id} className="flex items-center gap-2">
            <a href={`/${countryCode}/categories/${p.handle}`} className="hover:opacity-80 transition-opacity">{p.name}</a>
            <span>{separator}</span>
          </span>
        ))}
        <span style={{ color: activeColor }} aria-current="page">{category.name}</span>
      </nav>
    );
  },
};

export default CategoryBreadcrumbs;
