import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const productFiltersFields = {
    layout: { type: 'select', label: 'Filter Layout', options: [{ label: 'Sidebar', value: 'sidebar' }, { label: 'Top Bar', value: 'top' }, { label: 'Drawer (Mobile)', value: 'drawer' }] },
    showPriceFilter: { type: 'radio', label: 'Show Price Filter', options: RADIO_YES_NO },
    showCategoryFilter: { type: 'radio', label: 'Show Category Filter', options: RADIO_YES_NO },
    showBrandFilter: { type: 'radio', label: 'Show Brand Filter', options: RADIO_YES_NO },
    showColorFilter: { type: 'radio', label: 'Show Color Filter', options: RADIO_YES_NO },
    showSizeFilter: { type: 'radio', label: 'Show Size Filter', options: RADIO_YES_NO },
    showRatingFilter: { type: 'radio', label: 'Show Rating Filter', options: RADIO_YES_NO },
    defaultExpanded: { type: 'radio', label: 'Default Expanded', options: RADIO_YES_NO },
};
const Chevron = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const Sliders = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "4", y1: "21", x2: "4", y2: "14" }), _jsx("line", { x1: "4", y1: "10", x2: "4", y2: "3" }), _jsx("line", { x1: "12", y1: "21", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "3" }), _jsx("line", { x1: "20", y1: "21", x2: "20", y2: "16" }), _jsx("line", { x1: "20", y1: "12", x2: "20", y2: "3" }), _jsx("line", { x1: "1", y1: "14", x2: "7", y2: "14" }), _jsx("line", { x1: "9", y1: "8", x2: "15", y2: "8" }), _jsx("line", { x1: "17", y1: "16", x2: "23", y2: "16" })] }));
const Star = ({ filled = true, size = 14 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: filled ? 'currentColor' : 'none', stroke: "currentColor", strokeWidth: "2", children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }));
const Section = ({ title, defaultOpen, children }) => {
    const [open, setOpen] = useState(defaultOpen);
    return (_jsxs("div", { className: "border-b border-gray-200 py-3", children: [_jsxs("button", { onClick: () => setOpen(!open), className: "flex items-center justify-between w-full text-sm font-medium text-gray-900", children: [title, " ", _jsx(Chevron, {})] }), open && _jsx("div", { className: "mt-3 space-y-2", children: children })] }));
};
export const ProductFilters = {
    label: 'Product Filters',
    fields: productFiltersFields,
    defaultProps: { showPriceFilter: true, showCategoryFilter: true, showBrandFilter: true, showColorFilter: true, showSizeFilter: true, showRatingFilter: true, layout: 'sidebar', defaultExpanded: true },
    render: (raw) => {
        const { showPriceFilter, showCategoryFilter, showBrandFilter, showColorFilter, showSizeFilter, showRatingFilter, layout = 'sidebar', defaultExpanded } = raw;
        const categories = raw.categories ?? [{ id: 'c1', label: 'Tops', count: 12 }, { id: 'c2', label: 'Bottoms', count: 8 }];
        const brands = raw.brands ?? [{ id: 'b1', label: 'Brand A', count: 10 }];
        const colors = raw.colors ?? [{ id: 'red', label: 'Red', hex: '#ef4444' }, { id: 'blue', label: 'Blue', hex: '#3b82f6' }];
        const sizes = raw.sizes ?? [{ id: 's', label: 'S' }, { id: 'm', label: 'M' }, { id: 'l', label: 'L' }];
        const priceMin = raw.priceMin ?? 0;
        const priceMax = raw.priceMax ?? 500;
        const selected = raw.selected ?? {};
        const onChange = (group, value) => raw.onChange?.(group, value);
        const isSelected = (group, value) => selected[group]?.includes(value) ?? false;
        const content = (_jsxs(_Fragment, { children: [showCategoryFilter && (_jsx(Section, { title: "Category", defaultOpen: defaultExpanded, children: categories.map((c) => (_jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: isSelected('category', c.id), onChange: () => onChange('category', c.id), className: "h-4 w-4" }), _jsx("span", { className: "flex-1", children: c.label }), c.count != null && _jsxs("span", { className: "text-gray-500", children: ["(", c.count, ")"] })] }, c.id))) })), showPriceFilter && (_jsx(Section, { title: "Price", defaultOpen: defaultExpanded, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-sm text-gray-600", children: ["$", priceMin] }), _jsx("input", { type: "range", min: priceMin, max: priceMax, defaultValue: priceMax, className: "flex-1" }), _jsxs("span", { className: "text-sm text-gray-600", children: ["$", priceMax] })] }) })), showBrandFilter && (_jsx(Section, { title: "Brand", defaultOpen: defaultExpanded, children: brands.map((b) => (_jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [_jsx("input", { type: "checkbox", checked: isSelected('brand', b.id), onChange: () => onChange('brand', b.id), className: "h-4 w-4" }), _jsx("span", { className: "flex-1", children: b.label }), b.count != null && _jsxs("span", { className: "text-gray-500", children: ["(", b.count, ")"] })] }, b.id))) })), showColorFilter && (_jsx(Section, { title: "Color", defaultOpen: defaultExpanded, children: _jsx("div", { className: "flex flex-wrap gap-2", children: colors.map((c) => (_jsx("button", { onClick: () => onChange('color', c.id), title: c.label, className: `w-8 h-8 rounded-full border-2 ${isSelected('color', c.id) ? 'border-black' : 'border-gray-200'}`, style: { backgroundColor: c.hex } }, c.id))) }) })), showSizeFilter && (_jsx(Section, { title: "Size", defaultOpen: defaultExpanded, children: _jsx("div", { className: "flex flex-wrap gap-2", children: sizes.map((s) => (_jsx("button", { onClick: () => onChange('size', s.id), className: `px-3 py-1 border rounded text-sm ${isSelected('size', s.id) ? 'bg-black text-white border-black' : 'border-gray-300 hover:bg-gray-50'}`, children: s.label }, s.id))) }) })), showRatingFilter && (_jsx(Section, { title: "Customer Rating", defaultOpen: defaultExpanded, children: [4, 3, 2, 1].map((stars) => (_jsxs("label", { className: "flex items-center gap-2 text-sm cursor-pointer", children: [_jsx("input", { type: "radio", name: "rating", value: stars, className: "h-4 w-4", onChange: () => onChange('rating', String(stars)) }), _jsx("span", { className: "flex", children: [1, 2, 3, 4, 5].map((s) => _jsx(Star, { filled: s <= stars }, s)) }), _jsx("span", { className: "text-gray-500", children: "& up" })] }, stars))) }))] }));
        if (layout === 'top') {
            return _jsxs("div", { className: "flex items-center gap-2 mb-6 flex-wrap", children: [_jsx(Sliders, {}), " ", _jsx("span", { className: "text-sm font-medium mr-2", children: "Filters:" }), " ", content] });
        }
        if (layout === 'drawer') {
            const [open, setOpen] = useState(false);
            return (_jsxs(_Fragment, { children: [_jsxs("button", { onClick: () => setOpen(true), className: "flex items-center gap-2 px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 mb-4", children: [_jsx(Sliders, {}), " Filters"] }), open && (_jsxs("div", { className: "fixed inset-0 z-50 flex", children: [_jsx("div", { className: "absolute inset-0 bg-black/50", onClick: () => setOpen(false) }), _jsx("aside", { className: "relative ml-auto w-80 max-w-full h-full bg-white p-6 overflow-y-auto", children: content })] }))] }));
        }
        return _jsx("aside", { className: "w-64 p-4 bg-white border border-gray-200 rounded-lg", children: content });
    },
};
export default ProductFilters;
//# sourceMappingURL=ProductFilters.js.map