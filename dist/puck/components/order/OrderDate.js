import { jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const FONT = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const formatDate = (iso) => {
    const d = iso ? new Date(iso) : new Date();
    try {
        return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    }
    catch {
        return d.toDateString();
    }
};
export const orderDateFields = {
    label: { type: 'text', label: 'Label' },
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }] },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
};
export const OrderDate = {
    label: 'Order Date',
    fields: orderDateFields,
    defaultProps: { label: 'Placed on', fontSize: 'sm', color: '#6b7280', alignment: 'center' },
    render: ({ label, fontSize, color, alignment, date }) => (_jsxs("p", { className: `${FONT[fontSize] || 'text-sm'} ${ALIGN[alignment] || 'text-center'} m-0`, style: { color: resolveColor(color) || color }, children: [label ? `${label} ` : '', formatDate(date)] })),
};
export default OrderDate;
//# sourceMappingURL=OrderDate.js.map