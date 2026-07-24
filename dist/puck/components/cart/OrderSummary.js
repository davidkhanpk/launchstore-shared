import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderSummaryFields = {
    position: { type: 'select', label: 'Position', options: [{ label: 'Sidebar (Sticky)', value: 'sidebar' }, { label: 'Inline', value: 'inline' }] },
    showItemImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
    showItemQuantity: { type: 'radio', label: 'Show Item Quantity', options: RADIO_YES_NO },
    showItemPrice: { type: 'radio', label: 'Show Item Prices', options: RADIO_YES_NO },
    showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
    showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
    showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
    showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
    showTotal: { type: 'radio', label: 'Show Total', options: RADIO_YES_NO },
    compactView: { type: 'radio', label: 'Compact View', options: RADIO_YES_NO },
};
const Lock = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "3", y: "11", width: "18", height: "11", rx: "2" }), _jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] }));
const defaultFormat = (p) => `$${(p / 100).toFixed(2)}`;
export const OrderSummary = {
    label: 'Order Summary',
    fields: orderSummaryFields,
    defaultProps: {
        position: 'sidebar', showItemImages: true, showItemQuantity: true, showItemPrice: true,
        showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showTotal: true, compactView: false,
    },
    render: (raw) => {
        const { position = 'sidebar', showItemImages, showItemQuantity, showItemPrice, showSubtotal, showShipping, showTax, showDiscount, showTotal, compactView } = raw;
        const items = raw.items ?? [];
        const totals = raw.totals ?? { subtotal: 0, shipping: 0, tax: 0, discount: 0, total: 0 };
        const formatPrice = raw.formatPrice ?? defaultFormat;
        const containerClass = position === 'sidebar' ? 'sticky top-4 border border-gray-200 rounded-lg p-6 bg-white shadow-sm' : 'border border-gray-200 rounded-lg p-6 bg-white';
        return (_jsxs("div", { className: containerClass, children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4 pb-4 border-b border-gray-200", children: "Order Summary" }), _jsx("div", { className: `${compactView ? 'space-y-2' : 'space-y-4'} mb-6`, children: items.map((item) => (_jsxs("div", { className: `flex gap-3 ${!compactView && 'pb-4 border-b border-gray-100'}`, children: [showItemImages && item.thumbnail && (_jsxs("div", { className: "relative flex-shrink-0", children: [_jsx("img", { src: item.thumbnail, alt: item.title, className: `${compactView ? 'w-12 h-12' : 'w-16 h-16'} object-cover rounded` }), showItemQuantity && (_jsx("div", { className: "absolute -top-2 -right-2 bg-gray-900 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center", children: item.quantity }))] })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h4", { className: `${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900 truncate`, children: item.title }), _jsx("p", { className: `${compactView ? 'text-xs' : 'text-sm'} text-gray-600 mt-1`, children: item.variant.options.map(o => o.value).join(' / ') }), showItemQuantity && !showItemImages && _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: ["Qty: ", item.quantity] })] }), showItemPrice && (_jsxs("div", { className: "text-right flex-shrink-0", children: [_jsx("p", { className: `${compactView ? 'text-sm' : 'text-base'} font-medium text-gray-900`, children: formatPrice(item.total) }), item.quantity > 1 && !compactView && _jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [formatPrice(item.unit_price), " each"] })] }))] }, item.id))) }), _jsxs("div", { className: "space-y-3 mb-6", children: [showSubtotal && _jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { className: compactView ? 'text-sm' : '', children: "Subtotal" }), _jsx("span", { className: compactView ? 'text-sm' : '', children: formatPrice(totals.subtotal) })] }), showShipping && _jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { className: compactView ? 'text-sm' : '', children: "Shipping" }), _jsx("span", { className: compactView ? 'text-sm' : '', children: formatPrice(totals.shipping) })] }), showTax && _jsxs("div", { className: "flex justify-between text-gray-700", children: [_jsx("span", { className: compactView ? 'text-sm' : '', children: "Tax" }), _jsx("span", { className: compactView ? 'text-sm' : '', children: formatPrice(totals.tax) })] }), showDiscount && totals.discount > 0 && _jsxs("div", { className: "flex justify-between text-green-600", children: [_jsx("span", { className: compactView ? 'text-sm' : '', children: "Discount" }), _jsxs("span", { className: compactView ? 'text-sm' : '', children: ["-", formatPrice(totals.discount)] })] })] }), showTotal && (_jsx("div", { className: "pt-4 border-t border-gray-200", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: `${compactView ? 'text-base' : 'text-lg'} font-semibold text-gray-900`, children: "Total" }), _jsx("span", { className: `${compactView ? 'text-xl' : 'text-2xl'} font-bold text-gray-900`, children: formatPrice(totals.total) })] }) })), !compactView && (_jsx("div", { className: "mt-6 pt-4 border-t border-gray-200", children: _jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-600", children: [_jsx(Lock, {}), _jsx("span", { children: "Secure and encrypted payment" })] }) }))] }));
    },
};
export default OrderSummary;
//# sourceMappingURL=OrderSummary.js.map