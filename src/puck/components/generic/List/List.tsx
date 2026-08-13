import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { ListProps } from './list.types';
import {
  createAccordionFields,
  sharedTypographyFields,
  sharedLayoutFields,
  buildTypographyClasses,
  buildLayoutClasses,
  defaultTypographyProps,
  defaultLayoutProps,
} from '../../../design-system';

const SPACE_CLASS: Record<string, string> = { tight: 'space-y-1', normal: 'space-y-2', relaxed: 'space-y-4' };

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  items: {
    type: 'array' as const,
    label: 'Items',
    arrayFields: { text: { type: 'text' as const, label: 'Text' } },
    defaultItemProps: { text: 'List item' },
  } as any,
  type: {
    type: 'radio' as const, label: 'Marker Style',
    options: [
      { label: 'Bullet  •', value: 'bullet' },
      { label: 'Numbered  1.', value: 'numbered' },
      { label: 'Checkmark  ✓', value: 'check' },
      { label: 'None', value: 'none' },
    ],
  },
  spacing: {
    type: 'radio' as const, label: 'Item Spacing',
    options: [{ label: 'Tight', value: 'tight' }, { label: 'Normal', value: 'normal' }, { label: 'Relaxed', value: 'relaxed' }],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['id', 'items', 'type', 'spacing'],
    },
    {
      label: 'Typography',
      fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const List: ComponentConfig<ListProps> = {
  label: 'List',
  fields: accordionFields as any,
  defaultProps: {
    id: 'list-1',
    items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
    type: 'bullet',
    spacing: 'normal',
    ...defaultTypographyProps,
    textColor: '#374151',
    ...defaultLayoutProps,
  } as ListProps,
  render: (rawProps: any) => {
    const { id, items, type, spacing, textColor, marginTop, marginBottom, paddingX, paddingY } = rawProps;

    const marker = (i: number) => {
      if (type === 'numbered') return <span className="font-medium mr-2 flex-shrink-0 tabular-nums">{i + 1}.</span>;
      if (type === 'check') return <span className="mr-2 flex-shrink-0 text-green-600">✓</span>;
      if (type === 'bullet') return <span className="mr-2 flex-shrink-0">•</span>;
      return null;
    };

    const typographyClasses = buildTypographyClasses(rawProps);
    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <ul
        id={id}
        className={`${SPACE_CLASS[spacing || 'normal'] || 'space-y-2'} ${typographyClasses} ${layoutClasses}`}
        style={{ color: resolveColor(textColor) }}
      >
        {(items || []).map((item: any, i: number) => (
          <li key={i} className="flex items-start">
            {marker(i)}
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    );
  },
};

export default List;
