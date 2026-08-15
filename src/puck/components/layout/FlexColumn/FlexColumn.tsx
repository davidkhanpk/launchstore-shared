import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { FlexColumnProps } from './flexcolumn.types';
import {
  sharedBackgroundFields,
  sharedLayoutFields,
  sharedColorFields,
  buildBackground,
  BackgroundOverlay,
  buildLayoutClasses,
  buildColorClasses,
  SPACING_OPTIONS,
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
  gap: { type: 'select' as const, label: 'Gap Between Items', options: SPACING_OPTIONS },
  fullHeight: {
    type: 'radio' as const, label: 'Full Height',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  minHeight: { type: 'text' as const, label: 'Min Height (e.g. 200px)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedBackgroundFields,
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

// Legacy semantic gap values (pre-normalization) still resolve.
const LEGACY_GAP: Record<string, string> = { none: '0', xs: '1', sm: '2', md: '4', lg: '6', xl: '8' };

// ── Component ───────────────────────────────────────────────────────────────

export const FlexColumn: ComponentConfig<FlexColumnProps> = {
  label: 'Flex Column',
  fields: allFields as any,
  defaultProps: {
    justifyContent: 'start',
    alignItems: 'start',
    gap: '4',
    fullHeight: false,
    minHeight: 'auto',
    backgroundScheme: '',
    backgroundImage: '',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    overlayColor: '',
    overlayOpacity: '0',
    gradientFrom: '',
    gradientTo: '',
    backgroundColor: '',
    marginTop: '0',
    marginBottom: '0',
    paddingX: '0',
    paddingY: '0',
    borderRadius: 'none',
  } as FlexColumnProps,
  render: (rawProps: any) => {
    const {
      justifyContent = 'start',
      alignItems = 'start',
      gap = '4',
      fullHeight = false,
      minHeight,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      overlayColor, overlayOpacity, gradientFrom, gradientTo,
      backgroundColor, borderRadius,
    } = rawProps;

    const bg = buildBackground({
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      gradientFrom, gradientTo, backgroundColor,
    });

    const gapValue = LEGACY_GAP[gap] ?? gap;
    const className = [
      'relative flex flex-col',
      gapValue ? `gap-${gapValue}` : '',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      ...bg.style,
      justifyContent: JUSTIFY_MAP[justifyContent] || 'flex-start',
      alignItems: ALIGN_MAP[alignItems] || 'stretch',
      height: fullHeight ? '100%' : 'auto',
      minHeight: fullHeight ? undefined : (minHeight && minHeight !== 'auto' ? minHeight : '50px'),
    };

    return (
      <div className={className} style={style}>
        {bg.hasOverlaySource && (
          <BackgroundOverlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
        )}
        <div className="relative flex flex-col w-full">
          <DropZone zone="flex-column-content" disallow={[] as any} />
        </div>
      </div>
    );
  },
};

export default FlexColumn;
