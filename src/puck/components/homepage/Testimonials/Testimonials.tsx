'use client';

/**
 * Testimonials Puck component — render + fields + defaultProps.
 *
 * Both consumers import `Testimonials` from here:
 *   - launchstore-frontend (Puck editor) — extends `.fields.backgroundColor` /
 *     `.fields.textColor` / `.fields.accentColor` with ColorField widgets
 *   - launchstore-storefront (renderer) — uses the base fields as-is
 *
 * KNOWN LIMITATION: neither source version exposes a real `testimonials: T[]`
 * data array. The component hardcodes 4 mock testimonials and slices to
 * `props.maxTestimonials`. When a real data source is needed (e.g. reviews
 * collection from Medusa), add a `testimonials?: Testimonial[]` prop with a
 * default of `[]` and let `mockTestimonials` serve as the fallback.
 */
import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { testimonialsFields } from './testimonials.fields';
import type { TestimonialsProps } from './testimonials.types';

const RADIUS_CLASSES: Record<TestimonialsProps['borderRadius'], string> = {
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

function renderStars(rating: number) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
  );
}

export const Testimonials: ComponentConfig<TestimonialsProps> = {
  label: 'Testimonials',
  fields: testimonialsFields as ComponentConfig<TestimonialsProps>['fields'],
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

    const renderTestimonial = (testimonial: typeof MOCK_TESTIMONIALS[number]) => (
      <div
        key={testimonial.id}
        className={`testimonial-card p-6 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} shadow-lg`}
        style={{ backgroundColor: props.cardBackground }}
      >
        {props.showRating && <div className="mb-4">{renderStars(testimonial.rating)}</div>}
        {props.layout === 'quote' && (
          <div className="text-6xl mb-4" style={{ color: props.accentColor, opacity: 0.2 }}>
            &ldquo;
          </div>
        )}
        <p className="text-lg mb-6 italic" style={{ color: props.textColor }}>
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="flex items-center gap-4">
          {props.showAvatar && (
            <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
          )}
          <div>
            {props.showName && (
              <p className="font-bold" style={{ color: props.textColor }}>
                {testimonial.name}
              </p>
            )}
            {props.showRole && (
              <p className="text-sm opacity-70" style={{ color: props.textColor }}>
                {testimonial.role}
              </p>
            )}
            {props.showDate && (
              <p className="text-xs opacity-50 mt-1" style={{ color: props.textColor }}>
                {testimonial.date}
              </p>
            )}
          </div>
        </div>
      </div>
    );

    return (
      <div className="testimonials-section py-16" style={{ backgroundColor: props.backgroundColor }}>
        <div className="container mx-auto px-4">
          {props.showTitle && (
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-2" style={{ color: props.textColor }}>
                {props.sectionTitle}
              </h2>
              {props.sectionSubtitle && (
                <p className="text-lg opacity-80" style={{ color: props.textColor }}>
                  {props.sectionSubtitle}
                </p>
              )}
            </div>
          )}

          {props.displayMode === 'grid' ? (
            <div
              className="grid gap-8"
              style={{ gridTemplateColumns: `repeat(${props.columns}, minmax(0, 1fr))` }}
            >
              {visibleTestimonials.map(renderTestimonial)}
            </div>
          ) : (
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectFade]}
              slidesPerView={props.slidesPerViewMobile}
              spaceBetween={props.spaceBetween}
              navigation={props.navigation}
              pagination={props.pagination ? { clickable: true } : false}
              autoplay={
                props.autoplay
                  ? { delay: props.autoplayDelay, disableOnInteraction: false }
                  : false
              }
              loop={props.loop}
              effect={props.effect}
              breakpoints={{
                640: { slidesPerView: props.slidesPerViewTablet },
                1024: { slidesPerView: props.slidesPerView },
              }}
              className="testimonials-swiper"
            >
              {visibleTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>{renderTestimonial(testimonial)}</SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    );
  },
};

export default Testimonials;
