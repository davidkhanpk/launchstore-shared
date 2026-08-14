import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { TabsProps } from './tabs.types';
import {
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const ALIGN_CLASS: Record<string, string> = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };

const getTabClasses = (tabStyle: string | undefined, isActive: boolean) => {
  const base = 'px-4 py-2 font-medium transition-colors cursor-pointer';
  if (tabStyle === 'underline') {
    return `${base} ${isActive ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400' : 'border-b-2 border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`;
  }
  if (tabStyle === 'pills') {
    return `${base} rounded-lg ${isActive ? 'bg-blue-500 text-white' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'}`;
  }
  return `${base} border rounded-t-lg ${isActive ? 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 border-b-white dark:border-b-gray-800 text-gray-900 dark:text-gray-100' : 'bg-gray-100 dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800'}`;
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  tabs: {
    type: 'array' as const, label: 'Tabs',
    arrayFields: {
      id: { type: 'text' as const, label: 'Tab ID' },
      label: { type: 'text' as const, label: 'Tab Label' },
      content: { type: 'textarea' as const, label: 'Tab Content' },
    },
    defaultItemProps: { id: 'tab-1', label: 'Tab', content: 'Tab content goes here' },
  } as any,
  defaultTab: { type: 'number' as const, label: 'Default Active Tab (0-based index)' },
  alignment: { type: 'radio' as const, label: 'Tab Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
  tabStyle: { type: 'radio' as const, label: 'Tab Style', options: [{ label: 'Underline', value: 'underline' }, { label: 'Pills', value: 'pills' }, { label: 'Bordered', value: 'bordered' }] },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const Tabs: ComponentConfig<TabsProps> = {
  label: 'Tabs',
  fields: allFields as any,
  defaultProps: {
    id: 'tabs-1',
    tabs: [
      { id: 'tab-1', label: 'Tab 1', content: 'Content for tab 1' },
      { id: 'tab-2', label: 'Tab 2', content: 'Content for tab 2' },
      { id: 'tab-3', label: 'Tab 3', content: 'Content for tab 3' },
    ],
    defaultTab: 0,
    alignment: 'left',
    tabStyle: 'underline',
    ...defaultLayoutProps,
  } as TabsProps,
  render: (rawProps: any) => {
    const { id, tabs, defaultTab = 0, alignment, tabStyle, marginTop, marginBottom, paddingX, paddingY } = rawProps;
    const [active, setActive] = useState(defaultTab);

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div id={id} className={`w-full ${layoutClasses}`}>
        <div className={`flex ${ALIGN_CLASS[alignment || 'left'] || 'justify-start'} gap-2 ${tabStyle === 'bordered' ? 'border-b border-gray-300 dark:border-gray-700' : ''}`}>
          {(tabs || []).map((tab: any, i: number) => (
            <button key={tab.id} onClick={() => setActive(i)} className={getTabClasses(tabStyle, active === i)}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className={`mt-4 ${tabStyle === 'bordered' ? 'border border-t-0 border-gray-300 dark:border-gray-700 rounded-b-lg p-4' : ''}`}>
          {tabs[active] && <div className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{tabs[active].content}</div>}
        </div>
      </div>
    );
  },
};

export default Tabs;
