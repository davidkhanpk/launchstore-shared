import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { DividerProps } from './divider.types';
import {
  createAccordionFields,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const WIDTH_CLASS: Record<string, string> = { full: 'w-full', '3/4': 'w-3/4', '1/2': 'w-1/2', '1/4': 'w-1/4' };

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  style: {
    type: 'radio' as const, label: 'Line Style',
    options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }],
  },
  thickness: {
    type: 'radio' as const, label: 'Thickness',
    options: [{ label: 'Thin (1px)', value: '1' }, { label: 'Medium (2px)', value: '2' }, { label: 'Thick (4px)', value: '4' }],
  },
  width: {
    type: 'radio' as const, label: 'Width',
    options: [{ label: 'Full', value: 'full' }, { label: '75%', value: '3/4' }, { label: '50%', value: '1/2' }, { label: '25%', value: '1/4' }],
  },
  textColor: { type: 'text' as const, label: 'Color (hex or theme token)' },
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
      fieldKeys: ['id', 'style', 'thickness', 'width', 'textColor'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Divider: ComponentConfig<DividerProps> = {
  label: 'Divider',
  fields: accordionFields as any,
  defaultProps: {
    id: 'divider-1',
    style: 'solid',
    thickness: '1',
    textColor: '#e5e7eb',
    width: 'full',
    ...defaultLayoutProps,
    marginTop: 'md',
    marginBottom: 'md',
  } as DividerProps,
  render: (rawProps: any) => {
    const { id, style, thickness, textColor, width, marginTop, marginBottom, paddingX, paddingY } = rawProps;

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div id={id} className={`flex justify-center ${layoutClasses}`}>
        <hr
          className={WIDTH_CLASS[width || 'full'] || 'w-full'}
          style={{
            borderColor: resolveColor(textColor),
            borderStyle: style || 'solid',
            borderTopWidth: `${thickness || '1'}px`,
            borderBottomWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
          }}
        />
      </div>
    );
  },
};

export default Divider;
