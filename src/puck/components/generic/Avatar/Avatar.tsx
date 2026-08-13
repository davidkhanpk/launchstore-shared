import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { AvatarProps } from './avatar.types';
import {
  createAccordionFields,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const SIZE_CLASS: Record<string, string> = {
  sm: 'w-8 h-8 text-xs', md: 'w-12 h-12 text-sm', lg: 'w-16 h-16 text-base', xl: 'w-24 h-24 text-xl',
};
const NAME_SIZE: Record<string, string> = { sm: 'text-xs', md: 'text-sm', lg: 'text-base', xl: 'text-lg' };
const SHAPE_CLASS: Record<string, string> = { circle: 'rounded-full', square: 'rounded-md' };

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  src: { type: 'text' as const, label: 'Image URL (leave empty for initials)' },
  name: { type: 'text' as const, label: 'Name' },
  size: { type: 'radio' as const, label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }] },
  shape: { type: 'radio' as const, label: 'Shape', options: [{ label: 'Circle', value: 'circle' }, { label: 'Square', value: 'square' }] },
  showName: { type: 'radio' as const, label: 'Show Name Label', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  namePosition: { type: 'radio' as const, label: 'Name Position', options: [{ label: 'Right', value: 'right' }, { label: 'Below', value: 'bottom' }] },
};

// ── Color fields (component-specific fallbacks) ─────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Fallback Background (hex or theme token)' },
  textColor: { type: 'text' as const, label: 'Fallback Text Color (hex or theme token)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...colorFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['id', 'src', 'name', 'size', 'shape', 'showName', 'namePosition'],
    },
    {
      label: 'Colors',
      fieldKeys: ['backgroundColor', 'textColor'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Avatar: ComponentConfig<AvatarProps> = {
  label: 'Avatar',
  fields: accordionFields as any,
  defaultProps: {
    id: 'avatar-1',
    src: '',
    name: 'John Doe',
    size: 'md',
    shape: 'circle',
    backgroundColor: '#6366f1',
    textColor: '#ffffff',
    showName: false,
    namePosition: 'right',
    ...defaultLayoutProps,
  } as AvatarProps,
  render: (rawProps: any) => {
    const { id, src, name, size, shape, backgroundColor, textColor, showName, namePosition, marginTop, marginBottom, paddingX, paddingY } = rawProps;

    const initials = (name || '').split(' ').map((n: string) => n[0]).join('').toUpperCase().slice(0, 2);
    const avatarEl = (
      <div
        className={`${SIZE_CLASS[size || 'md'] || 'w-12 h-12 text-sm'} ${SHAPE_CLASS[shape || 'circle'] || 'rounded-full'} flex items-center justify-center overflow-hidden flex-shrink-0`}
        style={{ backgroundColor: src ? 'transparent' : resolveColor(backgroundColor) }}
      >
        {src ? (
          <img src={src} alt={name} className="w-full h-full object-cover" />
        ) : (
          <span style={{ color: resolveColor(textColor) }} className="font-semibold leading-none select-none">{initials}</span>
        )}
      </div>
    );

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    if (!showName) return <div id={id} className={layoutClasses}>{avatarEl}</div>;
    return (
      <div id={id} className={`flex ${namePosition === 'bottom' ? 'flex-col items-center gap-1' : 'flex-row items-center gap-3'} ${layoutClasses}`}>
        {avatarEl}
        <span className={`${NAME_SIZE[size || 'md'] || 'text-sm'} font-medium text-gray-900 dark:text-gray-100`}>{name}</span>
      </div>
    );
  },
};

export default Avatar;
