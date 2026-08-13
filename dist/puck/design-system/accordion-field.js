import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
// ── Accordion state persistence ────────────────────────────────────────────
// Remember open/closed state per component+section across re-renders.
const accordionState = {};
function getStateKey(componentId, groupLabel) {
    return `${componentId}::${groupLabel}`;
}
// ── Chevron icon ───────────────────────────────────────────────────────────
const ChevronIcon = ({ open }) => (_jsx("svg", { style: {
        width: '16px', height: '16px', flexShrink: 0,
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 200ms ease',
    }, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const FieldRenderer = ({ fieldKey, field, value, onChange }) => {
    const anyField = field;
    // For select/radio/text/number/textarea — render a native input
    if (anyField.type === 'select') {
        return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: anyField.label || fieldKey }), _jsx("select", { value: value ?? '', onChange: (e) => onChange(e.target.value), style: {
                        width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
                        borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
                    }, children: anyField.options?.map((opt) => (_jsx("option", { value: opt.value, children: opt.label }, opt.value))) })] }));
    }
    if (anyField.type === 'radio') {
        return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: anyField.label || fieldKey }), _jsx("div", { style: { display: 'flex', gap: '8px' }, children: anyField.options?.map((opt) => (_jsx("button", { type: "button", onClick: () => onChange(opt.value), style: {
                            padding: '6px 12px', borderRadius: '6px', fontSize: '13px',
                            border: `1px solid ${value === opt.value ? '#111827' : '#d1d5db'}`,
                            background: value === opt.value ? '#111827' : '#fff',
                            color: value === opt.value ? '#fff' : '#374151',
                            cursor: 'pointer', fontWeight: 500,
                        }, children: opt.label }, opt.value))) })] }));
    }
    if (anyField.type === 'number') {
        return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: anyField.label || fieldKey }), _jsx("input", { type: "number", value: value ?? '', onChange: (e) => onChange(e.target.value ? Number(e.target.value) : undefined), min: anyField.min, max: anyField.max, style: {
                        width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
                        borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
                    } })] }));
    }
    if (anyField.type === 'textarea') {
        return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: anyField.label || fieldKey }), _jsx("textarea", { value: value ?? '', onChange: (e) => onChange(e.target.value), rows: 3, style: {
                        width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
                        borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
                        resize: 'vertical',
                    } })] }));
    }
    if (anyField.type === 'custom' && typeof anyField.render === 'function') {
        // Delegate to the field's own custom render (e.g. ColorField, MediaPickerField)
        return _jsx(_Fragment, { children: anyField.render({ value, onChange }) });
    }
    // Default: text input
    return (_jsxs("div", { style: { marginBottom: '12px' }, children: [_jsx("label", { style: { display: 'block', fontSize: '13px', fontWeight: 500, marginBottom: '4px', color: '#374151' }, children: anyField.label || fieldKey }), _jsx("input", { type: "text", value: value ?? '', onChange: (e) => onChange(e.target.value), style: {
                    width: '100%', padding: '8px 12px', border: '1px solid #d1d5db',
                    borderRadius: '6px', fontSize: '14px', background: '#fff', color: '#111827',
                } })] }));
};
// ── Main accordion inspector widget ─────────────────────────────────────────
export function createAccordionFields(config) {
    // Return a single custom field that renders the entire accordion.
    // The value passed to render is the component's entire props object.
    // Each field's value is read from props[fieldKey] and written back
    // by calling onChange with a shallow-merged new props object.
    return {
        _accordion: {
            type: 'custom',
            label: '',
            render: ({ value, onChange }) => {
                const props = value || {};
                const componentId = props.id || 'unknown';
                const handleFieldChange = useCallback((fieldKey, fieldValue) => {
                    onChange({ ...props, [fieldKey]: fieldValue });
                }, [props, onChange]);
                return (_jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: '0' }, children: config.groups.map((group) => {
                        const stateKey = getStateKey(componentId, group.label);
                        const isOpen = accordionState[stateKey] ?? group.defaultOpen ?? false;
                        const toggle = () => {
                            accordionState[stateKey] = !isOpen;
                            // Force re-render by calling onChange with same props
                            onChange({ ...props });
                        };
                        return (_jsx(Disclosure, { defaultOpen: isOpen, children: ({ open }) => (_jsxs("div", { style: { borderBottom: '1px solid #f3f4f6' }, children: [_jsxs(DisclosureButton, { onClick: toggle, style: {
                                            width: '100%', display: 'flex', alignItems: 'center',
                                            justifyContent: 'space-between', padding: '12px 0',
                                            background: 'none', border: 'none', cursor: 'pointer',
                                            fontSize: '14px', fontWeight: 600, color: '#111827',
                                        }, children: [group.label, _jsx(ChevronIcon, { open: open })] }), _jsx(DisclosurePanel, { style: { paddingBottom: '8px' }, children: group.fieldKeys.map((fieldKey) => {
                                            const field = config.allFields[fieldKey];
                                            if (!field)
                                                return null;
                                            return (_jsx(FieldRenderer, { fieldKey: fieldKey, field: field, value: props[fieldKey], onChange: (v) => handleFieldChange(fieldKey, v) }, fieldKey));
                                        }) })] })) }, group.label));
                    }) }));
            },
        },
    };
}
//# sourceMappingURL=accordion-field.js.map