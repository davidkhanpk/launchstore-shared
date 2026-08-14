import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const WIDTH_CLASS = { full: 'w-full', '3/4': 'w-3/4', '1/2': 'w-1/2', '1/4': 'w-1/4' };
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    id: { type: 'text', label: 'ID' },
    style: {
        type: 'radio', label: 'Line Style',
        options: [{ label: 'Solid', value: 'solid' }, { label: 'Dashed', value: 'dashed' }, { label: 'Dotted', value: 'dotted' }],
    },
    thickness: {
        type: 'radio', label: 'Thickness',
        options: [{ label: 'Thin (1px)', value: '1' }, { label: 'Medium (2px)', value: '2' }, { label: 'Thick (4px)', value: '4' }],
    },
    width: {
        type: 'radio', label: 'Width',
        options: [{ label: 'Full', value: 'full' }, { label: '75%', value: '3/4' }, { label: '50%', value: '1/2' }, { label: '25%', value: '1/4' }],
    },
    textColor: { type: 'text', label: 'Color (hex or theme token)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Divider = {
    label: 'Divider',
    fields: allFields,
    defaultProps: {
        id: 'divider-1',
        style: 'solid',
        thickness: '1',
        textColor: '#e5e7eb',
        width: 'full',
        ...defaultLayoutProps,
        marginTop: 'md',
        marginBottom: 'md',
    },
    render: (rawProps) => {
        const { id, style, thickness, textColor, width, marginTop, marginBottom, paddingX, paddingY } = rawProps;
        const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        return (_jsx("div", { id: id, className: `flex justify-center ${layoutClasses}`, children: _jsx("hr", { className: WIDTH_CLASS[width || 'full'] || 'w-full', style: {
                    borderColor: resolveColor(textColor),
                    borderStyle: style || 'solid',
                    borderTopWidth: `${thickness || '1'}px`,
                    borderBottomWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                } }) }));
    },
};
export default Divider;
//# sourceMappingURL=Divider.js.map