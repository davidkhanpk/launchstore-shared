export const tabsMeta = {
  name: 'Tabs',
  label: 'Tabs',
  description: 'Tabbed interface (stateful, useState). Per-tab title + content textarea. 3 tab visual styles (underline / pills / bordered) and 3 alignment presets. Set defaultTab=0-based index to choose initial active.',
  category: 'generic',
  intent: ['tabs', 'tabbed', 'tabpanel', 'tab-switcher', 'panel'],
  visualRole: 'block',
  dataDeps: [],
  copyFields: ['tabs[].label', 'tabs[].content'],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Tabs render as <button>s without role=tab / aria-selected — strictly visual. For a screen-reader-friendly tabs pattern, wrap with role=tablist and add aria-selected / aria-controls. Tab focus order must match visual order.',
  mobileBehavior: 'responsive',
  searchTags: ['tabs', 'tabbed', 'tab', 'panel', 'switcher'],

  props: {
    tabs: { type: 'array', required: true },
    defaultTab: { type: 'number' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true },
    tabStyle: { type: 'enum', options: ['underline', 'pills', 'bordered'], required: true },
  },
} as const;

export type TabsMeta = typeof tabsMeta;
