import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    separator: { type: 'text', label: 'Separator' },
    showHome: { type: 'radio', label: 'Show Home Link', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    homeText: { type: 'text', label: 'Home Link Text' },
    activeColor: { type: 'text', label: 'Active/Current Color' },
    hoverColor: { type: 'text', label: 'Hover Color' },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const CategoryBreadcrumbs = {
    label: 'Category Breadcrumbs',
    fields: allFields,
    defaultProps: {
        separator: '/',
        showHome: true,
        homeText: 'Home',
        activeColor: '#000000',
        hoverColor: '#333333',
        className: '',
        ...defaultTypographyProps,
        fontSize: 'sm',
        textColor: '#666666',
        ...defaultLayoutProps,
        marginBottom: 'md',
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { category, countryCode = 'us', separator, showHome, homeText, activeColor, hoverColor, className, fontSize, textColor, marginTop, marginBottom, paddingX, paddingY, backgroundColor, } = rawProps;
        if (!category)
            return _jsx(_Fragment, {});
        const navClassName = [
            className,
            buildTypographyClasses(rawProps),
            buildLayoutClasses(rawProps),
        ].filter(Boolean).join(' ');
        const navStyle = {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: resolveColor(textColor) || '#666666',
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        const linkStyle = {
            transition: 'opacity 0.2s ease',
            cursor: 'pointer',
        };
        const activeColorResolved = resolveColor(activeColor) || '#000000';
        const hoverColorResolved = resolveColor(hoverColor) || '#333333';
        const hoverCss = `.crumb-link:hover { color: ${hoverColorResolved}; opacity: 0.8; }`;
        const breadcrumbs = [];
        let cur = category;
        while (cur.parent_category) {
            breadcrumbs.unshift(cur.parent_category);
            cur = cur.parent_category;
        }
        return (_jsxs(_Fragment, { children: [_jsxs("nav", { "aria-label": "Breadcrumb", className: navClassName, style: navStyle, children: [showHome && (_jsxs(_Fragment, { children: [_jsx("a", { href: "/", className: "crumb-link", style: linkStyle, children: homeText }), _jsx("span", { children: separator })] })), breadcrumbs.map((p) => (_jsxs("span", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("a", { href: `/${countryCode}/categories/${p.handle}`, className: "crumb-link", style: linkStyle, children: p.name }), _jsx("span", { children: separator })] }, p.id))), _jsx("span", { style: { color: activeColorResolved }, "aria-current": "page", children: category.name })] }), _jsx("style", { dangerouslySetInnerHTML: { __html: hoverCss } })] }));
    },
};
export default CategoryBreadcrumbs;
//# sourceMappingURL=CategoryBreadcrumbs.js.map