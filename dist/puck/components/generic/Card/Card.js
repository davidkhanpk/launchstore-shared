import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const SHADOW_CLASS = {
    none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};
const ROUND_CLASS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    padding: {
        type: 'radio', label: 'Padding',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
    },
    shadow: {
        type: 'radio', label: 'Shadow',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
    },
    border: { type: 'radio', label: 'Border', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    rounded: {
        type: 'radio', label: 'Corner Radius',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }, { label: 'Full', value: 'full' }],
    },
    hoverEffect: { type: 'radio', label: 'Hover Effect (lift)', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
// ── Color fields (component-specific) ───────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
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
            fieldKeys: ['id', 'padding', 'shadow', 'border', 'rounded', 'hoverEffect'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
const PAD_VALUE = { none: '0', sm: '12px', md: '24px', lg: '32px', xl: '48px' };
// ── Component ───────────────────────────────────────────────────────────────
export const Card = {
    label: 'Card',
    fields: accordionFields,
    defaultProps: {
        id: 'card-1',
        padding: 'lg',
        shadow: 'md',
        border: true,
        rounded: 'lg',
        backgroundColor: '#ffffff',
        hoverEffect: true,
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, padding, shadow, border, rounded, backgroundColor, hoverEffect, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        const innerStyle = {
            backgroundColor: resolveColor(backgroundColor) || backgroundColor,
            padding: PAD_VALUE[padding || 'lg'] || PAD_VALUE.lg,
        };
        return (_jsx("div", { id: id, className: layoutClasses, children: _jsx("div", { className: `${SHADOW_CLASS[shadow || 'md'] || 'shadow-md'} ${ROUND_CLASS[rounded || 'lg'] || 'rounded-lg'} ${border ? 'border border-gray-200 dark:border-gray-700' : ''} ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}`, style: innerStyle, children: _jsx(DropZone, { zone: "content" }) }) }));
    },
};
export default Card;
//# sourceMappingURL=Card.js.map