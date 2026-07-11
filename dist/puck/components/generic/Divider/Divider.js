import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { dividerFields } from './divider.fields';
const WIDTH = { full: 'w-full', '3/4': 'w-3/4', '1/2': 'w-1/2', '1/4': 'w-1/4' };
const MT = { none: 'mt-0', sm: 'mt-2', md: 'mt-4', lg: 'mt-8' };
const MB = { none: 'mb-0', sm: 'mb-2', md: 'mb-4', lg: 'mb-8' };
export const Divider = {
    label: 'Divider',
    fields: dividerFields,
    defaultProps: { id: 'divider-1', style: 'solid', thickness: '1', color: '#e5e7eb', width: 'full', marginTop: 'md', marginBottom: 'md' },
    render: ({ id, style, thickness, color, width, marginTop, marginBottom }) => (_jsx("div", { id: id, className: `flex justify-center ${MT[marginTop] || 'mt-4'} ${MB[marginBottom] || 'mb-4'}`, children: _jsx("hr", { className: WIDTH[width] || 'w-full', style: {
                borderColor: resolveColor(color),
                borderStyle: style,
                borderTopWidth: `${thickness}px`,
                borderBottomWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
            } }) })),
};
export default Divider;
//# sourceMappingURL=Divider.js.map