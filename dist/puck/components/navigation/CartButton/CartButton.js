import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { cartButtonFields } from './cartbutton.fields';
import { resolveColor } from '../../../../theme/resolveColor';
const CartSvg = ({ size }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
const SIZE_MAP = { sm: 20, md: 24, lg: 28 };
const BADGE_POS = {
    'top-right': '-top-2 -right-2',
    'top-left': '-top-2 -left-2',
    'bottom-right': '-bottom-2 -right-2',
};
const STYLE_CLASS = {
    minimal: 'p-2 rounded-full hover:bg-gray-100',
    outlined: 'p-2 border-2 rounded-full hover:bg-gray-100',
    filled: 'p-2 rounded-full',
};
export const CartButton = {
    label: 'Cart Button',
    fields: cartButtonFields,
    defaultProps: {
        showLabel: false, label: 'Cart', showBadge: true,
        badgePosition: 'top-right', iconSize: 'md',
        iconColor: '#000000', hoverColor: '#3b82f6',
        badgeBackgroundColor: '#ef4444', badgeTextColor: '#ffffff',
        style: 'minimal',
    },
    render: (rawProps) => {
        const { showLabel, label, showBadge, badgePosition, iconSize, iconColor, hoverColor, badgeBackgroundColor, badgeTextColor, style, cartCount, onOpenCart, } = rawProps;
        const [isHovered, setIsHovered] = useState(false);
        const sz = SIZE_MAP[iconSize || 'md'];
        const cls = STYLE_CLASS[style || 'minimal'];
        const badgeCls = BADGE_POS[badgePosition || 'top-right'];
        const resolvedIconColor = resolveColor(iconColor);
        const resolvedHoverColor = resolveColor(hoverColor);
        const safeCount = cartCount ?? 0;
        const displayCount = safeCount > 99 ? '99+' : safeCount;
        return (_jsxs("button", { type: "button", onClick: onOpenCart, className: `relative flex items-center gap-2 transition-all ${cls}`, style: {
                color: isHovered ? resolvedHoverColor : resolvedIconColor,
                backgroundColor: style === 'filled' ? (isHovered ? resolvedHoverColor : resolvedIconColor) : 'transparent',
                borderColor: style === 'outlined' ? resolvedIconColor : 'transparent',
            }, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), "aria-label": `Shopping cart with ${safeCount} items`, children: [_jsxs("div", { className: "relative", children: [_jsx("span", { style: { color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }, children: _jsx(CartSvg, { size: sz }) }), showBadge && safeCount > 0 && (_jsx("span", { className: `absolute ${badgeCls} rounded-full min-w-[20px] h-5 flex items-center justify-center text-xs font-bold px-1.5`, style: { backgroundColor: resolveColor(badgeBackgroundColor), color: resolveColor(badgeTextColor) }, children: displayCount }))] }), showLabel && (_jsx("span", { className: "font-medium", style: { color: style === 'filled' ? '#ffffff' : (isHovered ? resolvedHoverColor : resolvedIconColor) }, children: label }))] }));
    },
};
export default CartButton;
//# sourceMappingURL=CartButton.js.map