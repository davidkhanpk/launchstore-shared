import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
const HEIGHT = { small: 'h-40', medium: 'h-64', large: 'h-96' };
export const categoryHeroFields = {
    showImage: { type: 'radio', label: 'Show Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showTitle: { type: 'radio', label: 'Show Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    height: {
        type: 'select', label: 'Height',
        options: [{ label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }],
    },
    overlayOpacity: { type: 'number', label: 'Overlay Opacity (0-1)', min: 0, max: 1 },
    style: {
        type: 'select', label: 'Style',
        options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }],
    },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
};
export const CategoryHero = {
    label: 'Category Hero',
    fields: categoryHeroFields,
    defaultProps: {
        showImage: true,
        showTitle: true,
        showDescription: true,
        height: 'medium',
        overlayOpacity: 0.4,
        style: 'standard',
        backgroundColor: '#111827',
        textColor: '#ffffff',
    },
    render: ({ showImage, showTitle, showDescription, height, overlayOpacity, style, backgroundColor, textColor, title, description, image }) => {
        const bg = resolveColor(backgroundColor) || backgroundColor;
        const fg = resolveColor(textColor) || textColor;
        const uppercase = style === 'luxury';
        return (_jsxs("div", { className: `relative w-full ${HEIGHT[height] || 'h-64'} flex items-center justify-center overflow-hidden`, style: { backgroundColor: bg }, children: [showImage && image && _jsx("img", { src: image, alt: title || 'Category', className: "absolute inset-0 w-full h-full object-cover" }), showImage && _jsx("div", { className: "absolute inset-0", style: { backgroundColor: '#000', opacity: overlayOpacity ?? 0.4 } }), _jsxs("div", { className: "relative text-center px-4", style: { color: fg }, children: [showTitle && (_jsx("h1", { className: `font-bold ${style === 'luxury' ? 'text-4xl font-light tracking-wide' : 'text-3xl'} ${uppercase ? 'uppercase' : ''}`, children: title || '{{ category.name }}' })), showDescription && (_jsx("p", { className: "mt-2 text-base opacity-90", children: description || 'Browse our collection' }))] })] }));
    },
};
export default CategoryHero;
//# sourceMappingURL=CategoryHero.js.map