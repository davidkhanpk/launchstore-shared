import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
// ── Price has its own size ladder (not shared fontSize) ─────────────────────
const SIZE_MAP = {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    size: {
        type: 'select', label: 'Size',
        options: [
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'X-Large', value: 'xl' },
            { label: '2X-Large', value: '2xl' },
        ],
    },
    showComparePrice: {
        type: 'radio', label: 'Show Compare Price',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showSavingsBadge: {
        type: 'radio', label: 'Show Savings Badge',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    layout: {
        type: 'radio', label: 'Layout',
        options: [
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Vertical', value: 'vertical' },
        ],
    },
};
// ── Typography fields (price has its own size — exclude fontSize) ────────────
const typographyFields = {
    fontWeight: sharedTypographyFields.fontWeight,
    textColor: sharedTypographyFields.textColor,
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
            fieldKeys: ['size', 'showComparePrice', 'showSavingsBadge', 'layout'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontWeight', 'textColor'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom'],
        },
    ],
    allFields,
});
const defaultResolvePrice = (_product) => undefined;
// ── Component ───────────────────────────────────────────────────────────────
export const ProductPrice = {
    label: 'Product Price',
    fields: accordionFields,
    defaultProps: {
        size: 'xl',
        showComparePrice: true,
        showSavingsBadge: true,
        layout: 'horizontal',
        fontWeight: 'semibold',
        textColor: '#111827',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { size, showComparePrice, showSavingsBadge, layout, fontWeight, textColor, marginTop, marginBottom, resolvePrice, product, } = rawProps;
        const placeholderClassName = [
            'italic',
            buildLayoutClasses({ marginTop, marginBottom }),
        ].filter(Boolean).join(' ');
        const placeholderStyle = {
            color: '#9ca3af',
        };
        if (!product || !product.variants || product.variants.length === 0) {
            return _jsx("div", { className: placeholderClassName, style: placeholderStyle, children: "Product price will appear here" });
        }
        const resolve = resolvePrice || defaultResolvePrice;
        const priceData = resolve(product);
        if (!priceData)
            return _jsx("div", { className: placeholderClassName, style: placeholderStyle, children: "Price not available" });
        const isHorizontal = layout !== 'vertical';
        const resolvedSize = SIZE_MAP[size || 'xl'] || SIZE_MAP.xl;
        const containerClassName = [
            'flex',
            isHorizontal ? 'flex-row' : 'flex-col',
            'items-center',
            buildLayoutClasses({ marginTop, marginBottom }),
        ].filter(Boolean).join(' ');
        const containerStyle = {
            gap: isHorizontal ? '12px' : '4px',
        };
        const priceClassName = fontWeight ? `font-${fontWeight}` : '';
        const priceStyle = {
            fontSize: resolvedSize,
            color: resolveColor(textColor) || '#111827',
        };
        const isOnSale = priceData.price_type === 'sale' && !!priceData.percentage_diff;
        const compareStyle = {
            color: '#6b7280',
            textDecoration: 'line-through',
            fontSize: '0.875rem',
        };
        const badgeStyle = {
            backgroundColor: '#fee2e2',
            color: '#dc2626',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 500,
        };
        return (_jsxs("div", { className: containerClassName, style: containerStyle, children: [_jsx("span", { className: priceClassName, style: priceStyle, children: priceData.calculated_price }), showComparePrice && isOnSale && priceData.original_price && (_jsx("span", { style: compareStyle, children: priceData.original_price })), isOnSale && showSavingsBadge && priceData.percentage_diff && (_jsxs("span", { style: badgeStyle, children: ["Save ", priceData.percentage_diff] }))] }));
    },
};
export default ProductPrice;
//# sourceMappingURL=ProductPrice.js.map