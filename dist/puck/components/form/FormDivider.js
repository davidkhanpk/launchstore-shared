import { jsx as _jsx } from "react/jsx-runtime";
import { BORDER_WIDTH_OPTIONS, SPACING_OPTIONS, resolveColor, } from '../../design-system';
const formDividerFields = {
    marginTop: { type: 'select', label: 'Margin Top', options: SPACING_OPTIONS },
    marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
    borderWidth: { type: 'select', label: 'Line Width', options: BORDER_WIDTH_OPTIONS },
    borderColor: { type: 'text', label: 'Line Color (token or hex)' },
};
const BORDER_WIDTH_CLASS = {
    '0': 'border-0',
    '': 'border-t',
    '2': 'border-t-2',
    '4': 'border-t-4',
};
/** FormDivider — display-only horizontal rule inside a form. */
export const FormDivider = {
    label: 'Form Divider',
    fields: formDividerFields,
    defaultProps: { marginTop: '2', marginBottom: '2', borderWidth: '', borderColor: '#e5e7eb' },
    render: ({ marginTop, marginBottom, borderWidth, borderColor }) => (_jsx("hr", { className: `mt-${marginTop} mb-${marginBottom} w-full ${BORDER_WIDTH_CLASS[borderWidth] ?? 'border-t'}`, style: { borderColor: resolveColor(borderColor) } })),
};
export default FormDivider;
//# sourceMappingURL=FormDivider.js.map