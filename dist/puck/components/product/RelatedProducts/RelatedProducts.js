import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { relatedProductsFields } from './relatedproducts.fields';
import { ProductGridRenderer } from './productgrid';
export const RelatedProducts = {
    label: 'Related Products',
    fields: relatedProductsFields,
    defaultProps: {
        showTitle: true, title: 'You Might Also Like',
        showTagline: true, tagline: 'Check out these related products',
        relatedBy: 'collection',
        displayStyle: 'grid', maxProducts: 8, productCardTemplateId: '',
        gridColumns: '4', containerPadding: 'md',
    },
    render: (rawProps) => {
        const { products = [], showTagline, tagline, ...gridProps } = rawProps;
        return (_jsxs(_Fragment, { children: [showTagline && tagline && (_jsx("div", { className: "text-center mb-12 text-lg text-gray-600 max-w-2xl mx-auto", children: tagline })), _jsx(ProductGridRenderer, { products: products, ...gridProps })] }));
    },
};
export default RelatedProducts;
//# sourceMappingURL=RelatedProducts.js.map