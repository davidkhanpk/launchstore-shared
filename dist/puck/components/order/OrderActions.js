import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderActionsFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Buttons', value: 'buttons' }, { label: 'Cards', value: 'cards' }, { label: 'List', value: 'list' }] },
    buttonStyle: { type: 'select', label: 'Button Style', options: [{ label: 'Filled', value: 'filled' }, { label: 'Outlined', value: 'outlined' }, { label: 'Text', value: 'text' }] },
    showDownloadInvoice: { type: 'radio', label: 'Show Download Invoice', options: RADIO_YES_NO },
    showTrackShipment: { type: 'radio', label: 'Show Track Shipment', options: RADIO_YES_NO },
    showContactSupport: { type: 'radio', label: 'Show Contact Support', options: RADIO_YES_NO },
    showReorder: { type: 'radio', label: 'Show Reorder', options: RADIO_YES_NO },
    showReturnRequest: { type: 'radio', label: 'Show Return Request', options: RADIO_YES_NO },
};
const Download = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }), _jsx("polyline", { points: "7 10 12 15 17 10" }), _jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })] }));
const Package = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), _jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), _jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), _jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })] }));
const Support = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("path", { d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" }) }));
const Refresh = ({ size = 20 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("polyline", { points: "23 4 23 10 17 10" }), _jsx("polyline", { points: "1 20 1 14 7 14" }), _jsx("path", { d: "M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" })] }));
const ChevronRight = ({ size = 20 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
export const OrderActions = {
    label: 'Order Actions',
    fields: orderActionsFields,
    defaultProps: { showDownloadInvoice: true, showTrackShipment: true, showContactSupport: true, showReorder: true, showReturnRequest: false, layout: 'buttons', buttonStyle: 'outlined' },
    render: (raw) => {
        const { showDownloadInvoice, showTrackShipment, showContactSupport, showReorder, showReturnRequest, layout = 'buttons', buttonStyle = 'outlined' } = raw;
        const onInvoice = raw.onInvoice ?? (() => { });
        const onTrack = raw.onTrack ?? (() => { });
        const onSupport = raw.onSupport ?? (() => { });
        const onReorder = raw.onReorder ?? (() => { });
        const onReturn = raw.onReturn ?? (() => { });
        const actions = [];
        if (showDownloadInvoice)
            actions.push({ id: 'invoice', label: 'Download Invoice', description: 'Get a PDF copy of your invoice', icon: Download, onClick: onInvoice });
        if (showTrackShipment)
            actions.push({ id: 'track', label: 'Track Shipment', description: 'Follow your package in real-time', icon: Package, onClick: onTrack });
        if (showContactSupport)
            actions.push({ id: 'support', label: 'Contact Support', description: 'Get help with your order', icon: Support, onClick: onSupport });
        if (showReorder)
            actions.push({ id: 'reorder', label: 'Reorder Items', description: 'Buy these items again', icon: Refresh, onClick: onReorder });
        if (showReturnRequest)
            actions.push({ id: 'return', label: 'Request Return', description: 'Start a return or refund request', icon: Refresh, onClick: onReturn });
        const getButtonClasses = () => {
            const base = 'px-4 py-2 rounded font-medium transition-colors flex items-center gap-2';
            if (buttonStyle === 'filled')
                return `${base} bg-black text-white hover:bg-gray-800`;
            if (buttonStyle === 'outlined')
                return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`;
            return `${base} text-blue-600 hover:text-blue-700 hover:underline`;
        };
        if (layout === 'cards') {
            return (_jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: actions.map((a) => (_jsx("button", { onClick: a.onClick, className: "bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-gray-300 hover:shadow-sm transition-all", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: "p-3 bg-gray-100 rounded-lg", children: _jsx(a.icon, {}) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-1", children: a.label }), _jsx("p", { className: "text-sm text-gray-600", children: a.description })] })] }) }, a.id))) }));
        }
        if (layout === 'list') {
            return (_jsx("div", { className: "bg-white border border-gray-200 rounded-lg divide-y divide-gray-200", children: actions.map((a) => (_jsxs("button", { onClick: a.onClick, className: "w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(a.icon, {}), _jsxs("div", { className: "text-left", children: [_jsx("p", { className: "font-medium text-gray-900", children: a.label }), _jsx("p", { className: "text-sm text-gray-600", children: a.description })] })] }), _jsx(ChevronRight, {})] }, a.id))) }));
        }
        return (_jsx("div", { className: "flex flex-wrap gap-3", children: actions.map((a) => (_jsxs("button", { onClick: a.onClick, className: getButtonClasses(), children: [_jsx(a.icon, {}), " ", a.label] }, a.id))) }));
    },
};
export default OrderActions;
//# sourceMappingURL=OrderActions.js.map