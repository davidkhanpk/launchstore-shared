import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const PLACEHOLDER_OPTIONS = [
    { label: 'Option One', value: 'one' },
    { label: 'Option Two', value: 'two' },
    { label: 'Option Three', value: 'three' },
];
export const filterGroupFields = {
    title: { type: 'text', label: 'Title' },
    type: {
        type: 'select', label: 'Filter Type',
        options: [{ label: 'Range', value: 'range' }, { label: 'Checkbox', value: 'checkbox' }, { label: 'Radio', value: 'radio' }],
    },
    min: { type: 'number', label: 'Min (range)' },
    max: { type: 'number', label: 'Max (range)' },
    options: {
        type: 'array', label: 'Options',
        getItemSummary: (item) => item?.label || 'Option',
        arrayFields: { label: { type: 'text', label: 'Label' }, value: { type: 'text', label: 'Value' } },
    },
    collapsible: { type: 'radio', label: 'Collapsible', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    defaultExpanded: { type: 'radio', label: 'Expanded by Default', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    style: { type: 'select', label: 'Style', options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }] },
};
export const FilterGroup = {
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
        return (_jsxs("div", { className: `py-3 border-b border-gray-100 ${luxury ? 'font-light tracking-wide' : ''}`, children: [_jsxs("button", { type: "button", onClick: () => collapsible && setExpanded((e) => !e), className: "w-full flex items-center justify-between bg-transparent border-0 p-0 cursor-pointer text-left", children: [_jsx("span", { className: "text-sm font-medium text-gray-900", children: title }), collapsible && _jsx("span", { className: "text-gray-400 text-xs", children: expanded ? '−' : '+' })] }), expanded && (_jsx("div", { className: "mt-3", children: type === 'range' ? (_jsxs("div", { children: [_jsx("input", { type: "range", min: min, max: max, defaultValue: max, className: "w-full", disabled: true }), _jsxs("div", { className: "flex justify-between text-xs text-gray-500 mt-1", children: [_jsxs("span", { children: ["$", min] }), _jsxs("span", { children: ["$", max] })] })] })) : (_jsx("div", { className: "flex flex-col gap-2", children: opts.map((opt, i) => (_jsxs("label", { className: "flex items-center gap-2 text-sm text-gray-700 cursor-pointer", children: [_jsx("input", { type: type === 'radio' ? 'radio' : 'checkbox', name: title, disabled: true }), opt.label] }, i))) })) }))] }));
    },
};
export default FilterGroup;
//# sourceMappingURL=FilterGroup.js.map