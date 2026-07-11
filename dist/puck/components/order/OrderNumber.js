import { jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const FONT = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl' };
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
export const orderNumberFields = {
    label: { type: 'text', label: 'Label' },
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }] },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    fontWeight: { type: 'select', label: 'Font Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
};
export const OrderNumber = {
    label: 'Order Number',
    fields: orderNumberFields,
    defaultProps: { label: 'Order', fontSize: 'lg', color: '#111827', alignment: 'center', fontWeight: 'semibold' },
    render: ({ label, fontSize, color, alignment, fontWeight, orderNumber }) => (_jsxs("p", { className: `${FONT[fontSize] || 'text-lg'} ${ALIGN[alignment] || 'text-center'} ${WEIGHT[fontWeight] || 'font-semibold'} m-0`, style: { color: resolveColor(color) || color }, children: [label ? `${label} ` : '', orderNumber || '#00000'] })),
};
export default OrderNumber;
//# sourceMappingURL=OrderNumber.js.map