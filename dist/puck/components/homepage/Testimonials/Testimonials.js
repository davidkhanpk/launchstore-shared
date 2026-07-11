'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { testimonialsFields } from './testimonials.fields';
const RADIUS_CLASSES = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
};
const MOCK_TESTIMONIALS = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Fashion Designer',
        avatar: 'https://i.pravatar.cc/150?img=1',
        rating: 5,
        date: '2 days ago',
        text: 'Absolutely love the quality and fast shipping! The products exceeded my expectations. Will definitely order again.',
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Tech Entrepreneur',
        avatar: 'https://i.pravatar.cc/150?img=2',
        rating: 5,
        date: '1 week ago',
        text: "Best customer service I've ever experienced. They went above and beyond to make sure I was satisfied with my purchase.",
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
        role: 'Marketing Manager',
        avatar: 'https://i.pravatar.cc/150?img=3',
        rating: 4,
        date: '2 weeks ago',
        text: 'Great selection of products and very user-friendly website. The checkout process was smooth and hassle-free.',
    },
    {
        id: 4,
        name: 'James Wilson',
        role: 'Software Developer',
        avatar: 'https://i.pravatar.cc/150?img=4',
        rating: 5,
        date: '3 weeks ago',
        text: "I'm impressed by the attention to detail and quality. The packaging was beautiful too!",
    },
];
function renderStars(rating) {
    return (_jsx("div", { className: "flex gap-1", children: Array.from({ length: 5 }).map((_, i) => (_jsx("span", { className: i < rating ? 'text-yellow-400' : 'text-gray-300', children: "\u2605" }, i))) }));
}
export const Testimonials = {
    label: 'Testimonials',
    fields: testimonialsFields,
    defaultProps: {
        sectionTitle: 'What Our Customers Say',
        sectionSubtitle: 'Real reviews from real customers',
        showTitle: true,
        displayMode: 'carousel',
        layout: 'card',
        columns: 3,
        maxTestimonials: 6,
        slidesPerView: 2,
        slidesPerViewTablet: 1,
        slidesPerViewMobile: 1,
        spaceBetween: 32,
        autoplay: true,
        autoplayDelay: 5000,
        loop: true,
        navigation: true,
        pagination: true,
        effect: 'slide',
        showAvatar: true,
        showName: true,
        showRole: true,
        showRating: true,
        showDate: false,
        backgroundColor: '#f9fafb',
        textColor: '#000000',
        cardBackground: '#ffffff',
        accentColor: '#3b82f6',
        borderRadius: 'lg',
    },
    render: (props) => {
        const visibleTestimonials = MOCK_TESTIMONIALS.slice(0, props.maxTestimonials);
        const renderTestimonial = (testimonial) => (_jsxs("div", { className: `testimonial-card p-6 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} shadow-lg`, style: { backgroundColor: props.cardBackground }, children: [props.showRating && _jsx("div", { className: "mb-4", children: renderStars(testimonial.rating) }), props.layout === 'quote' && (_jsx("div", { className: "text-6xl mb-4", style: { color: props.accentColor, opacity: 0.2 }, children: "\u201C" })), _jsxs("p", { className: "text-lg mb-6 italic", style: { color: props.textColor }, children: ["\u201C", testimonial.text, "\u201D"] }), _jsxs("div", { className: "flex items-center gap-4", children: [props.showAvatar && (_jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-12 h-12 rounded-full" })), _jsxs("div", { children: [props.showName && (_jsx("p", { className: "font-bold", style: { color: props.textColor }, children: testimonial.name })), props.showRole && (_jsx("p", { className: "text-sm opacity-70", style: { color: props.textColor }, children: testimonial.role })), props.showDate && (_jsx("p", { className: "text-xs opacity-50 mt-1", style: { color: props.textColor }, children: testimonial.date }))] })] })] }, testimonial.id));
        return (_jsx("div", { className: "testimonials-section py-16", style: { backgroundColor: props.backgroundColor }, children: _jsxs("div", { className: "container mx-auto px-4", children: [props.showTitle && (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: props.textColor }, children: props.sectionTitle }), props.sectionSubtitle && (_jsx("p", { className: "text-lg opacity-80", style: { color: props.textColor }, children: props.sectionSubtitle }))] })), props.displayMode === 'grid' ? (_jsx("div", { className: "grid gap-8", style: { gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }, children: visibleTestimonials.map(renderTestimonial) })) : (_jsx(Swiper, { modules: [Navigation, Pagination, Autoplay, EffectFade], slidesPerView: props.slidesPerViewMobile, spaceBetween: props.spaceBetween, navigation: props.navigation, pagination: props.pagination ? { clickable: true } : false, autoplay: props.autoplay
                            ? { delay: props.autoplayDelay, disableOnInteraction: false }
                            : false, loop: props.loop, effect: props.effect, breakpoints: {
                            640: { slidesPerView: props.slidesPerViewTablet },
                            1024: { slidesPerView: props.slidesPerView },
                        }, className: "testimonials-swiper", children: visibleTestimonials.map((testimonial) => (_jsx(SwiperSlide, { children: renderTestimonial(testimonial) }, testimonial.id))) }))] }) }));
    },
};
export default Testimonials;
//# sourceMappingURL=Testimonials.js.map