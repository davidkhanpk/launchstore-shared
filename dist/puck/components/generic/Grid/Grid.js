import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { sharedLayoutFields, defaultLayoutProps, } from '../../../design-system';
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    columns: {
        type: 'radio', label: 'Desktop Columns',
        options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' }],
    },
    tabletColumns: {
        type: 'radio', label: 'Tablet Columns',
        options: [{ label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }],
    },
    mobileColumns: {
        type: 'radio', label: 'Mobile Columns',
        options: [{ label: '1', value: '1' }, { label: '2', value: '2' }],
    },
    gap: {
        type: 'radio', label: 'Gap',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
const GAP_CLASS = { none: 'gap-0', sm: 'gap-3', md: 'gap-6', lg: 'gap-8', xl: 'gap-12' };
const MOBILE_CLASS = { '1': 'grid-cols-1', '2': 'grid-cols-2' };
const TABLET_CLASS = { '1': 'md:grid-cols-1', '2': 'md:grid-cols-2', '3': 'md:grid-cols-3', '4': 'md:grid-cols-4' };
const DESKTOP_CLASS = {
    '1': 'lg:grid-cols-1', '2': 'lg:grid-cols-2', '3': 'lg:grid-cols-3',
    '4': 'lg:grid-cols-4', '5': 'lg:grid-cols-5', '6': 'lg:grid-cols-6',
};
// ── Component ───────────────────────────────────────────────────────────────
export const Grid = {
    label: 'Grid',
    fields: allFields,
    defaultProps: {
        id: 'grid-1',
        columns: '3',
        tabletColumns: '2',
        mobileColumns: '1',
        gap: 'md',
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const { id, columns, tabletColumns, mobileColumns, gap } = rawProps;
        return (_jsx("div", { id: id, className: `grid ${MOBILE_CLASS[mobileColumns || '1'] || 'grid-cols-1'} ${TABLET_CLASS[tabletColumns || '2'] || 'md:grid-cols-2'} ${DESKTOP_CLASS[columns || '3'] || 'lg:grid-cols-3'} ${GAP_CLASS[gap || 'md'] || 'gap-6'}`, children: _jsx(DropZone, { zone: "items" }) }));
    },
};
export default Grid;
//# sourceMappingURL=Grid.js.map