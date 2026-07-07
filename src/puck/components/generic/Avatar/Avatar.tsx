import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { avatarFields } from './avatar.fields';
import type { AvatarProps } from './avatar.types';

const SIZE: Record<AvatarProps['size'], string> = {
  sm: 'w-8 h-8 text-xs', md: 'w-12 h-12 text-sm', lg: 'w-16 h-16 text-base', xl: 'w-24 h-24 text-xl',
};
const NAME_SIZE: Record<AvatarProps['size'], string> = { sm: 'text-xs', md: 'text-sm', lg: 'text-base', xl: 'text-lg' };
const SHAPE: Record<AvatarProps['shape'], string> = { circle: 'rounded-full', square: 'rounded-md' };

export const Avatar: ComponentConfig<AvatarProps> = {
  label: 'Avatar',
  fields: avatarFields as ComponentConfig<AvatarProps>['fields'],
  defaultProps: {
    id: 'avatar-1', src: '', name: 'John Doe', size: 'md', shape: 'circle',
    backgroundColor: '#6366f1', textColor: '#ffffff', showName: false, namePosition: 'right',
  },
  render: ({ id, src, name, size, shape, backgroundColor, textColor, showName, namePosition }) => {
    const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
    const avatarEl = (
      <div
        className={`${SIZE[size] || 'w-12 h-12 text-sm'} ${SHAPE[shape] || 'rounded-full'} flex items-center justify-center overflow-hidden flex-shrink-0`}
        style={{ backgroundColor: src ? 'transparent' : resolveColor(backgroundColor) }}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span style={{ color: resolveColor(textColor) }} className="font-semibold leading-none select-none">{initials}</span>
        )}
      </div>
    );
    if (!showName) return <div id={id}>{avatarEl}</div>;
    return (
      <div id={id} className={`flex ${namePosition === 'bottom' ? 'flex-col items-center gap-1' : 'flex-row items-center gap-3'}`}>
        {avatarEl}
        <span className={`${NAME_SIZE[size] || 'text-sm'} font-medium text-gray-900 dark:text-gray-100`}>{name}</span>
      </div>
    );
  },
};

export default Avatar;
