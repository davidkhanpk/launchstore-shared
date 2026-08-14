import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import type { LogoCarouselProps, LogoRadius } from './logocarousel.types';
import { SwiperBase } from '../../shared/SwiperBase';
import {
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const MOCK_LOGOS = [
  'https://via.placeholder.com/200x80?text=Brand+1', 'https://via.placeholder.com/200x80?text=Brand+2',
  'https://via.placeholder.com/200x80?text=Brand+3', 'https://via.placeholder.com/200x80?text=Brand+4',
  'https://via.placeholder.com/200x80?text=Brand+5', 'https://via.placeholder.com/200x80?text=Brand+6',
  'https://via.placeholder.com/200x80?text=Brand+7', 'https://via.placeholder.com/200x80?text=Brand+8',
];

const RADII: Record<LogoRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  logoUrls: { type: 'textarea' as const, label: 'Logo URLs (one per line)' },
  logosPerView: { type: 'number' as const, label: 'Logos Per View (Desktop)' },
  logosPerViewTablet: { type: 'number' as const, label: 'Logos Per View (Tablet)' },
  logosPerViewMobile: { type: 'number' as const, label: 'Logos Per View (Mobile)' },
  logoMaxHeight: { type: 'number' as const, label: 'Logo Max Height (px)' },
};

// ── Carousel fields (component-specific) ────────────────────────────────────

const carouselFields = {
  enableAutoplay: { type: 'radio' as const, label: 'Enable Autoplay', options: RADIO_YES_NO },
  autoplaySpeed: { type: 'number' as const, label: 'Autoplay Speed (ms)' },
  freeMode: { type: 'radio' as const, label: 'Free Mode (smooth scroll)', options: RADIO_YES_NO },
  loop: { type: 'radio' as const, label: 'Infinite Loop', options: RADIO_YES_NO },
  spaceBetween: { type: 'number' as const, label: 'Space Between Logos (px)' },
};

// ── Appearance fields (component-specific) ──────────────────────────────────

const appearanceFields = {
  grayscale: { type: 'radio' as const, label: 'Grayscale Logos', options: RADIO_YES_NO },
  grayscaleHover: { type: 'radio' as const, label: 'Color on Hover', options: RADIO_YES_NO },
  showBorder: { type: 'radio' as const, label: 'Show Logo Border', options: RADIO_YES_NO },
};

// ── Color fields (component-specific) ───────────────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Section Background Color (hex)' },
  logoBackgroundColor: { type: 'text' as const, label: 'Logo Background Color (hex)' },
  borderColor: { type: 'text' as const, label: 'Border Color (hex)' },
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }, { label: 'Full', value: 'full' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...carouselFields,
  ...appearanceFields,
  ...colorFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const LogoCarousel: ComponentConfig<LogoCarouselProps> = {
  label: 'Logo Carousel (Swiper)',
  fields: allFields as any,
  defaultProps: {
    logoUrls: MOCK_LOGOS.join('\n'),
    logosPerView: 6, logosPerViewTablet: 4, logosPerViewMobile: 2,
    enableAutoplay: true, autoplaySpeed: 2000, freeMode: true, loop: true, spaceBetween: 40,
    grayscale: true, grayscaleHover: true, logoMaxHeight: 60,
    backgroundColor: '#ffffff', logoBackgroundColor: 'transparent',
    showBorder: false, borderColor: '#e5e5e5', borderRadius: 'none',
    ...defaultLayoutProps,
    paddingY: 'xl',
    paddingX: 'md',
  } as LogoCarouselProps,
  render: (rawProps: any) => {
    const props = rawProps as LogoCarouselProps;
    const urls = (props.logoUrls || MOCK_LOGOS.join('\n')).split('\n').filter((u) => u.trim()).map((u) => u.trim());
    const rad = RADII[(props.borderRadius as LogoRadius) || 'none'];

    const wrapperClassName = [
      'logo-carousel',
      buildLayoutClasses({ marginTop: props.marginTop, marginBottom: props.marginBottom, paddingX: props.paddingX, paddingY: props.paddingY }),
    ].filter(Boolean).join(' ');

    const wrapperStyle: React.CSSProperties = {
      backgroundColor: props.backgroundColor,
    };

    return (
      <div className={wrapperClassName} style={wrapperStyle}>
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
