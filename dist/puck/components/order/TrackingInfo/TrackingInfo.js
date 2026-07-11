import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Row = ({ label, value }) => (_jsxs("div", { className: "flex items-center justify-between py-2 text-sm border-b border-gray-100 last:border-0", children: [_jsx("span", { className: "text-gray-500", children: label }), _jsx("span", { className: "text-gray-900 font-medium", children: value })] }));
export const trackingInfoFields = {
    showEstimatedDelivery: { type: 'radio', label: 'Estimated Delivery', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showCarrier: { type: 'radio', label: 'Carrier', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showTrackingNumber: { type: 'radio', label: 'Tracking Number', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    message: { type: 'textarea', label: 'Message' },
    luxuryStyle: { type: 'radio', label: 'Luxury Style', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
export const TrackingInfo = {
    label: 'Tracking Info',
    fields: trackingInfoFields,
    defaultProps: {
        showEstimatedDelivery: true,
        showCarrier: true,
        showTrackingNumber: false,
        message: 'You will receive tracking information once your order ships.',
        luxuryStyle: false,
    },
    render: ({ showEstimatedDelivery, showCarrier, showTrackingNumber, message, luxuryStyle, estimatedDelivery, carrier, trackingNumber }) => {
        return (_jsxs("div", { className: `mt-4 p-4 rounded-lg border border-gray-200 bg-white ${luxuryStyle ? 'font-light tracking-wide' : ''}`, children: [_jsx("h4", { className: "text-sm font-semibold text-gray-900 m-0 mb-2", children: "Shipping & Tracking" }), showEstimatedDelivery && _jsx(Row, { label: "Estimated Delivery", value: estimatedDelivery || '3–5 business days' }), showCarrier && _jsx(Row, { label: "Carrier", value: carrier || 'Standard Shipping' }), showTrackingNumber && _jsx(Row, { label: "Tracking Number", value: trackingNumber || 'Pending' }), message && _jsx("p", { className: "text-sm text-gray-500 mt-3 m-0", children: message })] }));
    },
};
export default TrackingInfo;
//# sourceMappingURL=TrackingInfo.js.map