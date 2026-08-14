import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
// ── Component-specific fields ───────────────────────────────────────────────
const contentFields = {
    columns: {
        type: 'select', label: 'Number of Columns',
        options: [
            { label: '2 Columns', value: '2' },
            { label: '3 Columns', value: '3' },
            { label: '4 Columns', value: '4' },
        ],
    },
    layout: {
        type: 'select', label: 'Column Layout (2 columns only)',
        options: [
            { label: 'Equal (50/50)', value: '50-50' },
            { label: 'Left Larger (60/40)', value: '60-40' },
            { label: 'Right Larger (40/60)', value: '40-60' },
            { label: 'Left Much Larger (70/30)', value: '70-30' },
            { label: 'Right Much Larger (30/70)', value: '30-70' },
        ],
    },
    gap: {
        type: 'select', label: 'Gap Between Columns',
        options: [
            { label: 'None', value: 'none' },
            { label: 'XS', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'XL', value: 'xl' },
        ],
    },
    mobileStack: {
        type: 'radio', label: 'Stack on Mobile',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    alignItems: {
        type: 'select', label: 'Vertical Alignment',
        options: [
            { label: 'Start', value: 'start' },
            { label: 'Center', value: 'center' },
            { label: 'End', value: 'end' },
            { label: 'Stretch', value: 'stretch' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
// ── Grid template resolver ──────────────────────────────────────────────────
// Desktop column template per layout/count. Mobile stacks to 1 col when
// mobileStack is true (media-query injected via inline <style>).
const ALIGN_MAP = {
    start: 'start',
    center: 'center',
    end: 'end',
    stretch: 'stretch',
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
function desktopTemplate(columns, layout) {
    if (columns === '2') {
        switch (layout) {
            case '60-40': return '3fr 2fr';
            case '40-60': return '2fr 3fr';
            case '70-30': return '7fr 3fr';
            case '30-70': return '3fr 7fr';
            case '50-50':
            default: return '1fr 1fr';
        }
    }
    if (columns === '3')
        return '1fr 1fr 1fr';
    if (columns === '4')
        return '1fr 1fr 1fr 1fr';
    return '1fr 1fr';
}
// ── Component ───────────────────────────────────────────────────────────────
export const Columns = {
    label: 'Columns',
    fields: allFields,
    defaultProps: {
        columns: '2',
        layout: '50-50',
        gap: 'lg',
        mobileStack: true,
        alignItems: 'start',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { columns = '2', layout = '50-50', gap = 'lg', mobileStack = true, alignItems = 'start', marginTop, marginBottom, paddingX, paddingY, } = rawProps;
        const n = parseInt(columns, 10) || 2;
        const desktopCols = desktopTemplate(columns, layout);
        const stackId = `cols-${columns}-${layout || '50-50'}-${mobileStack ? 's' : 'n'}`;
        const className = [
            stackId,
            'grid',
            GAP_CLASS[gap] || '',
            buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY }),
        ].filter(Boolean).join(' ');
        const gridStyle = {
            gridTemplateColumns: mobileStack ? '1fr' : desktopCols,
            alignItems: ALIGN_MAP[alignItems] || 'start',
        };
        const responsiveStyle = mobileStack ? (_jsx("style", { children: `
        @media (min-width: 768px) { .${stackId} { grid-template-columns: ${desktopCols} !important; } }
      ` })) : null;
        return (_jsxs(_Fragment, { children: [responsiveStyle, _jsx("div", { className: className, style: gridStyle, children: Array.from({ length: n }, (_, i) => (_jsx("div", { style: { minHeight: '100px' }, children: _jsx(DropZone, { zone: `column-${i + 1}` }) }, i))) })] }));
    },
};
export default Columns;
//# sourceMappingURL=Columns.js.map