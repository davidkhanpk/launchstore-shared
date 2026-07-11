import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { categoryDescriptionFields } from './categorydescription.fields';
const SIZE = {
    sm: 'text-sm', base: 'text-base', md: 'text-md', lg: 'text-lg', xl: 'text-xl',
};
const COLOR = {
    default: 'text-gray-600', black: 'text-black', gray: 'text-gray-600',
    muted: 'text-gray-500', white: 'text-white',
};
const ALIGN = {
    left: 'text-left', center: 'text-center', right: 'text-right', justify: 'text-justify',
};
const LH = {
    tight: 'leading-tight', normal: 'leading-normal', relaxed: 'leading-relaxed', loose: 'leading-loose',
};
const MW = {
    none: '', sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', '2xl': 'max-w-2xl', full: 'max-w-full',
};
export const CategoryDescription = {
    label: 'Category Description',
    fields: categoryDescriptionFields,
    defaultProps: {
        fontSize: 'base', color: 'gray', alignment: 'left', lineHeight: 'relaxed', maxWidth: 'full',
        marginBottom: '2rem', className: '',
    },
    render: (rawProps) => {
        const { category, fontSize, color, alignment, lineHeight, maxWidth, marginBottom, className } = rawProps;
        if (!category || !category.description)
            return _jsx(_Fragment, {});
        const fs = fontSize || 'base';
        const c = color || 'gray';
        const a = alignment || 'left';
        const lh = lineHeight || 'relaxed';
        const mw = maxWidth || 'full';
        return (_jsx("div", { className: `${ALIGN[a]} ${SIZE[fs]} ${COLOR[c]} ${LH[lh]} ${MW[mw]} ${className || ''}`.trim(), style: { marginBottom: marginBottom || '2rem' }, children: _jsx("p", { children: category.description }) }));
    },
};
export default CategoryDescription;
//# sourceMappingURL=CategoryDescription.js.map