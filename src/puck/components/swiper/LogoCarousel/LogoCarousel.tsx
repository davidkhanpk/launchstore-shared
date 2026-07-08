import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import { logoCarouselFields } from './logocarousel.fields';
import type { LogoCarouselProps, LogoRadius } from './logocarousel.types';
import { SwiperBase } from '../../shared/SwiperBase';

const MOCK_LOGOS = [
  'https://via.placeholder.com/200x80?text=Brand+1', 'https://via.placeholder.com/200x80?text=Brand+2',
  'https://via.placeholder.com/200x80?text=Brand+3', 'https://via.placeholder.com/200x80?text=Brand+4',
  'https://via.placeholder.com/200x80?text=Brand+5', 'https://via.placeholder.com/200x80?text=Brand+6',
  'https://via.placeholder.com/200x80?text=Brand+7', 'https://via.placeholder.com/200x80?text=Brand+8',
];

const RADII: Record<LogoRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };

export const LogoCarousel: ComponentConfig<LogoCarouselProps> = {
  label: 'Logo Carousel (Swiper)',
  fields: logoCarouselFields as ComponentConfig<LogoCarouselProps>['fields'],
  defaultProps: {
    logoUrls: MOCK_LOGOS.join('\n'),
    logosPerView: 6, logosPerViewTablet: 4, logosPerViewMobile: 2,
    enableAutoplay: true, autoplaySpeed: 2000, freeMode: true, loop: true, spaceBetween: 40,
    grayscale: true, grayscaleHover: true, logoMaxHeight: 60,
    backgroundColor: '#ffffff', logoBackgroundColor: 'transparent',
    showBorder: false, borderColor: '#e5e5e5', borderRadius: 'none',
    paddingY: 60, paddingX: 20,
  },
  render: (rawProps: any) => {
    const props = rawProps as LogoCarouselProps;
    const urls = (props.logoUrls || MOCK_LOGOS.join('\n')).split('\n').filter((u) => u.trim()).map((u) => u.trim());
    const rad = RADII[(props.borderRadius as LogoRadius) || 'none'];
    return (
      <div className="logo-carousel" style={{ backgroundColor: props.backgroundColor, paddingTop: `${props.paddingY}px`, paddingBottom: `${props.paddingY}px`, paddingLeft: `${props.paddingX}px`, paddingRight: `${props.paddingX}px` }}>
        <div className="max-w-7xl mx-auto">
          <SwiperBase
            breakpoints={{ mobile: props.logosPerViewMobile, tablet: props.logosPerViewTablet, desktop: props.logosPerView }}
            spaceBetween={props.spaceBetween}
            loop={props.loop}
            freeMode={props.freeMode}
            autoplay={props.enableAutoplay ? { delay: props.autoplaySpeed, disableOnInteraction: false } : false}
            className="logo-swiper"
          >
            {urls.map((url, i) => (
              <SwiperSlide key={i}>
                <div
                  className={`logo-container flex items-center justify-center p-4 transition-all duration-300 ${rad} ${props.showBorder ? 'border-2' : ''} ${props.grayscale ? 'filter grayscale opacity-60' : ''} ${props.grayscaleHover ? 'hover:grayscale-0 hover:opacity-100' : ''}`}
                  style={{ backgroundColor: props.logoBackgroundColor, borderColor: props.borderColor, maxHeight: `${props.logoMaxHeight}px`, cursor: 'pointer' }}
                >
                  <img src={url} alt={`Logo ${i + 1}`} className="max-w-full max-h-full object-contain" style={{ maxHeight: `${props.logoMaxHeight - 32}px` }} />
                </div>
              </SwiperSlide>
            ))}
          </SwiperBase>
        </div>
      </div>
    );
  },
};

export default LogoCarousel;
