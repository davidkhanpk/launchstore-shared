import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
const CHEVRON_SVG = ({ size = 20, rotated }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", style: { transform: rotated ? 'rotate(90deg)' : 'none', transition: 'transform 200ms' }, children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
/**
 * MobileMenuItem — single menu row with optional accordion for
 * children OR mega-menu subcategories. Stateless re: open/closed
 * (each row manages its own state).
 */
export const MobileMenuItem = ({ item, theme, onLinkClick, depth = 0, }) => {
    const hasMega = !!(item.megaMenu?.enabled && item.megaMenu.subcategories.length > 0);
    const hasChildren = !!(item.children && item.children.length > 0);
    const [open, setOpen] = useState(false);
    const baseItemStyle = {
        padding: theme.itemPadding,
        color: resolveColor(theme.text),
        fontSize: '14px',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: `1px solid ${resolveColor(theme.border)}`,
        marginLeft: `${depth * 16}px`,
    };
    const subLinkStyle = {
        padding: '8px 16px 8px 32px',
        color: resolveColor(theme.subText),
        fontSize: '13px',
        textDecoration: 'none',
        display: 'block',
        borderBottom: `1px solid ${resolveColor(theme.border)}`,
    };
    const renderLink = () => (_jsx("a", { href: item.url || '#', target: item.openInNewTab ? '_blank' : undefined, rel: item.openInNewTab ? 'noopener noreferrer' : undefined, onClick: onLinkClick, style: { ...baseItemStyle, width: '100%' }, children: _jsx("span", { children: item.label }) }));
    if (!hasMega && !hasChildren)
        return renderLink();
    const children = hasMega ? item.megaMenu.subcategories.slice(0, item.megaMenu.subcategoryLimit || 12) : [];
    const subcategoryLinks = hasMega
        ? [
            _jsx("a", { href: item.url || '#', onClick: onLinkClick, style: { ...subLinkStyle, fontWeight: 600, color: resolveColor(theme.text) }, children: `View All ${item.label}` }, `${item.id}-all`),
            ...children.map((sub) => (_jsx("a", { href: sub.url, onClick: onLinkClick, style: subLinkStyle, children: sub.label }, sub.id))),
        ]
        : (item.children || []).map((child) => (_jsx("div", { children: _jsx(MobileMenuItem, { item: child, theme: theme, onLinkClick: onLinkClick, depth: depth + 1 }) }, child.id)));
    return (_jsxs("div", { children: [_jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), "aria-expanded": open, style: {
                    ...baseItemStyle,
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    borderBottom: `1px solid ${resolveColor(theme.border)}`,
                    cursor: 'pointer',
                    textAlign: 'left',
                }, children: [_jsx("span", { children: item.label }), _jsx("span", { style: { color: resolveColor(theme.subText), marginLeft: 8 }, children: _jsx(CHEVRON_SVG, { rotated: open }) })] }), _jsx("div", { style: {
                    maxHeight: open ? '1000px' : '0',
                    overflow: 'hidden',
                    transition: 'max-height 300ms ease',
                    backgroundColor: hasMega ? resolveColor(theme.accordionBackground) : 'transparent',
                }, children: subcategoryLinks })] }));
};
export default MobileMenuItem;
//# sourceMappingURL=MobileMenuItem.js.map