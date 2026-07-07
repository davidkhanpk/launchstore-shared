import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { dividerFields } from './divider.fields';
import type { DividerProps } from './divider.types';

const WIDTH: Record<DividerProps['width'], string> = { full: 'w-full', '3/4': 'w-3/4', '1/2': 'w-1/2', '1/4': 'w-1/4' };
const MT: Record<DividerProps['marginTop'], string> = { none: 'mt-0', sm: 'mt-2', md: 'mt-4', lg: 'mt-8' };
const MB: Record<DividerProps['marginBottom'], string> = { none: 'mb-0', sm: 'mb-2', md: 'mb-4', lg: 'mb-8' };

export const Divider: ComponentConfig<DividerProps> = {
  label: 'Divider',
  fields: dividerFields as ComponentConfig<DividerProps>['fields'],
  defaultProps: { id: 'divider-1', style: 'solid', thickness: '1', color: '#e5e7eb', width: 'full', marginTop: 'md', marginBottom: 'md' },
  render: ({ id, style, thickness, color, width, marginTop, marginBottom }) => (
    <div id={id} className={`flex justify-center ${MT[marginTop] || 'mt-4'} ${MB[marginBottom] || 'mb-4'}`}>
      <hr
        className={WIDTH[width] || 'w-full'}
        style={{
          borderColor: resolveColor(color),
          borderStyle: style,
          borderTopWidth: `${thickness}px`,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      />
    </div>
  ),
};

export default Divider;
