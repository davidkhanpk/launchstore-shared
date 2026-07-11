import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { headerFields } from './header.fields';
// Inline SVG icons (no external dep). Mirrors lucide-react visual.
const SearchIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "11", cy: "11", r: "8" }), _jsx("path", { d: "m21 21-4.3-4.3" })] }));
const HeartIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" }) }));
const UserIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" }), _jsx("circle", { cx: "12", cy: "7", r: "4" })] }));
const CartIcon = () => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" })] }));
const MenuIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M3 12h18M3 6h18M3 18h18" }) }));
const XIcon = () => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M18 6 6 18M6 6l12 12" }) }));
export const Header = {
    label: 'Header',
    fields: headerFields,
    defaultProps: {
        layout: 'left-center-right',
        backgroundColor: '#ffffff',
        textColor: '#000000',
        sticky: true,
        shadow: true,
        transparent: false,
        logoPosition: 'left',
        logoMaxWidth: '150px',
        logoUrl: '/logo.svg',
        logoAlt: 'Store Logo',
        menuPosition: 'center',
        menuStyle: 'horizontal',
        menuHoverColor: '#3b82f6',
        actions: ['search', 'account', 'cart'],
        actionsPosition: 'right',
        showCartBadge: true,
        showLabels: false,
        cartBadgeCount: 0,
        menuLoading: false,
        menuError: false,
        mobileBreakpoint: 'md',
        mobileMenuStyle: 'drawer',
    },
    render: ({ layout, backgroundColor, textColor, sticky, shadow, transparent, logoPosition, logoMaxWidth, logoUrl, logoAlt, menuItems, menuPosition, menuStyle, menuTextColor, menuHoverColor, actions, actionsPosition, showCartBadge, showLabels, cartBadgeCount, menuLoading, menuError, topBar, mobileBreakpoint, mobileMenuStyle, }) => {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
        const [searchOpen, setSearchOpen] = useState(false);
        const breakpointClass = mobileBreakpoint === 'sm' ? 'sm:hidden' : mobileBreakpoint === 'lg' ? 'lg:hidden' : 'md:hidden';
        const showBreakpointClass = mobileBreakpoint === 'sm' ? 'hidden sm:flex' : mobileBreakpoint === 'lg' ? 'hidden lg:flex' : 'hidden md:flex';
        const visibleItems = (menuItems || []).filter((it) => it.isVisible !== false);
        const renderLogo = () => (_jsx("a", { href: "/", className: "flex items-center", children: _jsx("img", { src: logoUrl, alt: logoAlt, style: { maxWidth: logoMaxWidth, height: 'auto' }, className: "object-contain" }) }));
        const renderNavigation = () => {
            if (menuLoading) {
                return (_jsx("div", { className: `${showBreakpointClass} items-center gap-6`, children: _jsx("div", { className: "animate-pulse flex gap-6", children: [1, 2, 3, 4].map((i) => (_jsx("div", { className: "h-4 w-16 bg-gray-200 rounded" }, i))) }) }));
            }
            if (menuError) {
                return (_jsx("div", { className: `${showBreakpointClass} items-center gap-2`, children: _jsx("span", { className: "text-sm text-red-500", children: "Menu unavailable" }) }));
            }
            if (!visibleItems.length)
                return null;
            return (_jsx("nav", { className: `${showBreakpointClass} items-center gap-6`, children: visibleItems.map((item) => (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, className: "text-sm font-medium hover:opacity-75 transition-opacity", style: { color: resolveColor(menuTextColor) || resolveColor(textColor) }, children: item.label }, item.id))) }));
        };
        const actionIcons = {
            search: _jsx(SearchIcon, {}),
            wishlist: _jsx(HeartIcon, {}),
            account: _jsx(UserIcon, {}),
            cart: showCartBadge && cartBadgeCount > 0 ? (_jsxs("div", { className: "relative", children: [_jsx(CartIcon, {}), _jsx("span", { className: "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center", children: cartBadgeCount })] })) : _jsx(CartIcon, {}),
        };
        const renderActions = () => (_jsx("div", { className: `${showBreakpointClass} items-center gap-4`, children: (actions || []).map((action) => (_jsxs("button", { onClick: () => action === 'search' && setSearchOpen(!searchOpen), className: "p-2 hover:opacity-75 transition-opacity", style: { color: resolveColor(textColor) }, "aria-label": action, children: [actionIcons[action], showLabels && _jsx("span", { className: "ml-1 text-sm capitalize", children: action })] }, action))) }));
        const renderMobileMenu = () => {
            if (!mobileMenuOpen)
                return null;
            const content = (_jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "flex justify-between items-center mb-6", children: [_jsx("span", { className: "text-lg font-semibold", style: { color: resolveColor(textColor) }, children: "Menu" }), _jsx("button", { onClick: () => setMobileMenuOpen(false), className: "p-2", style: { color: resolveColor(textColor) }, children: _jsx(XIcon, {}) })] }), _jsx("nav", { className: "flex flex-col gap-4", children: visibleItems.map((item) => (_jsx("a", { href: item.url || '#', className: "text-base font-medium py-2", style: { color: resolveColor(textColor) }, onClick: () => setMobileMenuOpen(false), children: item.label }, item.id))) })] }));
            return mobileMenuStyle === 'fullscreen' ? (_jsx("div", { className: "fixed inset-0 z-50", style: { backgroundColor: resolveColor(backgroundColor) }, children: content })) : (_jsx("div", { className: "fixed inset-y-0 left-0 w-80 z-50 shadow-xl", style: { backgroundColor: resolveColor(backgroundColor) }, children: content }));
        };
        const headerStyle = {
            backgroundColor: transparent ? 'transparent' : resolveColor(backgroundColor),
            color: resolveColor(textColor),
            boxShadow: shadow && !transparent ? '0 1px 3px rgba(0,0,0,0.1)' : 'none',
        };
        const layoutClass = layout === 'centered' ? 'flex flex-col items-center justify-center gap-4'
            : layout === 'stacked' ? 'flex flex-col gap-4'
                : 'flex items-center justify-between';
        return (_jsxs(_Fragment, { children: [topBar?.enabled && (_jsx("div", { className: "w-full py-2 px-4 text-sm text-center", style: { backgroundColor: resolveColor(topBar.backgroundColor) || '#000000', color: resolveColor(topBar.textColor) || '#ffffff' }, children: _jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [_jsx("span", { children: topBar.leftText }), _jsx("span", { className: "font-medium", children: topBar.centerText }), _jsx("span", { children: topBar.rightText })] }) })), _jsxs("header", { className: `w-full z-40 ${sticky ? 'sticky top-0' : ''}`, style: headerStyle, children: [_jsx("div", { className: "max-w-7xl mx-auto px-4 py-4", children: _jsxs("div", { className: layoutClass, children: [_jsx("button", { className: `${breakpointClass} p-2`, onClick: () => setMobileMenuOpen(true), style: { color: resolveColor(textColor) }, children: _jsx(MenuIcon, {}) }), layout === 'left-center-right' && logoPosition === 'left' && renderLogo(), layout === 'centered' && renderLogo(), renderNavigation(), layout === 'left-center-right' && logoPosition === 'center' && renderLogo(), renderActions()] }) }), searchOpen && (_jsx("div", { className: "border-t px-4 py-4", style: { borderColor: resolveColor(textColor) ? `${resolveColor(textColor)}20` : '#00000020' }, children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("input", { type: "search", placeholder: "Search products...", className: "w-full px-4 py-2 border rounded-lg", style: { borderColor: resolveColor(textColor) ? `${resolveColor(textColor)}40` : '#00000040' }, autoFocus: true }) }) }))] }), mobileMenuOpen && (_jsxs(_Fragment, { children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-40", onClick: () => setMobileMenuOpen(false) }), renderMobileMenu()] }))] }));
    },
};
export default Header;
//# sourceMappingURL=Header.js.map