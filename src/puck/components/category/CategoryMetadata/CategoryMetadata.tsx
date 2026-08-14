import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CategoryMetadataProps } from './categorymetadata.types';
import {
  sharedTypographyFields,
  sharedLayoutFields,
  sharedColorFields,
  buildTypographyClasses,
  buildLayoutClasses,
  buildColorClasses,
  defaultTypographyProps,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

const TagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>);
const PackageIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m7.5 7.5 4.5-3 4.5 3-4.5 3z" /><path d="M2 7.5 12 2l10 5.5v9L12 22 2 16.5z" /><path d="M2 7.5v9" /><path d="M12 22v-9" /><path d="m16 11 5.5-3" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>);

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  showHandle: { type: 'radio' as const, label: 'Show Category Handle', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showProductCount: { type: 'radio' as const, label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showUpdatedDate: { type: 'radio' as const, label: 'Show Last Updated Date', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  layout: { type: 'radio' as const, label: 'Layout', options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }] },
  iconColor: { type: 'text' as const, label: 'Icon Color' },
  spacing: { type: 'text' as const, label: 'Item Spacing (e.g. 1rem, 16px)' },
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

export const CategoryMetadata: ComponentConfig<CategoryMetadataProps> = {
  label: 'Category Metadata',
  fields: allFields as any,
  defaultProps: {
    showHandle: false,
    showProductCount: true,
    showUpdatedDate: false,
    layout: 'horizontal',
    iconColor: '#999999',
    spacing: '1rem',
    className: '',
    ...defaultTypographyProps,
    fontSize: 'sm',
    textColor: '#666666',
    ...defaultLayoutProps,
    ...defaultColorProps,
  } as CategoryMetadataProps,
  render: (rawProps: any) => {
    const {
      category, showHandle, showProductCount, showUpdatedDate, layout,
      iconColor, spacing, className,
      fontSize, textColor,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps as CategoryMetadataProps;

    if (!category) return <></>;

    const resolvedTextColor = resolveColor(textColor) || '#666666';
    const resolvedIconColor = resolveColor(iconColor) || '#999999';

    const itemClassName = buildTypographyClasses({ fontSize });

    const itemStyle: React.CSSProperties = {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: resolvedTextColor,
    };

    const items: React.ReactNode[] = [];
    if (showHandle) {
      items.push(
        <div key="handle" className={itemClassName} style={itemStyle}>
          <span style={{ color: resolvedIconColor }}><TagIcon /></span>
          <span>Handle: <span style={{ fontWeight: 500 }}>{category.handle}</span></span>
        </div>
      );
    }
    if (showProductCount) {
      const count = category.product_count || 0;
      items.push(
        <div key="count" className={itemClassName} style={itemStyle}>
          <span style={{ color: resolvedIconColor }}><PackageIcon /></span>
          <span><span style={{ fontWeight: 500 }}>{count}</span> Product{count !== 1 ? 's' : ''}</span>
        </div>
      );
    }
    if (showUpdatedDate && category.updated_at) {
      const date = new Date(category.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
      items.push(
        <div key="updated" className={itemClassName} style={itemStyle}>
          <span style={{ color: resolvedIconColor }}><CalendarIcon /></span>
          <span>Updated: <span style={{ fontWeight: 500 }}>{date}</span></span>
        </div>
      );
    }
    if (items.length === 0) return <></>;

    const containerClassName = [
      className,
      buildLayoutClasses(rawProps),
      buildColorClasses(rawProps),
    ].filter(Boolean).join(' ');

    const containerStyle: React.CSSProperties = {
      display: 'flex',
      flexDirection: layout === 'vertical' ? 'column' : 'row',
      gap: spacing || '1rem',
      alignItems: layout === 'vertical' ? 'flex-start' : 'center',
      flexWrap: 'wrap',
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    return <div className={containerClassName} style={containerStyle}>{items}</div>;
  },
};

export default CategoryMetadata;
