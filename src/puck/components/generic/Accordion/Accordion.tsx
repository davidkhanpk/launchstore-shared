import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { AccordionProps } from './accordion.types';
import {
  createAccordionFields,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const ROUND_CLASS: Record<string, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg' };

const Chevron = ({ open }: { open: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  id: { type: 'text' as const, label: 'ID' },
  items: {
    type: 'array' as const, label: 'Accordion Items',
    arrayFields: {
      id: { type: 'text' as const, label: 'Item ID' },
      title: { type: 'text' as const, label: 'Title' },
      content: { type: 'textarea' as const, label: 'Content' },
    },
    defaultItemProps: { id: 'item-1', title: 'Accordion Item', content: 'Accordion content goes here' },
  } as any,
  allowMultiple: { type: 'radio' as const, label: 'Allow Multiple Open', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  bordered: { type: 'radio' as const, label: 'Show Borders', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  rounded: { type: 'radio' as const, label: 'Corner Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const inspectorFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['id', 'items', 'allowMultiple', 'bordered', 'rounded'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const Accordion: ComponentConfig<AccordionProps> = {
  label: 'Accordion',
  fields: inspectorFields as any,
  defaultProps: {
    id: 'accordion-1',
    items: [
      { id: 'item-1', title: 'What is your return policy?', content: 'We offer a 30-day return policy on all items.' },
      { id: 'item-2', title: 'How long does shipping take?', content: 'Standard shipping takes 5-7 business days.' },
      { id: 'item-3', title: 'Do you ship internationally?', content: 'Yes, we ship to over 100 countries worldwide.' },
    ],
    allowMultiple: false,
    bordered: true,
    rounded: 'md',
    ...defaultLayoutProps,
  } as AccordionProps,
  render: (rawProps: any) => {
    const { id, items, allowMultiple, bordered, rounded, marginTop, marginBottom, paddingX, paddingY } = rawProps;
    const [open, setOpen] = useState<number[]>([]);
    const toggle = (i: number) => {
      if (allowMultiple) setOpen((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
      else setOpen((p) => (p.includes(i) ? [] : [i]));
    };

    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    return (
      <div id={id} className={`w-full space-y-2 ${layoutClasses}`}>
        {(items || []).map((item: any, i: number) => {
          const isOpen = open.includes(i);
          return (
            <div key={item.id} className={`${bordered ? 'border border-gray-200 dark:border-gray-700' : ''} ${ROUND_CLASS[rounded || 'md'] || 'rounded-md'} overflow-hidden`}>
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between p-4 text-left font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${isOpen && !bordered ? 'bg-gray-50 dark:bg-gray-800' : ''}`}
              >
                <span>{item.title}</span>
                <Chevron open={isOpen} />
              </button>
              {isOpen && (
                <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 whitespace-pre-wrap">{item.content}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  },
};

export default Accordion;
