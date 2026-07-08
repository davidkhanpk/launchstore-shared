import type { Field } from '@puckeditor/core';

export type TestimonialLayout = 'card' | 'quote' | 'minimal';
export type TestimonialEffect = 'slide' | 'fade';
export type TestimonialRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type TestimonialShadow = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TestimonialCarouselProps {
  layout: TestimonialLayout;
  cardsPerView: number;
  cardsPerViewTablet: number;
  cardsPerViewMobile: number;
  effect: TestimonialEffect;
  showNavigation: boolean;
  navigationColor: string;
  showPagination: boolean;
  paginationType: 'bullets' | 'fraction';
  paginationColor: string;
  enableAutoplay: boolean;
  autoplayDelay: number;
  pauseOnHover: boolean;
  loop: boolean;
  spaceBetween: number;
  centeredSlides: boolean;
  showAvatar: boolean;
  showRating: boolean;
  showRole: boolean;
  backgroundColor: string;
  cardBackground: string;
  textColor: string;
  accentColor: string;
  borderRadius: TestimonialRadius;
  cardShadow: TestimonialShadow;
  paddingY: number;
  paddingX: number;
}
