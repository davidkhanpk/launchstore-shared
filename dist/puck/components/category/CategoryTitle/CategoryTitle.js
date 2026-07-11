import { jsx as _jsx } from "react/jsx-runtime";
import { categoryTitleFields } from './categorytitle.fields';
const SIZE = {
    default: 'text-2xl', sm: 'text-lg', md: 'text-xl', lg: 'text-3xl',
    xl: 'text-4xl', '2xl': 'text-5xl', '3xl': 'text-6xl',
};
const COLOR = {
    default: 'text-gray-900', black: 'text-black', gray: 'text-gray-600', primary: 'text-brand-primary', white: 'text-white',
};
const WEIGHT = {
    normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
const ALIGN = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
export const CategoryTitle = {
    label: 'Category Title',
    fields: categoryTitleFields,
    defaultProps: {
        tag: 'h1', fontSize: '2xl', color: 'black', alignment: 'left', fontWeight: 'bold', marginBottom: '1rem', className: '',
    },
    render: (rawProps) => {
        const { category, tag = 'h1', fontSize, color, alignment, fontWeight, marginBottom, className } = rawProps;
        const fs = fontSize || '2xl';
        const c = color || 'black';
        const fw = fontWeight || 'bold';
        const a = alignment || 'left';
        if (!category) {
            return _jsx("div", { className: "text-gray-400 italic", children: "Category title will appear here" });
        }
        const Tag = tag;
        return (_jsx(Tag, { className: `${ALIGN[a]} ${WEIGHT[fw]} ${SIZE[fs]} ${COLOR[c]} ${className || ''}`.trim(), style: { marginBottom: marginBottom || '1rem' }, children: category.name }));
    },
};
export default CategoryTitle;
//# sourceMappingURL=CategoryTitle.js.map