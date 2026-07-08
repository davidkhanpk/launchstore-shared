import { jsx as _jsx } from "react/jsx-runtime";
import { recentlyViewedProductsFields } from './recentlyviewedproducts.fields';
import { ProductGridRenderer } from '../RelatedProducts/productgrid';
export const RecentlyViewedProducts = {
    label: 'Recently Viewed Products',
    fields: recentlyViewedProductsFields,
    defaultProps: {
        showTitle: true, title: 'Recently Viewed',
        displayStyle: 'carousel', maxProducts: 8, containerPadding: 'md',
    },
    render: (rawProps) => {
        const { products = [], ...rest } = rawProps;
        return _jsx(ProductGridRenderer, { products: products, ...rest });
    },
};
export default RecentlyViewedProducts;
//# sourceMappingURL=RecentlyViewedProducts.js.map