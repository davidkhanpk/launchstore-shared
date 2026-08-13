import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const VARIANT_CLASS = {
    default: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
    primary: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    error: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
};
const SIZE_CLASS = {
    sm: 'text-xs px-2 py-0.5', md: 'text-sm px-2.5 py-1', lg: 'text-base px-3 py-1.5',
};
const ROUND_CLASS = {
    sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    text: { type: 'text', label: 'Badge Text' },
    variant: {
        type: 'select', label: 'Variant',
        options: [
            { label: 'Default', value: 'default' },
            { label: 'Primary', value: 'primary' },
            { label: 'Success', value: 'success' },
            { label: 'Warning', value: 'warning' },
            { label: 'Error', value: 'error' },
            { label: 'Info', value: 'info' },
        ],
    },
    size: { type: 'radio', label: 'Size', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }] },
    rounded: { type: 'radio', label: 'Corner Radius', options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Full (Pill)', value: 'full' }] },
};
// ── Color fields (component-specific overrides) ─────────────────────────────
const colorFields = {
    customBgColor: { type: 'text', label: 'Custom Background (Optional, hex or theme token)' },
    customTextColor: { type: 'text', label: 'Custom Text Color (Optional, hex or theme token)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...colorFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['id', 'text', 'variant', 'size', 'rounded'],
        },
        {
            label: 'Colors',
            fieldKeys: ['customBgColor', 'customTextColor'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Badge = {
    label: 'Badge',
    fields: accordionFields,
    defaultProps: {
        id: 'badge-1',
        text: 'Badge',
        variant: 'default',
        size: 'md',
        rounded: 'md',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, text, variant, size, rounded, customBgColor, customTextColor, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const useCustom = !!(customBgColor || customTextColor);
        const style = {};
        if (customBgColor)
            style.backgroundColor = resolveColor(customBgColor);
        if (customTextColor)
            style.color = resolveColor(customTextColor);
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { id: id, className: layoutClasses, children: _jsx("span", { className: `inline-flex items-center font-medium ${SIZE_CLASS[size || 'md'] || 'text-sm px-2.5 py-1'} ${ROUND_CLASS[rounded || 'md'] || 'rounded-md'} ${!useCustom ? (VARIANT_CLASS[variant || 'default'] || VARIANT_CLASS.default) : ''}`, style: Object.keys(style).length > 0 ? style : undefined, children: text }) }));
    },
};
export default Badge;
//# sourceMappingURL=Badge.js.map