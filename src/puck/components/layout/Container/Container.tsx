import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ContainerProps } from './container.types';
import {
  sharedLayoutFields,
  sharedColorFields,
  buildLayoutClasses,
  buildColorClasses,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

// ── Component-specific fields ───────────────────────────────────────────────

const MAX_WIDTH_OPTIONS = [
  { label: 'Small (640px)', value: 'sm' },
  { label: 'Medium (768px)', value: 'md' },
  { label: 'Large (1024px)', value: 'lg' },
  { label: 'X-Large (1280px)', value: 'xl' },
  { label: '2X-Large (1536px)', value: '2xl' },
  { label: 'Full Width', value: 'full' },
];

const MAX_WIDTH_PX: Record<string, string> = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

const contentFields = {
  maxWidth: { type: 'select' as const, label: 'Max Width', options: MAX_WIDTH_OPTIONS },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Container: ComponentConfig<ContainerProps> = {
  label: 'Container',
  fields: allFields as any,
  defaultProps: {
    maxWidth: 'xl',
    ...defaultLayoutProps,
    paddingX: 'md',
    ...defaultColorProps,
  } as ContainerProps,
  render: (rawProps: any) => {
    const {
      maxWidth, marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps;

    const className = [
      'mx-auto',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      maxWidth: MAX_WIDTH_PX[maxWidth] || '1280px',
      minHeight: '80px',
    };
    if (backgroundColor && backgroundColor !== 'transparent') {
      style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
    }

    return (
      <div className={className} style={style}>
        <DropZone zone="content" />
      </div>
    );
  },
};

export default Container;
