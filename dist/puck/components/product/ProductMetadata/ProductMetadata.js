import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { productMetadataFields } from './productmetadata.fields';
const PackageSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "text-gray-500", children: [_jsx("line", { x1: "16.5", y1: "9.4", x2: "7.5", y2: "4.21" }), _jsx("path", { d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" }), _jsx("polyline", { points: "3.27 6.96 12 12.01 20.73 6.96" }), _jsx("line", { x1: "12", y1: "22.08", x2: "12", y2: "12" })] }));
const RulerSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "text-gray-500", children: [_jsx("path", { d: "M2 12h20" }), _jsx("path", { d: "M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" }), _jsx("path", { d: "M2 12L8 6l4 4 4-4 6 6" })] }));
const WeightSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "text-gray-500", children: [_jsx("path", { d: "M6.5 6.5h11v11h-11z" }), _jsx("circle", { cx: "12", cy: "12", r: "3" })] }));
const GlobeSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", className: "text-gray-500", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("line", { x1: "2", y1: "12", x2: "22", y2: "12" }), _jsx("path", { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" })] }));
export const ProductMetadata = {
    label: 'Product Metadata',
    fields: productMetadataFields,
    defaultProps: {
        showTitle: true, titleText: 'Product Details',
        showSku: true, showWeight: true, showDimensions: true, showOrigin: true,
        layout: 'list',
    },
    render: (rawProps) => {
        const { showTitle, titleText, showSku, showWeight, showDimensions, showOrigin, layout = 'list', product } = rawProps;
        if (!product)
            return _jsx(_Fragment, {});
        const firstVariant = product.variants?.[0];
        const sku = firstVariant?.sku || 'N/A';
        const weight = product.weight ?? firstVariant?.weight ?? null;
        const length = product.length ?? firstVariant?.length ?? null;
        const width = product.width ?? firstVariant?.width ?? null;
        const height = product.height ?? firstVariant?.height ?? null;
        const originCountry = product.origin_country
            ?? product.metadata?.origin_country
            ?? null;
        const items = [];
        if (showSku && sku)
            items.push({ icon: _jsx(PackageSvg, {}), label: 'SKU', value: sku, key: 'sku' });
        if (showWeight && weight)
            items.push({ icon: _jsx(WeightSvg, {}), label: 'Weight', value: `${weight} g`, key: 'weight' });
        if (showDimensions && (length || width || height)) {
            const dimensions = [length, width, height].filter((d) => d != null).map((d) => `${d} cm`).join(' × ');
            items.push({ icon: _jsx(RulerSvg, {}), label: 'Dimensions', value: dimensions, key: 'dimensions' });
        }
        if (showOrigin && originCountry)
            items.push({ icon: _jsx(GlobeSvg, {}), label: 'Origin', value: originCountry, key: 'origin' });
        if (items.length === 0)
            return _jsx(_Fragment, {});
        if (layout === 'list') {
            return (_jsxs("div", { className: "product-metadata", children: [showTitle && _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: titleText }), _jsx("div", { className: "space-y-3", children: items.map((item) => (_jsxs("div", { className: "flex items-start gap-3", children: [item.icon, _jsxs("div", { className: "flex-1", children: [_jsx("dt", { className: "text-sm font-medium text-gray-500", children: item.label }), _jsx("dd", { className: "text-sm text-gray-900 mt-1", children: item.value })] })] }, item.key))) })] }));
        }
        if (layout === 'grid') {
            return (_jsxs("div", { className: "product-metadata", children: [showTitle && _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: titleText }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4", children: items.map((item) => (_jsxs("div", { className: "text-center p-4 border border-gray-200 rounded-lg", children: [_jsx("div", { className: "flex justify-center mb-2", children: item.icon }), _jsx("dt", { className: "text-xs font-medium text-gray-500 mb-1", children: item.label }), _jsx("dd", { className: "text-sm text-gray-900 font-medium", children: item.value })] }, item.key))) })] }));
        }
        return (_jsxs("div", { className: "product-metadata", children: [showTitle && _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-4", children: titleText }), _jsx("table", { className: "w-full border border-gray-200 rounded-lg overflow-hidden", children: _jsx("tbody", { className: "divide-y divide-gray-200", children: items.map((item) => (_jsxs("tr", { className: "hover:bg-gray-50", children: [_jsxs("td", { className: "px-4 py-3 flex items-center gap-2", children: [item.icon, _jsx("span", { className: "text-sm font-medium text-gray-500", children: item.label })] }), _jsx("td", { className: "px-4 py-3 text-sm text-gray-900", children: item.value })] }, item.key))) }) })] }));
    },
};
export default ProductMetadata;
//# sourceMappingURL=ProductMetadata.js.map