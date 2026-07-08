import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { productBreadcrumbsFields } from './productbreadcrumbs.fields';
const HomeSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }), _jsx("polyline", { points: "9 22 9 12 15 12 15 22" })] }));
const ChevronSvg = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "text-gray-400", children: _jsx("polyline", { points: "9 18 15 12 9 6" }) }));
const Separator = ({ kind }) => {
    if (kind === 'arrow')
        return _jsx(ChevronSvg, {});
    if (kind === 'slash')
        return _jsx("span", { className: "text-gray-400", children: "/" });
    return _jsx("span", { className: "text-gray-400", children: "\\u2022" });
};
const TRANSFORM = {
    none: '', uppercase: 'uppercase', capitalize: 'capitalize',
};
export const ProductBreadcrumbs = {
    label: 'Product Breadcrumbs',
    fields: productBreadcrumbsFields,
    defaultProps: { showHomeIcon: true, separator: 'arrow', textTransform: 'none' },
    render: (rawProps) => {
        const { showHomeIcon, separator, textTransform, product } = rawProps;
        if (!product)
            return _jsx(_Fragment, {});
        const crumbs = [
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/store' },
        ];
        if (product.collection) {
            crumbs.push({
                label: product.collection.title,
                href: `/collections/${product.collection.handle}`,
            });
        }
        if (product.categories && product.categories.length > 0) {
            product.categories.forEach((c) => {
                crumbs.push({ label: c.name, href: `/categories/${c.handle}` });
            });
        }
        crumbs.push({ label: product.title, href: '#' });
        const sepKind = separator || 'arrow';
        const transformCls = TRANSFORM[textTransform || 'none'] || '';
        return (_jsx("nav", { className: "product-breadcrumbs mb-4", "aria-label": "Breadcrumb", children: _jsx("ol", { className: "flex items-center gap-2 text-sm flex-wrap", children: crumbs.map((crumb, index) => {
                    const isFirst = index === 0;
                    const isLast = index === crumbs.length - 1;
                    return (_jsxs("li", { className: "flex items-center gap-2", children: [!isFirst && _jsx("span", { className: "flex items-center", children: _jsx(Separator, { kind: sepKind }) }), isLast ? (_jsx("span", { className: `text-gray-900 font-medium ${transformCls}`, children: crumb.label })) : (_jsxs("a", { href: crumb.href, className: `text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1 ${transformCls}`, children: [isFirst && showHomeIcon && _jsx(HomeSvg, {}), crumb.label] }))] }, index));
                }) }) }));
    },
};
export default ProductBreadcrumbs;
//# sourceMappingURL=ProductBreadcrumbs.js.map