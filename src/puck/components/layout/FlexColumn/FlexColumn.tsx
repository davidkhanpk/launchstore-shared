import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { flexColumnFields } from './flexcolumn.fields';
import type { FlexColumnProps } from './flexcolumn.types';

const GAP: Record<NonNullable<FlexColumnProps['gap']>, string> = {
  none: '0', xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
};
const JUSTIFY: Record<NonNullable<FlexColumnProps['justifyContent']>, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  'space-between': 'space-between', 'space-around': 'space-around', 'space-evenly': 'space-evenly',
};
const ALIGN: Record<NonNullable<FlexColumnProps['alignItems']>, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch',
};

export const FlexColumn: ComponentConfig<FlexColumnProps> = {
  label: 'Flex Column',
  fields: flexColumnFields as ComponentConfig<FlexColumnProps>['fields'],
  defaultProps: {
    justifyContent: 'start',
    alignItems: 'start',
    gap: 'md',
    fullHeight: false,
    minHeight: 'auto',
    padding: '0',
    backgroundColor: 'transparent',
    borderRadius: '0',
  },
  render: ({
    justifyContent = 'start',
    alignItems = 'start',
    gap = 'md',
    fullHeight = false,
    minHeight,
    padding,
    backgroundColor,
    borderRadius,
  }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: JUSTIFY[justifyContent] || 'flex-start',
        alignItems: ALIGN[alignItems] || 'stretch',
        gap: GAP[gap] || '1rem',
        height: fullHeight ? '100%' : 'auto',
        minHeight: fullHeight ? undefined : (minHeight || '50px'),
        padding,
        backgroundColor,
        borderRadius,
        border: '1px dashed rgba(0, 0, 0, 0.1)',
      }}
    >
      <DropZone zone="flex-column-content" disallow={[] as any} />
    </div>
  ),
};

export default FlexColumn;
