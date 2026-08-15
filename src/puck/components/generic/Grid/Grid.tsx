import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { GridProps } from './grid.types';
import {
  SPACING_OPTIONS,
  sharedLayoutFields,
  defaultLayoutProps,
} from '../../../design-system';

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  columns: {
    type: 'radio' as const, label: 'Desktop Columns',
    options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }],
  },
  tabletColumns: {
    type: 'radio' as const, label: 'Tablet Columns',
    options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }],
  },
  mobileColumns: {
    type: 'radio' as const, label: 'Mobile Columns',
    options: [{ label: '1', value: '1' }, { label: '2', value: '2' }],
  },
  gap: { type: 'select' as const, label: 'Gap', options: SPACING_OPTIONS },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
};

// Legacy semantic gap values still resolve; new values are Tailwind spacing numbers.
const LEGACY_GAP: Record<string, string> = { none: '0', sm: '3', md: '6', lg: '8', xl: '12' };
const MOBILE_CLASS: Record<string, string> = { '1': 'grid-cols-1', '2': 'grid-cols-2' };
const TABLET_CLASS: Record<string, string> = { '1': 'md:grid-cols-1', '2': 'md:grid-cols-2', '3': 'md:grid-cols-3', '4': 'md:grid-cols-4' };
const DESKTOP_CLASS: Record<string, string> = {
  '1': 'lg:grid-cols-1', '2': 'lg:grid-cols-2', '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4', '5': 'lg:grid-cols-5', '6': 'lg:grid-cols-6',
};

// ── Component ───────────────────────────────────────────────────────────────

export const Grid: ComponentConfig<GridProps> = {
  label: 'Grid',
  fields: allFields as any,
  defaultProps: {
    id: 'grid-1',
    columns: '3',
    tabletColumns: '2',
    mobileColumns: '1',
    gap: 'md',
    ...defaultLayoutProps,
  } as GridProps,
  render: (rawProps: any) => {
    const { id, columns, tabletColumns, mobileColumns, gap } = rawProps;
    return (
      <div id={id} className={`grid ${MOBILE_CLASS[mobileColumns || '1'] || 'grid-cols-1'} ${TABLET_CLASS[tabletColumns || '2'] || 'md:grid-cols-2'} ${DESKTOP_CLASS[columns || '3'] || 'lg:grid-cols-3'} ${`gap-${LEGACY_GAP[gap] ?? gap ?? '6'}`}`}>
        <DropZone zone="items" />
      </div>
    );
  },
};

export default Grid;
