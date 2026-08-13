import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields } from '../../../design-system';
const HEIGHT_CLASSES = {
    sm: 'h-[400px]',
    md: 'h-[500px]',
    lg: 'h-[600px]',
    xl: 'h-[700px]',
    full: 'h-screen',
};
const TEXT_ALIGN_CLASSES = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};
const VERTICAL_JUSTIFY = {
    top: 'justify-start',
    center: 'justify-center',
    bottom: 'justify-end',
};
const HORIZONTAL_ITEMS = {
    left: 'items-start',
    center: 'items-center',
    right: 'items-end',
};
const VERTICAL_ITEMS = {
    top: 'items-start',
    center: 'items-center',
    bottom: 'items-end',
};
const BUTTON_JUSTIFY = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
};
// ── Content fields (title, subtitle, description, buttons, image) ───────────
const contentFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    description: { type: 'textarea', label: 'Description' },
    showPrimaryButton: {
        type: 'radio', label: 'Show Primary Button',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    primaryButtonText: { type: 'text', label: 'Primary Button Text' },
    primaryButtonLink: { type: 'text', label: 'Primary Button Link' },
    showSecondaryButton: {
        type: 'radio', label: 'Show Secondary Button',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    secondaryButtonText: { type: 'text', label: 'Secondary Button Text' },
    secondaryButtonLink: { type: 'text', label: 'Secondary Button Link' },
    showImage: {
        type: 'radio', label: 'Show Image',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    imageUrl: { type: 'text', label: 'Image URL' },
    imagePosition: {
        type: 'select', label: 'Image Position',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Right', value: 'right' },
            { label: 'Background', value: 'background' },
        ],
    },
    imageAlt: { type: 'text', label: 'Image Alt Text' },
};
// ── Layout fields (height + alignment) ──────────────────────────────────────
const layoutFields = {
    height: {
        type: 'select', label: 'Hero Height',
        options: [
            { label: 'Small (400px)', value: 'sm' },
            { label: 'Medium (500px)', value: 'md' },
            { label: 'Large (600px)', value: 'lg' },
            { label: 'Extra Large (700px)', value: 'xl' },
            { label: 'Full Screen', value: 'full' },
        ],
    },
    contentAlignment: {
        type: 'select', label: 'Horizontal Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    verticalAlignment: {
        type: 'select', label: 'Vertical Alignment',
        options: [
            { label: 'Top', value: 'top' },
            { label: 'Center', value: 'center' },
            { label: 'Bottom', value: 'bottom' },
        ],
    },
};
// ── Style / color fields (text color, overlay, background, gradient) ───────
const styleFields = {
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    overlayOpacity: { type: 'number', label: 'Overlay Opacity (0-100)', min: 0, max: 100 },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    backgroundGradient: {
        type: 'radio', label: 'Use Gradient Background',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    gradientFrom: { type: 'text', label: 'Gradient From (hex or theme token)' },
    gradientTo: { type: 'text', label: 'Gradient To (hex or theme token)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...layoutFields,
    ...styleFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: [
                'title', 'subtitle', 'description',
                'showPrimaryButton', 'primaryButtonText', 'primaryButtonLink',
                'showSecondaryButton', 'secondaryButtonText', 'secondaryButtonLink',
                'showImage', 'imageUrl', 'imagePosition', 'imageAlt',
            ],
        },
        {
            label: 'Layout',
            fieldKeys: ['height', 'contentAlignment', 'verticalAlignment'],
        },
        {
            label: 'Style',
            fieldKeys: ['textColor', 'overlayOpacity', 'backgroundColor', 'backgroundGradient', 'gradientFrom', 'gradientTo'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const HeroSection = {
    label: 'Hero Section',
    fields: accordionFields,
    defaultProps: {
        title: 'Welcome to Our Store',
        subtitle: 'Discover Amazing Products',
        description: 'Shop the latest trends and exclusive deals on premium products.',
        showPrimaryButton: true,
        primaryButtonText: 'Shop Now',
        primaryButtonLink: '/products',
        showSecondaryButton: true,
        secondaryButtonText: 'Learn More',
        secondaryButtonLink: '/about',
        showImage: true,
        imageUrl: 'https://via.placeholder.com/1200x600?text=Hero+Image',
        imagePosition: 'right',
        imageAlt: 'Hero Image',
        height: 'lg',
        contentAlignment: 'left',
        verticalAlignment: 'center',
        textColor: '#ffffff',
        overlayOpacity: 40,
        backgroundColor: '#000000',
        backgroundGradient: true,
        gradientFrom: '#667eea',
        gradientTo: '#764ba2',
    },
    render: (props) => {
        const { height = 'lg', contentAlignment = 'left', verticalAlignment = 'center', imagePosition = 'right', } = props;
        const heightClass = HEIGHT_CLASSES[height];
        const textAlignClass = TEXT_ALIGN_CLASSES[contentAlignment];
        const isBackground = imagePosition === 'background';
        const flexAlignment = isBackground
            ? `${VERTICAL_JUSTIFY[verticalAlignment]} ${HORIZONTAL_ITEMS[contentAlignment]}`
            : `${VERTICAL_ITEMS[verticalAlignment]}`;
        const contentJustify = VERTICAL_JUSTIFY[verticalAlignment];
        const backgroundStyle = props.backgroundGradient
            ? { background: `linear-gradient(135deg, ${props.gradientFrom}, ${props.gradientTo})` }
            : { backgroundColor: props.backgroundColor };
        return (_jsxs("div", { className: `hero-section relative ${heightClass} overflow-hidden`, style: backgroundStyle, children: [props.showImage && imagePosition === 'background' && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: { backgroundImage: `url(${props.imageUrl})` } }), _jsx("div", { className: "absolute inset-0 bg-black", style: { opacity: props.overlayOpacity / 100 } })] })), _jsx("div", { className: "container mx-auto h-full px-4 relative z-10", children: _jsxs("div", { className: `h-full flex ${imagePosition === 'left'
                            ? 'flex-row-reverse'
                            : imagePosition === 'right'
                                ? 'flex-row'
                                : 'flex-col'} gap-8 ${textAlignClass} ${flexAlignment}`, children: [_jsxs("div", { className: `flex flex-col ${contentJustify} ${HORIZONTAL_ITEMS[contentAlignment]} ${imagePosition !== 'background' ? 'w-1/2' : 'w-full'}`, children: [props.subtitle && (_jsx("p", { className: "text-sm font-semibold uppercase tracking-wide mb-2", style: { color: props.textColor, opacity: 0.8 }, children: props.subtitle })), _jsx("h1", { className: "text-5xl font-bold mb-4", style: { color: props.textColor }, children: props.title }), props.description && (_jsx("p", { className: `text-xl mb-8 max-w-2xl ${contentAlignment === 'center'
                                            ? 'mx-auto'
                                            : contentAlignment === 'right'
                                                ? 'ml-auto'
                                                : ''}`, style: { color: props.textColor, opacity: 0.9 }, children: props.description })), _jsxs("div", { className: `flex gap-4 ${BUTTON_JUSTIFY[contentAlignment]}`, children: [props.showPrimaryButton && (_jsx("a", { href: props.primaryButtonLink, className: "px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition", children: props.primaryButtonText })), props.showSecondaryButton && (_jsx("a", { href: props.secondaryButtonLink, className: "px-8 py-3 border-2 font-semibold rounded-lg hover:bg-white/10 transition", style: {
                                                    borderColor: props.textColor,
                                                    color: props.textColor,
                                                }, children: props.secondaryButtonText }))] })] }), props.showImage && imagePosition !== 'background' && (_jsx("div", { className: "w-1/2 flex items-center justify-center", children: _jsx("img", { src: props.imageUrl, alt: props.imageAlt, className: "max-w-full h-auto rounded-lg shadow-2xl" }) }))] }) })] }));
    },
};
export default HeroSection;
//# sourceMappingURL=Hero.js.map