import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
// Inline SVG icons (replacing @heroicons/react). Stroke=currentColor inherits text color from parent.
const ICONS = {
    info: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "12", y1: "16", x2: "12", y2: "12" }), _jsx("line", { x1: "12", y1: "8", x2: "12.01", y2: "8" })] })),
    success: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("path", { d: "m9 12 2 2 4-4" })] })),
    warning: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" }), _jsx("line", { x1: "12", y1: "9", x2: "12", y2: "13" }), _jsx("line", { x1: "12", y1: "17", x2: "12.01", y2: "17" })] })),
    error: (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "15", y1: "9", x2: "9", y2: "15" }), _jsx("line", { x1: "9", y1: "9", x2: "15", y2: "15" })] })),
};
const STYLE = {
    info: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-800 dark:text-blue-200', icon: ICONS.info },
    success: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-800 dark:text-green-200', icon: ICONS.success },
    warning: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-800 dark:text-yellow-200', icon: ICONS.warning },
    error: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-800 dark:text-red-200', icon: ICONS.error },
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    type: {
        type: 'radio', label: 'Type',
        options: [{ label: 'Info', value: 'info' }, { label: 'Success', value: 'success' }, { label: 'Warning', value: 'warning' }, { label: 'Error', value: 'error' }],
    },
    title: { type: 'text', label: 'Title (Optional)' },
    message: { type: 'textarea', label: 'Message' },
    showIcon: { type: 'radio', label: 'Show Icon', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    dismissible: { type: 'radio', label: 'Dismissible', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['id', 'type', 'title', 'message', 'showIcon', 'dismissible'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Alert = {
    label: 'Alert',
    fields: accordionFields,
    defaultProps: {
        id: 'alert-1',
        type: 'info',
        message: 'This is an alert message',
        showIcon: true,
        dismissible: false,
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, type, title, message, showIcon, dismissible, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const s = STYLE[type || 'info'] || STYLE.info;
        const dismiss = (e) => {
            const el = e.currentTarget.closest('[role="alert"]');
            if (el)
                el.remove();
        };
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { id: id, className: layoutClasses, children: _jsxs("div", { className: `${s.bg} ${s.border} ${s.text} border rounded-lg p-4 flex items-start gap-3`, role: "alert", children: [showIcon && _jsx("span", { className: "flex-shrink-0 mt-0.5", children: s.icon }), _jsxs("div", { className: "flex-1", children: [title && _jsx("h4", { className: "font-semibold mb-1", children: title }), _jsx("p", { className: "text-sm", children: message })] }), dismissible && (_jsx("button", { onClick: dismiss, className: "flex-shrink-0 ml-auto", "aria-label": "Dismiss", children: STYLE.error.icon }))] }) }));
    },
};
export default Alert;
//# sourceMappingURL=Alert.js.map