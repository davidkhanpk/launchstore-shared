import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { FlexColumnProps } from './flexcolumn.types';
import {
  sharedLayoutFields,
  sharedColorFields,
  buildLayoutClasses,
  buildColorClasses,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

// ── Component-specific fields ───────────────────────────────────────────────

const contentFields = {
  justifyContent: {
    type: 'select' as const, label: 'Vertical Alignment',
    options: [
      { label: 'Start (Top)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Bottom)', value: 'end' },
      { label: 'Space Between', value: 'space-between' },
      { label: 'Space Around', value: 'space-around' },
      { label: 'Space Evenly', value: 'space-evenly' },
    ],
  },
  alignItems: {
    type: 'select' as const, label: 'Horizontal Alignment',
    options: [
      { label: 'Start (Left)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Right)', value: 'end' },
      { label: 'Stretch', value: 'stretch' },
    ],
  },
  gap: {
    type: 'select' as const, label: 'Gap Between Items',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Extra Small', value: 'xs' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
      { label: 'Extra Large', value: 'xl' },
    ],
  },
  fullHeight: {
    type: 'radio' as const, label: 'Full Height',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  minHeight: { type: 'text' as const, label: 'Min Height (e.g. 200px)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Mappers ─────────────────────────────────────────────────────────────────

const JUSTIFY_MAP: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  'space-between': 'space-between', 'space-around': 'space-around', 'space-evenly': 'space-evenly',
};
const ALIGN_MAP: Record<string, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch',
};

// Component-specific gap scale → Tailwind class.
const GAP_CLASS: Record<string, string> = {
  none: 'gap-0',
  xs: 'gap-1',
  sm: 'gap-2',
  md: 'gap-4',
  lg: 'gap-6',
  xl: 'gap-8',
};

// ── Component ───────────────────────────────────────────────────────────────

export const FlexColumn: ComponentConfig<FlexColumnProps> = {
  label: 'Flex Column',
  fields: allFields as any,
  defaultProps: {
    justifyContent: 'start',
    alignItems: 'start',
    gap: 'md',
    fullHeight: false,
    minHeight: 'auto',
    ...defaultLayoutProps,
    ...defaultColorProps,
  } as FlexColumnProps,
  render: (rawProps: any) => {
    const {
      justifyContent = 'start',
      alignItems = 'start',
      gap = 'md',
      fullHeight = false,
      minHeight,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps;

    const className = [
      'flex flex-col',
      GAP_CLASS[gap] || '',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: JUSTIFY_MAP[justifyContent] || 'flex-start',
      alignItems: ALIGN_MAP[alignItems] || 'stretch',
      height: fullHeight ? '100%' : 'auto',
      minHeight: fullHeight ? undefined : (minHeight || '50px'),
      border: '1px dashed rgba(0, 0, 0, 0.1)',
    };
    if (backgroundColor && backgroundColor !== 'transparent') {
      style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
    }

    return (
      <div className={className} style={style}>
        <DropZone zone="flex-column-content" disallow={[] as any} />
      </div>
    );
  },
};

export default FlexColumn;
