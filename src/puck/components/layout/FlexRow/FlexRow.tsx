import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { DropZone } from '@puckeditor/core';
import { flexRowFields } from './flexrow.fields';
import type { FlexRowProps } from './flexrow.types';

const GAP: Record<NonNullable<FlexRowProps['gap']>, string> = {
  none: '0', xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
};
const JUSTIFY: Record<NonNullable<FlexRowProps['justifyContent']>, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  'space-between': 'space-between', 'space-around': 'space-around', 'space-evenly': 'space-evenly',
};
const ALIGN: Record<NonNullable<FlexRowProps['alignItems']>, string> = {
  start: 'flex-start', center: 'center', end: 'flex-end',
  stretch: 'stretch', baseline: 'baseline',
};

export const FlexRow: ComponentConfig<FlexRowProps> = {
  label: 'Flex Row',
  fields: flexRowFields as ComponentConfig<FlexRowProps>['fields'],
  defaultProps: {
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 'md',
    wrap: 'nowrap',
    fullWidth: true,
    maxWidth: '100%',
    padding: '0',
    backgroundColor: 'transparent',
    borderRadius: '0',
  },
  render: ({
    justifyContent = 'space-between',
    alignItems = 'center',
    gap = 'md',
    wrap = 'nowrap',
    fullWidth = true,
    maxWidth,
    padding,
    backgroundColor,
    borderRadius,
  }) => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: JUSTIFY[justifyContent] || 'space-between',
        alignItems: ALIGN[alignItems] || 'center',
        flexWrap: wrap,
        gap: GAP[gap] || '1rem',
        width: fullWidth ? '100%' : 'auto',
        maxWidth: fullWidth ? undefined : (maxWidth as string | undefined),
        padding,
        backgroundColor,
        borderRadius,
        minHeight: '50px',
      }}
    >
      <DropZone
        zone="flex-row-content"
        disallow={[] as any}
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: JUSTIFY[justifyContent] || 'space-between',
          alignItems: ALIGN[alignItems] || 'center',
          flexWrap: wrap,
          gap: GAP[gap] || '1rem',
          width: '100%',
        }}
      />
    </div>
  ),
};

export default FlexRow;
