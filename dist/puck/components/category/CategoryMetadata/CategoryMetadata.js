import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { categoryMetadataFields } from './categorymetadata.fields';
const TagIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" }), _jsx("line", { x1: "7", y1: "7", x2: "7.01", y2: "7" })] }));
const PackageIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "m7.5 7.5 4.5-3 4.5 3-4.5 3z" }), _jsx("path", { d: "M2 7.5 12 2l10 5.5v9L12 22 2 16.5z" }), _jsx("path", { d: "M2 7.5v9" }), _jsx("path", { d: "M12 22v-9" }), _jsx("path", { d: "m16 11 5.5-3" })] }));
const CalendarIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "3", y: "4", width: "18", height: "18", rx: "2" }), _jsx("line", { x1: "16", y1: "2", x2: "16", y2: "6" }), _jsx("line", { x1: "8", y1: "2", x2: "8", y2: "6" }), _jsx("line", { x1: "3", y1: "10", x2: "21", y2: "10" })] }));
export const CategoryMetadata = {
    label: 'Category Metadata',
    fields: categoryMetadataFields,
    defaultProps: {
        showHandle: false, showProductCount: true, showUpdatedDate: false,
        layout: 'horizontal', fontSize: '0.875rem', textColor: '#666666', iconColor: '#999999',
        spacing: '1rem', className: '',
    },
    render: (rawProps) => {
        const { category, showHandle, showProductCount, showUpdatedDate, layout, fontSize, textColor, iconColor, spacing, className } = rawProps;
        if (!category)
            return _jsx(_Fragment, {});
        const items = [];
        const itemStyle = { display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize, color: textColor };
        if (showHandle) {
            items.push(_jsxs("div", { style: itemStyle, children: [_jsx("span", { style: { color: iconColor }, children: _jsx(TagIcon, {}) }), _jsxs("span", { children: ["Handle: ", _jsx("span", { style: { fontWeight: 500 }, children: category.handle })] })] }, "handle"));
        }
        if (showProductCount) {
            const count = category.product_count || 0;
            items.push(_jsxs("div", { style: itemStyle, children: [_jsx("span", { style: { color: iconColor }, children: _jsx(PackageIcon, {}) }), _jsxs("span", { children: [_jsx("span", { style: { fontWeight: 500 }, children: count }), " Product", count !== 1 ? 's' : ''] })] }, "count"));
        }
        if (showUpdatedDate && category.updated_at) {
            const date = new Date(category.updated_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            items.push(_jsxs("div", { style: itemStyle, children: [_jsx("span", { style: { color: iconColor }, children: _jsx(CalendarIcon, {}) }), _jsxs("span", { children: ["Updated: ", _jsx("span", { style: { fontWeight: 500 }, children: date })] })] }, "updated"));
        }
        if (items.length === 0)
            return _jsx(_Fragment, {});
        const containerStyle = {
            display: 'flex',
            flexDirection: layout === 'vertical' ? 'column' : 'row',
            gap: spacing,
            alignItems: layout === 'vertical' ? 'flex-start' : 'center',
            flexWrap: 'wrap',
        };
        return _jsx("div", { className: className, style: containerStyle, children: items });
    },
};
export default CategoryMetadata;
//# sourceMappingURL=CategoryMetadata.js.map