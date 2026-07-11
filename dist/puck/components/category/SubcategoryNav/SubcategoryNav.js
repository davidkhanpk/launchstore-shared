import { jsx as _jsx } from "react/jsx-runtime";
const ALIGN = { left: 'justify-start', center: 'justify-center', right: 'justify-end' };
const PLACEHOLDER = Array.from({ length: 5 }, (_, i) => ({ id: `sub-${i + 1}`, name: `Subcategory ${i + 1}`, url: '#' }));
export const subcategoryNavFields = {
    layout: {
        type: 'select', label: 'Layout',
        options: [{ label: 'Horizontal', value: 'horizontal' }, { label: 'Vertical', value: 'vertical' }, { label: 'Pills', value: 'pills' }],
    },
    showIcons: { type: 'radio', label: 'Show Icons', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
};
export const SubcategoryNav = {
    label: 'Subcategory Nav',
    fields: subcategoryNavFields,
    defaultProps: {
        layout: 'horizontal',
        showIcons: false,
        alignment: 'center',
    },
    render: ({ layout, alignment, items }) => {
        const list = items && items.length > 0 ? items : PLACEHOLDER;
        const isVertical = layout === 'vertical';
        const isPills = layout === 'pills';
        return (_jsx("nav", { className: `flex ${isVertical ? 'flex-col gap-2' : 'flex-row flex-wrap gap-4'} ${ALIGN[alignment] || 'justify-center'} py-3`, children: list.map((item) => (_jsx("a", { href: item.url || '#', className: `no-underline text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors ${isPills ? 'px-4 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200' : ''}`, children: item.name }, item.id))) }));
    },
};
export default SubcategoryNav;
//# sourceMappingURL=SubcategoryNav.js.map