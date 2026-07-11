import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const collectionBreadcrumbsFields = {
    showHomeIcon: { type: 'radio', label: 'Show Home Icon', options: RADIO_YES_NO },
    separator: { type: 'select', label: 'Separator Style', options: [{ label: 'Arrow →', value: 'arrow' }, { label: 'Slash /', value: 'slash' }, { label: 'Chevron >', value: 'chevron' }] },
    textSize: { type: 'select', label: 'Text Size', options: [{ label: 'Small', value: 'text-sm' }, { label: 'Medium', value: 'text-base' }] },
    textColor: { type: 'select', label: 'Text Color', options: [{ label: 'Gray', value: 'text-gray-500' }, { label: 'Gray Dark', value: 'text-gray-600' }, { label: 'Blue', value: 'text-blue-600' }] },
    marginBottom: { type: 'select', label: 'Bottom Margin', options: [{ label: 'Small', value: 'mb-2' }, { label: 'Medium', value: 'mb-4' }, { label: 'Large', value: 'mb-6' }] },
};
const Home = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const Chevron = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
export const CollectionBreadcrumbs = {
    label: 'Collection Breadcrumbs',
    fields: collectionBreadcrumbsFields,
    defaultProps: { showHomeIcon: true, separator: 'chevron', textSize: 'text-sm', textColor: 'text-gray-500', marginBottom: 'mb-4' },
    render: (raw) => {
        const { showHomeIcon, separator = 'chevron', textSize = 'text-sm', textColor = 'text-gray-500', marginBottom = 'mb-4' } = raw;
        const trail = raw.trail ?? [{ label: 'Home', href: '/' }, { label: 'Collections', href: '/collections' }, { label: 'Sample Collection' }];
        const getSep = () => separator === 'arrow' ? _jsx("span", { className: "mx-2", children: "\u2192" }) : separator === 'slash' ? _jsx("span", { className: "mx-2", children: "/" }) : _jsx(Chevron, {});
        return (_jsx("nav", { className: `flex items-center ${textSize} ${textColor} ${marginBottom}`, children: trail.map((item, i) => (_jsxs(React.Fragment, { children: [i === 0 && showHomeIcon && _jsx(Home, {}), item.href ? _jsx("a", { href: item.href, className: "hover:underline flex items-center", children: item.label }) : _jsx("span", { className: "text-gray-900", children: item.label }), i < trail.length - 1 && _jsx("span", { className: "mx-2", children: getSep() })] }, i))) }));
    },
};
export default CollectionBreadcrumbs;
//# sourceMappingURL=CollectionBreadcrumbs.js.map