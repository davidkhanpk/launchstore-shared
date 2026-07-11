import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { productDescriptionFields } from './productdescription.fields';
const SIZE = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
const COLOR = { default: 'text-gray-900', gray: 'text-gray-700', black: 'text-black' };
const LINE = { tight: 'leading-tight', normal: 'leading-normal', relaxed: 'leading-relaxed' };
const MAX_WIDTH = { full: 'max-w-full', prose: 'max-w-prose', narrow: 'max-w-2xl' };
const PLACEHOLDER = (_jsxs("div", { className: "text-gray-400 italic", children: [_jsx("p", { children: "Product description will appear here. This could be a detailed explanation of the product features, materials, sizing information, and care instructions." }), _jsx("p", { className: "mt-2", children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })] }));
export const ProductDescription = {
    label: 'Product Description',
    fields: productDescriptionFields,
    defaultProps: {
        fontSize: 'base', color: 'gray', lineHeight: 'normal', maxWidth: 'prose',
        marginTop: 'mt-4', marginBottom: 'mb-4', paddingX: 'px-0', paddingY: 'py-0',
    },
    render: (rawProps) => {
        const { fontSize = 'base', color = 'gray', lineHeight = 'normal', maxWidth = 'prose', marginTop = 'mt-4', marginBottom = 'mb-4', paddingX = 'px-0', paddingY = 'py-0', product, } = rawProps;
        const sizeCls = SIZE[fontSize || 'base'] || 'text-base';
        const colorCls = COLOR[color || 'gray'] || 'text-gray-700';
        const lineCls = LINE[lineHeight || 'normal'] || 'leading-normal';
        const maxCls = MAX_WIDTH[maxWidth || 'prose'] || 'max-w-prose';
        const spacing = `${marginTop || ''} ${marginBottom || ''} ${paddingX || ''} ${paddingY || ''}`.trim();
        if (!product || !product.description) {
            return (_jsx("div", { className: spacing, children: _jsx("div", { className: `text-gray-400 italic ${sizeCls} ${lineCls} ${maxCls}`, children: PLACEHOLDER }) }));
        }
        return (_jsx("div", { className: `${sizeCls} ${colorCls} ${lineCls} ${maxCls} ${spacing} prose prose-gray`, dangerouslySetInnerHTML: { __html: product.description } }));
    },
};
export default ProductDescription;
//# sourceMappingURL=ProductDescription.js.map