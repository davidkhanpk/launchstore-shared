import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { SwiperBase } from '../../shared/SwiperBase';
import { sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const HEIGHT = { sm: 'h-[400px]', md: 'h-[500px]', lg: 'h-[600px]', xl: 'h-[700px]', full: 'h-screen' };
const CONTENT_ALIGN = { left: 'items-start text-left', center: 'items-center text-center', right: 'items-end text-right' };
const MOCK_SLIDES = [
    { title: 'Welcome to Our Store', description: 'Discover amazing products and unbeatable deals', backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8', backgroundColor: '#1e293b', textColor: '#ffffff', buttonText: 'Shop Now', buttonLink: '/shop', buttonColor: '#3b82f6', htmlContent: '' },
    { title: 'New Collection', description: 'Fresh styles for the season', backgroundImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b', backgroundColor: '#0f172a', textColor: '#ffffff', buttonText: 'Explore', buttonLink: '/collection', buttonColor: '#8b5cf6', htmlContent: '' },
    { title: 'Special Offer', description: 'Up to 50% off selected items', backgroundImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da', backgroundColor: '#7c2d12', textColor: '#ffffff', buttonText: 'Get Deal', buttonLink: '/sale', buttonColor: '#ef4444', htmlContent: '' },
];
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    slides: {
        type: 'array',
        label: 'Slides',
        arrayFields: {
            title: { type: 'text', label: 'Title' },
            description: { type: 'textarea', label: 'Description' },
            backgroundImage: { type: 'text', label: 'Background Image URL' },
            backgroundColor: { type: 'text', label: 'Background Color (hex)' },
            textColor: { type: 'text', label: 'Text Color (hex)' },
            buttonText: { type: 'text', label: 'Button Text' },
            buttonLink: { type: 'text', label: 'Button Link' },
            buttonColor: { type: 'text', label: 'Button Color (hex)' },
            htmlContent: { type: 'textarea', label: 'Custom HTML (optional)' },
        },
        defaultItemProps: {
            title: 'New Slide', description: 'Add your description here',
            backgroundImage: '', backgroundColor: '#1e293b', textColor: '#ffffff',
            buttonText: 'Learn More', buttonLink: '#', buttonColor: '#3b82f6', htmlContent: '',
        },
    },
    slideHeight: {
        type: 'select', label: 'Slide Height',
        options: [
            { label: 'Small (400px)', value: 'sm' }, { label: 'Medium (500px)', value: 'md' },
            { label: 'Large (600px)', value: 'lg' }, { label: 'Extra Large (700px)', value: 'xl' },
            { label: 'Full Screen', value: 'full' },
        ],
    },
    contentWidth: {
        type: 'select', label: 'Content Width',
        options: [{ label: 'Full Width', value: 'full' }, { label: 'Contained', value: 'contained' }],
    },
    contentPosition: {
        type: 'select', label: 'Content Position',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
};
// ── Carousel fields (component-specific) ────────────────────────────────────
const carouselFields = {
    effect: {
        type: 'select', label: 'Transition Effect',
        options: [
            { label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' }, { label: 'Cube', value: 'cube' },
            { label: 'Coverflow', value: 'coverflow' }, { label: 'Flip', value: 'flip' },
        ],
    },
    speed: { type: 'number', label: 'Transition Speed (ms)' },
    loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
    showNavigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
    navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
    navigationPosition: {
        type: 'select', label: 'Navigation Position',
        options: [{ label: 'Center', value: 'center' }, { label: 'Bottom', value: 'bottom' }],
    },
    showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
    paginationType: {
        type: 'select', label: 'Pagination Type',
        options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction (1/5)', value: 'fraction' }, { label: 'Progress Bar', value: 'progressbar' }],
    },
    paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
    enableAutoplay: { type: 'radio', label: 'Enable Autoplay', options: RADIO_YES_NO },
    autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
    pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
};
// ── Overlay fields (component-specific) ─────────────────────────────────────
const overlayFields = {
    enableOverlay: { type: 'radio', label: 'Enable Image Overlay', options: RADIO_YES_NO },
    overlayColor: { type: 'text', label: 'Overlay Color (hex)' },
    overlayOpacity: { type: 'number', label: 'Overlay Opacity (%)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...carouselFields,
    ...overlayFields,
    ...sharedLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const ContentSlider = {
    label: 'Content Slider (Swiper)',
    fields: allFields,
    defaultProps: {
        slides: MOCK_SLIDES,
        slideHeight: 'lg', contentWidth: 'contained', contentPosition: 'center',
        effect: 'fade', showNavigation: true, navigationColor: '#ffffff', navigationPosition: 'center',
        showPagination: true, paginationType: 'bullets', paginationColor: '#ffffff',
        enableAutoplay: true, autoplayDelay: 5000, pauseOnHover: true,
        loop: true, speed: 600,
        enableOverlay: true, overlayColor: '#000000', overlayOpacity: 40,
        ...defaultLayoutProps,
    },
    render: (rawProps) => {
        const props = rawProps;
        const heightCls = HEIGHT[props.slideHeight || 'lg'] || HEIGHT.lg;
        const alignCls = CONTENT_ALIGN[props.contentPosition || 'center'] || CONTENT_ALIGN.center;
        const slides = (props.slides && props.slides.length > 0) ? props.slides : MOCK_SLIDES;
        const wrapperClassName = [
            'content-slider',
            buildLayoutClasses({
                marginTop: rawProps.marginTop,
                marginBottom: rawProps.marginBottom,
                paddingX: rawProps.paddingX,
                paddingY: rawProps.paddingY,
            }),
        ].filter(Boolean).join(' ');
        return (_jsx("div", { className: wrapperClassName, children: _jsx(SwiperBase, { breakpoints: { mobile: 1, tablet: 1, desktop: 1 }, spaceBetween: 0, effect: props.effect, speed: props.speed, loop: props.loop, navigation: props.showNavigation, navigationColor: props.navigationColor, pagination: props.showPagination, paginationType: props.paginationType, paginationColor: props.paginationColor, autoplay: props.enableAutoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false, className: heightCls, children: slides.map((slide, i) => (_jsx(SwiperSlide, { children: _jsxs("div", { className: "slide-content relative w-full h-full flex flex-col justify-center", style: {
                            backgroundColor: slide.backgroundColor,
                            backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : undefined,
                            backgroundSize: 'cover', backgroundPosition: 'center',
                        }, children: [props.enableOverlay && slide.backgroundImage && (_jsx("div", { className: "absolute inset-0", style: { backgroundColor: props.overlayColor, opacity: props.overlayOpacity / 100 } })), _jsx("div", { className: `relative z-10 ${props.contentWidth === 'contained' ? 'container mx-auto px-4' : 'px-8'}`, children: _jsx("div", { className: `flex flex-col ${alignCls} gap-6 max-w-2xl ${props.contentPosition === 'center' ? 'mx-auto' : ''}`, children: slide.htmlContent ? (_jsx("div", { dangerouslySetInnerHTML: { __html: slide.htmlContent }, style: { color: slide.textColor } })) : (_jsxs(_Fragment, { children: [_jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-bold", style: { color: slide.textColor }, children: slide.title }), _jsx("p", { className: "text-lg md:text-xl lg:text-2xl", style: { color: slide.textColor }, children: slide.description }), slide.buttonText && (_jsx("div", { children: _jsx("a", { href: slide.buttonLink, className: "inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-transform hover:scale-105", style: { backgroundColor: slide.buttonColor, color: '#ffffff' }, children: slide.buttonText }) }))] })) }) })] }) }, i))) }) }));
    },
};
export default ContentSlider;
//# sourceMappingURL=ContentSlider.js.map