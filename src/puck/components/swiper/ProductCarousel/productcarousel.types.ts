import type { Field } from '@puckeditor/core';

export type ProductCarouselSource = 'manual' | 'collection' | 'category' | 'featured' | 'bestsellers';
export type ProductCarouselEffect = 'slide' | 'fade' | 'cube' | 'coverflow' | 'flip';
export type ProductCarouselPagination = 'bullets' | 'fraction' | 'progressbar';
export type ProductCarouselRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';
export type ProductCarouselAspect = 'square' | 'portrait' | 'landscape';

export interface ProductCarouselProps {
  sectionTitle: string;
  showTitle: boolean;
  productSource: ProductCarouselSource;
  productIds: string;
  collectionId: string;
  categoryId: string;
  maxProducts: number;
  slidesPerView: number;
  slidesPerViewTablet: number;
  slidesPerViewMobile: number;
  spaceBetween: number;
  effect: ProductCarouselEffect;
  speed: number;
  navigation: boolean;
  navigationColor: string;
  pagination: boolean;
  paginationType: ProductCarouselPagination;
  paginationColor: string;
  autoplay: boolean;
  autoplayDelay: number;
  pauseOnHover: boolean;
  loop: boolean;
  centeredSlides: boolean;
  freeMode: boolean;
  showProductImage: boolean;
  showProductTitle: boolean;
  showProductPrice: boolean;
  showAddToCart: boolean;
  imageAspectRatio: ProductCarouselAspect;
  backgroundColor: string;
  cardBackground: string;
  cardBorderRadius: ProductCarouselRadius;
  cardShadow: boolean;
}
