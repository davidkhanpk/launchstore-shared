import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { categoryBreadcrumbsFields } from './categorybreadcrumbs.fields';
export const CategoryBreadcrumbs = {
    label: 'Category Breadcrumbs',
    fields: categoryBreadcrumbsFields,
    defaultProps: {
        separator: '/',
        showHome: true,
        homeText: 'Home',
        fontSize: '0.875rem',
        textColor: '#666666',
        activeColor: '#000000',
        hoverColor: '#333333',
        marginBottom: '1.5rem',
        className: '',
    },
    render: (rawProps) => {
        const { category, countryCode = 'us', separator, showHome, homeText, fontSize, textColor, activeColor, hoverColor, marginBottom, className } = rawProps;
        if (!category)
            return _jsx(_Fragment, {});
        const baseStyle = { fontSize, color: textColor, marginBottom };
        const breadcrumbs = [];
        let cur = category;
        while (cur.parent_category) {
            breadcrumbs.unshift(cur.parent_category);
            cur = cur.parent_category;
        }
        return (_jsxs("nav", { "aria-label": "Breadcrumb", className: `flex items-center gap-2 ${className || ''}`, style: baseStyle, children: [showHome && (_jsxs(_Fragment, { children: [_jsx("a", { href: "/", className: "hover:opacity-80 transition-opacity", children: homeText }), _jsx("span", { children: separator })] })), breadcrumbs.map((p) => (_jsxs("span", { className: "flex items-center gap-2", children: [_jsx("a", { href: `/${countryCode}/categories/${p.handle}`, className: "hover:opacity-80 transition-opacity", children: p.name }), _jsx("span", { children: separator })] }, p.id))), _jsx("span", { style: { color: activeColor }, "aria-current": "page", children: category.name })] }));
    },
};
export default CategoryBreadcrumbs;
//# sourceMappingURL=CategoryBreadcrumbs.js.map