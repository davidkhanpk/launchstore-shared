import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { SectionShell, sharedBackgroundFields, sharedSectionLayoutFields, } from '../../../design-system';
// Static lookups so Tailwind can see the classes at build time.
const TEXT_ALIGN = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
export const categoryHeroFields = {
    showImage: { type: 'radio', label: 'Show Image', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showTitle: { type: 'radio', label: 'Show Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showDescription: { type: 'radio', label: 'Show Description', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    style: {
        type: 'select', label: 'Style',
        options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }],
    },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    ...sharedBackgroundFields,
    ...sharedSectionLayoutFields,
};
export const CategoryHero = {
    label: 'Category Hero',
    fields: categoryHeroFields,
    defaultProps: {
        showImage: true,
        showTitle: true,
        showDescription: true,
        style: 'standard',
        backgroundColor: '#111827',
        textColor: '#ffffff',
        backgroundScheme: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overlayColor: '#000000',
        overlayOpacity: '40',
        gradientFrom: '',
        gradientTo: '',
        density: 'spacious',
        contentWidth: 'full',
        contentAlign: 'center',
        verticalAlign: 'middle',
        minHeight: 'lg',
    },
    render: ({ showImage, showTitle, showDescription, style, backgroundColor, textColor, title, description, image, backgroundScheme, backgroundImage, backgroundSize, backgroundPosition, overlayColor, overlayOpacity, gradientFrom, gradientTo, density, contentWidth, contentAlign, verticalAlign, minHeight, }) => {
        // Legacy category data supplied the banner image at render time via the
        // context `image` prop — the shared backgroundImage field wins when set.
        const resolvedBackgroundImage = backgroundImage || (showImage ? image : undefined);
        // When a scheme is active its text color flows from SectionShell; the
        // explicit textColor prop only applies on plain/gradient backgrounds.
        const fg = backgroundScheme ? undefined : (resolveColor(textColor) || textColor);
        const uppercase = style === 'luxury';
        return (_jsx(SectionShell, { backgroundScheme: backgroundScheme, backgroundImage: resolvedBackgroundImage, backgroundSize: backgroundSize, backgroundPosition: backgroundPosition, overlayColor: overlayColor, overlayOpacity: overlayOpacity, gradientFrom: gradientFrom, gradientTo: gradientTo, backgroundColor: backgroundColor, density: density, contentWidth: contentWidth, contentAlign: contentAlign, verticalAlign: verticalAlign, minHeight: minHeight, className: "overflow-hidden", contentClassName: "px-4", children: _jsxs("div", { className: `w-full ${TEXT_ALIGN[contentAlign || 'center']} ${uppercase ? 'uppercase' : ''}`, style: fg ? { color: fg } : undefined, children: [showTitle && (_jsx("h1", { className: `font-bold ${style === 'luxury' ? 'text-4xl font-light tracking-wide' : 'text-3xl'}`, children: title || '{{ category.name }}' })), showDescription && (_jsx("p", { className: "mt-2 text-base opacity-90", children: description || 'Browse our collection' }))] }) }));
    },
};
export default CategoryHero;
//# sourceMappingURL=CategoryHero.js.map