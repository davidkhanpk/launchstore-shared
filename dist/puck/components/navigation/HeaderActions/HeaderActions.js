import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
const ICON_SIZE = { sm: 18, md: 22, lg: 26 };
const GAP = { sm: 'gap-2', md: 'gap-4', lg: 'gap-6' };
const ALIGN = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
const SearchSvg = ({ size = 22 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })] }));
const UserSvg = ({ size = 22 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" })] }));
const HeartSvg = ({ size = 22 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1L12 21l7.7-7.6 1.1-1a5.5 5.5 0 0 0 0-7.8z" }) }));
const CartSvg = ({ size = 22 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
export const headerActionsFields = {
    showSearch: { type: 'radio', label: 'Show Search', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showAccount: { type: 'radio', label: 'Show Account', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showWishlist: { type: 'radio', label: 'Show Wishlist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showCart: { type: 'radio', label: 'Show Cart', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    iconSize: {
        type: 'select', label: 'Icon Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    gap: {
        type: 'select', label: 'Spacing',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    color: { type: 'text', label: 'Icon Color (hex or theme token)' },
    cartCount: { type: 'number', label: 'Cart Badge Count (preview)' },
};
export const HeaderActions = {
    label: 'Header Actions',
    fields: headerActionsFields,
    defaultProps: {
        showSearch: true,
        showAccount: true,
        showWishlist: false,
        showCart: true,
        iconSize: 'md',
        gap: 'md',
        alignment: 'right',
        color: '#111827',
        cartCount: 0,
    },
    render: ({ showSearch, showAccount, showWishlist, showCart, iconSize, gap, alignment, color, cartCount }) => {
        const size = ICON_SIZE[iconSize] || 22;
        const fg = resolveColor(color) || color;
        return (_jsxs("div", { className: `flex items-center ${GAP[gap] || 'gap-4'} ${ALIGN[alignment] || 'justify-end'}`, style: { color: fg }, children: [showSearch && _jsx("button", { type: "button", "aria-label": "Search", className: "bg-transparent border-0 cursor-pointer p-0", style: { color: fg }, children: _jsx(SearchSvg, { size: size }) }), showAccount && _jsx("button", { type: "button", "aria-label": "Account", className: "bg-transparent border-0 cursor-pointer p-0", style: { color: fg }, children: _jsx(UserSvg, { size: size }) }), showWishlist && _jsx("button", { type: "button", "aria-label": "Wishlist", className: "bg-transparent border-0 cursor-pointer p-0", style: { color: fg }, children: _jsx(HeartSvg, { size: size }) }), showCart && (_jsxs("button", { type: "button", "aria-label": "Cart", className: "bg-transparent border-0 cursor-pointer p-0 relative", style: { color: fg }, children: [_jsx(CartSvg, { size: size }), cartCount > 0 && (_jsx("span", { className: "absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-[10px] leading-none min-w-[16px] h-4 flex items-center justify-center px-1", children: cartCount }))] }))] }));
    },
};
export default HeaderActions;
//# sourceMappingURL=HeaderActions.js.map