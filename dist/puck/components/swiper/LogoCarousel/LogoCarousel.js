import { jsx as _jsx } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { logoCarouselFields } from './logocarousel.fields';
import { SwiperBase } from '../../shared/SwiperBase';
const MOCK_LOGOS = [
    'https://via.placeholder.com/200x80?text=Brand+1', 'https://via.placeholder.com/200x80?text=Brand+2',
    'https://via.placeholder.com/200x80?text=Brand+3', 'https://via.placeholder.com/200x80?text=Brand+4',
    'https://via.placeholder.com/200x80?text=Brand+5', 'https://via.placeholder.com/200x80?text=Brand+6',
    'https://via.placeholder.com/200x80?text=Brand+7', 'https://via.placeholder.com/200x80?text=Brand+8',
];
const RADII = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };
export const LogoCarousel = {
    label: 'Logo Carousel (Swiper)',
    fields: logoCarouselFields,
    defaultProps: {
        logoUrls: MOCK_LOGOS.join('\n'),
        logosPerView: 6, logosPerViewTablet: 4, logosPerViewMobile: 2,
        enableAutoplay: true, autoplaySpeed: 2000, freeMode: true, loop: true, spaceBetween: 40,
        grayscale: true, grayscaleHover: true, logoMaxHeight: 60,
        backgroundColor: '#ffffff', logoBackgroundColor: 'transparent',
        showBorder: false, borderColor: '#e5e5e5', borderRadius: 'none',
        paddingY: 60, paddingX: 20,
    },
    render: (rawProps) => {
        const props = rawProps;
        const urls = (props.logoUrls || MOCK_LOGOS.join('\n')).split('\n').filter((u) => u.trim()).map((u) => u.trim());
        const rad = RADII[props.borderRadius || 'none'];
        return (_jsx("div", { className: "logo-carousel", style: { backgroundColor: props.backgroundColor, paddingTop: `${props.paddingY}px`, paddingBottom: `${props.paddingY}px`, paddingLeft: `${props.paddingX}px`, paddingRight: `${props.paddingX}px` }, children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx(SwiperBase, { breakpoints: { mobile: props.logosPerViewMobile, tablet: props.logosPerViewTablet, desktop: props.logosPerView }, spaceBetween: props.spaceBetween, loop: props.loop, freeMode: props.freeMode, autoplay: props.enableAutoplay ? { delay: props.autoplaySpeed, disableOnInteraction: false } : false, className: "logo-swiper", children: urls.map((url, i) => (_jsx(SwiperSlide, { children: _jsx("div", { className: `logo-container flex items-center justify-center p-4 transition-all duration-300 ${rad} ${props.showBorder ? 'border-2' : ''} ${props.grayscale ? 'filter grayscale opacity-60' : ''} ${props.grayscaleHover ? 'hover:grayscale-0 hover:opacity-100' : ''}`, style: { backgroundColor: props.logoBackgroundColor, borderColor: props.borderColor, maxHeight: `${props.logoMaxHeight}px`, cursor: 'pointer' }, children: _jsx("img", { src: url, alt: `Logo ${i + 1}`, className: "max-w-full max-h-full object-contain", style: { maxHeight: `${props.logoMaxHeight - 32}px` } }) }) }, i))) }) }) }));
    },
};
export default LogoCarousel;
//# sourceMappingURL=LogoCarousel.js.map