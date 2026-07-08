import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const formHeadingFields = {
    text: { type: 'textarea', label: 'Text' },
    size: { type: 'select', label: 'Size', options: [{ label: 'Extra Small', value: 'xs' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    color: { type: 'text', label: 'Text Color (token or hex)' },
    marginBottom: { type: 'select', label: 'Bottom Spacing', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
};
const sizeMap = { xs: 'text-xs', sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl' };
const marginMap = { none: '', sm: 'mb-2', md: 'mb-4', lg: 'mb-6' };
export const FormHeading = {
    label: 'Form Heading / Instruction',
    fields: formHeadingFields,
    defaultProps: { text: 'Section heading or instruction text', size: 'md', color: 'text.primary', marginBottom: 'sm' },
    render: ({ text, size, color, marginBottom }) => (_jsx("p", { className: `${sizeMap[size]} ${marginMap[marginBottom]}`, style: { color: resolveColor(color) }, children: text })),
};
export default FormHeading;
//# sourceMappingURL=FormHeading.js.map