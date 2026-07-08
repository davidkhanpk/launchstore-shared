import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const formDividerFields = {
    spacingTop: { type: 'select', label: 'Space Above', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    spacingBottom: { type: 'select', label: 'Space Below', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    color: { type: 'text', label: 'Line Color (token or hex)' },
};
const spacingMap = { none: '0', sm: '8px', md: '16px', lg: '24px' };
export const FormDivider = {
    label: 'Form Divider',
    fields: formDividerFields,
    defaultProps: { spacingTop: 'sm', spacingBottom: 'sm', color: 'ui.border' },
    render: ({ spacingTop, spacingBottom, color }) => (_jsx("hr", { style: { marginTop: spacingMap[spacingTop], marginBottom: spacingMap[spacingBottom], borderColor: resolveColor(color), borderTopWidth: '1px' } })),
};
export default FormDivider;
//# sourceMappingURL=FormDivider.js.map