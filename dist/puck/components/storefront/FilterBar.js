import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
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
};
// ── Sub-components ─────────────────────────────────────────────────────────
const ChevronDown = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", "aria-hidden": "true", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const FilterGroupSection = ({ group, activeValues, onToggle }) => {
    const [collapsed, setCollapsed] = useState(false);
    const label = group.label || group.name;
    const activeCount = activeValues.length;
    return (_jsxs("div", { className: "border-b border-gray-200 py-4", children: [_jsxs("button", { type: "button", onClick: () => setCollapsed(!collapsed), className: "flex items-center justify-between w-full text-sm font-medium text-gray-900 mb-2", children: [_jsxs("span", { className: "flex items-center gap-2", children: [label, activeCount > 0 && (_jsx("span", { className: "bg-gray-900 text-white text-[10px] rounded-full px-1.5 py-0.5 min-w-[18px] text-center", children: activeCount }))] }), _jsx(ChevronDown, { size: 14 })] }), !collapsed && (_jsx("div", { className: "space-y-2", children: group.values?.map((v) => {
                    const isChecked = activeValues.includes(v.value);
                    return (_jsxs("label", { className: "flex items-center gap-2 cursor-pointer text-sm text-gray-700 hover:text-gray-900", children: [_jsx("input", { type: "checkbox", checked: isChecked, onChange: () => onToggle(v.value), className: "w-4 h-4 rounded border-gray-300 text-gray-900 focus:ring-gray-400" }), _jsx("span", { className: "flex-1", children: v.value }), typeof v.count === 'number' && (_jsxs("span", { className: "text-xs text-gray-400", children: ["(", v.count, ")"] }))] }, v.value));
                }) }))] }));
};
const FilterContent = ({ props, onSortChange, onFilterChange, onClearAll }) => {
    const currentSort = props.currentSort || 'created_desc';
    const activeFilters = props.activeFilters || {};
    const filterGroups = props.filterGroups || [];
    const totalActive = Object.values(activeFilters).reduce((sum, vals) => sum + vals.length, 0);
    return (_jsxs("div", { className: "space-y-1", children: [props.showSort && (_jsxs("div", { className: "py-4 border-b border-gray-200", children: [_jsx("label", { className: "text-sm font-medium text-gray-900 block mb-2", children: "Sort by" }), _jsx("select", { value: currentSort, onChange: (e) => onSortChange(e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900 focus:ring-1 focus:ring-gray-400 focus:border-gray-400", children: SORT_OPTIONS.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) })] })), props.showCount && typeof props.totalCount === 'number' && (_jsxs("div", { className: "py-3 text-sm text-gray-500", children: ["Showing ", props.showingCount ?? 0, " of ", props.totalCount, " products"] })), props.showFilters && filterGroups.length > 0 && (_jsx("div", { className: "py-2", children: filterGroups.map((group) => (_jsx(FilterGroupSection, { group: group, activeValues: activeFilters[group.name] || [], onToggle: (value) => onFilterChange(group.name, value) }, group.name))) })), props.showClearAll && totalActive > 0 && (_jsxs("button", { type: "button", onClick: onClearAll, className: "text-sm text-gray-500 hover:text-gray-900 underline mt-3", children: ["Clear all filters (", totalActive, ")"] }))] }));
};
// ── Main Component ─────────────────────────────────────────────────────────
export const FilterBar = {
    label: 'Filter Bar',
    fields: filterBarFields,
    defaultProps: {
        filterLayout: 'sidebar',
        showSort: true,
        showCount: true,
        showClearAll: true,
        showFilters: true,
    },
    render: (rawProps) => {
        const props = rawProps;
        const layout = props.filterLayout || 'sidebar';
        const [mobileOpen, setMobileOpen] = useState(false);
        // Callbacks (no-op in editor; wired by storefront wrapper)
        const onSortChange = (sort) => props.onSortChange?.(sort);
        const onFilterChange = (group, value) => props.onFilterChange?.(group, value);
        const onClearAll = () => props.onClearAll?.();
        // "none" layout — just a sort dropdown inline, no filter groups
        if (layout === 'none') {
            if (!props.showSort)
                return _jsx(_Fragment, {});
            return (_jsx("div", { className: "flex items-center justify-end py-4", children: _jsx("select", { value: props.currentSort || 'created_desc', onChange: (e) => onSortChange(e.target.value), className: "px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white text-gray-900", children: SORT_OPTIONS.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }) }));
        }
        // "topbar" layout — horizontal bar above the grid
        if (layout === 'topbar') {
            return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "hidden md:flex items-center justify-between gap-4 py-4 border-b border-gray-200", children: [_jsxs("div", { className: "flex items-center gap-4", children: [props.showCount && typeof props.totalCount === 'number' && (_jsxs("span", { className: "text-sm text-gray-500", children: [props.totalCount, " products"] })), props.showFilters && (props.filterGroups || []).map((group) => (_jsxs("select", { defaultValue: "", onChange: (e) => e.target.value && onFilterChange(group.name, e.target.value), className: "px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white", children: [_jsx("option", { value: "", children: group.label || group.name }), group.values?.map((v) => (_jsxs("option", { value: v.value, children: [v.value, " (", v.count, ")"] }, v.value)))] }, group.name))), props.showClearAll && _jsx("button", { onClick: onClearAll, className: "text-sm text-gray-500 hover:text-gray-900", children: "Clear" })] }), props.showSort && (_jsx("select", { value: props.currentSort || 'created_desc', onChange: (e) => onSortChange(e.target.value), className: "px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white", children: SORT_OPTIONS.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) }))] }), _jsxs("div", { className: "flex md:hidden items-center justify-between gap-4 py-3", children: [props.showSort && (_jsx("select", { value: props.currentSort || 'created_desc', onChange: (e) => onSortChange(e.target.value), className: "px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white flex-1", children: SORT_OPTIONS.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) })), props.showFilters && (_jsx("button", { onClick: () => setMobileOpen(true), className: "px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium flex items-center gap-2", children: "Filters" }))] }), _jsx(MobileFilterDrawer, { isOpen: mobileOpen, onClose: () => setMobileOpen(false), props: props, onSortChange: onSortChange, onFilterChange: onFilterChange, onClearAll: onClearAll })] }));
        }
        // "sidebar" layout (default) — left sidebar on desktop, drawer on mobile
        return (_jsxs(_Fragment, { children: [_jsx("div", { className: "hidden md:block w-64 flex-shrink-0", children: _jsx("div", { className: "sticky top-4", children: _jsx(FilterContent, { props: props, onSortChange: onSortChange, onFilterChange: onFilterChange, onClearAll: onClearAll }) }) }), _jsxs("div", { className: "flex md:hidden items-center justify-between gap-4 py-3", children: [props.showSort && (_jsx("select", { value: props.currentSort || 'created_desc', onChange: (e) => onSortChange(e.target.value), className: "px-3 py-1.5 border border-gray-300 rounded-lg text-sm bg-white flex-1", children: SORT_OPTIONS.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) })), props.showFilters && (_jsx("button", { onClick: () => setMobileOpen(true), className: "px-4 py-1.5 border border-gray-300 rounded-lg text-sm font-medium", children: "Filters" }))] }), _jsx(MobileFilterDrawer, { isOpen: mobileOpen, onClose: () => setMobileOpen(false), props: props, onSortChange: onSortChange, onFilterChange: onFilterChange, onClearAll: onClearAll })] }));
    },
};
// ── Mobile drawer (Headless UI Dialog) ─────────────────────────────────────
const MobileFilterDrawer = ({ isOpen, onClose, props, onSortChange, onFilterChange, onClearAll }) => (_jsx(Transition, { show: isOpen, as: React.Fragment, children: _jsxs(Dialog, { onClose: onClose, className: "relative z-50 md:hidden", children: [_jsx(TransitionChild, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-black/40", "aria-hidden": "true" }) }), _jsx(TransitionChild, { as: React.Fragment, enter: "transform transition ease-out duration-300", enterFrom: "-translate-x-full", enterTo: "translate-x-0", leave: "transform transition ease-in duration-200", leaveFrom: "translate-x-0", leaveTo: "-translate-x-full", children: _jsx("div", { className: "fixed inset-y-0 left-0 flex max-w-full", children: _jsxs(DialogPanel, { className: "w-80 max-w-[85vw] bg-white h-full flex flex-col", children: [_jsxs("div", { className: "flex items-center justify-between px-4 py-3 border-b", children: [_jsx(DialogTitle, { className: "text-base font-semibold", children: "Filters" }), _jsx("button", { onClick: onClose, "aria-label": "Close", className: "p-1", children: _jsxs("svg", { width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }) })] }), _jsx("div", { className: "flex-1 overflow-y-auto px-4", children: _jsx(FilterContent, { props: props, onSortChange: onSortChange, onFilterChange: onFilterChange, onClearAll: onClearAll }) }), _jsxs("div", { className: "px-4 py-3 border-t flex gap-2", children: [props.showClearAll && (_jsx("button", { onClick: onClearAll, className: "flex-1 py-2 border border-gray-300 rounded-lg text-sm font-medium", children: "Clear" })), _jsx("button", { onClick: onClose, className: "flex-1 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium", children: "Show Results" })] })] }) }) })] }) }));
export default FilterBar;
//# sourceMappingURL=FilterBar.js.map