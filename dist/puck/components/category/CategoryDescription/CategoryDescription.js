import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildTypographyClasses, buildLayoutClasses, buildColorClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
const MAX_WIDTH_MAP = {
    none: 'none',
    sm: '384px',
    md: '448px',
    lg: '512px',
    xl: '576px',
    '2xl': '672px',
    full: '100%',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    maxWidth: {
        type: 'select', label: 'Max Width',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'X-Large', value: 'xl' },
            { label: '2X-Large', value: '2xl' },
            { label: 'Full', value: 'full' },
        ],
    },
    className: { type: 'text', label: 'Custom CSS Classes' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const CategoryDescription = {
    label: 'Category Description',
    fields: allFields,
    defaultProps: {
        maxWidth: 'full',
        className: '',
        ...defaultTypographyProps,
        fontSize: 'base',
        lineHeight: 'relaxed',
        textColor: '#6b7280',
        textAlign: 'left',
        ...defaultLayoutProps,
        marginBottom: 'md',
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { category, maxWidth, className, fontSize, fontWeight, textAlign, textColor, lineHeight, marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        if (!category || !category.description)
            return _jsx(_Fragment, {});
        const maxWidthCss = MAX_WIDTH_MAP[maxWidth] ?? 'none';
        const composedClassName = [
            className,
            buildTypographyClasses(rawProps),
            buildLayoutClasses(rawProps),
            buildColorClasses(rawProps),
        ].filter(Boolean).join(' ');
        const style = {
            color: resolveColor(textColor) || '#6b7280',
            maxWidth: maxWidthCss,
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        return (_jsx("div", { className: composedClassName, style: style, children: _jsx("p", { children: category.description }) }));
    },
};
export default CategoryDescription;
//# sourceMappingURL=CategoryDescription.js.map