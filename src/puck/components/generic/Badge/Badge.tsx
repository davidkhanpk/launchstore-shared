import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { badgeFields } from './badge.fields';
import type { BadgeProps } from './badge.types';

const VARIANT: Record<BadgeProps['variant'], string> = {
  default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
  primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};
const SIZE: Record<BadgeProps['size'], string> = {
  sm: 'text-xs px-2 py-0.5', md: 'text-sm px-2.5 py-1', lg: 'text-base px-3 py-1.5',
};
const ROUND: Record<BadgeProps['rounded'], string> = {
  sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full',
};

export const Badge: ComponentConfig<BadgeProps> = {
  label: 'Badge',
  fields: badgeFields as ComponentConfig<BadgeProps>['fields'],
  defaultProps: { id: 'badge-1', text: 'Badge', variant: 'default', size: 'md', rounded: 'md' },
  render: ({ id, text, variant, size, rounded, customBgColor, customTextColor }) => {
    const useCustom = !!(customBgColor || customTextColor);
    const style: React.CSSProperties = {};
    if (customBgColor) style.backgroundColor = resolveColor(customBgColor);
    if (customTextColor) style.color = resolveColor(customTextColor);
    return (
      <span
        id={id}
        className={`inline-flex items-center font-medium ${SIZE[size] || 'text-sm px-2.5 py-1'} ${ROUND[rounded] || 'rounded-md'} ${!useCustom ? (VARIANT[variant] || 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200') : ''}`}
        style={Object.keys(style).length > 0 ? style : undefined}
      >
        {text}
      </span>
    );
  },
};

export default Badge;
