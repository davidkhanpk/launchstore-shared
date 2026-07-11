import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const GAP = { sm: 'gap-2', md: 'gap-4', lg: 'gap-6', xl: 'gap-8', '2xl': 'gap-12' };
const COLS = { 2: 'grid-cols-2', 3: 'grid-cols-2 md:grid-cols-3', 4: 'grid-cols-2 md:grid-cols-4', 5: 'grid-cols-2 md:grid-cols-5', 6: 'grid-cols-3 md:grid-cols-6' };
const CARD = {
    standard: 'bg-white shadow-sm rounded-lg overflow-hidden',
    luxury: 'bg-white rounded-none overflow-hidden',
    minimal: 'bg-transparent',
};
const PLACEHOLDER = Array.from({ length: 8 }, (_, i) => ({
    id: `cat-${i + 1}`, name: `Subcategory ${i + 1}`, image: '', count: (i + 1) * 6,
    description: 'Explore this collection',
}));
export const categoryGridFields = {
    columns: {
        type: 'select', label: 'Columns',
        options: [{ label: '2', value: 2 }, { label: '3', value: 3 }, { label: '4', value: 4 }, { label: '5', value: 5 }, { label: '6', value: 6 }],
    },
    gap: {
        type: 'select', label: 'Gap',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XL', value: 'xl' }, { label: '2XL', value: '2xl' }],
    },
    showImages: { type: 'radio', label: 'Show Images', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showCounts: { type: 'radio', label: 'Show Counts', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showDescriptions: { type: 'radio', label: 'Show Descriptions', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    cardStyle: {
        type: 'select', label: 'Card Style',
        options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }, { label: 'Minimal', value: 'minimal' }],
    },
};
export const CategoryGrid = {
    label: 'Category Grid',
    fields: categoryGridFields,
    defaultProps: {
        columns: 4,
        gap: 'lg',
        showImages: true,
        showCounts: true,
        showDescriptions: false,
        cardStyle: 'standard',
    },
    render: ({ columns, gap, showImages, showCounts, showDescriptions, cardStyle, categories }) => {
        const items = categories && categories.length > 0 ? categories : PLACEHOLDER;
        return (_jsx("div", { className: `grid ${COLS[columns] || COLS[4]} ${GAP[gap] || 'gap-6'}`, children: items.map((cat) => (_jsxs("a", { href: "#", className: `no-underline text-inherit ${CARD[cardStyle] || CARD.standard}`, children: [showImages && (_jsx("div", { className: "aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm", children: cat.image ? _jsx("img", { src: cat.image, alt: cat.name, className: "w-full h-full object-cover" }) : 'Image' })), _jsxs("div", { className: "p-3 text-center", children: [_jsx("div", { className: "font-medium text-gray-900", children: cat.name }), showCounts && typeof cat.count === 'number' && _jsxs("div", { className: "text-xs text-gray-500 mt-1", children: [cat.count, " products"] }), showDescriptions && cat.description && _jsx("div", { className: "text-xs text-gray-500 mt-1", children: cat.description })] })] }, cat.id))) }));
    },
};
export default CategoryGrid;
//# sourceMappingURL=CategoryGrid.js.map