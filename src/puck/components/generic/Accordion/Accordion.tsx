import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { accordionFields } from './accordion.fields';
import type { AccordionProps } from './accordion.types';

const ROUND: Record<AccordionProps['rounded'], string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg' };

const Chevron = ({ open }: { open: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`w-5 h-5 transition-transform ${open ? 'transform rotate-180' : ''}`}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export const Accordion: ComponentConfig<AccordionProps> = {
  label: 'Accordion',
  fields: accordionFields as ComponentConfig<AccordionProps>['fields'],
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
  },
  render: ({ id, items, allowMultiple, bordered, rounded }) => {
    const [open, setOpen] = useState<number[]>([]);
    const toggle = (i: number) => {
      if (allowMultiple) setOpen((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
      else setOpen((p) => (p.includes(i) ? [] : [i]));
    };
    return (
      <div id={id} className="w-full space-y-2">
        {(items || []).map((item, i) => {
          const isOpen = open.includes(i);
          return (
            <div key={item.id} className={`${bordered ? 'border border-gray-200 dark:border-gray-700' : ''} ${ROUND[rounded] || 'rounded-md'} overflow-hidden`}>
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
