import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { featuredProductsFields } from './featuredproducts.fields';
import type { FeaturedProductsProps, SharedProduct } from './featuredproducts.types';

const CARD_STYLE: Record<FeaturedProductsProps['cardStyle'], string> = {
  minimal: 'bg-transparent',
  bordered: 'border border-gray-200 bg-white',
  shadow: 'bg-white shadow-lg',
};

// Default product card renderer (used when consumer doesn't pass renderProduct).
// Storefront passes its own `<ProductPreview>` via D-1 render-prop escape hatch.
const defaultCard = (product: SharedProduct, props: FeaturedProductsProps) => {
  const imgSrc = product.thumbnail || `https://via.placeholder.com/400x400?text=${encodeURIComponent(product.title)}`;
  return (
    <div className={`product-card ${CARD_STYLE[props.cardStyle]} p-4 rounded-lg overflow-hidden`}>
      <img src={imgSrc} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold mb-2" style={{ color: props.textColor }}>{product.title}</h3>
      {props.showPrice && product.price != null && (
        <p className="text-xl font-bold mb-3" style={{ color: props.textColor }}>${Number(product.price).toFixed(2)}</p>
      )}
      {props.showAddToCart && (
        <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
          {props.buttonText}
        </button>
      )}
    </div>
  );
};

export const FeaturedProducts: ComponentConfig<FeaturedProductsProps> = {
  label: 'Featured Products',
  fields: featuredProductsFields as ComponentConfig<FeaturedProductsProps>['fields'],
  defaultProps: {
    sectionTitle: 'Featured Products',
    sectionSubtitle: 'Check out our most popular items',
    showTitle: true,
    displayMode: 'carousel',
    productsPerRow: 4,
    maxProducts: 12,
    slidesPerView: 4,
    slidesPerViewTablet: 3,
    slidesPerViewMobile: 1,
    spaceBetween: 24,
    autoplay: true,
    autoplayDelay: 3000,
    loop: true,
    navigation: true,
    pagination: true,
    paginationStyle: 'dots',
    productSource: 'featured',
    categoryId: '',
    productIds: '',
    backgroundColor: '#ffffff',
    textColor: '#000000',
    cardStyle: 'shadow',
    showPrice: true,
    showAddToCart: true,
    buttonText: 'Add to Cart',
    loading: false,
    error: '',
  },
  render: ({
    sectionTitle, sectionSubtitle, showTitle,
    displayMode, productsPerRow,
    maxProducts, slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween,
    autoplay, autoplayDelay, loop, navigation, pagination, paginationStyle,
    backgroundColor, textColor, cardStyle, showPrice, showAddToCart, buttonText,
    products, loading, error, renderProduct,
  }: any) => {
    const isLoading = !!loading && (!products || products.length === 0);
    const errMsg = error || '';
    const empty = !isLoading && !errMsg && (!products || products.length === 0);

    const Header = showTitle ? (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{sectionTitle}</h2>
        {sectionSubtitle && <p className="text-lg opacity-80" style={{ color: textColor }}>{sectionSubtitle}</p>}
      </div>
    ) : null;

    const sectionStyle: React.CSSProperties = { backgroundColor };

    if (errMsg) {
      return (
        <div className="featured-products-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center text-red-500"><p>Error: {errMsg}</p></div>
          </div>
        </div>
      );
    }
    if (isLoading) {
      return (
        <div className="featured-products-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="grid grid-cols-4 gap-6">
              {[...Array(maxProducts)].map((_, i) => (
                <div key={i} className="bg-gray-200 animate-pulse h-96 rounded-lg" />
              ))}
            </div>
          </div>
        </div>
      );
    }
    if (empty) {
      return (
        <div className="featured-products-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="text-center" style={{ color: textColor }}><p>No products found.</p></div>
          </div>
        </div>
      );
    }

    const renderer = renderProduct || ((p: SharedProduct): React.ReactNode => defaultCard(p, {
      sectionTitle, sectionSubtitle, showTitle, displayMode, productsPerRow, maxProducts,
      slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween,
      autoplay, autoplayDelay, loop, navigation, pagination, paginationStyle,
      productSource: 'featured', categoryId: '', productIds: '',
      backgroundColor, textColor, cardStyle, showPrice, showAddToCart, buttonText,
    } as FeaturedProductsProps));

    if (displayMode === 'grid') {
      return (
        <div className="featured-products-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${productsPerRow}, minmax(0, 1fr))` }}>
              {(products || []).map((p: SharedProduct) => <div key={p.id}>{renderer(p)}</div>)}
            </div>
          </div>
        </div>
      );
    }

    // Carousel
    return (
      <div className="featured-products-section py-16" style={sectionStyle}>
        <div className="container mx-auto px-4">
          {Header}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={slidesPerViewMobile}
            spaceBetween={spaceBetween}
            navigation={navigation}
            pagination={pagination ? { type: paginationStyle as any, clickable: true } : false}
            autoplay={autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false}
            loop={loop}
            breakpoints={{
              640: { slidesPerView: slidesPerViewTablet },
              1024: { slidesPerView },
            }}
            className="products-swiper"
          >
            {(products || []).map((p: SharedProduct) => (
              <SwiperSlide key={p.id}>{renderer(p)}</SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  },
};

export default FeaturedProducts;
