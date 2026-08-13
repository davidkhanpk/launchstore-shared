import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { SwiperBase } from '../../shared/SwiperBase';
import { createAccordionFields, sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
const RADII = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', '2xl': 'rounded-2xl',
};
const SHADOWS = {
    none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};
const MOCK_TESTIMONIALS = [
    { id: '1', name: 'Sarah Johnson', role: 'Verified Buyer', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, text: 'Absolutely love this product! The quality exceeded my expectations and shipping was super fast.' },
    { id: '2', name: 'Michael Chen', role: 'Happy Customer', avatar: 'https://i.pravatar.cc/150?img=2', rating: 5, text: 'Best purchase I have made this year. Customer service was exceptional.' },
    { id: '3', name: 'Emma Williams', role: 'Repeat Customer', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4, text: 'Great product at a reasonable price. Highly recommend to anyone looking for quality.' },
    { id: '4', name: 'David Martinez', role: 'Verified Buyer', avatar: 'https://i.pravatar.cc/150?img=4', rating: 5, text: 'Five stars! The attention to detail and craftsmanship is evident in every aspect.' },
    { id: '5', name: 'Lisa Anderson', role: 'Satisfied Customer', avatar: 'https://i.pravatar.cc/150?img=5', rating: 5, text: 'I was skeptical at first, but this product has completely changed my mind. Worth every penny!' },
];
const StarSvg = ({ size = 20, filled }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: filled ? 'currentColor' : 'none', stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }));
const Stars = ({ rating, color }) => (_jsx("div", { className: "flex gap-1", children: [1, 2, 3, 4, 5].map((s) => (_jsx("span", { style: { color: s <= rating ? color : '#d1d5db' }, children: _jsx(StarSvg, { size: 20, filled: s <= rating }) }, s))) }));
const renderSlide = (testimonial, layout, props) => {
    const rad = RADII[props.borderRadius || 'lg'];
    const sh = SHADOWS[props.cardShadow || 'md'];
    if (layout === 'quote') {
        return (_jsxs("div", { className: `p-8 h-full flex flex-col ${rad} ${sh} border-l-4`, style: { backgroundColor: props.cardBackground, color: props.textColor, borderLeftColor: props.accentColor }, children: [_jsx("svg", { className: "w-10 h-10 mb-4 opacity-30", fill: props.accentColor, viewBox: "0 0 24 24", children: _jsx("path", { d: "M6.5 10c-1.5 0-2.5 1-2.5 2.5S5 15 6.5 15 9 14 9 12.5 8 10 6.5 10zm11 0c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5-1-2.5-2.5-2.5z" }) }), _jsx("p", { className: "text-lg mb-6 flex-1 leading-relaxed italic", children: testimonial.text }), props.showRating && _jsx("div", { className: "mb-4", children: _jsx(Stars, { rating: testimonial.rating, color: props.accentColor }) }), _jsxs("div", { className: "flex items-center gap-3", children: [props.showAvatar && _jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-14 h-14 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("div", { className: "font-bold text-lg", children: testimonial.name }), props.showRole && _jsx("div", { className: "opacity-70", children: testimonial.role })] })] })] }));
    }
    if (layout === 'minimal') {
        return (_jsxs("div", { className: `p-6 h-full flex flex-col text-center ${rad}`, style: { backgroundColor: props.cardBackground, color: props.textColor }, children: [props.showAvatar && _jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-20 h-20 rounded-full object-cover mx-auto mb-4" }), props.showRating && _jsx("div", { className: "mb-4 flex justify-center", children: _jsx(Stars, { rating: testimonial.rating, color: props.accentColor }) }), _jsx("p", { className: "text-base mb-4 flex-1 leading-relaxed", children: testimonial.text }), _jsx("div", { className: "font-semibold", children: testimonial.name }), props.showRole && _jsx("div", { className: "text-sm opacity-70", children: testimonial.role })] }));
    }
    // card
    return (_jsxs("div", { className: `p-6 h-full flex flex-col ${rad} ${sh}`, style: { backgroundColor: props.cardBackground, color: props.textColor }, children: [props.showRating && _jsx("div", { className: "mb-4", children: _jsx(Stars, { rating: testimonial.rating, color: props.accentColor }) }), _jsxs("p", { className: "text-base mb-6 flex-1 leading-relaxed", children: ["\"", testimonial.text, "\""] }), _jsxs("div", { className: "flex items-center gap-3", children: [props.showAvatar && _jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-12 h-12 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: testimonial.name }), props.showRole && _jsx("div", { className: "text-sm opacity-70", children: testimonial.role })] })] })] }));
};
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    layout: {
        type: 'select', label: 'Layout Style',
        options: [{ label: 'Card', value: 'card' }, { label: 'Quote', value: 'quote' }, { label: 'Minimal', value: 'minimal' }],
    },
    showAvatar: { type: 'radio', label: 'Show Avatar', options: RADIO_YES_NO },
    showRating: { type: 'radio', label: 'Show Rating', options: RADIO_YES_NO },
    showRole: { type: 'radio', label: 'Show Role/Title', options: RADIO_YES_NO },
};
// ── Carousel fields (component-specific) ────────────────────────────────────
const carouselFields = {
    cardsPerView: { type: 'number', label: 'Cards Per View (Desktop)' },
    cardsPerViewTablet: { type: 'number', label: 'Cards Per View (Tablet)' },
    cardsPerViewMobile: { type: 'number', label: 'Cards Per View (Mobile)' },
    effect: { type: 'select', label: 'Transition Effect', options: [{ label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' }] },
    showNavigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
    navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
    showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
    paginationType: { type: 'select', label: 'Pagination Type', options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction', value: 'fraction' }] },
    paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
    enableAutoplay: { type: 'radio', label: 'Enable Autoplay', options: RADIO_YES_NO },
    autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
    pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
    loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
    spaceBetween: { type: 'number', label: 'Space Between Cards (px)' },
    centeredSlides: { type: 'radio', label: 'Centered Slides', options: RADIO_YES_NO },
};
// ── Color fields (component-specific) ───────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex)' },
    cardBackground: { type: 'text', label: 'Card Background Color (hex)' },
    textColor: { type: 'text', label: 'Text Color (hex)' },
    accentColor: { type: 'text', label: 'Accent Color (ratings/quotes)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' }, { label: '2XL', value: '2xl' },
        ],
    },
    cardShadow: {
        type: 'select', label: 'Card Shadow',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...carouselFields,
    ...colorFields,
    ...sharedLayoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['layout', 'showAvatar', 'showRating', 'showRole'],
        },
        {
            label: 'Carousel',
            fieldKeys: [
                'cardsPerView', 'cardsPerViewTablet', 'cardsPerViewMobile', 'effect',
                'showNavigation', 'navigationColor', 'showPagination', 'paginationType', 'paginationColor',
                'enableAutoplay', 'autoplayDelay', 'pauseOnHover', 'loop', 'spaceBetween', 'centeredSlides',
            ],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'cardBackground', 'textColor', 'accentColor', 'borderRadius', 'cardShadow'],
        },
        {
            label: 'Layout',
            fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const TestimonialCarousel = {
    label: 'Testimonial Carousel (Swiper)',
    fields: accordionFields,
    defaultProps: {
        layout: 'card', cardsPerView: 3, cardsPerViewTablet: 2, cardsPerViewMobile: 1,
        effect: 'slide', showNavigation: true, navigationColor: '#1f2937',
        showPagination: true, paginationType: 'bullets', paginationColor: '#3b82f6',
        enableAutoplay: true, autoplayDelay: 5000, pauseOnHover: true,
        loop: true, spaceBetween: 24, centeredSlides: false,
        showAvatar: true, showRating: true, showRole: true,
        backgroundColor: '#f9fafb', cardBackground: '#ffffff',
        textColor: '#1f2937', accentColor: '#f59e0b',
        borderRadius: 'lg', cardShadow: 'md',
        ...defaultLayoutProps,
        paddingY: 'xl',
        paddingX: 'md',
    },
    render: (rawProps) => {
        const { items = MOCK_TESTIMONIALS, ...props } = rawProps;
        const layout = props.layout || 'card';
        const wrapperClassName = [
            'testimonial-carousel',
            buildLayoutClasses({ marginTop: props.marginTop, marginBottom: props.marginBottom, paddingX: props.paddingX, paddingY: props.paddingY }),
        ].filter(Boolean).join(' ');
        const wrapperStyle = {
            backgroundColor: props.backgroundColor,
        };
        return (_jsx("div", { className: wrapperClassName, style: wrapperStyle, children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx(SwiperBase, { breakpoints: { mobile: props.cardsPerViewMobile, tablet: props.cardsPerViewTablet, desktop: props.cardsPerView }, spaceBetween: props.spaceBetween, effect: props.effect, loop: props.loop, centeredSlides: props.centeredSlides, navigation: props.showNavigation, navigationColor: props.navigationColor, pagination: props.showPagination, paginationType: props.paginationType, paginationColor: props.paginationColor, autoplay: props.enableAutoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false, children: items.map((t) => (_jsx(SwiperSlide, { children: renderSlide(t, layout, props) }, t.id))) }) }) }));
    },
};
export default TestimonialCarousel;
//# sourceMappingURL=TestimonialCarousel.js.map