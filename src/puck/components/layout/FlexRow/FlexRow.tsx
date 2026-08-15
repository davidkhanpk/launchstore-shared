import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { FlexRowProps } from './flexrow.types';
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
  gap: { type: 'select' as const, label: 'Gap Between Items', options: SPACING_OPTIONS },
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
  start: 'flex-start', center: 'center', end: 'flex-end',
  stretch: 'stretch', baseline: 'baseline',
};

// Legacy semantic gap values (pre-normalization) still resolve.
const LEGACY_GAP: Record<string, string> = { none: '0', xs: '1', sm: '2', md: '4', lg: '6', xl: '8' };

// ── Component ───────────────────────────────────────────────────────────────

export const FlexRow: ComponentConfig<FlexRowProps> = {
  label: 'Flex Row',
  fields: allFields as any,
  defaultProps: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '4',
    wrap: 'nowrap',
    fullWidth: true,
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
  } as FlexRowProps,
  render: (rawProps: any) => {
    const {
      justifyContent = 'space-between',
      alignItems = 'center',
      gap = '4',
      wrap = 'nowrap',
      fullWidth = true,
      maxWidth,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      overlayColor, overlayOpacity, gradientFrom, gradientTo,
      backgroundColor, borderRadius,
    } = rawProps;

    const bg = buildBackground({
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      gradientFrom, gradientTo, backgroundColor,
    });

    const flexLayout: React.CSSProperties = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: JUSTIFY_MAP[justifyContent] || 'space-between',
      alignItems: ALIGN_MAP[alignItems] || 'center',
      flexWrap: wrap,
    };

    const gapValue = LEGACY_GAP[gap] ?? gap;
    const className = [
      'relative flex flex-row',
      gapValue ? `gap-${gapValue}` : '',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
      buildColorClasses({ borderRadius }),
    ].filter(Boolean).join(' ');

    const style: React.CSSProperties = {
      ...bg.style,
      width: fullWidth ? '100%' : 'auto',
      maxWidth: fullWidth ? undefined : (maxWidth as string | undefined),
      minHeight: '50px',
    };

    return (
      <div className={className} style={style}>
        {bg.hasOverlaySource && (
          <BackgroundOverlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
        )}
        <div className="relative w-full min-w-0" style={flexLayout}>
          <DropZone zone="flex-row-content" disallow={[] as any} style={{ ...flexLayout, width: '100%' }} />
        </div>
      </div>
    );
  },
};

export default FlexRow;
