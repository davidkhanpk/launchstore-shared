import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { CategoryMegaMenu } from '../CategoryMegaMenu';
const ChevronDown = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
const FALLBACK_THEME = {
    nav: {
        background: '#ffffff',
        border: '#e5e7eb',
        text: '#111827',
        textHover: '#3b82f6',
        fontSize: '14px',
        fontWeight: 500,
        fontFamily: 'Inter',
        padding: '12px 16px',
        gap: '24px',
    },
    megaMenu: {
        background: '#ffffff',
        linkText: '#6b7280',
    },
    effects: {
        duration: '200ms',
        easing: 'ease-in-out',
        megaMenuRadius: '8px',
        megaMenuShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
    },
};
const resolveTheme = (theme) => {
    const nav = theme?.navigation || {};
    const megaMenu = theme?.megaMenu || {};
    const effects = theme?.effects || {};
    return {
        background: resolveColor(nav.background || FALLBACK_THEME.nav.background) || FALLBACK_THEME.nav.background,
        border: resolveColor(nav.border || FALLBACK_THEME.nav.border) || FALLBACK_THEME.nav.border,
        text: resolveColor(nav.text || FALLBACK_THEME.nav.text) || FALLBACK_THEME.nav.text,
        textHover: resolveColor(nav.textHover || FALLBACK_THEME.nav.textHover) || FALLBACK_THEME.nav.textHover,
        fontSize: nav.fontSize || FALLBACK_THEME.nav.fontSize,
        fontWeight: nav.fontWeight ?? FALLBACK_THEME.nav.fontWeight,
        fontFamily: nav.fontFamily || FALLBACK_THEME.nav.fontFamily,
        padding: nav.padding || FALLBACK_THEME.nav.padding,
        gap: nav.gap || FALLBACK_THEME.nav.gap,
        megaMenuBackground: resolveColor(megaMenu.background || FALLBACK_THEME.megaMenu.background) || FALLBACK_THEME.megaMenu.background,
        megaMenuLinkText: resolveColor(megaMenu.linkText || FALLBACK_THEME.megaMenu.linkText) || FALLBACK_THEME.megaMenu.linkText,
        duration: effects.transition?.duration || FALLBACK_THEME.effects.duration,
        easing: effects.transition?.easing || FALLBACK_THEME.effects.easing,
        megaMenuRadius: effects.borderRadius?.megaMenu || FALLBACK_THEME.effects.megaMenuRadius,
        megaMenuShadow: effects.shadow?.megaMenu || FALLBACK_THEME.effects.megaMenuShadow,
    };
};
const filterTopLevel = (items) => items.filter((it) => it.isVisible && !it.parentId);
const getHoveredStyle = (e, hoverColor) => {
    e.currentTarget.style.color = hoverColor;
};
const getUnhoverStyle = (e, baseColor) => {
    e.currentTarget.style.color = baseColor;
};
/**
 * SimpleDropdown — used for non-mega-menu items that have children.
 * Renders a flat list of links.
 */
const SimpleDropdown = ({ item, theme, onLinkClick }) => {
    const children = (item.children || []).filter((c) => c.isVisible);
    const dropdownStyle = {
        backgroundColor: theme.megaMenuBackground,
        borderRadius: theme.megaMenuRadius,
        boxShadow: theme.megaMenuShadow,
        padding: '8px',
        minWidth: '200px',
    };
    const linkStyle = {
        color: theme.megaMenuLinkText,
        fontSize: '14px',
        padding: '8px 12px',
        display: 'block',
        textDecoration: 'none',
        borderRadius: '4px',
        transition: 'background-color 150ms ease',
    };
    return (_jsx("div", { style: dropdownStyle, children: children.map((child) => {
            const href = child.enrichedData?.resolvedUrl || child.url || '#';
            return (_jsx("a", { href: href, target: child.openInNewTab ? '_blank' : undefined, rel: child.openInNewTab ? 'noopener noreferrer' : undefined, style: linkStyle, onMouseEnter: (e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }, onMouseLeave: (e) => { e.currentTarget.style.backgroundColor = 'transparent'; }, onClick: onLinkClick, children: child.label }, child.id));
        }) }));
};
/**
 * MenuNavigationRenderer — live renderer for the storefront's
 * navigation menu. Uses CSS-state hover (no @headlessui/react
 * Popover dependency) — same behavior, less surface area.
 *
 * Renders items + mega-menu popovers positioned via a small
 * useState hover tracker. Consumer projects EnrichedMenuItem +
 * Theme into the SharedEnrichedMenuItem + SharedMenuNavTheme
 * shape.
 */
export const MenuNavigationRenderer = ({ items, theme, layout = 'horizontal', alignment = 'center', onLinkClick, }) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const tokens = resolveTheme(theme);
    const visibleItems = filterTopLevel(items || []);
    const navStyle = {
        backgroundColor: tokens.background,
        borderBottom: `1px solid ${tokens.border}`,
    };
    const linkStyle = {
        color: tokens.text,
        fontSize: tokens.fontSize,
        fontWeight: tokens.fontWeight,
        fontFamily: tokens.fontFamily,
        padding: tokens.padding,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        transition: `color ${tokens.duration} ${tokens.easing}`,
        cursor: 'pointer',
    };
    const renderMenuItem = (item) => {
        const hasMegaMenu = !!(item.megaMenu?.enabled && item.enrichedData?.category);
        const hasChildren = !!(item.children && item.children.length > 0);
        const resolvedUrl = item.enrichedData?.resolvedUrl || item.url || '#';
        // Simple link (no dropdown)
        if (!hasMegaMenu && !hasChildren) {
            return (_jsx("a", { href: resolvedUrl, target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, style: linkStyle, onMouseEnter: (e) => getHoveredStyle(e, tokens.textHover), onMouseLeave: (e) => getUnhoverStyle(e, tokens.text), onClick: onLinkClick, children: item.label }, item.id));
        }
        return (_jsxs("div", { className: "relative", onMouseEnter: () => setHoveredItemId(item.id), onMouseLeave: () => setHoveredItemId(null), children: [_jsxs("div", { style: linkStyle, onMouseEnter: (e) => getHoveredStyle(e, tokens.textHover), onMouseLeave: (e) => getUnhoverStyle(e, tokens.text), children: [item.label, _jsx(ChevronDown, { size: 16 })] }), hoveredItemId === item.id && (_jsx("div", { className: "absolute z-50 mt-2", style: {
                        left: alignment === 'center' ? '50%' : alignment === 'right' ? 'auto' : '0',
                        right: alignment === 'right' ? '0' : 'auto',
                        transform: alignment === 'center' ? 'translateX(-50%)' : 'none',
                    }, children: hasMegaMenu ? (_jsx(CategoryMegaMenu, { item: item, megaMenu: item.megaMenu, theme: {
                            background: tokens.megaMenuBackground,
                            linkText: tokens.megaMenuLinkText,
                            borderRadius: tokens.megaMenuRadius,
                            boxShadow: tokens.megaMenuShadow,
                        }, onLinkClick: () => {
                            setHoveredItemId(null);
                            onLinkClick?.();
                        } })) : (_jsx(SimpleDropdown, { item: item, theme: tokens, onLinkClick: onLinkClick })) }))] }, item.id));
    };
    const alignmentClasses = {
        left: 'justify-start',
        center: 'justify-center',
        right: 'justify-end',
    };
    return (_jsx("nav", { style: navStyle, children: _jsx("div", { className: `flex ${layout === 'horizontal' ? 'flex-row' : 'flex-col'} ${alignmentClasses[alignment]}`, style: { gap: tokens.gap, maxWidth: '1400px', margin: '0 auto', padding: '0 24px' }, children: visibleItems.map(renderMenuItem) }) }));
};
export default MenuNavigationRenderer;
//# sourceMappingURL=MenuNavigationRenderer.js.map