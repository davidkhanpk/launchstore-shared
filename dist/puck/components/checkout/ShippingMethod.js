import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const shippingMethodFields = {
    layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Compact', value: 'compact' }] },
    showDeliveryTime: { type: 'radio', label: 'Show Delivery Time', options: RADIO_YES_NO },
    showDeliveryDescription: { type: 'radio', label: 'Show Description', options: RADIO_YES_NO },
    showPickupOption: { type: 'radio', label: 'Show Pickup Option', options: RADIO_YES_NO },
    defaultSelection: { type: 'select', label: 'Default Selection', options: [{ label: 'Standard', value: 'standard' }, { label: 'Express', value: 'express' }, { label: 'Overnight', value: 'overnight' }] },
};
const Truck = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "1", y: "3", width: "15", height: "13" }), _jsx("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }), _jsx("circle", { cx: "5.5", cy: "18.5", r: "2.5" }), _jsx("circle", { cx: "18.5", cy: "18.5", r: "2.5" })] }));
const Clock = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }));
const BASE_METHODS = [
    { id: 'standard', name: 'Standard Shipping', price: '$9.95', time: '5-7 business days', description: 'Delivered by ground shipping' },
    { id: 'express', name: 'Express Shipping', price: '$19.95', time: '2-3 business days', description: 'Expedited delivery service' },
    { id: 'overnight', name: 'Overnight Shipping', price: '$39.95', time: 'Next business day', description: 'Guaranteed next-day delivery' },
];
const PICKUP = { id: 'pickup', name: 'Store Pickup', price: 'FREE', time: 'Ready in 2-4 hours', description: 'Pick up at our store location' };
export const ShippingMethod = {
    label: 'Shipping Method',
    fields: shippingMethodFields,
    defaultProps: { layout: 'list', showDeliveryTime: true, showDeliveryDescription: false, showPickupOption: false, defaultSelection: 'standard' },
    render: (raw) => {
        const { layout = 'list', showDeliveryTime, showDeliveryDescription, showPickupOption, defaultSelection = 'standard' } = raw;
        const baseMethods = raw.methods ?? BASE_METHODS;
        const methods = showPickupOption ? [...baseMethods, PICKUP] : baseMethods;
        const selectedId = raw.selectedId ?? defaultSelection;
        const onSelect = raw.onSelect ?? (() => { });
        const onContinue = raw.onContinue ?? (() => { });
        const renderMethod = (method) => {
            if (layout === 'cards') {
                return (_jsxs("div", { onClick: () => onSelect(method.id), className: `border-2 rounded-lg p-4 cursor-pointer transition-colors ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`, children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Truck, {}), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: method.name }), showDeliveryTime && _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [_jsx(Clock, {}), " ", method.time] })] })] }), _jsx("span", { className: "font-bold text-gray-900", children: method.price })] }), showDeliveryDescription && _jsx("p", { className: "text-sm text-gray-500 mt-2", children: method.description })] }, method.id));
            }
            if (layout === 'compact') {
                return (_jsxs("label", { className: `flex items-center justify-between border rounded p-3 cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "radio", name: "shipping", className: "h-4 w-4", checked: method.id === selectedId, onChange: () => onSelect(method.id) }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: method.name }), showDeliveryTime && _jsxs("span", { className: "text-xs text-gray-500", children: ["(", method.time, ")"] })] }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: method.price })] }, method.id));
            }
            return (_jsx("label", { className: `border rounded-lg p-4 cursor-pointer transition-colors block ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("input", { type: "radio", name: "shipping", className: "h-4 w-4", checked: method.id === selectedId, onChange: () => onSelect(method.id) }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, {}), _jsx("h4", { className: "font-medium text-gray-900", children: method.name })] }), showDeliveryTime && _jsxs("p", { className: "text-sm text-gray-600 mt-1 ml-8", children: [_jsx(Clock, {}), " ", method.time] }), showDeliveryDescription && _jsx("p", { className: "text-sm text-gray-500 mt-1 ml-8", children: method.description })] })] }), _jsx("span", { className: "font-bold text-gray-900", children: method.price })] }) }, method.id));
        };
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4 border-b border-gray-200", children: [_jsx(Truck, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Delivery Method" })] }), _jsx("div", { className: `space-y-${layout === 'compact' ? '2' : '4'}`, children: methods.map(renderMethod) }), _jsx("div", { className: "mt-6", children: _jsx("button", { onClick: onContinue, className: "w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium", children: "Continue to Payment" }) })] }));
    },
};
export default ShippingMethod;
//# sourceMappingURL=ShippingMethod.js.map