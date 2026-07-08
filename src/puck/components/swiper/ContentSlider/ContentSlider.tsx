import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import { contentSliderFields } from './contentslider.fields';
import type { ContentSliderProps, ContentSlide, ContentSliderEffect } from './contentslider.types';
import { SwiperBase } from '../../shared/SwiperBase';

const HEIGHT: Record<string, string> = { sm: 'h-[400px]', md: 'h-[500px]', lg: 'h-[600px]', xl: 'h-[700px]', full: 'h-screen' };
const CONTENT_ALIGN: Record<string, string> = { left: 'items-start text-left', center: 'items-center text-center', right: 'items-end text-right' };

const MOCK_SLIDES: ContentSlide[] = [
  { title: 'Welcome to Our Store', description: 'Discover amazing products and unbeatable deals', backgroundImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8', backgroundColor: '#1e293b', textColor: '#ffffff', buttonText: 'Shop Now', buttonLink: '/shop', buttonColor: '#3b82f6', htmlContent: '' },
  { title: 'New Collection', description: 'Fresh styles for the season', backgroundImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b', backgroundColor: '#0f172a', textColor: '#ffffff', buttonText: 'Explore', buttonLink: '/collection', buttonColor: '#8b5cf6', htmlContent: '' },
  { title: 'Special Offer', description: 'Up to 50% off selected items', backgroundImage: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da', backgroundColor: '#7c2d12', textColor: '#ffffff', buttonText: 'Get Deal', buttonLink: '/sale', buttonColor: '#ef4444', htmlContent: '' },
];

export const ContentSlider: ComponentConfig<ContentSliderProps> = {
  label: 'Content Slider (Swiper)',
  fields: contentSliderFields as ComponentConfig<ContentSliderProps>['fields'],
  defaultProps: {
    slides: MOCK_SLIDES,
    slideHeight: 'lg', contentWidth: 'contained', contentPosition: 'center',
    effect: 'fade', showNavigation: true, navigationColor: '#ffffff', navigationPosition: 'center',
    showPagination: true, paginationType: 'bullets', paginationColor: '#ffffff',
    enableAutoplay: true, autoplayDelay: 5000, pauseOnHover: true,
    loop: true, speed: 600,
    enableOverlay: true, overlayColor: '#000000', overlayOpacity: 40,
  },
  render: (rawProps: any) => {
    const props = rawProps as ContentSliderProps;
    const heightCls = HEIGHT[(props.slideHeight as string) || 'lg'] || HEIGHT.lg;
    const alignCls = CONTENT_ALIGN[(props.contentPosition as string) || 'center'] || CONTENT_ALIGN.center;
    const slides = (props.slides && props.slides.length > 0) ? props.slides : MOCK_SLIDES;
    return (
      <div className="content-slider">
        <SwiperBase
          breakpoints={{ mobile: 1, tablet: 1, desktop: 1 }}
          spaceBetween={0}
          effect={props.effect as ContentSliderEffect}
          speed={props.speed}
          loop={props.loop}
          navigation={props.showNavigation}
          navigationColor={props.navigationColor}
          pagination={props.showPagination}
          paginationType={props.paginationType}
          paginationColor={props.paginationColor}
          autoplay={props.enableAutoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false}
          className={heightCls}
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div className="slide-content relative w-full h-full flex flex-col justify-center" style={{
                backgroundColor: slide.backgroundColor,
                backgroundImage: slide.backgroundImage ? `url(${slide.backgroundImage})` : undefined,
                backgroundSize: 'cover', backgroundPosition: 'center',
              }}>
                {props.enableOverlay && slide.backgroundImage && (
                  <div className="absolute inset-0" style={{ backgroundColor: props.overlayColor, opacity: props.overlayOpacity / 100 }} />
                )}
                <div className={`relative z-10 ${props.contentWidth === 'contained' ? 'container mx-auto px-4' : 'px-8'}`}>
                  <div className={`flex flex-col ${alignCls} gap-6 max-w-2xl ${props.contentPosition === 'center' ? 'mx-auto' : ''}`}>
                    {slide.htmlContent ? (
                      <div dangerouslySetInnerHTML={{ __html: slide.htmlContent }} style={{ color: slide.textColor }} />
                    ) : (
                      <>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: slide.textColor }}>{slide.title}</h2>
                        <p className="text-lg md:text-xl lg:text-2xl" style={{ color: slide.textColor }}>{slide.description}</p>
                        {slide.buttonText && (
                          <div>
                            <a href={slide.buttonLink} className="inline-block px-8 py-4 text-lg font-semibold rounded-lg transition-transform hover:scale-105" style={{ backgroundColor: slide.buttonColor, color: '#ffffff' }}>
                              {slide.buttonText}
                            </a>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </SwiperBase>
      </div>
    );
  },
};

export default ContentSlider;
