import React from 'react';
import { SwiperSlide } from 'swiper/react';
import type { ComponentConfig } from '@puckeditor/core';
import { productCarouselFields } from './productcarousel.fields';
import type {
  ProductCarouselProps, ProductCarouselAspect, ProductCarouselRadius, ProductCarouselEffect,
} from './productcarousel.types';
import { SwiperBase } from '../../shared/SwiperBase';

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

export const ProductCarousel: ComponentConfig<ProductCarouselWithProducts> = {
  label: 'Product Carousel (Swiper)',
  fields: productCarouselFields as ComponentConfig<ProductCarouselWithProducts>['fields'],
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
  },
  render: (rawProps: any) => {
    const { products = [], onAddToCart, ...props } = rawProps as ProductCarouselWithProducts;
    if (!products || products.length === 0) {
      return <div className="product-carousel-section py-8"><div className="container mx-auto px-4 text-center text-gray-400">No products to display</div></div>;
    }
    const aspectCls = ASPECT[(props.imageAspectRatio as ProductCarouselAspect) || 'square'];
    const radCls = RADII[(props.cardBorderRadius as ProductCarouselRadius) || 'lg'];
    return (
      <div className="product-carousel-section py-8" style={{ backgroundColor: props.backgroundColor }}>
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
