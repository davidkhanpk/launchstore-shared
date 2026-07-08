/**
 * Shared internal helper for all swiper/* components.
 *
 * Wraps the Swiper React component with a uniform prop-driven
 * config (slides per view at 3 breakpoints, navigation,
 * pagination, autoplay, loop, free mode, centered slides,
 * effect + speed, breakpoints-based slidesPerView).
 *
 * Children rendering is delegated to the caller via the
 * `children` (render-prop) callback: each slide is computed
 * by the caller, which can hand any JSX.
 *
 * Side-effect imports (`swiper/css`, `swiper/css/...`) are
 * imported at this level so all consumers get the styles.
 * Future D-2 optimization: move to global pre-import in
 * consumers' `_app.tsx`.
 */
import React from 'react';
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
export type SwiperEffect = 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
export type SwiperPaginationType = 'bullets' | 'fraction' | 'progressbar';
export interface SwiperBaseBreakpoints {
    mobile: number;
    tablet: number;
    desktop: number;
    /** Custom <style> block to attach. Caller provides the JSX children. */
    css?: React.ReactNode;
}
export interface SwiperBaseProps {
    breakpoints: SwiperBaseBreakpoints;
    spaceBetween: number;
    effect?: SwiperEffect;
    speed?: number;
    loop?: boolean;
    freeMode?: boolean;
    centeredSlides?: boolean;
    navigation?: boolean;
    navigationColor?: string;
    pagination?: boolean;
    paginationType?: SwiperPaginationType;
    paginationColor?: string;
    autoplay?: boolean | {
        delay?: number;
        disableOnInteraction?: boolean;
        pauseOnMouseEnter?: boolean;
    };
    zoomMaxRatio?: number;
    thumbsSwiper?: any;
    className?: string;
    /** Per-slide content rendered by caller. */
    children: React.ReactNode;
}
export declare const SwiperBase: React.FC<SwiperBaseProps>;
export default SwiperBase;
//# sourceMappingURL=SwiperBase.d.ts.map