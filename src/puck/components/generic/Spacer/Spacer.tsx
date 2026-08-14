import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { SpacerProps } from './spacer.types';
import {
  sharedLayoutFields,
  defaultLayoutProps,
} from '../../../design-system';

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  height: {
    type: 'radio' as const, label: 'Height',
    options: [
      { label: 'Extra Small (0.5rem)', value: 'xs' },
      { label: 'Small (1rem)', value: 'sm' },
      { label: 'Medium (2rem)', value: 'md' },
      { label: 'Large (3rem)', value: 'lg' },
      { label: 'Extra Large (4rem)', value: 'xl' },
      { label: '2XL (6rem)', value: '2xl' },
      { label: '3XL (8rem)', value: '3xl' },
    ],
  },
  showDivider: { type: 'radio' as const, label: 'Show Divider Line', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  dividerStyle: {
    type: 'radio' as const, label: 'Divider Style',
    options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }],
  },
  dividerColor: { type: 'text' as const, label: 'Divider Color (hex or theme token)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
};

const HEIGHT_PX: Record<string, number> = {
  xs: 8, sm: 16, md: 32, lg: 48, xl: 64, '2xl': 96, '3xl': 128,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Spacer: ComponentConfig<SpacerProps> = {
  label: 'Spacer',
  fields: allFields as any,
  defaultProps: {
    id: 'spacer-1',
    height: 'md',
    showDivider: false,
    dividerStyle: 'solid',
    dividerColor: '#e5e7eb',
    ...defaultLayoutProps,
  } as SpacerProps,
  render: (rawProps: any) => {
    const { id, height, showDivider, dividerStyle, dividerColor } = rawProps;
    const h = HEIGHT_PX[height || 'md'] || HEIGHT_PX.md;
    return (
      <div id={id} style={{ height: `${h}px` }} className="w-full flex items-center">
        {showDivider && (
          <hr style={{ width: '100%', borderColor: resolveColor(dividerColor), borderStyle: dividerStyle || 'solid', borderWidth: '1px' }} />
        )}
      </div>
    );
  },
};

export default Spacer;
