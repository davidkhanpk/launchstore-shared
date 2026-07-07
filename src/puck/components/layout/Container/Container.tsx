import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { containerFields } from './container.fields';
import type { ContainerProps } from './container.types';

const MAX_W: Record<ContainerProps['maxWidth'], string> = {
  sm: 'max-w-screen-sm', md: 'max-w-screen-md', lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl', '2xl': 'max-w-screen-2xl', full: 'max-w-full',
};
const PAD: Record<ContainerProps['padding'], string> = {
  none: 'px-0', sm: 'px-4', md: 'px-6', lg: 'px-8',
};

export const Container: ComponentConfig<ContainerProps> = {
  label: 'Container',
  fields: containerFields as ComponentConfig<ContainerProps>['fields'],
  defaultProps: { maxWidth: 'xl', padding: 'md' },
  render: ({ maxWidth, padding }) => (
    <div className={`mx-auto ${MAX_W[maxWidth] || 'max-w-screen-xl'} ${PAD[padding] || 'px-6'}`} style={{ minHeight: '80px' }}>
      <DropZone zone="content" />
    </div>
  ),
};

export default Container;
