import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CategoryTitleProps } from './categorytitle.types';
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

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  tag: {
    type: 'select' as const, label: 'HTML Tag',
    options: [
      { label: 'H1', value: 'h1' },
      { label: 'H2', value: 'h2' },
      { label: 'H3', value: 'h3' },
      { label: 'H4', value: 'h4' },
    ],
  },
  className: { type: 'text' as const, label: 'Custom CSS Classes' },
};

// CategoryTitle shares fontSize/fontWeight/textAlign/textColor/lineHeight from
// the shared typography fields (no need to redeclare them here).

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const CategoryTitle: ComponentConfig<CategoryTitleProps> = {
  label: 'Category Title',
  fields: allFields as any,
  defaultProps: {
    tag: 'h1',
    className: '',
    ...defaultTypographyProps,
    fontSize: '2xl',
    fontWeight: 'bold',
    textColor: '#000000',
    textAlign: 'left',
    ...defaultLayoutProps,
    marginBottom: 'sm',
    ...defaultColorProps,
  } as CategoryTitleProps,
  render: (rawProps: any) => {
    const {
      category, tag = 'h1', className,
      fontSize, fontWeight, textColor, textAlign, lineHeight,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps as CategoryTitleProps;

    if (!category) {
      return <div style={{ color: '#9ca3af', fontStyle: 'italic' }}>Category title will appear here</div>;
    }

    const Tag: any = tag;
    const composedClassName = [
      className,
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
      buildColorClasses(rawProps),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      color: resolveColor(textColor) || '#000000',
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    return <Tag className={composedClassName} style={style}>{category.name}</Tag>;
  },
};

export default CategoryTitle;
