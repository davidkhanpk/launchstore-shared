import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const orderTimelineFields = {
    orientation: { type: 'select', label: 'Orientation', options: [{ label: 'Vertical', value: 'vertical' }, { label: 'Horizontal', value: 'horizontal' }] },
    style: { type: 'select', label: 'Style', options: [{ label: 'Default', value: 'default' }, { label: 'Minimal', value: 'minimal' }, { label: 'Detailed', value: 'detailed' }] },
    showIcons: { type: 'radio', label: 'Show Icons', options: RADIO_YES_NO },
    showTimestamps: { type: 'radio', label: 'Show Timestamps', options: RADIO_YES_NO },
    showTrackingNumber: { type: 'radio', label: 'Show Tracking Number', options: RADIO_YES_NO },
};
const Check = ({ size = 24 }) => (_jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const Clock = ({ size = 24 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }));
const Package = ({ size = 24 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), _jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), _jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), _jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })] }));
const Truck = ({ size = 24 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("rect", { x: "1", y: "3", width: "15", height: "13" }), _jsx("polygon", { points: "16 8 20 8 23 11 23 16 16 16 16 8" }), _jsx("circle", { cx: "5.5", cy: "18.5", r: "2.5" }), _jsx("circle", { cx: "18.5", cy: "18.5", r: "2.5" })] }));
const ICON_MAP = { Check, Clock, Package, Truck };
const MOCK_STEPS = [
    { id: 'placed', title: 'Order Placed', description: 'Your order has been confirmed', timestamp: 'Dec 21, 2025 - 10:30 AM', completed: true, iconName: 'Check' },
    { id: 'processing', title: 'Processing', description: "We're preparing your order", timestamp: 'Dec 21, 2025 - 11:00 AM', completed: true, iconName: 'Clock' },
    { id: 'shipped', title: 'Shipped', description: 'Your order is on its way', timestamp: 'Dec 22, 2025 - 2:00 PM', completed: true, iconName: 'Truck' },
    { id: 'delivered', title: 'Delivered', description: 'Your order has been delivered', timestamp: 'Expected Dec 25, 2025', completed: false, iconName: 'Package' },
];
export const OrderTimeline = {
    label: 'Order Timeline',
    fields: orderTimelineFields,
    defaultProps: { showIcons: true, showTimestamps: true, showTrackingNumber: true, orientation: 'vertical', style: 'default' },
    render: (raw) => {
        const { showIcons, showTimestamps, showTrackingNumber, orientation = 'vertical', style = 'default' } = raw;
        const steps = raw.steps ?? MOCK_STEPS;
        const trackingNumber = raw.trackingNumber ?? '1Z999AA10123456784';
        const onCopyTracking = raw.onCopyTracking ?? (() => { });
        const currentStepIndex = steps.findIndex((s) => !s.completed);
        if (orientation === 'horizontal') {
            return (_jsxs("div", { className: "w-full", children: [showTrackingNumber && (_jsx("div", { className: "mb-6 text-center", children: _jsxs("p", { className: "text-sm text-gray-600", children: ["Tracking Number: ", _jsx("strong", { className: "text-gray-900", children: trackingNumber })] }) })), _jsxs("div", { className: "flex items-start justify-between relative", children: [_jsx("div", { className: "absolute top-6 left-0 right-0 h-1 bg-gray-200", children: _jsx("div", { className: "h-full bg-green-500 transition-all", style: { width: `${(currentStepIndex / (steps.length - 1)) * 100}%` } }) }), steps.map((step, index) => {
                                const Icon = ICON_MAP[step.iconName] || Check;
                                return (_jsx("div", { className: "flex-1 relative z-10", children: _jsxs("div", { className: "flex flex-col items-center text-center", children: [showIcons && (_jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step.completed ? 'bg-green-500 text-white' : index === currentStepIndex ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`, children: _jsx(Icon, {}) })), _jsx("p", { className: `font-medium mb-1 ${step.completed || index === currentStepIndex ? 'text-gray-900' : 'text-gray-400'}`, children: step.title }), style !== 'minimal' && _jsx("p", { className: "text-xs text-gray-600 mb-1", children: step.description }), showTimestamps && _jsx("p", { className: "text-xs text-gray-500", children: step.timestamp })] }) }, step.id));
                            })] })] }));
        }
        return (_jsxs("div", { className: "max-w-2xl mx-auto", children: [showTrackingNumber && (_jsx("div", { className: "mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4", children: _jsxs("p", { className: "text-sm text-gray-600", children: ["Tracking Number: ", _jsx("strong", { className: "text-gray-900 ml-2", children: trackingNumber }), _jsx("button", { onClick: onCopyTracking, className: "ml-2 text-blue-600 hover:underline text-xs", children: "Copy" })] }) })), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200", children: _jsx("div", { className: "w-full bg-green-500 transition-all", style: { height: `${(currentStepIndex / steps.length) * 100}%` } }) }), _jsx("div", { className: "space-y-8", children: steps.map((step, index) => {
                                const Icon = ICON_MAP[step.iconName] || Check;
                                return (_jsxs("div", { className: "flex gap-4 relative", children: [showIcons && (_jsx("div", { className: `w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${step.completed ? 'bg-green-500 text-white' : index === currentStepIndex ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-200 text-gray-400'}`, children: _jsx(Icon, {}) })), _jsxs("div", { className: "flex-1 pb-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("h4", { className: `font-semibold ${step.completed || index === currentStepIndex ? 'text-gray-900' : 'text-gray-400'}`, children: step.title }), step.completed && _jsx("span", { className: "text-xs bg-green-100 text-green-800 px-2 py-1 rounded", children: "Completed" }), index === currentStepIndex && _jsx("span", { className: "text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded", children: "In Progress" })] }), style !== 'minimal' && _jsx("p", { className: "text-sm text-gray-600 mb-2", children: step.description }), showTimestamps && _jsx("p", { className: "text-xs text-gray-500", children: step.timestamp }), style === 'detailed' && step.completed && (_jsxs("div", { className: "mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-600", children: [_jsx("p", { children: "\u2713 Status updated successfully" }), step.id === 'shipped' && _jsx("p", { className: "mt-1", children: "\uD83D\uDCE6 Package handed to carrier" })] }))] })] }, step.id));
                            }) })] })] }));
    },
};
export default OrderTimeline;
//# sourceMappingURL=OrderTimeline.js.map