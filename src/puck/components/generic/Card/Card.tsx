import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { CardProps } from './card.types';
import {
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const SHADOW_CLASS: Record<string, string> = {
  none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};
const ROUND_CLASS: Record<string, string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  padding: {
    type: 'radio' as const, label: 'Padding',
    options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
  },
  shadow: {
    type: 'radio' as const, label: 'Shadow',
    options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
  },
  border: { type: 'radio' as const, label: 'Border', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  rounded: {
    type: 'radio' as const, label: 'Corner Radius',
    options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }, { label: 'Full', value: 'full' }],
  },
  hoverEffect: { type: 'radio' as const, label: 'Hover Effect (lift)', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};

// ── Color fields (component-specific) ───────────────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex or theme token)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...colorFields,
  ...sharedLayoutFields,
};

const PAD_VALUE: Record<string, string> = { none: '0', sm: '12px', md: '24px', lg: '32px', xl: '48px' };

// ── Component ───────────────────────────────────────────────────────────────

export const Card: ComponentConfig<CardProps> = {
  label: 'Card',
  fields: allFields as any,
  defaultProps: {
    id: 'card-1',
    padding: 'lg',
    shadow: 'md',
    border: true,
    rounded: 'lg',
    backgroundColor: '#ffffff',
    hoverEffect: true,
    ...defaultLayoutProps,
  } as CardProps,
  render: (rawProps: any) => {
    const { id, padding, shadow, border, rounded, backgroundColor, hoverEffect, marginTop, marginBottom, paddingX, paddingY } = rawProps;

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    const innerStyle: React.CSSProperties = {
      backgroundColor: resolveColor(backgroundColor) || backgroundColor,
      padding: PAD_VALUE[padding || 'lg'] || PAD_VALUE.lg,
    };

    return (
      <div id={id} className={layoutClasses}>
        <div
          className={`${SHADOW_CLASS[shadow || 'md'] || 'shadow-md'} ${ROUND_CLASS[rounded || 'lg'] || 'rounded-lg'} ${border ? 'border border-gray-200 dark:border-gray-700' : ''} ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}`}
          style={innerStyle}
        >
          <DropZone zone="content" />
        </div>
      </div>
    );
  },
};

export default Card;
