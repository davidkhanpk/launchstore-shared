import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { BadgeProps } from './badge.types';
import {
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const VARIANT_CLASS: Record<string, string> = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};
const SIZE_CLASS: Record<string, string> = {
  sm: 'text-xs px-2 py-0.5', md: 'text-sm px-2.5 py-1', lg: 'text-base px-3 py-1.5',
};
const ROUND_CLASS: Record<string, string> = {
  sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  text: { type: 'text' as const, label: 'Badge Text' },
  variant: {
    type: 'select' as const, label: 'Variant',
    options: [
      { label: 'Default', value: 'default' },
      { label: 'Primary', value: 'primary' },
      { label: 'Success', value: 'success' },
      { label: 'Warning', value: 'warning' },
      { label: 'Error', value: 'error' },
      { label: 'Info', value: 'info' },
    ],
  },
  size: { type: 'radio' as const, label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
  rounded: { type: 'radio' as const, label: 'Corner Radius', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Full (Pill)', value: 'full' }] },
};

// ── Color fields (component-specific overrides) ─────────────────────────────

const colorFields = {
  customBgColor: { type: 'text' as const, label: 'Custom Background (Optional, hex or theme token)' },
  customTextColor: { type: 'text' as const, label: 'Custom Text Color (Optional, hex or theme token)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...colorFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Badge: ComponentConfig<BadgeProps> = {
  label: 'Badge',
  fields: allFields as any,
  defaultProps: {
    id: 'badge-1',
    text: 'Badge',
    variant: 'default',
    size: 'md',
    rounded: 'md',
    ...defaultLayoutProps,
  } as BadgeProps,
  render: (rawProps: any) => {
    const { id, text, variant, size, rounded, customBgColor, customTextColor, marginTop, marginBottom, paddingX, paddingY } = rawProps;

    const useCustom = !!(customBgColor || customTextColor);
    const style: React.CSSProperties = {};
    if (customBgColor) style.backgroundColor = resolveColor(customBgColor);
    if (customTextColor) style.color = resolveColor(customTextColor);

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div id={id} className={layoutClasses}>
        <span
          className={`inline-flex items-center font-medium ${SIZE_CLASS[size || 'md'] || 'text-sm px-2.5 py-1'} ${ROUND_CLASS[rounded || 'md'] || 'rounded-md'} ${!useCustom ? (VARIANT_CLASS[variant || 'default'] || VARIANT_CLASS.default) : ''}`}
          style={Object.keys(style).length > 0 ? style : undefined}
        >
          {text}
        </span>
      </div>
    );
  },
};

export default Badge;
