import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import type { FilterBarProps, FilterLayout } from './types';
import { SORT_OPTIONS } from './types';

// ── Fields config ──────────────────────────────────────────────────────────

const filterBarFields = {
  filterLayout: {
    type: 'select', label: 'Desktop Layout',
    options: [
      { label: 'Sidebar (left)', value: 'sidebar' },
      { label: 'Top bar', value: 'topbar' },
      { label: 'None (sort only inline)', value: 'none' },
    ],
  },
  showSort: { type: 'radio', label: 'Show Sort', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showCount: { type: 'radio', label: 'Show Product Count', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showClearAll: { type: 'radio', label: 'Show Clear All', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showFilters: { type: 'radio', label: 'Show Filter Groups', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
} as Record<string, any>;

// ── Sub-components ─────────────────────────────────────────────────────────

const ChevronDown = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const FilterGroupSection: React.FC<{
  group: any;
  activeValues: string[];
  onToggle: (value: string) => void;
}> = ({ group, activeValues, onToggle }) => {
  const [collapsed, setCollapsed] = useState(false);
  const label = group.label || group.name;
  const activeCount = activeValues.length;

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        type="button"
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-between w-full text-sm font-medium text-gray-900 mb-2"
      >
        <span className="flex items-center gap-2">
          {label}
          {activeCount > 0 && (
            <span className="bg-gray-900 text-white text-[10px] rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown size={14} />
      </button>
      {!collapsed && (
        <div className="space-y-2">
          {group.values?.map((v: any) => {
            const isChecked = activeValues.includes(v.value);
            return (
              <label key={v.value} className="flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onToggle(v.value)}
                  className="w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-400"
                />
                <span className="flex-1">{v.value}</span>
                {typeof v.count === 'number' && (
                  <span className="text-xs text-gray-400">({v.count})</span>
                )}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
};

const FilterContent: React.FC<{
  props: FilterBarProps;
  onSortChange: (sort: any) => void;
  onFilterChange: (group: string, value: string) => void;
  onClearAll: () => void;
}> = ({ props, onSortChange, onFilterChange, onClearAll }) => {
  const currentSort = props.currentSort || 'created_desc';
  const activeFilters = props.activeFilters || {};
  const filterGroups = props.filterGroups || [];
  const totalActive = Object.values(activeFilters).reduce((sum, vals) => sum + vals.length, 0);

  return (
    <div className="space-y-1">
      {/* Sort */}
      {props.showSort && (
        <div className="py-4 border-b border-gray-200">
          <label className="text-sm font-medium text-gray-900 block mb-2">Sort by</label>
          <select
            value={currentSort}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      )}

      {/* Product count */}
      {props.showCount && typeof props.totalCount === 'number' && (
        <div className="py-3 text-sm text-gray-500">
          Showing {props.showingCount ?? 0} of {props.totalCount} products
        </div>
      )}

      {/* Filter groups */}
      {props.showFilters && filterGroups.length > 0 && (
        <div className="py-2">
          {filterGroups.map((group) => (
            <FilterGroupSection
              key={group.name}
              group={group}
              activeValues={activeFilters[group.name] || []}
              onToggle={(value) => onFilterChange(group.name, value)}
            />
          ))}
        </div>
      )}

      {/* Clear all */}
      {props.showClearAll && totalActive > 0 && (
        <button
          type="button"
          onClick={onClearAll}
          className="text-sm text-gray-500 hover:text-gray-900 underline mt-3"
        >
          Clear all filters ({totalActive})
        </button>
      )}
    </div>
  );
};

// ── Main Component ─────────────────────────────────────────────────────────

export const FilterBar: ComponentConfig<FilterBarProps> = {
  label: 'Filter Bar',
  fields: filterBarFields as ComponentConfig<FilterBarProps>['fields'],
  defaultProps: {
    filterLayout: 'sidebar',
    showSort: true,
    showCount: true,
    showClearAll: true,
    showFilters: true,
  },
  render: (rawProps: any) => {
    const props = rawProps as FilterBarProps;
    const layout: FilterLayout = props.filterLayout || 'sidebar';
    const [mobileOpen, setMobileOpen] = useState(false);

    // Callbacks (no-op in editor; wired by storefront wrapper)
    const onSortChange = (sort: any) => props.onSortChange?.(sort);
    const onFilterChange = (group: string, value: string) => props.onFilterChange?.(group, value);
    const onClearAll = () => props.onClearAll?.();

    // "none" layout — just a sort dropdown inline, no filter groups
    if (layout === 'none') {
      if (!props.showSort) return <></>;
      return (
        <div className="flex items-center justify-end py-4">
          <select
            value={props.currentSort || 'created_desc'}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      );
    }

    // "topbar" layout — horizontal bar above the grid
    if (layout === 'topbar') {
      return (
        <>
          {/* Desktop topbar */}
          <div className="hidden md:flex items-center justify-between gap-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              {props.showCount && typeof props.totalCount === 'number' && (
                <span className="text-sm text-gray-500">{props.totalCount} products</span>
              )}
              {props.showFilters && (props.filterGroups || []).map((group) => (
                <select
                  key={group.name}
                  defaultValue=""
                  onChange={(e) => e.target.value && onFilterChange(group.name, e.target.value)}
                  className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white"
                >
                  <option value="">{group.label || group.name}</option>
                  {group.values?.map((v: any) => (
                    <option key={v.value} value={v.value}>{v.value} ({v.count})</option>
                  ))}
                </select>
              ))}
              {props.showClearAll && <button onClick={onClearAll} className="text-sm text-gray-500 hover:text-gray-900">Clear</button>}
            </div>
            {props.showSort && (
              <select
                value={props.currentSort || 'created_desc'}
                onChange={(e) => onSortChange(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            )}
          </div>

          {/* Mobile — sort inline + Filters button → drawer */}
          <div className="flex md:hidden items-center justify-between gap-4 py-3">
            {props.showSort && (
              <select
                value={props.currentSort || 'created_desc'}
                onChange={(e) => onSortChange(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white flex-1"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            )}
            {props.showFilters && (
              <button
                onClick={() => setMobileOpen(true)}
                className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium flex items-center gap-2"
              >
                Filters
              </button>
            )}
          </div>

          {/* Mobile drawer */}
          <MobileFilterDrawer
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            props={props}
            onSortChange={onSortChange}
            onFilterChange={onFilterChange}
            onClearAll={onClearAll}
          />
        </>
      );
    }

    // "sidebar" layout (default) — left sidebar on desktop, drawer on mobile
    return (
      <>
        {/* Desktop sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <div className="sticky top-4">
            <FilterContent
              props={props}
              onSortChange={onSortChange}
              onFilterChange={onFilterChange}
              onClearAll={onClearAll}
            />
          </div>
        </div>

        {/* Mobile — sort + Filters button */}
        <div className="flex md:hidden items-center justify-between gap-4 py-3">
          {props.showSort && (
            <select
              value={props.currentSort || 'created_desc'}
              onChange={(e) => onSortChange(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white flex-1"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          )}
          {props.showFilters && (
            <button
              onClick={() => setMobileOpen(true)}
              className="px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium"
            >
              Filters
            </button>
          )}
        </div>

        {/* Mobile drawer */}
        <MobileFilterDrawer
          isOpen={mobileOpen}
          onClose={() => setMobileOpen(false)}
          props={props}
          onSortChange={onSortChange}
          onFilterChange={onFilterChange}
          onClearAll={onClearAll}
        />
      </>
    );
  },
};

// ── Mobile drawer (Headless UI Dialog) ─────────────────────────────────────

const MobileFilterDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  props: FilterBarProps;
  onSortChange: (sort: any) => void;
  onFilterChange: (group: string, value: string) => void;
  onClearAll: () => void;
}> = ({ isOpen, onClose, props, onSortChange, onFilterChange, onClearAll }) => (
  <Transition show={isOpen} as={React.Fragment}>
    <Dialog onClose={onClose} className="relative z-50 md:hidden">
      <TransitionChild
        as={React.Fragment}
        enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
        leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
      </TransitionChild>
      <TransitionChild
        as={React.Fragment}
        enter="transform transition ease-out duration-300"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition ease-in duration-200"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <div className="fixed inset-y-0 left-0 flex max-w-full">
          <DialogPanel className="w-80 max-w-[85vw] bg-white h-full flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <DialogTitle className="text-base font-semibold">Filters</DialogTitle>
              <button onClick={onClose} aria-label="Close" className="p-1">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4">
              <FilterContent
                props={props}
                onSortChange={onSortChange}
                onFilterChange={onFilterChange}
                onClearAll={onClearAll}
              />
            </div>
            <div className="px-4 py-3 border-t flex gap-2">
              {props.showClearAll && (
                <button onClick={onClearAll} className="flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium">
                  Clear
                </button>
              )}
              <button onClick={onClose} className="flex-1 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium">
                Show Results
              </button>
            </div>
          </DialogPanel>
        </div>
      </TransitionChild>
    </Dialog>
  </Transition>
);

export default FilterBar;
