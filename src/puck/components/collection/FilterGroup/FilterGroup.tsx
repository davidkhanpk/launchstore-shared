import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroupProps {
  title: string;
  type: 'range' | 'checkbox' | 'radio';
  min: number;
  max: number;
  options: FilterOption[];
  collapsible: boolean;
  defaultExpanded: boolean;
  style: 'standard' | 'luxury';
}

const PLACEHOLDER_OPTIONS: FilterOption[] = [
  { label: 'Option One', value: 'one' },
  { label: 'Option Two', value: 'two' },
  { label: 'Option Three', value: 'three' },
];

export const filterGroupFields: ComponentConfig<FilterGroupProps>['fields'] = {
  title: { type: 'text', label: 'Title' },
  type: {
    type: 'select', label: 'Filter Type',
    options: [{ label: 'Range', value: 'range' }, { label: 'Checkbox', value: 'checkbox' }, { label: 'Radio', value: 'radio' }],
  },
  min: { type: 'number', label: 'Min (range)' },
  max: { type: 'number', label: 'Max (range)' },
  options: {
    type: 'array', label: 'Options',
    getItemSummary: (item: FilterOption) => item?.label || 'Option',
    arrayFields: { label: { type: 'text', label: 'Label' }, value: { type: 'text', label: 'Value' } },
  },
  collapsible: { type: 'radio', label: 'Collapsible', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  defaultExpanded: { type: 'radio', label: 'Expanded by Default', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  style: { type: 'select', label: 'Style', options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }] },
};

export const FilterGroup: ComponentConfig<FilterGroupProps> = {
  label: 'Filter Group',
  fields: filterGroupFields,
  defaultProps: {
    title: 'Filter',
    type: 'checkbox',
    min: 0,
    max: 1000,
    options: [],
    collapsible: true,
    defaultExpanded: true,
    style: 'standard',
  },
  render: ({ title, type, min, max, options, collapsible, defaultExpanded, style }) => {
    const [expanded, setExpanded] = useState(defaultExpanded !== false);
    const luxury = style === 'luxury';
    const opts = options && options.length > 0 ? options : (type !== 'range' ? PLACEHOLDER_OPTIONS : []);
    return (
      <div className={`py-3 border-b border-gray-100 ${luxury ? 'font-light tracking-wide' : ''}`}>
        <button
          type="button"
          onClick={() => collapsible && setExpanded((e) => !e)}
          className="w-full flex items-center justify-between bg-transparent border-0 p-0 cursor-pointer text-left"
        >
          <span className="text-sm font-medium text-gray-900">{title}</span>
          {collapsible && <span className="text-gray-400 text-xs">{expanded ? '−' : '+'}</span>}
        </button>
        {expanded && (
          <div className="mt-3">
            {type === 'range' ? (
              <div>
                <input type="range" min={min} max={max} defaultValue={max} className="w-full" disabled />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>${min}</span><span>${max}</span>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {opts.map((opt, i) => (
                  <label key={i} className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer">
                    <input type={type === 'radio' ? 'radio' : 'checkbox'} name={title} disabled />
                    {opt.label}
                  </label>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  },
};

export default FilterGroup;
