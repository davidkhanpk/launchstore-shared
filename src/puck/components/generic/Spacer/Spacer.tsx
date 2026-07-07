import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { spacerFields } from './spacer.fields';
import type { SpacerProps } from './spacer.types';

const H: Record<SpacerProps['height'], string> = {
  xs: 'h-2', sm: 'h-4', md: 'h-8', lg: 'h-12', xl: 'h-16', '2xl': 'h-24', '3xl': 'h-32',
};

export const Spacer: ComponentConfig<SpacerProps> = {
  label: 'Spacer',
  fields: spacerFields as ComponentConfig<SpacerProps>['fields'],
  defaultProps: { id: 'spacer-1', height: 'md', showDivider: false, dividerStyle: 'solid', dividerColor: '#e5e7eb' },
  render: ({ id, height, showDivider, dividerStyle, dividerColor }) => (
    <div id={id} className={`${H[height] || 'h-8'} w-full flex items-center`}>
      {showDivider && (
        <hr style={{ width: '100%', borderColor: resolveColor(dividerColor), borderStyle: dividerStyle, borderWidth: '1px' }} />
      )}
    </div>
  ),
};

export default Spacer;
