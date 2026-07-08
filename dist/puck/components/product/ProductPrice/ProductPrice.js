import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { productPriceFields } from './productprice.fields';
const SIZE = { sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const COLOR = { default: 'text-gray-900', black: 'text-black', gray: 'text-gray-700', primary: 'text-blue-600' };
const WEIGHT = {
    normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const defaultResolvePrice = (_product) => undefined;
export const ProductPrice = {
    label: 'Product Price',
    fields: productPriceFields,
    defaultProps: {
        fontSize: 'xl', color: 'black', showComparePrice: true,
        layout: 'horizontal', fontWeight: 'semibold', showSavingsPercentage: true,
    },
    render: (rawProps) => {
        const { fontSize, color, showComparePrice, layout, fontWeight, showSavingsPercentage, resolvePrice, product, } = rawProps;
        if (!product || !product.variants || product.variants.length === 0) {
            return _jsx("div", { className: "text-gray-400 italic", children: "Product price will appear here" });
        }
        const resolve = resolvePrice || defaultResolvePrice;
        const priceData = resolve(product);
        if (!priceData)
            return _jsx("div", { className: "text-gray-400 italic", children: "Price not available" });
        const sizeCls = SIZE[fontSize || 'xl'] || 'text-xl';
        const colorCls = COLOR[color || 'black'] || 'text-black';
        const weightCls = WEIGHT[fontWeight || 'semibold'] || 'font-semibold';
        const layoutCls = layout === 'horizontal' ? 'flex items-center gap-3' : 'flex flex-col gap-1';
        const isOnSale = priceData.price_type === 'sale' && !!priceData.percentage_diff;
        return (_jsxs("div", { className: layoutCls, children: [_jsx("span", { className: `${sizeCls} ${colorCls} ${weightCls}`, children: priceData.calculated_price }), showComparePrice && isOnSale && priceData.original_price && (_jsx("span", { className: "text-gray-500 line-through text-sm", children: priceData.original_price })), isOnSale && showSavingsPercentage && priceData.percentage_diff && (_jsxs("span", { className: "bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium", children: ["Save ", priceData.percentage_diff] }))] }));
    },
};
export default ProductPrice;
//# sourceMappingURL=ProductPrice.js.map