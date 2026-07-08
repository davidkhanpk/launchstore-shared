import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { stockIndicatorFields } from './stockindicator.fields';
import { evaluateStock } from './stockindicator.types';
const StockIcon = ({ status, size = 20 }) => {
    if (status === 'in-stock')
        return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
    if (status === 'low-stock')
        return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "8", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "16", x2: "12.01", y2: "16" })] }));
    if (status === 'out-of-stock')
        return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), _jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] }));
    return (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }));
};
export const StockIndicator = {
    label: 'Stock Indicator',
    fields: stockIndicatorFields,
    defaultProps: {
        showIcon: true, showText: true, showQuantity: true,
        lowStockThreshold: 10, style: 'default',
    },
    render: (rawProps) => {
        const { showIcon, showText, showQuantity, lowStockThreshold = 10, style = 'default', product } = rawProps;
        if (!product)
            return _jsx(_Fragment, {});
        const resolved = evaluateStock(product, lowStockThreshold);
        const sty = style || 'default';
        if (sty === 'badge') {
            return (_jsxs("span", { className: `stock-indicator inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${resolved.iconColor} ${resolved.bgColor}`, children: [showIcon && _jsx("span", { className: "flex-shrink-0", children: _jsx(StockIcon, { status: resolved.status }) }), showText && _jsx("span", { children: resolved.text }), showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (_jsxs("span", { children: ["\u2022 ", resolved.quantity] }))] }));
        }
        if (sty === 'minimal') {
            return (_jsxs("div", { className: `stock-indicator flex items-center gap-2 text-sm ${resolved.iconColor}`, children: [showIcon && _jsx("span", { className: "flex-shrink-0", children: _jsx(StockIcon, { status: resolved.status }) }), showText && _jsx("span", { className: "font-medium", children: resolved.text }), showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (_jsxs("span", { className: "text-xs opacity-75", children: ["(", resolved.quantity, " available)"] }))] }));
        }
        // default
        return (_jsxs("div", { className: `stock-indicator flex items-center gap-2 ${resolved.iconColor} ${resolved.bgColor} ${resolved.borderColor} p-3 rounded-lg border`, children: [showIcon && _jsx("span", { className: "flex-shrink-0", children: _jsx(StockIcon, { status: resolved.status }) }), _jsxs("div", { className: "flex-1", children: [showText && _jsx("span", { className: "font-medium text-sm", children: resolved.text }), showQuantity && resolved.quantity > 0 && !resolved.isPreOrder && (_jsxs("span", { className: "text-xs ml-2", children: ["(", resolved.quantity, " available)"] }))] })] }));
    },
};
export default StockIndicator;
//# sourceMappingURL=StockIndicator.js.map