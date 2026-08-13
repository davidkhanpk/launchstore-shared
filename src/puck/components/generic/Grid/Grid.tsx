import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import type { GridProps } from './grid.types';
import {
  createAccordionFields,
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
  gap: {
    type: 'radio' as const, label: 'Gap',
    options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['id', 'columns', 'tabletColumns', 'mobileColumns', 'gap'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

const GAP_CLASS: Record<string, string> = { none: 'gap-0', sm: 'gap-3', md: 'gap-6', lg: 'gap-8', xl: 'gap-12' };
const MOBILE_CLASS: Record<string, string> = { '1': 'grid-cols-1', '2': 'grid-cols-2' };
const TABLET_CLASS: Record<string, string> = { '1': 'md:grid-cols-1', '2': 'md:grid-cols-2', '3': 'md:grid-cols-3', '4': 'md:grid-cols-4' };
const DESKTOP_CLASS: Record<string, string> = {
  '1': 'lg:grid-cols-1', '2': 'lg:grid-cols-2', '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4', '5': 'lg:grid-cols-5', '6': 'lg:grid-cols-6',
};

// ── Component ───────────────────────────────────────────────────────────────

export const Grid: ComponentConfig<GridProps> = {
  label: 'Grid',
  fields: accordionFields as any,
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
      <div id={id} className={`grid ${MOBILE_CLASS[mobileColumns || '1'] || 'grid-cols-1'} ${TABLET_CLASS[tabletColumns || '2'] || 'md:grid-cols-2'} ${DESKTOP_CLASS[columns || '3'] || 'lg:grid-cols-3'} ${GAP_CLASS[gap || 'md'] || 'gap-6'}`}>
        <DropZone zone="items" />
      </div>
    );
  },
};

export default Grid;
