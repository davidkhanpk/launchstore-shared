import { jsx as _jsx } from "react/jsx-runtime";
import { ProductGridRenderer } from '../RelatedProducts/productgrid';
import { sharedTypographyFields, sharedLayoutFields, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const contentFields = {
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Title' },
    displayStyle: {
        type: 'select', label: 'Display Style',
        options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
    },
    maxProducts: { type: 'number', label: 'Maximum Products to Show' },
    containerPadding: {
        type: 'select', label: 'Container Padding',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
        ],
    },
};
// ── All flat fields (for the accordion to reference by key) ─────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const RecentlyViewedProducts = {
    label: 'Recently Viewed Products',
    fields: allFields,
    defaultProps: {
        showTitle: true,
        title: 'Recently Viewed',
        displayStyle: 'carousel',
        maxProducts: 8,
        containerPadding: 'md',
        ...defaultTypographyProps,
        textColor: '#374151',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { products = [], marginTop, marginBottom, 
        // Typography props are accepted for design-system parity and are
        // consumed by the section title rendered inside ProductGridRenderer.
        ...rest } = rawProps;
        const wrapperStyle = {
            marginTop: marginTop || undefined,
            marginBottom: marginBottom || undefined,
        };
        return (_jsx("div", { style: wrapperStyle, children: _jsx(ProductGridRenderer, { products: products, ...rest }) }));
    },
};
export default RecentlyViewedProducts;
//# sourceMappingURL=RecentlyViewedProducts.js.map