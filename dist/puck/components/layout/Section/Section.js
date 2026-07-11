import { jsx as _jsx } from "react/jsx-runtime";
import { sectionFields } from './section.fields';
const PAD = {
    none: 'py-0', sm: 'py-4', md: 'py-8', lg: 'py-12', xl: 'py-16',
};
const BG = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    gray: 'bg-gray-50',
    // 'primary' uses brand.primary theme variable — resolved by surrounding page CSS context.
    primary: 'bg-brand-primary',
};
export const Section = {
    label: 'Section',
    fields: sectionFields,
    defaultProps: { paddingY: 'md', backgroundColor: 'transparent' },
    render: (props) => {
        const { paddingY, backgroundColor, children } = props;
        return (_jsx("section", { className: `w-full ${PAD[paddingY] || 'py-8'} ${BG[backgroundColor] || 'bg-transparent'}`, children: children }));
    },
};
export default Section;
//# sourceMappingURL=Section.js.map