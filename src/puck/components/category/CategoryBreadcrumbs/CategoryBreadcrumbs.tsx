import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CategoryBreadcrumbsProps, SharedCategoryNode } from './categorybreadcrumbs.types';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  sharedColorFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  separator: { type: 'text' as const, label: 'Separator' },
  showHome: { type: 'radio' as const, label: 'Show Home Link', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  homeText: { type: 'text' as const, label: 'Home Link Text' },
  activeColor: { type: 'text' as const, label: 'Active/Current Color' },
  hoverColor: { type: 'text' as const, label: 'Hover Color' },
  className: { type: 'text' as const, label: 'Custom CSS Classes' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const CategoryBreadcrumbs: ComponentConfig<CategoryBreadcrumbsProps> = {
  label: 'Category Breadcrumbs',
  fields: allFields as any,
  defaultProps: {
    separator: '/',
    showHome: true,
    homeText: 'Home',
    activeColor: '#000000',
    hoverColor: '#333333',
    className: '',
    ...defaultTypographyProps,
    fontSize: 'sm',
    textColor: '#666666',
    ...defaultLayoutProps,
    marginBottom: 'md',
    ...defaultColorProps,
  } as CategoryBreadcrumbsProps,
  render: (rawProps: any) => {
    const {
      category, countryCode = 'us', separator, showHome, homeText,
      activeColor, hoverColor, className,
      fontSize, textColor,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor,
    } = rawProps as CategoryBreadcrumbsProps;

    if (!category) return <></>;

    const navClassName = [
      className,
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
    ].filter(Boolean).join(' ');

    const navStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: resolveColor(textColor) || '#666666',
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    const linkStyle: React.CSSProperties = {
      transition: 'opacity 0.2s ease',
      cursor: 'pointer',
    };

    const activeColorResolved = resolveColor(activeColor) || '#000000';
    const hoverColorResolved = resolveColor(hoverColor) || '#333333';
    const hoverCss = `.crumb-link:hover { color: ${hoverColorResolved}; opacity: 0.8; }`;

    const breadcrumbs: SharedCategoryNode[] = [];
    let cur = category;
    while (cur.parent_category) {
      breadcrumbs.unshift(cur.parent_category);
      cur = cur.parent_category;
    }

    return (
      <>
        <nav aria-label="Breadcrumb" className={navClassName} style={navStyle}>
          {showHome && (
            <>
              <a href="/" className="crumb-link" style={linkStyle}>{homeText}</a>
              <span>{separator}</span>
            </>
          )}
          {breadcrumbs.map((p) => (
            <span key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <a href={`/${countryCode}/categories/${p.handle}`} className="crumb-link" style={linkStyle}>{p.name}</a>
              <span>{separator}</span>
            </span>
          ))}
          <span style={{ color: activeColorResolved }} aria-current="page">{category.name}</span>
        </nav>
        <style dangerouslySetInnerHTML={{ __html: hoverCss }} />
      </>
    );
  },
};

export default CategoryBreadcrumbs;
