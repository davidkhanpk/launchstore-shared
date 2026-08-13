import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedLayoutFields, sharedColorFields, buildLayoutClasses, buildColorClasses, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
// ── Component-specific fields ───────────────────────────────────────────────
const contentFields = {
    justifyContent: {
        type: 'select', label: 'Horizontal Alignment',
        options: [
            { label: 'Start (Left)', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End (Right)', value: 'end' },
            { label: 'Space Between', value: 'space-between' },
            { label: 'Space Around', value: 'space-around' },
            { label: 'Space Evenly', value: 'space-evenly' },
        ],
    },
    alignItems: {
        type: 'select', label: 'Vertical Alignment',
        options: [
            { label: 'Start (Top)', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End (Bottom)', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
            { label: 'Baseline', value: 'baseline' },
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
    wrap: {
        type: 'select', label: 'Wrap Behavior',
        options: [
            { label: 'No Wrap', value: 'nowrap' },
            { label: 'Wrap', value: 'wrap' },
            { label: 'Wrap Reverse', value: 'wrap-reverse' },
        ],
    },
    fullWidth: {
        type: 'radio', label: 'Full Width',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    maxWidth: { type: 'text', label: 'Max Width (if not full width)' },
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
            label: 'Flex Row',
            defaultOpen: true,
            fieldKeys: ['justifyContent', 'alignItems', 'gap', 'wrap', 'fullWidth', 'maxWidth'],
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
    start: 'flex-start', center: 'center', end: 'flex-end',
    stretch: 'stretch', baseline: 'baseline',
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
export const FlexRow = {
    label: 'Flex Row',
    fields: accordionFields,
    defaultProps: {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'md',
        wrap: 'nowrap',
        fullWidth: true,
        ...defaultLayoutProps,
        ...defaultColorProps,
    },
    render: (rawProps) => {
        const { justifyContent = 'space-between', alignItems = 'center', gap = 'md', wrap = 'nowrap', fullWidth = true, maxWidth, marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, } = rawProps;
        const flexLayout = {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: JUSTIFY_MAP[justifyContent] || 'space-between',
            alignItems: ALIGN_MAP[alignItems] || 'center',
            flexWrap: wrap,
        };
        const className = [
            'flex flex-row',
            GAP_CLASS[gap] || '',
            buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
            buildColorClasses({ borderRadius }),
        ].filter(Boolean).join(' ');
        const style = {
            ...flexLayout,
            width: fullWidth ? '100%' : 'auto',
            maxWidth: fullWidth ? undefined : maxWidth,
            minHeight: '50px',
        };
        if (backgroundColor && backgroundColor !== 'transparent') {
            style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
        }
        return (_jsx("div", { className: className, style: style, children: _jsx(DropZone, { zone: "flex-row-content", disallow: [], style: { ...flexLayout, width: '100%' } }) }));
    },
};
export default FlexRow;
//# sourceMappingURL=FlexRow.js.map