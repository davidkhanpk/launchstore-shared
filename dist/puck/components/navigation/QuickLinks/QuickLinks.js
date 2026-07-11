import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FONT = { xs: 'text-xs', sm: 'text-sm', base: 'text-base' };
const PLACEHOLDER = [
    { text: 'New Arrivals', href: '#' },
    { text: 'Best Sellers', href: '#' },
    { text: 'Sale', href: '#' },
];
export const quickLinksFields = {
    title: { type: 'text', label: 'Title' },
    links: {
        type: 'array', label: 'Links',
        getItemSummary: (item) => item?.text || 'Link',
        arrayFields: { text: { type: 'text', label: 'Text' }, href: { type: 'text', label: 'URL' } },
    },
    fontSize: {
        type: 'select', label: 'Font Size',
        options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }],
    },
};
export const QuickLinks = {
    label: 'Quick Links',
    fields: quickLinksFields,
    defaultProps: {
        title: 'Quick Links',
        links: [],
        fontSize: 'sm',
    },
    render: ({ title, links, fontSize }) => {
        const items = links && links.length > 0 ? links : PLACEHOLDER;
        return (_jsxs("div", { className: "py-3", children: [title && _jsx("h4", { className: "text-sm font-semibold text-gray-900 m-0 mb-2", children: title }), _jsx("ul", { className: `list-none p-0 m-0 flex flex-col gap-1.5 ${FONT[fontSize] || 'text-sm'}`, children: items.map((link, i) => (_jsx("li", { children: _jsx("a", { href: link?.href || '#', className: "no-underline text-gray-600 hover:text-gray-900 transition-colors", children: link?.text || 'Link' }) }, i))) })] }));
    },
};
export default QuickLinks;
//# sourceMappingURL=QuickLinks.js.map