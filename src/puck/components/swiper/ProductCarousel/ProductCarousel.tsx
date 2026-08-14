import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import type {
  ProductCarouselProps, ProductCarouselAspect, ProductCarouselRadius, ProductCarouselEffect,
} from './productcarousel.types';
import { SwiperBase } from '../../shared/SwiperBase';
import {
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const ASPECT: Record<ProductCarouselAspect, string> = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' };
const RADII: Record<ProductCarouselRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };

/**
 * Minimal product shape the carousel needs. Consumers project
 * HttpTypes.StoreProduct -> this (or pass the full Medusa
 * shape and let the runtime features [calculated_price, etc.] work).
 */
export interface CarouselProduct {
  id: string;
  title: string;
  handle?: string;
  thumbnail?: string;
  images?: { url: string }[];
  variants?: { calculated_price?: any; original_price?: any }[];
}

const getPrice = (p: CarouselProduct): { price?: number; compareAt?: number; onSale: boolean } => {
  const v = p.variants?.[0] as any;
  const cap = v?.calculated_price?.calculated_amount;
  const op = v?.original_price?.original_amount;
  return { price: cap, compareAt: op, onSale: typeof cap === 'number' && typeof op === 'number' && cap < op };
};
const formatPrice = (cents: number) => `$${(cents / 100).toFixed(2)}`;

const CartSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
);

export interface ProductCarouselWithProducts extends ProductCarouselProps {
  products?: CarouselProduct[];
  onAddToCart?: (productId: string) => void;
}

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  sectionTitle: { type: 'text' as const, label: 'Section Title' },
  showTitle: { type: 'radio' as const, label: 'Show Title', options: RADIO_YES_NO },
  productSource: {
    type: 'select' as const, label: 'Product Source',
    options: [
      { label: 'Manual Selection', value: 'manual' },
      { label: 'From Collection', value: 'collection' },
      { label: 'From Category', value: 'category' },
      { label: 'Featured Products', value: 'featured' },
      { label: 'Best Sellers', value: 'bestsellers' },
    ],
  },
  productIds: { type: 'textarea' as const, label: 'Product IDs (comma-separated)' },
  collectionId: { type: 'text' as const, label: 'Collection ID (optional on product pages)' },
  categoryId: { type: 'text' as const, label: 'Category ID (optional on product pages)' },
  maxProducts: { type: 'number' as const, label: 'Maximum Products' },
};

// ── Carousel fields (component-specific) ────────────────────────────────────

const carouselFields = {
  slidesPerView: { type: 'number' as const, label: 'Slides Per View (Desktop)' },
  slidesPerViewTablet: { type: 'number' as const, label: 'Slides Per View (Tablet)' },
  slidesPerViewMobile: { type: 'number' as const, label: 'Slides Per View (Mobile)' },
  spaceBetween: { type: 'number' as const, label: 'Space Between Slides (px)' },
  effect: {
    type: 'select' as const, label: 'Transition Effect',
    options: [
      { label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' },
      { label: 'Cube', value: 'cube' }, { label: 'Coverflow', value: 'coverflow' }, { label: 'Flip', value: 'flip' },
    ],
  },
  speed: { type: 'number' as const, label: 'Transition Speed (ms)' },
  navigation: { type: 'radio' as const, label: 'Show Navigation Arrows', options: RADIO_YES_NO },
  navigationColor: { type: 'text' as const, label: 'Navigation Color (hex)' },
  pagination: { type: 'radio' as const, label: 'Show Pagination', options: RADIO_YES_NO },
  paginationType: {
    type: 'select' as const, label: 'Pagination Type',
    options: [
      { label: 'Bullets', value: 'bullets' },
      { label: 'Fraction (1/10)', value: 'fraction' },
      { label: 'Progress Bar', value: 'progressbar' },
    ],
  },
  paginationColor: { type: 'text' as const, label: 'Pagination Color (hex)' },
  autoplay: { type: 'radio' as const, label: 'Autoplay', options: RADIO_YES_NO },
  autoplayDelay: { type: 'number' as const, label: 'Autoplay Delay (ms)' },
  pauseOnHover: { type: 'radio' as const, label: 'Pause on Hover', options: RADIO_YES_NO },
  loop: { type: 'radio' as const, label: 'Loop', options: RADIO_YES_NO },
  centeredSlides: { type: 'radio' as const, label: 'Center Slides', options: RADIO_YES_NO },
  freeMode: { type: 'radio' as const, label: 'Free Mode (continuous sliding)', options: RADIO_YES_NO },
};

// ── Card fields (component-specific) ────────────────────────────────────────

const cardFields = {
  showProductImage: { type: 'radio' as const, label: 'Show Product Image', options: RADIO_YES_NO },
  showProductTitle: { type: 'radio' as const, label: 'Show Product Title', options: RADIO_YES_NO },
  showProductPrice: { type: 'radio' as const, label: 'Show Product Price', options: RADIO_YES_NO },
  showAddToCart: { type: 'radio' as const, label: 'Show Add to Cart', options: RADIO_YES_NO },
  imageAspectRatio: {
    type: 'select' as const, label: 'Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
    ],
  },
};

// ── Color fields (component-specific) ───────────────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex)' },
  cardBackground: { type: 'text' as const, label: 'Card Background (hex)' },
  cardBorderRadius: {
    type: 'select' as const, label: 'Card Border Radius',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
    ],
  },
  cardShadow: { type: 'radio' as const, label: 'Card Shadow', options: RADIO_YES_NO },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...carouselFields,
  ...cardFields,
  ...colorFields,
  ...sharedLayoutFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const ProductCarousel: ComponentConfig<ProductCarouselWithProducts> = {
  label: 'Product Carousel (Swiper)',
  fields: allFields as any,
  defaultProps: {
    sectionTitle: 'Popular Products', showTitle: true,
    productSource: 'featured', productIds: '', collectionId: '', categoryId: '',
    maxProducts: 12, slidesPerView: 4, slidesPerViewTablet: 3, slidesPerViewMobile: 1,
    spaceBetween: 24, effect: 'slide', speed: 600,
    navigation: true, navigationColor: '#000000',
    pagination: true, paginationType: 'bullets', paginationColor: '#3b82f6',
    autoplay: false, autoplayDelay: 3000, pauseOnHover: true,
    loop: true, centeredSlides: false, freeMode: false,
    showProductImage: true, showProductTitle: true, showProductPrice: true, showAddToCart: true,
    imageAspectRatio: 'square', backgroundColor: '#ffffff', cardBackground: '#ffffff',
    cardBorderRadius: 'lg', cardShadow: true,
    ...defaultLayoutProps,
  } as ProductCarouselWithProducts,
  render: (rawProps: any) => {
    const { products = [], onAddToCart, ...props } = rawProps as ProductCarouselWithProducts;
    const marginTop = (rawProps as any).marginTop;
    const marginBottom = (rawProps as any).marginBottom;
    const paddingX = (rawProps as any).paddingX;
    const paddingY = (rawProps as any).paddingY;

    const layoutClassName = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
    const sectionClassName = `product-carousel-section py-8 ${layoutClassName}`.trim();
    const sectionStyle: React.CSSProperties = { backgroundColor: props.backgroundColor };

    if (!products || products.length === 0) {
      return (
        <div className={sectionClassName} style={sectionStyle}>
          <div className="container mx-auto px-4 text-center text-gray-400">No products to display</div>
        </div>
      );
    }
    const aspectCls = ASPECT[(props.imageAspectRatio as ProductCarouselAspect) || 'square'];
    const radCls = RADII[(props.cardBorderRadius as ProductCarouselRadius) || 'lg'];
    return (
      <div className={sectionClassName} style={sectionStyle}>
        <div className="container mx-auto px-4">
          {props.showTitle && <h2 className="text-3xl font-bold mb-6">{props.sectionTitle}</h2>}
          <SwiperBase
            breakpoints={{ mobile: props.slidesPerViewMobile, tablet: props.slidesPerViewTablet, desktop: props.slidesPerView }}
            spaceBetween={props.spaceBetween}
            effect={props.effect as ProductCarouselEffect}
            speed={props.speed}
            loop={props.loop}
            freeMode={props.freeMode}
            centeredSlides={props.centeredSlides}
            navigation={props.navigation}
            navigationColor={props.navigationColor}
            pagination={props.pagination}
            paginationType={props.paginationType}
            paginationColor={props.paginationColor}
            autoplay={props.autoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false}
            className="product-carousel"
          >
            {products.map((p) => {
              const priceInfo = getPrice(p);
              const image = p.thumbnail || p.images?.[0]?.url || '/placeholder.png';
              return (
                <SwiperSlide key={p.id}>
                  <a href={`/products/${p.handle}`} className="block">
                    <div className={`product-card p-4 ${radCls} ${props.cardShadow ? 'shadow-lg' : ''} hover:shadow-xl transition-shadow`} style={{ backgroundColor: props.cardBackground }}>
                      {props.showProductImage && (
                        <div className={`${aspectCls} overflow-hidden ${radCls} mb-3 relative`}>
                          <img src={image} alt={p.title || 'Product'} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                          {priceInfo.onSale && (
                            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Sale</span>
                          )}
                        </div>
                      )}
                      {props.showProductTitle && <h3 className="text-lg font-semibold mb-2 line-clamp-2">{p.title}</h3>}
                      {props.showProductPrice && priceInfo.price != null && (
                        <div className="flex items-center gap-2 mb-3">
                          <p className="text-xl font-bold">{formatPrice(priceInfo.price)}</p>
                          {priceInfo.onSale && priceInfo.compareAt != null && (
            <p className="text-sm text-gray-500 line-through">{formatPrice(priceInfo.compareAt)}</p>
                          )}
                        </div>
                      )}
                      {props.showAddToCart && (
                        <button type="button" className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2" onClick={(e) => { e.preventDefault(); onAddToCart?.(p.id); }}>
                          <CartSvg /> Add to Cart
                        </button>
                      )}
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </SwiperBase>
        </div>
      </div>
    );
  },
};

export default ProductCarousel;
