import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, buildTypographyClasses, buildLayoutClasses, defaultTypographyProps, defaultLayoutProps, } from '../../../design-system';
const PLACEHOLDER = (_jsxs(_Fragment, { children: [_jsx("p", { children: "Product description will appear here. This could be a detailed explanation of the product features, materials, sizing information, and care instructions." }), _jsx("p", { style: { marginTop: '8px' }, children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." })] }));
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    maxLines: { type: 'number', label: 'Max Lines (0 = unlimited)' },
};
// ── Typography fields (no textAlign — description is left-aligned block) ─────
const typographyFields = {
    fontSize: sharedTypographyFields.fontSize,
    fontWeight: sharedTypographyFields.fontWeight,
    textColor: sharedTypographyFields.textColor,
    lineHeight: sharedTypographyFields.lineHeight,
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...typographyFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['maxLines'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textColor', 'lineHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const ProductDescription = {
    label: 'Product Description',
    fields: accordionFields,
    defaultProps: {
        maxLines: 0,
        ...defaultTypographyProps,
        fontSize: 'base',
        fontWeight: 'normal',
        textColor: '#4b5563',
        lineHeight: 'normal',
        ...defaultLayoutProps,
        marginTop: 'md',
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { maxLines, fontSize, fontWeight, textColor, lineHeight, marginTop, marginBottom, product, } = rawProps;
        const className = [
            buildTypographyClasses({ fontSize, fontWeight, lineHeight }),
            buildLayoutClasses({ marginTop, marginBottom }),
        ].filter(Boolean).join(' ');
        const color = resolveColor(textColor) || '#4b5563';
        const lineClamp = typeof maxLines === 'number' && maxLines > 0;
        const contentStyle = lineClamp
            ? {
                color,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: maxLines,
                overflow: 'hidden',
            }
            : { color };
        if (!product || !product.description) {
            const placeholderStyle = {
                ...contentStyle,
                color: '#9ca3af',
                fontStyle: 'italic',
            };
            return (_jsx("div", { className: className, style: placeholderStyle, children: PLACEHOLDER }));
        }
        return (_jsx("div", { className: className, style: contentStyle, dangerouslySetInnerHTML: { __html: product.description } }));
    },
};
export default ProductDescription;
//# sourceMappingURL=ProductDescription.js.map