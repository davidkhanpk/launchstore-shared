import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { testimonialCarouselFields } from './testimonialcarousel.fields';
import { SwiperBase } from '../../shared/SwiperBase';
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
export const TestimonialCarousel = {
    label: 'Testimonial Carousel (Swiper)',
    fields: testimonialCarouselFields,
    defaultProps: {
        layout: 'card', cardsPerView: 3, cardsPerViewTablet: 2, cardsPerViewMobile: 1,
        effect: 'slide', showNavigation: true, navigationColor: '#1f2937',
        showPagination: true, paginationType: 'bullets', paginationColor: '#3b82f6',
        enableAutoplay: true, autoplayDelay: 5000, pauseOnHover: true,
        loop: true, spaceBetween: 24, centeredSlides: false,
        showAvatar: true, showRating: true, showRole: true,
        backgroundColor: '#f9fafb', cardBackground: '#ffffff',
        textColor: '#1f2937', accentColor: '#f59e0b',
        borderRadius: 'lg', cardShadow: 'md', paddingY: 80, paddingX: 20,
    },
    render: (rawProps) => {
        const { items = MOCK_TESTIMONIALS, ...props } = rawProps;
        const layout = props.layout || 'card';
        return (_jsx("div", { className: "testimonial-carousel", style: { backgroundColor: props.backgroundColor, paddingTop: `${props.paddingY}px`, paddingBottom: `${props.paddingY}px`, paddingLeft: `${props.paddingX}px`, paddingRight: `${props.paddingX}px` }, children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx(SwiperBase, { breakpoints: { mobile: props.cardsPerViewMobile, tablet: props.cardsPerViewTablet, desktop: props.cardsPerView }, spaceBetween: props.spaceBetween, effect: props.effect, loop: props.loop, centeredSlides: props.centeredSlides, navigation: props.showNavigation, navigationColor: props.navigationColor, pagination: props.showPagination, paginationType: props.paginationType, paginationColor: props.paginationColor, autoplay: props.enableAutoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false, children: items.map((t) => (_jsx(SwiperSlide, { children: renderSlide(t, layout, props) }, t.id))) }) }) }));
    },
};
export default TestimonialCarousel;
//# sourceMappingURL=TestimonialCarousel.js.map