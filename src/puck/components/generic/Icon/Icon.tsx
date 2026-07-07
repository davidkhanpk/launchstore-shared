import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { iconFields } from './icon.fields';
import { ICONS } from './icons';
import type { IconProps } from './icon.types';

const SIZE: Record<NonNullable<IconProps['size']>, string> = {
  xs: 'w-4 h-4', sm: 'w-5 h-5', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-10 h-10', '2xl': 'w-12 h-12',
};
const ALIGN: Record<NonNullable<IconProps['alignment']>, string> = {
  left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
const MT: Record<NonNullable<IconProps['marginTop']>, string> = { none: '', sm: 'mt-2', md: 'mt-4', lg: 'mt-6', xl: 'mt-8' };
const MB: Record<NonNullable<IconProps['marginBottom']>, string> = { none: '', sm: 'mb-2', md: 'mb-4', lg: 'mb-6', xl: 'mb-8' };

const SIZE_TO_PX: Record<NonNullable<IconProps['size']>, number> = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40, '2xl': 48 };

export const Icon: ComponentConfig<IconProps> = {
  label: 'Icon',
  fields: iconFields as ComponentConfig<IconProps>['fields'],
  defaultProps: {
    id: 'icon-1', iconName: 'HeartIcon' as IconProps['iconName'], size: 'md',
    strokeWidth: '2', alignment: 'center', marginTop: 'none', marginBottom: 'md',
  },
  render: ({ id, iconName, size, color, strokeWidth, alignment, marginTop, marginBottom }) => {
    const IconComponent = ICONS[iconName as keyof typeof ICONS];
    if (!IconComponent) {
      return <div className="text-red-500 text-sm">Icon "{iconName}" not found</div>;
    }
    const className = [
      SIZE[size] || 'w-6 h-6',
      ALIGN[alignment] || 'mx-auto',
      MT[marginTop || 'none'],
      MB[marginBottom || 'md'],
    ].filter(Boolean).join(' ');
    const style: React.CSSProperties = {
      strokeWidth: strokeWidth ? parseFloat(strokeWidth) : 2,
    };
    if (color) style.color = resolveColor(color);
    const sizePx = SIZE_TO_PX[size] || 24;
    return (
      <span id={id} className={className} style={{ display: 'inline-block', ...style }}>
        <IconComponent size={sizePx} strokeWidth={parseFloat(strokeWidth)} />
      </span>
    );
  },
};

export default Icon;
