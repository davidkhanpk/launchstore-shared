import React from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    tag: {
        type: 'select', label: 'HTML Tag',
        options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
        ],
    },
    level: {
        type: 'select', label: 'Heading Level',
        options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const ProductTitle = {
    label: 'Product Title',
    fields: allFields,
    defaultProps: {
        tag: 'h1',
        level: 'h1',
        ...defaultTypographyProps,
        fontWeight: 'bold',
        textColor: '#111827',
        textAlign: 'left',
        ...defaultLayoutProps,
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { tag, fontSize, fontWeight, textAlign, textColor, marginTop, marginBottom, product, } = rawProps;
        const hasProduct = !!product;
        const content = product?.title || 'Product Title Will Appear Here';
        const Tag = tag || 'h1';
        const className = [
            buildTypographyClasses({ fontSize, fontWeight, textAlign }),
            buildLayoutClasses({ marginTop, marginBottom }),
            hasProduct ? '' : 'italic',
        ].filter(Boolean).join(' ');
        const style = {
            color: hasProduct
                ? (resolveColor(textColor) || '#111827')
                : '#9ca3af',
        };
        return React.createElement(Tag, { className, style }, content);
    },
};
export default ProductTitle;
//# sourceMappingURL=ProductTitle.js.map