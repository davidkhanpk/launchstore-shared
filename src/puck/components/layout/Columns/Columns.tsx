import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { ColumnsProps } from './columns.types';
import {
  sharedBackgroundFields,
  sharedLayoutFields,
  buildBackground,
  BackgroundOverlay,
  buildLayoutClasses,
  SPACING_OPTIONS,
} from '../../../design-system';

// ── Component-specific fields ───────────────────────────────────────────────

const contentFields = {
  columns: {
    type: 'select' as const, label: 'Number of Columns',
    options: [
      { label: '2 Columns', value: '2' },
      { label: '3 Columns', value: '3' },
      { label: '4 Columns', value: '4' },
    ],
  },
  layout: {
    type: 'select' as const, label: 'Column Layout (2 columns only)',
    options: [
      { label: 'Equal (50/50)', value: '50-50' },
      { label: 'Left Larger (60/40)', value: '60-40' },
      { label: 'Right Larger (40/60)', value: '40-60' },
      { label: 'Left Much Larger (70/30)', value: '70-30' },
      { label: 'Right Much Larger (30/70)', value: '30-70' },
    ],
  },
  gap: { type: 'select' as const, label: 'Gap Between Columns', options: SPACING_OPTIONS },
  mobileStack: {
    type: 'radio' as const, label: 'Stack on Mobile',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  alignItems: {
    type: 'select' as const, label: 'Vertical Alignment',
    options: [
      { label: 'Start', value: 'start' },
      { label: 'Center', value: 'center' },
      { label: 'End', value: 'end' },
      { label: 'Stretch', value: 'stretch' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedBackgroundFields,
  ...sharedLayoutFields,
};

// ── Grid template resolver ──────────────────────────────────────────────────
// Desktop column template per layout/count. Mobile stacks to 1 col when
// mobileStack is true (media-query injected via inline <style>).

const ALIGN_MAP: Record<string, string> = {
  start: 'start',
  center: 'center',
  end: 'end',
  stretch: 'stretch',
};

// Legacy semantic gap values (pre-normalization) still resolve.
const LEGACY_GAP: Record<string, string> = { none: '0', xs: '1', sm: '2', md: '4', lg: '6', xl: '8' };

function desktopTemplate(columns: string, layout?: string): string {
  if (columns === '2') {
    switch (layout) {
      case '60-40': return '3fr 2fr';
      case '40-60': return '2fr 3fr';
      case '70-30': return '7fr 3fr';
      case '30-70': return '3fr 7fr';
      case '50-50':
      default: return '1fr 1fr';
    }
  }
  if (columns === '3') return '1fr 1fr 1fr';
  if (columns === '4') return '1fr 1fr 1fr 1fr';
  return '1fr 1fr';
}

// ── Component ───────────────────────────────────────────────────────────────

export const Columns: ComponentConfig<ColumnsProps> = {
  label: 'Columns',
  fields: allFields as any,
  defaultProps: {
    columns: '2',
    layout: '50-50',
    gap: '6',
    mobileStack: true,
    alignItems: 'start',
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
  } as ColumnsProps,
  render: (rawProps: any) => {
    const {
      columns = '2', layout = '50-50', gap = '6',
      mobileStack = true, alignItems = 'start',
      marginTop, marginBottom, paddingX, paddingY,
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      overlayColor, overlayOpacity, gradientFrom, gradientTo, backgroundColor,
    } = rawProps;

    const bg = buildBackground({
      backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
      gradientFrom, gradientTo, backgroundColor,
    });

    const n = parseInt(columns, 10) || 2;
    const desktopCols = desktopTemplate(columns, layout);
    const stackId = `cols-${columns}-${layout || '50-50'}-${mobileStack ? 's' : 'n'}`;

    const gapValue = LEGACY_GAP[gap] ?? gap;
    const className = [
      'relative',
      stackId,
      'grid',
      gapValue ? `gap-${gapValue}` : '',
      buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
    ].filter(Boolean).join(' ');

    const gridStyle: React.CSSProperties = {
      ...bg.style,
      gridTemplateColumns: mobileStack ? '1fr' : desktopCols,
      alignItems: ALIGN_MAP[alignItems] || 'start',
    };

    const responsiveStyle = mobileStack ? (
      <style>{`
        @media (min-width: 768px) { .${stackId} { grid-template-columns: ${desktopCols} !important; } }
      `}</style>
    ) : null;

    return (
      <>
        {responsiveStyle}
        <div className={className} style={gridStyle}>
          {bg.hasOverlaySource && (
            <BackgroundOverlay overlayColor={overlayColor} overlayOpacity={overlayOpacity} />
          )}
          {Array.from({ length: n }, (_, i) => (
            <div key={i} className="relative" style={{ minHeight: '100px' }}>
              <DropZone zone={`column-${i + 1}`} />
            </div>
          ))}
        </div>
      </>
    );
  },
};

export default Columns;
