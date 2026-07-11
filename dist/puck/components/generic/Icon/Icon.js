import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { iconFields } from './icon.fields';
import { ICONS } from './icons';
const SIZE = {
    xs: 'w-4 h-4', sm: 'w-5 h-5', md: 'w-6 h-6', lg: 'w-8 h-8', xl: 'w-10 h-10', '2xl': 'w-12 h-12',
};
const ALIGN = {
    left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
const MT = { none: '', sm: 'mt-2', md: 'mt-4', lg: 'mt-6', xl: 'mt-8' };
const MB = { none: '', sm: 'mb-2', md: 'mb-4', lg: 'mb-6', xl: 'mb-8' };
const SIZE_TO_PX = { xs: 16, sm: 20, md: 24, lg: 32, xl: 40, '2xl': 48 };
export const Icon = {
    label: 'Icon',
    fields: iconFields,
    defaultProps: {
        id: 'icon-1', iconName: 'HeartIcon', size: 'md',
        strokeWidth: '2', alignment: 'center', marginTop: 'none', marginBottom: 'md',
    },
    render: ({ id, iconName, size, color, strokeWidth, alignment, marginTop, marginBottom }) => {
        const IconComponent = ICONS[iconName];
        if (!IconComponent) {
            return _jsxs("div", { className: "text-red-500 text-sm", children: ["Icon \"", iconName, "\" not found"] });
        }
        const className = [
            SIZE[size] || 'w-6 h-6',
            ALIGN[alignment] || 'mx-auto',
            MT[marginTop || 'none'],
            MB[marginBottom || 'md'],
        ].filter(Boolean).join(' ');
        const style = {
            strokeWidth: strokeWidth ? parseFloat(strokeWidth) : 2,
        };
        if (color)
            style.color = resolveColor(color);
        const sizePx = SIZE_TO_PX[size] || 24;
        return (_jsx("span", { id: id, className: className, style: { display: 'inline-block', ...style }, children: _jsx(IconComponent, { size: sizePx, strokeWidth: parseFloat(strokeWidth) }) }));
    },
};
export default Icon;
//# sourceMappingURL=Icon.js.map