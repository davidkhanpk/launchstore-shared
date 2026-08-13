import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildTypographyClasses, buildLayoutClasses, buildColorClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
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
    className: { type: 'text', label: 'Custom CSS Classes' },
};
// CategoryTitle shares fontSize/fontWeight/textAlign/textColor/lineHeight from
// the shared typography fields (no need to redeclare them here).
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Accordion config ─────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['tag', 'className'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const CategoryTitle = {
    label: 'Category Title',
    fields: accordionFields,
    defaultProps: {
        tag: 'h1',
        className: '',
        ...defaultTypographyProps,
        fontSize: '2xl',
        fontWeight: 'bold',
        textColor: '#000000',
        textAlign: 'left',
        ...defaultLayoutProps,
        marginBottom: 'sm',
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { category, tag = 'h1', className, fontSize, fontWeight, textColor, textAlign, lineHeight, marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        if (!category) {
            return _jsx("div", { style: { color: '#9ca3af', fontStyle: 'italic' }, children: "Category title will appear here" });
        }
        const Tag = tag;
        const composedClassName = [
            className,
            buildTypographyClasses(rawProps),
            buildLayoutClasses(rawProps),
            buildColorClasses(rawProps),
        ].filter(Boolean).join(' ');
        const style = {
            color: resolveColor(textColor) || '#000000',
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        return _jsx(Tag, { className: composedClassName, style: style, children: category.name });
    },
};
export default CategoryTitle;
//# sourceMappingURL=CategoryTitle.js.map