import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, sharedColorFields, buildLayoutClasses, buildColorClasses, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
// ── Component-specific fields ───────────────────────────────────────────────
const contentFields = {
    justifyContent: {
        type: 'select', label: 'Vertical Alignment',
        options: [
            { label: 'Start (Top)', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End (Bottom)', value: 'end' },
            { label: 'Space Between', value: 'space-between' },
            { label: 'Space Around', value: 'space-around' },
            { label: 'Space Evenly', value: 'space-evenly' },
        ],
    },
    alignItems: {
        type: 'select', label: 'Horizontal Alignment',
        options: [
            { label: 'Start (Left)', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End (Right)', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
        ],
    },
    gap: {
        type: 'select', label: 'Gap Between Items',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Extra Small', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
    fullHeight: {
        type: 'radio', label: 'Full Height',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    minHeight: { type: 'text', label: 'Min Height (e.g. 200px)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Flex Column',
            defaultOpen: true,
            fieldKeys: ['justifyContent', 'alignItems', 'gap', 'fullHeight', 'minHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
        {
            label: 'Color',
            fieldKeys: ['backgroundColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Mappers ─────────────────────────────────────────────────────────────────
const JUSTIFY_MAP = {
    start: 'flex-start', center: 'center', end: 'flex-end',
    'space-between': 'space-between', 'space-around': 'space-around', 'space-evenly': 'space-evenly',
};
const ALIGN_MAP = {
    start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch',
};
// Component-specific gap scale → Tailwind class.
const GAP_CLASS = {
    none: 'gap-0',
    xs: 'gap-1',
    sm: 'gap-2',
    md: 'gap-4',
    lg: 'gap-6',
    xl: 'gap-8',
};
// ── Component ───────────────────────────────────────────────────────────────
export const FlexColumn = {
    label: 'Flex Column',
    fields: accordionFields,
    defaultProps: {
        justifyContent: 'start',
        alignItems: 'start',
        gap: 'md',
        fullHeight: false,
        minHeight: 'auto',
        ...defaultLayoutProps,
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { justifyContent = 'start', alignItems = 'start', gap = 'md', fullHeight = false, minHeight, marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        const className = [
            'flex flex-col',
            GAP_CLASS[gap] || '',
            buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
            buildColorClasses({ borderRadius }),
        ].filter(Boolean).join(' ');
        const style = {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: JUSTIFY_MAP[justifyContent] || 'flex-start',
            alignItems: ALIGN_MAP[alignItems] || 'stretch',
            height: fullHeight ? '100%' : 'auto',
            minHeight: fullHeight ? undefined : (minHeight || '50px'),
            border: '1px dashed rgba(0, 0, 0, 0.1)',
        };
        if (backgroundColor && backgroundColor !== 'transparent') {
            style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
        }
        return (_jsx("div", { className: className, style: style, children: _jsx(DropZone, { zone: "flex-column-content", disallow: [] }) }));
    },
};
export default FlexColumn;
//# sourceMappingURL=FlexColumn.js.map