import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const EmailSvg = () => (_jsxs("svg", { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" }), _jsx("path", { d: "m22 6-10 7L2 6" })] }));
const PackageSvg = () => (_jsxs("svg", { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), _jsx("path", { d: "m3.3 7 8.7 5 8.7-5M12 22V12" })] }));
const TruckSvg = () => (_jsxs("svg", { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M10 17h4V5H2v12h3" }), _jsx("path", { d: "M20 17h2v-3.3a1 1 0 0 0-.3-.7l-2.7-2.7a1 1 0 0 0-.7-.3H14v7h2" }), _jsx("circle", { cx: "7.5", cy: "17.5", r: "2.5" }), _jsx("circle", { cx: "17.5", cy: "17.5", r: "2.5" })] }));
const CheckSvg = () => (_jsx("svg", { width: 20, height: 20, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const ICON = { email: _jsx(EmailSvg, {}), package: _jsx(PackageSvg, {}), truck: _jsx(TruckSvg, {}) };
const PLACEHOLDER = [
    { icon: 'email', text: 'Check your email for confirmation' },
    { icon: 'package', text: "We'll prepare your order" },
    { icon: 'truck', text: 'Track your shipment' },
];
export const nextStepsFields = {
    steps: {
        type: 'array', label: 'Steps',
        getItemSummary: (item) => item?.text || 'Step',
        arrayFields: {
            icon: { type: 'select', label: 'Icon', options: [{ label: 'Email', value: 'email' }, { label: 'Package', value: 'package' }, { label: 'Truck', value: 'truck' }] },
            text: { type: 'text', label: 'Text' },
        },
    },
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Vertical', value: 'vertical' }, { label: 'Horizontal', value: 'horizontal' }] },
};
export const NextSteps = {
    label: 'Next Steps',
    fields: nextStepsFields,
    defaultProps: {
        steps: [],
        layout: 'vertical',
    },
    render: ({ steps, layout }) => {
        const items = steps && steps.length > 0 ? steps : PLACEHOLDER;
        const horizontal = layout === 'horizontal';
        return (_jsx("ol", { className: `list-none p-0 m-0 flex ${horizontal ? 'flex-row gap-6' : 'flex-col gap-3'}`, children: items.map((step, i) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx("span", { className: "flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 shrink-0", children: ICON[step?.icon || ''] || _jsx(CheckSvg, {}) }), _jsx("span", { className: "text-sm text-gray-700", children: step?.text || '' })] }, i))) }));
    },
};
export default NextSteps;
//# sourceMappingURL=NextSteps.js.map