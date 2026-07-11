import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderHistoryFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }, { label: 'Timeline', value: 'timeline' }] },
    showSearch: { type: 'radio', label: 'Show Search', options: RADIO_YES_NO },
    showFilters: { type: 'radio', label: 'Show Filters', options: RADIO_YES_NO },
    defaultStatus: { type: 'select', label: 'Default Status Filter', options: [{ label: 'All', value: 'all' }, { label: 'Pending', value: 'pending' }, { label: 'Processing', value: 'processing' }, { label: 'Shipped', value: 'shipped' }, { label: 'Delivered', value: 'delivered' }, { label: 'Cancelled', value: 'cancelled' }] },
    showImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
    showItemCount: { type: 'radio', label: 'Show Item Count', options: RADIO_YES_NO },
    ordersPerPage: { type: 'number', label: 'Orders Per Page' },
    backgroundColor: { type: 'text', label: 'Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    emptyStateText: { type: 'text', label: 'Empty State Text' },
    viewDetailsText: { type: 'text', label: 'View Details Text' },
};
const Package = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), _jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), _jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), _jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })] }));
const ChevronRight = ({ size = 16 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
const Search = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
const STATUS_COLOR = {
    pending: 'bg-yellow-100 text-yellow-800', processing: 'bg-blue-100 text-blue-800',
    shipped: 'bg-purple-100 text-purple-800', delivered: 'bg-green-100 text-green-800', cancelled: 'bg-red-100 text-red-800',
};
const MOCK = [
    { id: '1', orderNumber: 'ORD-2024-001', date: '2024-12-15', status: 'delivered', total: 14999, itemCount: 3, items: [
            { id: 'i1', name: 'Classic T-Shirt', image: 'https://placehold.co/80', quantity: 2, price: 2999 },
            { id: 'i2', name: 'Denim Jeans', image: 'https://placehold.co/80', quantity: 1, price: 7999 },
        ] },
    { id: '2', orderNumber: 'ORD-2024-002', date: '2024-12-20', status: 'shipped', total: 7999, itemCount: 1, items: [
            { id: 'i3', name: 'Leather Belt', image: 'https://placehold.co/80', quantity: 1, price: 7999 },
        ] },
];
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
export const OrderHistory = {
    label: 'Order History',
    fields: orderHistoryFields,
    defaultProps: { layout: 'list', showSearch: true, showFilters: true, defaultStatus: 'all', showImages: true, showItemCount: true, ordersPerPage: 10, backgroundColor: '#f9fafb', textColor: '#111827', emptyStateText: 'No orders found', viewDetailsText: 'View Details' },
    render: (raw) => {
        const { layout = 'list', showSearch, showFilters, defaultStatus = 'all', showImages, showItemCount, backgroundColor = '#f9fafb', textColor = '#111827', emptyStateText = 'No orders found', viewDetailsText = 'View Details' } = raw;
        const orders = raw.orders ?? MOCK;
        const onViewDetails = (id) => raw.onViewDetails ? raw.onViewDetails(id) : (() => { });
        const [q, setQ] = useState('');
        const [status, setStatus] = useState(defaultStatus);
        const filtered = orders.filter((o) => {
            if (status !== 'all' && o.status !== status)
                return false;
            if (q && !o.orderNumber.toLowerCase().includes(q.toLowerCase()))
                return false;
            return true;
        });
        return (_jsxs("div", { style: { backgroundColor, color: textColor }, className: "p-6 rounded-lg", children: [(showSearch || showFilters) && (_jsxs("div", { className: "mb-4 flex gap-3 flex-wrap", children: [showSearch && (_jsxs("div", { className: "flex-1 min-w-[200px] relative", children: [_jsx("input", { type: "text", value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search by order number", className: "w-full pl-10 pr-3 py-2 border border-gray-300 rounded" }), _jsx("div", { className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400", children: _jsx(Search, {}) })] })), showFilters && (_jsxs("select", { value: status, onChange: (e) => setStatus(e.target.value), className: "px-3 py-2 border border-gray-300 rounded", children: [_jsx("option", { value: "all", children: "All" }), _jsx("option", { value: "pending", children: "Pending" }), _jsx("option", { value: "processing", children: "Processing" }), _jsx("option", { value: "shipped", children: "Shipped" }), _jsx("option", { value: "delivered", children: "Delivered" }), _jsx("option", { value: "cancelled", children: "Cancelled" })] }))] })), filtered.length === 0 ? (_jsxs("div", { className: "py-16 text-center text-gray-500 flex flex-col items-center gap-2", children: [_jsx(Package, {}), _jsx("p", { children: emptyStateText })] })) : (_jsx("div", { className: layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4', children: filtered.map((o) => (_jsxs("div", { className: "bg-white p-4 rounded-lg border border-gray-200", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { children: [_jsx("p", { className: "font-semibold", children: o.orderNumber }), _jsx("p", { className: "text-sm opacity-70", children: o.date })] }), _jsx("span", { className: `text-xs font-medium px-2 py-1 rounded ${STATUS_COLOR[o.status]}`, children: o.status })] }), showItemCount && _jsxs("p", { className: "text-sm opacity-70 mb-3", children: [o.itemCount, " ", o.itemCount === 1 ? 'item' : 'items', " \u00B7 ", defaultFormat(o.total)] }), showImages && (_jsx("div", { className: "flex gap-2 mb-3 overflow-x-auto", children: o.items.map((i) => (_jsx("img", { src: i.image, alt: i.name, className: "w-12 h-12 rounded object-cover flex-shrink-0" }, i.id))) })), _jsxs("button", { onClick: () => onViewDetails(o.id), className: "text-sm text-blue-600 hover:underline flex items-center gap-1", children: [viewDetailsText, " ", _jsx(ChevronRight, {})] })] }, o.id))) }))] }));
    },
};
export default OrderHistory;
//# sourceMappingURL=OrderHistory.js.map