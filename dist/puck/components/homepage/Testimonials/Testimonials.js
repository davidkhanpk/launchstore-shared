'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { createAccordionFields } from '../../../design-system';
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
// ── Content fields (section header + display toggles) ───────────────────────
const contentFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
    showTitle: {
        type: 'radio', label: 'Show Section Title',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    layout: {
        type: 'select', label: 'Testimonial Layout',
        options: [
            { label: 'Card', value: 'card' },
            { label: 'Quote', value: 'quote' },
            { label: 'Minimal', value: 'minimal' },
        ],
    },
    maxTestimonials: { type: 'number', label: 'Maximum Testimonials', min: 1, max: 20 },
    showAvatar: {
        type: 'radio', label: 'Show Avatar',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showName: {
        type: 'radio', label: 'Show Customer Name',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showRole: {
        type: 'radio', label: 'Show Role/Company',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showRating: {
        type: 'radio', label: 'Show Star Rating',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showDate: {
        type: 'radio', label: 'Show Date',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
};
// ── Layout fields (display mode + grid + carousel) ──────────────────────────
const layoutFields = {
    displayMode: {
        type: 'select', label: 'Display Mode',
        options: [
            { label: 'Grid', value: 'grid' },
            { label: 'Carousel (Swiper)', value: 'carousel' },
        ],
    },
    columns: { type: 'number', label: 'Columns (Grid)', min: 1, max: 4 },
    slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)', min: 1, max: 3 },
    slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)', min: 1, max: 2 },
    slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)', min: 1, max: 1 },
    spaceBetween: { type: 'number', label: 'Space Between Slides (px)', min: 0, max: 100 },
    autoplay: {
        type: 'radio', label: 'Auto-play Carousel',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    autoplayDelay: { type: 'number', label: 'Auto-play Delay (ms)', min: 2000, max: 10000 },
    loop: {
        type: 'radio', label: 'Loop Carousel',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    navigation: {
        type: 'radio', label: 'Show Navigation Arrows',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    pagination: {
        type: 'radio', label: 'Show Pagination',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    effect: {
        type: 'select', label: 'Transition Effect',
        options: [
            { label: 'Slide', value: 'slide' },
            { label: 'Fade', value: 'fade' },
        ],
    },
};
// ── Color fields ────────────────────────────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    cardBackground: { type: 'text', label: 'Card Background (hex or theme token)' },
    accentColor: { type: 'text', label: 'Accent Color (hex or theme token)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...layoutFields,
    ...colorFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['sectionTitle', 'sectionSubtitle', 'showTitle', 'layout', 'maxTestimonials', 'showAvatar', 'showName', 'showRole', 'showRating', 'showDate'],
        },
        {
            label: 'Layout',
            fieldKeys: ['displayMode', 'columns', 'slidesPerView', 'slidesPerViewTablet', 'slidesPerViewMobile', 'spaceBetween', 'autoplay', 'autoplayDelay', 'loop', 'navigation', 'pagination', 'effect'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'textColor', 'cardBackground', 'accentColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Testimonials = {
    label: 'Testimonials',
    fields: accordionFields,
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