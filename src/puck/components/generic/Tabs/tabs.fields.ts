import type { Field } from '@puckeditor/core';
import type { TabsProps } from './tabs.types';

export const tabsFields = {
  id: { type: 'text', label: 'ID' },
  tabs: {
    type: 'array', label: 'Tabs',
    arrayFields: {
      id: { type: 'text', label: 'Tab ID' },
      label: { type: 'text', label: 'Tab Label' },
      content: { type: 'textarea', label: 'Tab Content' },
    },
    defaultItemProps: { id: 'tab-1', label: 'Tab', content: 'Tab content goes here' },
  } as any,
  defaultTab: { type: 'number', label: 'Default Active Tab (0-based index)' },
  alignment: { type: 'radio', label: 'Tab Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  tabStyle: { type: 'radio', label: 'Tab Style', options: [{ label: 'Underline', value: 'underline' }, { label: 'Pills', value: 'pills' }, { label: 'Bordered', value: 'bordered' }] },
} as Record<string, Field>;
