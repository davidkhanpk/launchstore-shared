import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderTotalsFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Default', value: 'default' }, { label: 'Compact', value: 'compact' }] },
    showSubtotal: { type: 'radio', label: 'Show Subtotal', options: RADIO_YES_NO },
    showShipping: { type: 'radio', label: 'Show Shipping', options: RADIO_YES_NO },
    showTax: { type: 'radio', label: 'Show Tax', options: RADIO_YES_NO },
    showDiscount: { type: 'radio', label: 'Show Discount', options: RADIO_YES_NO },
    showTotal: { type: 'radio', label: 'Show Total', options: RADIO_YES_NO },
    highlightTotal: { type: 'radio', label: 'Highlight Total', options: RADIO_YES_NO },
};
const Dollar = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "12", y1: "1", x2: "12", y2: "23" }), _jsx("path", { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" })] }));
// No static MOCK — the storefront wrapper injects real Medusa cart totals
// via Puck context. If no data is passed, we show zeros (the cart is empty).
export const OrderTotals = {
    label: 'Order Totals',
    fields: orderTotalsFields,
    defaultProps: { showSubtotal: true, showShipping: true, showTax: true, showDiscount: true, showTotal: true, highlightTotal: true, layout: 'default' },
    render: (raw) => {
        const { showSubtotal, showShipping, showTax, showDiscount, showTotal, highlightTotal, layout = 'default' } = raw;
        const totals = raw.totals ?? { subtotal: '', shipping: '', tax: '', discount: '', total: '' };
        const textSize = layout === 'compact' ? 'text-sm' : 'text-base';
        const spacing = layout === 'compact' ? 'space-y-2' : 'space-y-3';
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-gray-200", children: [_jsx(Dollar, {}), _jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Order Summary" })] }), _jsxs("div", { className: spacing, children: [showSubtotal && _jsxs("div", { className: `flex justify-between ${textSize} text-gray-700`, children: [_jsx("span", { children: "Subtotal" }), _jsx("span", { children: totals.subtotal })] }), showShipping && _jsxs("div", { className: `flex justify-between ${textSize} text-gray-700`, children: [_jsx("span", { children: "Shipping" }), _jsx("span", { children: totals.shipping })] }), showTax && _jsxs("div", { className: `flex justify-between ${textSize} text-gray-700`, children: [_jsx("span", { children: "Tax" }), _jsx("span", { children: totals.tax })] }), showDiscount && _jsxs("div", { className: `flex justify-between ${textSize} text-green-600`, children: [_jsxs("span", { children: ["Discount", totals.discountCode ? ` (${totals.discountCode})` : ''] }), _jsx("span", { children: totals.discount })] })] }), showTotal && (_jsxs("div", { className: `mt-4 pt-4 border-t border-gray-200 ${highlightTotal ? 'bg-gray-50 -mx-6 -mb-6 px-6 pb-6 rounded-b-lg' : ''}`, children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: `${layout === 'compact' ? 'text-base' : 'text-lg'} font-semibold text-gray-900`, children: "Total" }), _jsx("span", { className: `${layout === 'compact' ? 'text-xl' : 'text-2xl'} font-bold text-gray-900`, children: totals.total })] }), _jsxs("p", { className: "text-xs text-gray-500 mt-2 text-right", children: ["Including ", totals.tax, " in taxes"] })] }))] }));
    },
};
export default OrderTotals;
//# sourceMappingURL=OrderTotals.js.map