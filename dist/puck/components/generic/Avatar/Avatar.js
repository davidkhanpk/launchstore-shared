import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { avatarFields } from './avatar.fields';
const SIZE = {
    sm: 'w-8 h-8 text-xs', md: 'w-12 h-12 text-sm', lg: 'w-16 h-16 text-base', xl: 'w-24 h-24 text-xl',
};
const NAME_SIZE = { sm: 'text-xs', md: 'text-sm', lg: 'text-base', xl: 'text-lg' };
const SHAPE = { circle: 'rounded-full', square: 'rounded-md' };
export const Avatar = {
    label: 'Avatar',
    fields: avatarFields,
    defaultProps: {
        id: 'avatar-1', src: '', name: 'John Doe', size: 'md', shape: 'circle',
        backgroundColor: '#6366f1', textColor: '#ffffff', showName: false, namePosition: 'right',
    },
    render: ({ id, src, name, size, shape, backgroundColor, textColor, showName, namePosition }) => {
        const initials = name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 2);
        const avatarEl = (_jsx("div", { className: `${SIZE[size] || 'w-12 h-12 text-sm'} ${SHAPE[shape] || 'rounded-full'} flex items-center justify-center overflow-hidden flex-shrink-0`, style: { backgroundColor: src ? 'transparent' : resolveColor(backgroundColor) }, children: src ? (_jsx("img", { src: src, alt: name, className: "w-full h-full object-cover" })) : (_jsx("span", { style: { color: resolveColor(textColor) }, className: "font-semibold leading-none select-none", children: initials })) }));
        if (!showName)
            return _jsx("div", { id: id, children: avatarEl });
        return (_jsxs("div", { id: id, className: `flex ${namePosition === 'bottom' ? 'flex-col items-center gap-1' : 'flex-row items-center gap-3'}`, children: [avatarEl, _jsx("span", { className: `${NAME_SIZE[size] || 'text-sm'} font-medium text-gray-900 dark:text-gray-100`, children: name })] }));
    },
};
export default Avatar;
//# sourceMappingURL=Avatar.js.map