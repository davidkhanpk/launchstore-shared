import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
const SIZE = { md: 48, lg: 64, xl: 80, '2xl': 96, '3xl': 120 };
export const successIconFields = {
    size: {
        type: 'select', label: 'Size',
        options: [{ label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: '2XL', value: '2xl' }, { label: '3XL', value: '3xl' }],
    },
    color: { type: 'text', label: 'Color (hex or theme token)' },
    animate: { type: 'radio', label: 'Animate', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    style: { type: 'select', label: 'Style', options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }] },
};
export const SuccessIcon = {
    label: 'Success Icon',
    fields: successIconFields,
    defaultProps: {
        size: 'xl',
        color: '#10b981',
        animate: false,
        style: 'standard',
    },
    render: ({ size, color, animate, style }) => {
        const px = SIZE[size] || 80;
        const c = resolveColor(color) || color;
        const ring = style === 'luxury' ? 'border-2' : '';
        return (_jsx("div", { className: "flex justify-center w-full py-4", children: _jsx("div", { className: `rounded-full flex items-center justify-center ${ring} ${animate ? 'animate-pulse' : ''}`, style: { width: px, height: px, backgroundColor: `${c}1a`, borderColor: c }, children: _jsx("svg", { width: px * 0.55, height: px * 0.55, viewBox: "0 0 24 24", fill: "none", stroke: c, strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }) }) }));
    },
};
export default SuccessIcon;
//# sourceMappingURL=SuccessIcon.js.map