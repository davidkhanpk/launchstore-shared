import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const paymentMethodFields = {
    layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Icons Only', value: 'icons' }] },
    showPaymentIcons: { type: 'radio', label: 'Show Payment Icons', options: RADIO_YES_NO },
    showSecurityBadges: { type: 'radio', label: 'Show Security Badges', options: RADIO_YES_NO },
    enableSaveCard: { type: 'radio', label: 'Allow Save Card', options: RADIO_YES_NO },
    expressCheckoutPosition: { type: 'select', label: 'Express Checkout Position', options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }, { label: 'None', value: 'none' }] },
};
const Card = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "1", y: "4", width: "22", height: "16", rx: "2" }), _jsx("line", { x1: "1", y1: "10", x2: "23", y2: "10" })] }));
const Lock = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x1: "3", y1: "11", width: "18", height: "11", rx: "2" }), _jsx("path", { d: "M7 11V7a5 5 0 0 1 10 0v4" })] }));
const Shield = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }));
// No static MOCK — the storefront wrapper injects real Medusa payment
// providers via Puck context. If no data is passed, we show an empty
// state. The shared component is purely presentational.
export const PaymentMethod = {
    label: 'Payment Method',
    fields: paymentMethodFields,
    defaultProps: { layout: 'list', showPaymentIcons: true, showSecurityBadges: true, enableSaveCard: true, expressCheckoutPosition: 'top' },
    render: (raw) => {
        const { layout = 'list', showPaymentIcons, showSecurityBadges, enableSaveCard, expressCheckoutPosition = 'top' } = raw;
        const methods = raw.methods;
        const selectedId = raw.selectedId ?? '';
        const onSelect = raw.onSelect ?? (() => { });
        const onContinue = raw.onContinue ?? (() => { });
        // Empty state: no methods provided. This is the correct render when
        // the storefront wrapper hasn't injected data (e.g. region has no
        // payment providers configured, or a fetch failed). We deliberately
        // do NOT show static/fake methods here.
        if (!methods || methods.length === 0) {
            return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4 pb-4 border-b border-gray-200", children: [_jsx(Card, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Payment Method" })] }), _jsx("p", { className: "text-sm text-gray-500", children: "No payment methods are available for this region yet." })] }));
        }
        return (_jsxs("div", { className: "border border-gray-200 rounded-lg p-6 bg-white", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6 pb-4 border-b border-gray-200", children: [_jsx(Card, {}), _jsx("h2", { className: "text-xl font-semibold text-gray-900", children: "Payment Method" })] }), expressCheckoutPosition === 'top' && (_jsxs("div", { className: "mb-6 pb-6 border-b border-gray-200", children: [_jsx("p", { className: "text-sm text-gray-600 mb-3", children: "Express checkout" }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("button", { type: "button", className: "border-2 border-gray-900 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2", children: [_jsx(Lock, {}), " Shop Pay"] }), _jsx("button", { type: "button", className: "border-2 border-gray-300 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2", children: "G Pay" })] }), _jsx("div", { className: "mt-4 text-center", children: _jsx("span", { className: "text-sm text-gray-500", children: "\u2014 OR \u2014" }) })] })), _jsx("div", { className: "space-y-4 mb-6", children: methods.map((method) => (_jsx("div", { className: `border-2 rounded-lg p-4 transition-colors cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`, onClick: () => onSelect(method.id), children: _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("input", { type: "radio", name: "payment", className: "h-4 w-4", checked: method.id === selectedId, onChange: () => onSelect(method.id) }), showPaymentIcons && method.icon && _jsx("span", { className: "text-2xl", children: method.icon }), _jsxs("div", { className: "flex-1", children: [_jsx("h4", { className: "font-medium text-gray-900", children: method.name }), method.description && _jsx("p", { className: "text-sm text-gray-600", children: method.description })] })] }) }, method.id))) }), enableSaveCard && (_jsx("div", { className: "border-t border-gray-200 pt-4 mb-6", children: _jsxs("label", { className: "flex items-center", children: [_jsx("input", { type: "checkbox", className: "mr-2 h-4 w-4" }), _jsx("span", { className: "text-sm text-gray-700", children: "Save card for future purchases" })] }) })), showSecurityBadges && (_jsx("div", { className: "border-t border-gray-200 pt-4 mb-6", children: _jsxs("div", { className: "flex items-center justify-center gap-6 text-sm text-gray-600", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Lock, {}), " ", _jsx("span", { children: "SSL Encrypted" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Shield, {}), " ", _jsx("span", { children: "PCI Compliant" })] })] }) })), expressCheckoutPosition === 'bottom' && (_jsx("div", { className: "mt-6 pt-6 border-t border-gray-200", children: _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsx("button", { type: "button", className: "border-2 border-gray-900 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors", children: "Shop Pay" }), _jsx("button", { type: "button", className: "border-2 border-gray-300 rounded-lg px-4 py-3 font-medium hover:bg-gray-50 transition-colors", children: "G Pay" })] }) })), _jsx("div", { className: "mt-6", children: _jsx("button", { type: "button", onClick: onContinue, className: "w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium", children: "Review Order" }) })] }));
    },
};
export default PaymentMethod;
//# sourceMappingURL=PaymentMethod.js.map