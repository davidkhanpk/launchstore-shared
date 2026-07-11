import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const productSortFields = {
    defaultSort: { type: 'select', label: 'Default Sort', options: [{ label: 'Featured', value: 'featured' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' }, { label: 'Newest First', value: 'created_desc' }, { label: 'Best Selling', value: 'sales_desc' }, { label: 'Name: A-Z', value: 'title_asc' }, { label: 'Name: Z-A', value: 'title_desc' }] },
    showResultCount: { type: 'radio', label: 'Show Result Count', options: RADIO_YES_NO },
    showViewToggle: { type: 'radio', label: 'Show Grid/List Toggle', options: RADIO_YES_NO },
    position: { type: 'select', label: 'Position', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
};
const Grid = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "3", width: "7", height: "7" }), _jsx("rect", { x: "14", y: "3", width: "7", height: "7" }), _jsx("rect", { x: "14", y: "14", width: "7", height: "7" }), _jsx("rect", { x: "3", y: "14", width: "7", height: "7" })] }));
const List = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "8", y1: "6", x2: "21", y2: "6" }), _jsx("line", { x1: "8", y1: "12", x2: "21", y2: "12" }), _jsx("line", { x1: "8", y1: "18", x2: "21", y2: "18" }), _jsx("line", { x1: "3", y1: "6", x2: "3.01", y2: "6" }), _jsx("line", { x1: "3", y1: "12", x2: "3.01", y2: "12" }), _jsx("line", { x1: "3", y1: "18", x2: "3.01", y2: "18" })] }));
const positionClasses = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
const DEFAULT_OPTIONS = [
    { label: 'Featured', value: 'featured' }, { label: 'Price: Low to High', value: 'price_asc' }, { label: 'Price: High to Low', value: 'price_desc' },
    { label: 'Newest First', value: 'created_desc' }, { label: 'Best Selling', value: 'sales_desc' }, { label: 'Name: A-Z', value: 'title_asc' }, { label: 'Name: Z-A', value: 'title_desc' },
];
export const ProductSort = {
    label: 'Product Sort',
    fields: productSortFields,
    defaultProps: { defaultSort: 'featured', showResultCount: true, showViewToggle: true, position: 'right' },
    render: (raw) => {
        const { defaultSort, showResultCount, showViewToggle, position = 'right' } = raw;
        const [currentSort, setCurrentSort] = useState(defaultSort);
        const [viewMode, setViewMode] = useState('grid');
        const sortOptions = raw.sortOptions ?? DEFAULT_OPTIONS;
        const totalCount = raw.totalCount ?? 24;
        const showingCount = raw.showingCount ?? 12;
        const onSortChange = raw.onSortChange;
        const onViewChange = raw.onViewChange;
        return (_jsxs("div", { className: `flex items-center ${positionClasses[position]} gap-4 mb-6 py-4 border-b border-gray-200 flex-wrap`, children: [showResultCount && _jsxs("span", { className: "text-sm text-gray-600", children: ["Showing ", _jsx("strong", { children: showingCount }), " of ", _jsx("strong", { children: totalCount }), " products"] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("label", { className: "text-sm text-gray-700 font-medium", children: "Sort by:" }), _jsx("select", { value: currentSort, onChange: (e) => { setCurrentSort(e.target.value); onSortChange?.(e.target.value); }, className: "px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black", children: sortOptions.map((o) => _jsx("option", { value: o.value, children: o.label }, o.value)) })] }), showViewToggle && (_jsxs("div", { className: "flex items-center gap-1 border border-gray-300 rounded overflow-hidden", children: [_jsx("button", { onClick: () => { setViewMode('grid'); onViewChange?.('grid'); }, className: `p-2 ${viewMode === 'grid' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`, title: "Grid View", children: _jsx(Grid, {}) }), _jsx("button", { onClick: () => { setViewMode('list'); onViewChange?.('list'); }, className: `p-2 ${viewMode === 'list' ? 'bg-black text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`, title: "List View", children: _jsx(List, {}) })] }))] }));
    },
};
export default ProductSort;
//# sourceMappingURL=ProductSort.js.map