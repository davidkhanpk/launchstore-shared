import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import { testimonialCarouselFields } from './testimonialcarousel.fields';
import type {
  TestimonialCarouselProps, TestimonialLayout, TestimonialRadius, TestimonialShadow,
  TestimonialItem, TestimonialEffect,
} from './testimonialcarousel.types';
import { SwiperBase } from '../../shared/SwiperBase';

const RADII: Record<TestimonialRadius, string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', '2xl': 'rounded-2xl',
};
const SHADOWS: Record<TestimonialShadow, string> = {
  none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl',
};

const MOCK_TESTIMONIALS: TestimonialItem[] = [
  { id: '1', name: 'Sarah Johnson', role: 'Verified Buyer', avatar: 'https://i.pravatar.cc/150?img=1', rating: 5, text: 'Absolutely love this product! The quality exceeded my expectations and shipping was super fast.' },
  { id: '2', name: 'Michael Chen', role: 'Happy Customer', avatar: 'https://i.pravatar.cc/150?img=2', rating: 5, text: 'Best purchase I have made this year. Customer service was exceptional.' },
  { id: '3', name: 'Emma Williams', role: 'Repeat Customer', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4, text: 'Great product at a reasonable price. Highly recommend to anyone looking for quality.' },
  { id: '4', name: 'David Martinez', role: 'Verified Buyer', avatar: 'https://i.pravatar.cc/150?img=4', rating: 5, text: 'Five stars! The attention to detail and craftsmanship is evident in every aspect.' },
  { id: '5', name: 'Lisa Anderson', role: 'Satisfied Customer', avatar: 'https://i.pravatar.cc/150?img=5', rating: 5, text: 'I was skeptical at first, but this product has completely changed my mind. Worth every penny!' },
];

const StarSvg = ({ size = 20, filled }: { size?: number; filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const Stars = ({ rating, color }: { rating: number; color: string }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((s) => (
      <span key={s} style={{ color: s <= rating ? color : '#d1d5db' }}>
        <StarSvg size={20} filled={s <= rating} />
      </span>
    ))}
  </div>
);

const renderSlide = (testimonial: TestimonialItem, layout: TestimonialLayout, props: TestimonialCarouselProps) => {
  const rad = RADII[(props.borderRadius as TestimonialRadius) || 'lg'];
  const sh = SHADOWS[(props.cardShadow as TestimonialShadow) || 'md'];

  if (layout === 'quote') {
    return (
      <div className={`p-8 h-full flex flex-col ${rad} ${sh} border-l-4`} style={{ backgroundColor: props.cardBackground, color: props.textColor, borderLeftColor: props.accentColor }}>
        <svg className="w-10 h-10 mb-4 opacity-30" fill={props.accentColor} viewBox="0 0 24 24">
          <path d="M6.5 10c-1.5 0-2.5 1-2.5 2.5S5 15 6.5 15 9 14 9 12.5 8 10 6.5 10zm11 0c-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5 2.5-1 2.5-2.5-1-2.5-2.5-2.5z" />
        </svg>
        <p className="text-lg mb-6 flex-1 leading-relaxed italic">{testimonial.text}</p>
        {props.showRating && <div className="mb-4"><Stars rating={testimonial.rating} color={props.accentColor} /></div>}
        <div className="flex items-center gap-3">
          {props.showAvatar && <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full object-cover" />}
          <div>
            <div className="font-bold text-lg">{testimonial.name}</div>
            {props.showRole && <div className="opacity-70">{testimonial.role}</div>}
          </div>
        </div>
      </div>
    );
  }
  if (layout === 'minimal') {
    return (
      <div className={`p-6 h-full flex flex-col text-center ${rad}`} style={{ backgroundColor: props.cardBackground, color: props.textColor }}>
        {props.showAvatar && <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" />}
        {props.showRating && <div className="mb-4 flex justify-center"><Stars rating={testimonial.rating} color={props.accentColor} /></div>}
        <p className="text-base mb-4 flex-1 leading-relaxed">{testimonial.text}</p>
        <div className="font-semibold">{testimonial.name}</div>
        {props.showRole && <div className="text-sm opacity-70">{testimonial.role}</div>}
      </div>
    );
  }
  // card
  return (
    <div className={`p-6 h-full flex flex-col ${rad} ${sh}`} style={{ backgroundColor: props.cardBackground, color: props.textColor }}>
      {props.showRating && <div className="mb-4"><Stars rating={testimonial.rating} color={props.accentColor} /></div>}
      <p className="text-base mb-6 flex-1 leading-relaxed">"{testimonial.text}"</p>
      <div className="flex items-center gap-3">
        {props.showAvatar && <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />}
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          {props.showRole && <div className="text-sm opacity-70">{testimonial.role}</div>}
        </div>
      </div>
    </div>
  );
};

export interface TestimonialCarouselWithItems extends TestimonialCarouselProps {
  items?: TestimonialItem[];
}

export const TestimonialCarousel: ComponentConfig<TestimonialCarouselWithItems> = {
  label: 'Testimonial Carousel (Swiper)',
  fields: testimonialCarouselFields as ComponentConfig<TestimonialCarouselWithItems>['fields'],
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
  render: (rawProps: any) => {
    const { items = MOCK_TESTIMONIALS, ...props } = rawProps as TestimonialCarouselWithItems;
    const layout = (props.layout as TestimonialLayout) || 'card';
    return (
      <div className="testimonial-carousel" style={{ backgroundColor: props.backgroundColor, paddingTop: `${props.paddingY}px`, paddingBottom: `${props.paddingY}px`, paddingLeft: `${props.paddingX}px`, paddingRight: `${props.paddingX}px` }}>
        <div className="max-w-7xl mx-auto">
          <SwiperBase
            breakpoints={{ mobile: props.cardsPerViewMobile, tablet: props.cardsPerViewTablet, desktop: props.cardsPerView }}
            spaceBetween={props.spaceBetween}
            effect={props.effect as TestimonialEffect}
            loop={props.loop}
            centeredSlides={props.centeredSlides}
            navigation={props.showNavigation}
            navigationColor={props.navigationColor}
            pagination={props.showPagination}
            paginationType={props.paginationType}
            paginationColor={props.paginationColor}
            autoplay={props.enableAutoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false}
          >
            {items.map((t) => (
              <SwiperSlide key={t.id}>{renderSlide(t, layout, props)}</SwiperSlide>
            ))}
          </SwiperBase>
        </div>
      </div>
    );
  },
};

export default TestimonialCarousel;
