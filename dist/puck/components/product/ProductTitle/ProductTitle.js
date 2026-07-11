import React from 'react';
import { productTitleFields } from './producttitle.fields';
const SIZE = {
    default: 'text-3xl', sm: 'text-sm', md: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl', '3xl': 'text-3xl',
};
const COLOR = {
    default: 'text-gray-900', black: 'text-black', gray: 'text-gray-700', primary: 'text-blue-600', white: 'text-white',
};
const ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const WEIGHT = {
    normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
export const ProductTitle = {
    label: 'Product Title',
    fields: productTitleFields,
    defaultProps: {
        tag: 'h1', fontSize: '2xl', color: 'black', alignment: 'left', fontWeight: 'bold',
        marginTop: 'mt-0', marginBottom: 'mb-4', paddingX: 'px-0', paddingY: 'py-0',
    },
    render: (rawProps) => {
        const { tag = 'h1', fontSize = '2xl', color = 'black', alignment = 'left', fontWeight = 'bold', marginTop = 'mt-0', marginBottom = 'mb-4', paddingX = 'px-0', paddingY = 'py-0', product, } = rawProps;
        const className = `
      ${SIZE[fontSize || 'default'] || 'text-2xl'}
      ${COLOR[color || 'black'] || 'text-black'}
      ${ALIGN[alignment || 'left'] || 'text-left'}
      ${WEIGHT[fontWeight || 'bold'] || 'font-bold'}
      ${marginTop || ''} ${marginBottom || ''}
      ${paddingX || ''} ${paddingY || ''}
      ${!product ? 'text-gray-400 italic' : ''}
    `;
        const content = product?.title || 'Product Title Will Appear Here';
        const Tag = tag || 'h1';
        return React.createElement(Tag, { className: className.trim() }, content);
    },
};
export default ProductTitle;
//# sourceMappingURL=ProductTitle.js.map