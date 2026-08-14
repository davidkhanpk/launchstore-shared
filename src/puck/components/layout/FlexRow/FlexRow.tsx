import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { FlexRowProps } from './flexrow.types';
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
    type: 'select' as const, label: 'Horizontal Alignment',
    options: [
      { label: 'Start (Left)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Right)', value: 'end' },
      { label: 'Space Between', value: 'space-between' },
      { label: 'Space Around', value: 'space-around' },
      { label: 'Space Evenly', value: 'space-evenly' },
    ],
  },
  alignItems: {
    type: 'select' as const, label: 'Vertical Alignment',
    options: [
      { label: 'Start (Top)', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End (Bottom)', value: 'end' },
      { label: 'Stretch', value: 'stretch' },
      { label: 'Baseline', value: 'baseline' },
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
  wrap: {
    type: 'select' as const, label: 'Wrap Behavior',
    options: [
      { label: 'No Wrap', value: 'nowrap' },
      { label: 'Wrap', value: 'wrap' },
      { label: 'Wrap Reverse', value: 'wrap-reverse' },
    ],
  },
  fullWidth: {
    type: 'radio' as const, label: 'Full Width',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  maxWidth: { type: 'text' as const, label: 'Max Width (if not full width)' },
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
  start: 'flex-start', center: 'center', end: 'flex-end',
  stretch: 'stretch', baseline: 'baseline',
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

export const FlexRow: ComponentConfig<FlexRowProps> = {
  label: 'Flex Row',
  fields: allFields as any,
  defaultProps: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 'md',
    wrap: 'nowrap',
    fullWidth: true,
    ...defaultLayoutProps,
    ...defaultColorProps,
  } as FlexRowProps,
  render: (rawProps: any) => {
    const {
      justifyContent = 'space-between',
      alignItems = 'center',
      gap = 'md',
      wrap = 'nowrap',
      fullWidth = true,
      maxWidth,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor, borderRadius,
    } = rawProps;

    const flexLayout: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: JUSTIFY_MAP[justifyContent] || 'space-between',
      alignItems: ALIGN_MAP[alignItems] || 'center',
      flexWrap: wrap,
    };

    const className = [
      'flex flex-row',
      GAP_CLASS[gap] || '',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      ...flexLayout,
      width: fullWidth ? '100%' : 'auto',
      maxWidth: fullWidth ? undefined : (maxWidth as string | undefined),
      minHeight: '50px',
    };
    if (backgroundColor && backgroundColor !== 'transparent') {
      style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
    }

    return (
      <div className={className} style={style}>
        <DropZone
          zone="flex-row-content"
          disallow={[] as any}
          style={{ ...flexLayout, width: '100%' }}
        />
      </div>
    );
  },
};

export default FlexRow;
