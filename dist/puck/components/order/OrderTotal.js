import { jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
const FONT = { base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT = { medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
const defaultFormat = (amount) => `$${(Number(amount) || 0).toFixed(2)}`;
export const orderTotalFields = {
    label: { type: 'text', label: 'Label' },
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: '2XL', value: '2xl' }] },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    alignment: { type: 'select', label: 'Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    fontWeight: { type: 'select', label: 'Font Weight', options: [{ label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
};
export const OrderTotal = {
    label: 'Order Total',
    fields: orderTotalFields,
    defaultProps: { label: 'Total', fontSize: 'xl', color: '#111827', alignment: 'center', fontWeight: 'bold' },
    render: ({ label, fontSize, color, alignment, fontWeight, total, formatPrice }) => {
        const fmt = formatPrice || defaultFormat;
        return (_jsxs("p", { className: `${FONT[fontSize] || 'text-xl'} ${ALIGN[alignment] || 'text-center'} ${WEIGHT[fontWeight] || 'font-bold'} m-0`, style: { color: resolveColor(color) || color }, children: [label ? `${label}: ` : '', fmt(Number(total) || 0)] }));
    },
};
export default OrderTotal;
//# sourceMappingURL=OrderTotal.js.map