import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const shippingMethodFields = {
    layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Compact', value: 'compact' }] },
    showDeliveryTime: { type: 'radio', label: 'Show Delivery Time', options: RADIO_YES_NO },
    showDeliveryDescription: { type: 'radio', label: 'Show Description', options: RADIO_YES_NO },
    showPickupOption: { type: 'radio', label: 'Show Pickup Option', options: RADIO_YES_NO },
};
const Truck = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "1", y: "3", width: "15", height: "13" }), _jsx("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }), _jsx("circle", { cx: "5.5", cy: "18.5", r: "2.5" }), _jsx("circle", { cx: "18.5", cy: "18.5", r: "2.5" })] }));
const Clock = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }));
// Inline spinner (same shape as src/modules/common/icons/spinner.tsx in
// the storefront). Kept inline so the shared package has no icon-lib
// dependency and the icon matches the rest of the app visually.
const Spinner = ({ size = 20 }) => (_jsxs("svg", { className: "animate-spin", width: size, height: size, fill: "none", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", "aria-hidden": "true", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }));
// No static MOCK — the storefront wrapper injects real Medusa shipping
// options via Puck context. If no data is passed, we show an empty state.
// The shared component is purely presentational.
export const ShippingMethod = {
    label: 'Shipping Method',
    fields: shippingMethodFields,
    defaultProps: { layout: 'list', showDeliveryTime: true, showDeliveryDescription: false, showPickupOption: false },
    render: (raw) => {
        const { layout = 'list', showDeliveryTime, showDeliveryDescription, showPickupOption } = raw;
        const baseMethods = raw.methods;
        // Pickup is a real Medusa option, just like any other shipping method. If
        // the storefront wrapper passes a `pickupOption` prop, we add it. There
        // is NO hardcoded fallback — the wrapper is responsible for the data.
        const pickup = raw.pickupOption;
        const methods = baseMethods
            ? (showPickupOption && pickup ? [...baseMethods, pickup] : baseMethods)
            : undefined;
        // selectedId comes from the wrapper (cart.shipping_methods[0]?.shipping_option_id).
        // No fallback to a static label — the wrapper is the only source of truth.
        const selectedId = raw.selectedId ?? '';
        const onSelect = raw.onSelect ?? (() => { });
        const onContinue = raw.onContinue ?? (() => { });
        const showContinueButton = raw.showContinueButton ?? true;
        const isLoading = raw.isLoading ?? false;
        const loadingText = raw.loadingText ?? 'Saving…';
        // Empty state: no methods provided. The storefront wrapper injects
        // real Medusa shipping options; if none are returned, show this
        // instead of a hardcoded fallback list.
        if (!methods || methods.length === 0) {
            return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-gray-200", children: [_jsx(Truck, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Delivery Method" })] }), _jsx("p", { className: "text-sm text-gray-500", children: "No shipping options are available for this region yet." })] }));
        }
        const renderMethod = (method) => {
            if (layout === 'cards') {
                return (_jsxs("div", { onClick: () => onSelect(method.id), className: `border-2 rounded-lg p-4 cursor-pointer transition-colors ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`, children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Truck, {}), _jsxs("div", { children: [_jsx("h4", { className: "font-medium text-gray-900", children: method.name }), showDeliveryTime && method.time && _jsxs("p", { className: "text-sm text-gray-600 mt-1", children: [_jsx(Clock, {}), " ", method.time] })] })] }), _jsx("span", { className: "font-bold text-gray-900", children: method.price })] }), showDeliveryDescription && method.description && _jsx("p", { className: "text-sm text-gray-500 mt-2", children: method.description })] }, method.id));
            }
            if (layout === 'compact') {
                return (_jsxs("label", { className: `flex items-center justify-between border rounded p-3 cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("input", { type: "radio", name: "shipping", className: "h-4 w-4", checked: method.id === selectedId, onChange: () => onSelect(method.id) }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: method.name }), showDeliveryTime && method.time && _jsxs("span", { className: "text-xs text-gray-500", children: ["(", method.time, ")"] })] }), _jsx("span", { className: "text-sm font-medium text-gray-900", children: method.price })] }, method.id));
            }
            return (_jsx("label", { className: `border rounded-lg p-4 cursor-pointer transition-colors block ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("input", { type: "radio", name: "shipping", className: "h-4 w-4", checked: method.id === selectedId, onChange: () => onSelect(method.id) }), _jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Truck, {}), _jsx("h4", { className: "font-medium text-gray-900", children: method.name })] }), showDeliveryTime && method.time && _jsxs("p", { className: "text-sm text-gray-600 mt-1 ml-8", children: [_jsx(Clock, {}), " ", method.time] }), showDeliveryDescription && method.description && _jsx("p", { className: "text-sm text-gray-500 mt-1 ml-8", children: method.description })] })] }), _jsx("span", { className: "font-bold text-gray-900", children: method.price })] }) }, method.id));
        };
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4 border-b border-gray-200", children: [_jsx(Truck, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Delivery Method" })] }), _jsx("div", { className: `space-y-${layout === 'compact' ? '2' : '4'}`, children: methods.map(renderMethod) }), showContinueButton && (_jsx("div", { className: "mt-6", children: _jsxs("button", { type: "button", onClick: onContinue, disabled: isLoading, className: "w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed", children: [isLoading && _jsx(Spinner, { size: 18 }), isLoading ? loadingText : 'Continue to Payment'] }) }))] }));
    },
};
export default ShippingMethod;
//# sourceMappingURL=ShippingMethod.js.map