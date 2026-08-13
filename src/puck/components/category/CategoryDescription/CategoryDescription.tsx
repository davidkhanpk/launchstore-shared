import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CategoryDescriptionProps } from './categorydescription.types';
import {
  createAccordionFields,
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

const MAX_WIDTH_MAP: Record<string, string> = {
  none: 'none',
  sm: '384px',
  md: '448px',
  lg: '512px',
  xl: '576px',
  '2xl': '672px',
  full: '100%',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  maxWidth: {
    type: 'select' as const, label: 'Max Width',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'X-Large', value: 'xl' },
      { label: '2X-Large', value: '2xl' },
      { label: 'Full', value: 'full' },
    ],
  },
  className: { type: 'text' as const, label: 'Custom CSS Classes' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Accordion config ─────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['maxWidth', 'className'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
    {
      label: 'Colors',
      fieldKeys: ['backgroundColor', 'borderRadius'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const CategoryDescription: ComponentConfig<CategoryDescriptionProps> = {
  label: 'Category Description',
  fields: accordionFields as any,
  defaultProps: {
    maxWidth: 'full',
    className: '',
    ...defaultTypographyProps,
    fontSize: 'base',
    lineHeight: 'relaxed',
    textColor: '#6b7280',
    textAlign: 'left',
    ...defaultLayoutProps,
    marginBottom: 'md',
    ...defaultColorProps,
  } as CategoryDescriptionProps,
  render: (rawProps: any) => {
    const {
      category, maxWidth, className,
      fontSize, fontWeight, textAlign, textColor, lineHeight,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps as CategoryDescriptionProps;

    if (!category || !category.description) return <></>;

    const maxWidthCss = MAX_WIDTH_MAP[maxWidth] ?? 'none';

    const composedClassName = [
      className,
      buildTypographyClasses(rawProps),
      buildLayoutClasses(rawProps),
      buildColorClasses(rawProps),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      color: resolveColor(textColor) || '#6b7280',
      maxWidth: maxWidthCss,
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    return (
      <div className={composedClassName} style={style}>
        <p>{category.description}</p>
      </div>
    );
  },
};

export default CategoryDescription;
