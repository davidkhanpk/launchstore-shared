import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { ProductGridRenderer } from './productgrid';
import { buildTypographyClasses, sharedTypographyFields, sharedLayoutFields, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const contentFields = {
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    title: { type: 'text', label: 'Title' },
    showTagline: { type: 'radio', label: 'Show Tagline', options: RADIO_YES_NO },
    tagline: { type: 'textarea', label: 'Tagline' },
    relatedBy: {
        type: 'select', label: 'Show Products Related By',
        options: [
            { label: 'Same Collection', value: 'collection' },
            { label: 'Similar Tags', value: 'tags' },
            { label: 'Same Category', value: 'category' },
            { label: 'Upsells (Manual)', value: 'upsell' },
            { label: 'Cross-sells (Manual)', value: 'crosssell' },
            { label: 'Frequently Bought Together', value: 'frequently_bought' },
        ],
    },
    displayStyle: {
        type: 'select', label: 'Display Style',
        options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel', value: 'carousel' }],
    },
    maxProducts: { type: 'number', label: 'Number of Products' },
    productCardTemplateId: { type: 'text', label: 'Product Card Template ID (optional)' },
    gridColumns: {
        type: 'select', label: 'Grid Columns',
        options: [
            { label: '2 Columns', value: '2' }, { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' }, { label: '5 Columns', value: '5' },
        ],
    },
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
export const RelatedProducts = {
    label: 'Related Products',
    fields: allFields,
    defaultProps: {
        showTitle: true,
        title: 'You Might Also Like',
        showTagline: true,
        tagline: 'Check out these related products',
        relatedBy: 'collection',
        displayStyle: 'grid',
        maxProducts: 8,
        productCardTemplateId: '',
        gridColumns: '4',
        containerPadding: 'md',
        ...defaultTypographyProps,
        textColor: '#374151',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { products = [], showTagline, tagline, marginTop, marginBottom, fontSize, fontWeight, lineHeight, textAlign, textColor, ...gridProps } = rawProps;
        // Typography via design-system classes (semantic ladder values) —
        // Number(fontWeight) broke with 'bold'/'semibold' values.
        const taglineClasses = [
            buildTypographyClasses(rawProps),
            textAlign === 'center' ? 'mx-auto' : textAlign === 'right' ? 'ml-auto' : '',
            'max-w-2xl mb-12',
        ].filter(Boolean).join(' ');
        const taglineStyle = {
            color: resolveColor(textColor) || '#374151',
        };
        const wrapperStyle = {
            marginTop: marginTop || undefined,
            marginBottom: marginBottom || undefined,
        };
        return (_jsxs("div", { style: wrapperStyle, children: [showTagline && tagline && (_jsx("div", { className: taglineClasses, style: taglineStyle, children: tagline })), _jsx(ProductGridRenderer, { products: products, ...gridProps, renderProduct: rawProps.renderProduct })] }));
    },
};
export default RelatedProducts;
//# sourceMappingURL=RelatedProducts.js.map