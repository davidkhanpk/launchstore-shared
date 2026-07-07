import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { gridFields } from './grid.fields';
import type { GridProps } from './grid.types';

const GAP: Record<GridProps['gap'], string> = { none: 'gap-0', sm: 'gap-3', md: 'gap-6', lg: 'gap-8', xl: 'gap-12' };
const MOBILE: Record<GridProps['mobileColumns'], string> = { '1': 'grid-cols-1', '2': 'grid-cols-2' };
const TABLET: Record<GridProps['tabletColumns'], string> = { '1': 'md:grid-cols-1', '2': 'md:grid-cols-2', '3': 'md:grid-cols-3', '4': 'md:grid-cols-4' };
const DESKTOP: Record<GridProps['columns'], string> = {
  '1': 'lg:grid-cols-1', '2': 'lg:grid-cols-2', '3': 'lg:grid-cols-3',
  '4': 'lg:grid-cols-4', '5': 'lg:grid-cols-5', '6': 'lg:grid-cols-6',
};

export const Grid: ComponentConfig<GridProps> = {
  label: 'Grid',
  fields: gridFields as ComponentConfig<GridProps>['fields'],
  defaultProps: { id: 'grid-1', columns: '3', tabletColumns: '2', mobileColumns: '1', gap: 'md' },
  render: ({ id, columns, tabletColumns, mobileColumns, gap }) => (
    <div id={id} className={`grid ${MOBILE[mobileColumns] || 'grid-cols-1'} ${TABLET[tabletColumns] || 'md:grid-cols-2'} ${DESKTOP[columns] || 'lg:grid-cols-3'} ${GAP[gap] || 'gap-6'}`}>
      <DropZone zone="items" />
    </div>
  ),
};

export default Grid;
