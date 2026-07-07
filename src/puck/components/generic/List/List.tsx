import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { listFields } from './list.fields';
import type { ListProps } from './list.types';

const SPACE: Record<ListProps['spacing'], string> = { tight: 'space-y-1', normal: 'space-y-2', relaxed: 'space-y-4' };
const FONT: Record<ListProps['fontSize'], string> = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };

export const List: ComponentConfig<ListProps> = {
  label: 'List',
  fields: listFields as ComponentConfig<ListProps>['fields'],
  defaultProps: {
    id: 'list-1',
    items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
    type: 'bullet', spacing: 'normal', fontSize: 'base', color: '#374151',
  },
  render: ({ id, items, type, spacing, fontSize, color }) => {
    const marker = (i: number) => {
      if (type === 'numbered') return <span className="font-medium mr-2 flex-shrink-0 tabular-nums">{i + 1}.</span>;
      if (type === 'check') return <span className="mr-2 flex-shrink-0 text-green-600">✓</span>;
      if (type === 'bullet') return <span className="mr-2 flex-shrink-0">•</span>;
      return null;
    };
    return (
      <ul id={id} className={`${SPACE[spacing] || 'space-y-2'} ${FONT[fontSize] || 'text-base'}`} style={{ color: resolveColor(color) }}>
        {(items || []).map((item, i) => (
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
