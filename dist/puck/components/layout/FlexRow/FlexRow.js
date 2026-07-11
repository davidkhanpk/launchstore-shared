import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { flexRowFields } from './flexrow.fields';
const GAP = {
    none: '0', xs: '0.25rem', sm: '0.5rem', md: '1rem', lg: '1.5rem', xl: '2rem',
};
const JUSTIFY = {
    start: 'flex-start', center: 'center', end: 'flex-end',
    'space-between': 'space-between', 'space-around': 'space-around', 'space-evenly': 'space-evenly',
};
const ALIGN = {
    start: 'flex-start', center: 'center', end: 'flex-end',
    stretch: 'stretch', baseline: 'baseline',
};
export const FlexRow = {
    label: 'Flex Row',
    fields: flexRowFields,
    defaultProps: {
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'md',
        wrap: 'nowrap',
        fullWidth: true,
        maxWidth: '100%',
        padding: '0',
        backgroundColor: 'transparent',
        borderRadius: '0',
    },
    render: ({ justifyContent = 'space-between', alignItems = 'center', gap = 'md', wrap = 'nowrap', fullWidth = true, maxWidth, padding, backgroundColor, borderRadius, }) => (_jsx("div", { style: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: JUSTIFY[justifyContent] || 'space-between',
            alignItems: ALIGN[alignItems] || 'center',
            flexWrap: wrap,
            gap: GAP[gap] || '1rem',
            width: fullWidth ? '100%' : 'auto',
            maxWidth: fullWidth ? undefined : maxWidth,
            padding,
            backgroundColor,
            borderRadius,
            minHeight: '50px',
        }, children: _jsx(DropZone, { zone: "flex-row-content", disallow: [], style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: JUSTIFY[justifyContent] || 'space-between',
                alignItems: ALIGN[alignItems] || 'center',
                flexWrap: wrap,
                gap: GAP[gap] || '1rem',
                width: '100%',
            } }) })),
};
export default FlexRow;
//# sourceMappingURL=FlexRow.js.map