import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { columnsFields } from './columns.fields';
import type { ColumnsProps } from './columns.types';

const GAP: Record<NonNullable<ColumnsProps['gap']>, string> = {
  none: 'gap-0', sm: 'gap-4', md: 'gap-6', lg: 'gap-8', xl: 'gap-12',
};
const ALIGN: Record<NonNullable<ColumnsProps['alignItems']>, string> = {
  start: 'items-start', center: 'items-center', end: 'items-end', stretch: 'items-stretch',
};
// Desktop grid column count classes (Tailwind safelisted)
const COL_COUNT: Record<string, string> = {
  '2': 'md:grid-cols-2',
  '3': 'md:grid-cols-3',
  '4': 'md:grid-cols-2 lg:grid-cols-4',
};
const COL_LAYOUT: Record<string, string> = {
  '50-50': 'md:grid-cols-2',
  '60-40': 'md:grid-cols-[3fr_2fr]',
  '40-60': 'md:grid-cols-[2fr_3fr]',
  '70-30': 'md:grid-cols-[7fr_3fr]',
  '30-70': 'md:grid-cols-[3fr_7fr]',
};

export const Columns: ComponentConfig<ColumnsProps> = {
  label: 'Columns',
  fields: columnsFields as ComponentConfig<ColumnsProps>['fields'],
  defaultProps: {
    columns: '2', layout: '50-50', gap: 'lg', mobileStack: true, alignItems: 'start',
  },
  render: ({ columns, layout = '50-50', gap = 'lg', mobileStack = true, alignItems = 'start' }) => {
    const desktopGridClass = columns === '2'
      ? (COL_LAYOUT[layout] || COL_LAYOUT['50-50'])
      : (COL_COUNT[columns] || COL_COUNT['2']);
    const responsiveClass = mobileStack ? `grid-cols-1 ${desktopGridClass}` : desktopGridClass;
    const n = parseInt(columns, 10);
    return (
      <div className={`grid ${responsiveClass} ${GAP[gap] || 'gap-8'} ${ALIGN[alignItems] || 'items-start'}`}>
        {Array.from({ length: n }, (_, i) => (
          <div key={i} className="min-h-[100px]">
            <DropZone zone={`column-${i + 1}`} />
          </div>
        ))}
      </div>
    );
  },
};

export default Columns;
