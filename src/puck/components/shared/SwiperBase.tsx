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
import { Swiper } from 'swiper/react';
import {
  Navigation, Pagination, Autoplay, EffectFade, EffectCube, EffectCoverflow, EffectFlip,
  FreeMode, Thumbs, Zoom,
} from 'swiper/modules';
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
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean; pauseOnMouseEnter?: boolean };
  zoomMaxRatio?: number;
  thumbsSwiper?: any;
  className?: string;
  /** Per-slide content rendered by caller. */
  children: React.ReactNode;
}

const ALL_EFFECTS = [EffectFade, EffectCube, EffectCoverflow, EffectFlip];
const SIMPLE_EFFECTS = [EffectFade];

const buildModules = (effect: SwiperEffect | undefined, autoplay: boolean | object | undefined, navigation: boolean, pagination: boolean, zoomMaxRatio?: number, thumbsSwiper?: any) => {
  const mods: any[] = [];
  if (navigation || pagination || thumbsSwiper) mods.push(Navigation, Pagination);
  if (autoplay) mods.push(Autoplay);
  if (effect === 'fade') mods.push(SIMPLE_EFFECTS[0]);
  else if (effect && effect !== 'slide') mods.push(...ALL_EFFECTS.filter((m, i) => ['fade', 'cube', 'coverflow', 'flip'][i]));
  if (zoomMaxRatio) mods.push(Zoom);
  if (thumbsSwiper) mods.push(Thumbs, FreeMode);
  return mods;
};

export const SwiperBase: React.FC<SwiperBaseProps> = ({
  breakpoints, spaceBetween, effect = 'slide', speed = 300, loop = false,
  freeMode = false, centeredSlides = false, navigation = false, navigationColor = '#000000',
  pagination = false, paginationType = 'bullets', paginationColor = '#3b82f6',
  autoplay = false, zoomMaxRatio, thumbsSwiper, className, children,
}) => {
  const modules = buildModules(effect, autoplay, navigation, pagination, zoomMaxRatio, thumbsSwiper);
  return (
    <>
      <Swiper
        modules={modules}
        slidesPerView={breakpoints.mobile}
        spaceBetween={spaceBetween}
        effect={effect}
        speed={speed}
        loop={loop}
        freeMode={freeMode}
        centeredSlides={centeredSlides}
        navigation={navigation}
        pagination={pagination ? { type: paginationType, clickable: true } : false}
        autoplay={typeof autoplay === 'object' ? autoplay : (autoplay ? { disableOnInteraction: false } : false)}
        zoom={zoomMaxRatio ? { maxRatio: zoomMaxRatio } : false}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null } : undefined}
        breakpoints={{
          640: { slidesPerView: breakpoints.tablet },
          1024: { slidesPerView: breakpoints.desktop },
        }}
        className={className}
      >
        {children}
      </Swiper>
      {(navigation || pagination) && (
        <style>{`
          .swiper-button-next, .swiper-button-prev { color: ${navigationColor} !important; }
          .swiper-pagination-bullet-active { background-color: ${paginationColor} !important; }
          .swiper-pagination-fraction, .swiper-pagination-progressbar-fill { color: ${paginationColor}; background-color: ${paginationColor}; }
        `}</style>
      )}
    </>
  );
};

export default SwiperBase;
