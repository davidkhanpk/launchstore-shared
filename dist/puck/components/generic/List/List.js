import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { listFields } from './list.fields';
const SPACE = { tight: 'space-y-1', normal: 'space-y-2', relaxed: 'space-y-4' };
const FONT = { sm: 'text-sm', base: 'text-base', lg: 'text-lg' };
export const List = {
    label: 'List',
    fields: listFields,
    defaultProps: {
        id: 'list-1',
        items: [{ text: 'First item' }, { text: 'Second item' }, { text: 'Third item' }],
        type: 'bullet', spacing: 'normal', fontSize: 'base', color: '#374151',
    },
    render: ({ id, items, type, spacing, fontSize, color }) => {
        const marker = (i) => {
            if (type === 'numbered')
                return _jsxs("span", { className: "font-medium mr-2 flex-shrink-0 tabular-nums", children: [i + 1, "."] });
            if (type === 'check')
                return _jsx("span", { className: "mr-2 flex-shrink-0 text-green-600", children: "\u2713" });
            if (type === 'bullet')
                return _jsx("span", { className: "mr-2 flex-shrink-0", children: "\u2022" });
            return null;
        };
        return (_jsx("ul", { id: id, className: `${SPACE[spacing] || 'space-y-2'} ${FONT[fontSize] || 'text-base'}`, style: { color: resolveColor(color) }, children: (items || []).map((item, i) => (_jsxs("li", { className: "flex items-start", children: [marker(i), _jsx("span", { children: item.text })] }, i))) }));
    },
};
export default List;
//# sourceMappingURL=List.js.map