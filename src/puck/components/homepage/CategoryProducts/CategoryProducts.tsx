import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { categoryProductsFields } from './categoryproducts.fields';
import type { CategoryProductsProps, CategoryProduct } from './categoryproducts.types';

const ASPECT: Record<CategoryProductsProps['imageAspectRatio'], string> = {
  square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]',
};
const CARD_STYLE: Record<CategoryProductsProps['cardStyle'], string> = {
  minimal: 'bg-transparent', bordered: 'border border-gray-200 bg-white', shadow: 'bg-white shadow-lg',
};
const RADIUS: Record<CategoryProductsProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const BTN_RADIUS: Record<CategoryProductsProps['buttonRadius'], string> = {
  small: 'rounded', medium: 'rounded-md', large: 'rounded-lg', none: 'rounded-none',
};

const defaultCard = (p: CategoryProduct, props: CategoryProductsProps) => {
  const img = p.thumbnail || `https://via.placeholder.com/400x400?text=${encodeURIComponent(p.title)}`;
  return (
    <div className={`product-card ${CARD_STYLE[props.cardStyle]} ${RADIUS[props.borderRadius]} overflow-hidden`}>
      <div className={`${ASPECT[props.imageAspectRatio]} overflow-hidden ${RADIUS[props.borderRadius]} mb-3 relative`}>
        <img src={img} alt={p.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
        {props.showBadges && (
          <div className="absolute top-2 right-2 flex flex-col gap-1">
            {p.onSale && <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">SALE</span>}
            {p.isNew && <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">NEW</span>}
          </div>
        )}
      </div>
      <h3 className="text-md font-semibold mb-2 line-clamp-2" style={{ color: props.textColor }}>{p.title}</h3>
      {props.showRating && p.rating != null && (
        <div className="flex items-center gap-1 mb-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm" style={{ color: props.textColor }}>{p.rating}</span>
        </div>
      )}
      {props.showPrice && p.price != null && (
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl font-bold" style={{ color: props.textColor }}>${Number(p.price).toFixed(2)}</span>
          {p.onSale && p.compareAtPrice != null && (
            <span className="text-sm text-gray-400 line-through">${Number(p.compareAtPrice).toFixed(2)}</span>
          )}
        </div>
      )}
      {props.showAddToCart && (
        <button className="w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">Add to Cart</button>
      )}
    </div>
  );
};

const ViewAllButton = ({ props }: { props: CategoryProductsProps }) =>
  props.showViewAllButton ? (
    <div className="text-center mt-12">
      <a
        href={`/categories/${props.categoryId}`}
        className={`inline-block px-8 py-3 transition-colors ${BTN_RADIUS[props.buttonRadius] || 'rounded-md'}`}
        style={{ backgroundColor: props.buttonColor, color: props.buttonTextColor }}
      >
        {props.viewAllButtonText}
      </a>
    </div>
  ) : null;

export const CategoryProducts: ComponentConfig<CategoryProductsProps> = {
  label: 'Category Products',
  fields: categoryProductsFields as ComponentConfig<CategoryProductsProps>['fields'],
  defaultProps: {
    sectionTitle: 'Shop by Category',
    sectionSubtitle: 'Discover our curated collection',
    showTitle: true,
    categoryId: '',
    categoryName: '',
    displayMode: 'grid',
    productsPerRow: 4,
    maxProducts: 12,
    slidesPerView: 4,
    slidesPerViewTablet: 3,
    slidesPerViewMobile: 1,
    spaceBetween: 20,
    autoplay: false,
    autoplayDelay: 3000,
    loop: false,
    navigation: true,
    pagination: true,
    imageAspectRatio: 'square',
    showPrice: true,
    showAddToCart: true,
    showRating: false,
    showBadges: true,
    showViewAllButton: true,
    viewAllButtonText: 'View All Products',
    backgroundColor: '#f9fafb',
    textColor: '#111827',
    cardStyle: 'shadow',
    borderRadius: 'md',
    buttonColor: '#000000',
    buttonTextColor: '#ffffff',
    buttonRadius: 'medium',
    loading: false,
    error: '',
  },
  render: (rawProps: any) => {
    const p = rawProps as CategoryProductsProps;
    const {
      sectionTitle, sectionSubtitle, showTitle,
      categoryId, categoryName,
      displayMode, productsPerRow, maxProducts,
      slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween,
      autoplay, autoplayDelay, loop, navigation, pagination, imageAspectRatio,
      showPrice, showAddToCart, showRating, showBadges,
      showViewAllButton, viewAllButtonText,
      backgroundColor, textColor, cardStyle, borderRadius, buttonColor, buttonTextColor, buttonRadius,
      products, loading, error, renderProduct,
    } = p;
    const isLoading = !!loading && (!products || products.length === 0);
    const errMsg = error || '';
    const empty = !isLoading && !errMsg && (!products || products.length === 0);

    const Header = showTitle ? (
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2" style={{ color: textColor }}>{sectionTitle || categoryName}</h2>
        {sectionSubtitle && <p className="text-lg opacity-80" style={{ color: textColor }}>{sectionSubtitle}</p>}
      </div>
    ) : null;

    const sectionStyle: React.CSSProperties = { backgroundColor };

    if (errMsg) {
      return <div className="category-products-section py-16" style={sectionStyle}><div className="container mx-auto px-4">{Header}<div className="text-center text-red-500"><p>Error: {errMsg}</p></div></div></div>;
    }
    if (isLoading) {
      return <div className="category-products-section py-16" style={sectionStyle}><div className="container mx-auto px-4">{Header}<div className="grid grid-cols-4 gap-6">{[...Array(maxProducts)].map((_, i) => <div key={i} className="bg-gray-200 animate-pulse h-96 rounded-lg" />)}</div></div></div>;
    }
    if (empty) {
      return <div className="category-products-section py-16" style={sectionStyle}><div className="container mx-auto px-4">{Header}<div className="text-center" style={{ color: textColor }}><p>No products found in this category.</p></div></div></div>;
    }

    const renderer = renderProduct || ((p: CategoryProduct): React.ReactNode => defaultCard(p, {
      sectionTitle, sectionSubtitle, showTitle, categoryId, categoryName, displayMode, productsPerRow, maxProducts,
      slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween, autoplay, autoplayDelay, loop, navigation, pagination,
      imageAspectRatio, showPrice, showAddToCart, showRating, showBadges,
      showViewAllButton, viewAllButtonText,
      backgroundColor, textColor, cardStyle, borderRadius, buttonColor, buttonTextColor, buttonRadius,
    } as CategoryProductsProps));

    if (displayMode === 'grid') {
      return (
        <div className="category-products-section py-16" style={sectionStyle}>
          <div className="container mx-auto px-4">
            {Header}
            <div className="grid gap-6" style={{ gridTemplateColumns: `repeat(${productsPerRow}, minmax(0, 1fr))` }}>
              {(products || []).map((p: CategoryProduct) => (
                <div key={p.id} className={`${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} overflow-hidden`}>
                  {renderer(p)}
                </div>
              ))}
            </div>
            <ViewAllButton props={{ categoryId, showViewAllButton, viewAllButtonText, buttonColor, buttonTextColor, buttonRadius } as any} />
          </div>
        </div>
      );
    }

    return (
      <div className="category-products-section py-16" style={sectionStyle}>
        <div className="container mx-auto px-4">
          {Header}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={spaceBetween}
            slidesPerView={slidesPerViewMobile}
            navigation={navigation}
            pagination={pagination ? { clickable: true } : false}
            autoplay={autoplay ? { delay: autoplayDelay } : false}
            loop={loop}
            breakpoints={{ 640: { slidesPerView: slidesPerViewTablet }, 1024: { slidesPerView } }}
            className="product-carousel"
          >
            {(products || []).map((p: CategoryProduct) => (
              <SwiperSlide key={p.id}>
                <div className={`${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} overflow-hidden`}>
                  {renderer(p)}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <ViewAllButton props={{ categoryId, showViewAllButton, viewAllButtonText, buttonColor, buttonTextColor, buttonRadius } as any} />
        </div>
      </div>
    );
  },
};

export default CategoryProducts;
