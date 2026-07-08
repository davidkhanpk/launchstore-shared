import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, EffectCube, EffectCoverflow, EffectFlip, FreeMode, Thumbs, Zoom, } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/zoom';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-cube';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-flip';
const ALL_EFFECTS = [EffectFade, EffectCube, EffectCoverflow, EffectFlip];
const SIMPLE_EFFECTS = [EffectFade];
const buildModules = (effect, autoplay, navigation, pagination, zoomMaxRatio, thumbsSwiper) => {
    const mods = [];
    if (navigation || pagination || thumbsSwiper)
        mods.push(Navigation, Pagination);
    if (autoplay)
        mods.push(Autoplay);
    if (effect === 'fade')
        mods.push(SIMPLE_EFFECTS[0]);
    else if (effect && effect !== 'slide')
        mods.push(...ALL_EFFECTS.filter((m, i) => ['fade', 'cube', 'coverflow', 'flip'][i]));
    if (zoomMaxRatio)
        mods.push(Zoom);
    if (thumbsSwiper)
        mods.push(Thumbs, FreeMode);
    return mods;
};
export const SwiperBase = ({ breakpoints, spaceBetween, effect = 'slide', speed = 300, loop = false, freeMode = false, centeredSlides = false, navigation = false, navigationColor = '#000000', pagination = false, paginationType = 'bullets', paginationColor = '#3b82f6', autoplay = false, zoomMaxRatio, thumbsSwiper, className, children, }) => {
    const modules = buildModules(effect, autoplay, navigation, pagination, zoomMaxRatio, thumbsSwiper);
    return (_jsxs(_Fragment, { children: [_jsx(Swiper, { modules: modules, slidesPerView: breakpoints.mobile, spaceBetween: spaceBetween, effect: effect, speed: speed, loop: loop, freeMode: freeMode, centeredSlides: centeredSlides, navigation: navigation, pagination: pagination ? { type: paginationType, clickable: true } : false, autoplay: typeof autoplay === 'object' ? autoplay : (autoplay ? { disableOnInteraction: false } : false), zoom: zoomMaxRatio ? { maxRatio: zoomMaxRatio } : false, thumbs: thumbsSwiper ? { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } : undefined, breakpoints: {
                    640: { slidesPerView: breakpoints.tablet },
                    1024: { slidesPerView: breakpoints.desktop },
                }, className: className, children: children }), (navigation || pagination) && (_jsx("style", { children: `
          .swiper-button-next, .swiper-button-prev { color: ${navigationColor} !important; }
          .swiper-pagination-bullet-active { background-color: ${paginationColor} !important; }
          .swiper-pagination-fraction, .swiper-pagination-progressbar-fill { color: ${paginationColor}; background-color: ${paginationColor}; }
        ` }))] }));
};
export default SwiperBase;
//# sourceMappingURL=SwiperBase.js.map