import type { Field } from '@puckeditor/core';
import type { ProductGridProps, ProductGridPadding } from './productgrid.types';

/**
 * Internal: the sub-renderer used by both RelatedProducts and
 * RecentlyViewedProducts. Takes a flat `products` array; if empty,
 * renders nothing. Otherwise renders either a swiper carousel
 * (using shared `ProductCarousel`) or a simple grid (using shared
 * `ProductCard`).
 *
 * Not exported as a Puck component itself — T-061 / T-062 are
 * the consumer-facing Puck shapes; this is the shared rendering
 * primitive.
 */
import React from 'react';
import { ProductCarousel as RawProductCarousel } from '../../swiper/ProductCarousel';
import { ProductCard as RawProductCard } from '../ProductCard';
import type { ProductCarouselWithProducts, CarouselProduct } from '../../swiper/ProductCarousel';
import type { ProductCardWithRender } from '../ProductCard';

// Puck ComponentConfig types don't allow direct JSX usage; cast to any-component
// at the import boundary so the renderer below can use them.
const ProductCarousel = RawProductCarousel as unknown as React.ComponentType<ProductCarouselWithProducts>;
const ProductCard = RawProductCard as unknown as React.ComponentType<ProductCardWithRender>;

const PADDING: Record<ProductGridPadding, string> = {
  none: '',
  sm: 'px-4 py-6',
  md: 'px-6 py-12',
  lg: 'px-8 py-16',
};

export const ProductGridRenderer: React.FC<ProductGridProps & { products: CarouselProduct[] }> = ({
  title, showTitle, maxProducts, displayStyle, containerPadding, products,
}) => {
  if (!products || products.length === 0) return <></>;
  const list = products.slice(0, maxProducts);
  const paddingCls = PADDING[containerPadding] || PADDING.md;

  if (displayStyle === 'carousel') {
    return (
      <ProductCarousel
        products={list as any}
        sectionTitle={title}
        showTitle={showTitle}
        slidesPerView={4}
        slidesPerViewTablet={3}
        slidesPerViewMobile={1}
        spaceBetween={24}
        navigation={true}
        pagination={true}
        autoplay={false}
        loop={false}
        showProductImage={true}
        showProductTitle={true}
        showProductPrice={true}
        showAddToCart={true}
        backgroundColor="#ffffff"
        cardBackground="#ffffff"
        cardBorderRadius="lg"
        cardShadow={true}
        effect="slide"
        speed={300}
        navigationColor="#000000"
        paginationType="bullets"
        paginationColor="#3b82f6"
        autoplayDelay={3000}
        pauseOnHover={true}
        centeredSlides={false}
        freeMode={false}
        imageAspectRatio="square"
        productSource="manual"
        productIds=""
        collectionId=""
        categoryId=""
        maxProducts={maxProducts}
      />
    );
  }

  return (
    <div className={`w-full ${paddingCls}`}>
      <div className="max-w-7xl mx-auto">
        {showTitle && (
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">{title}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((p) => (
            <ProductCard
              key={p.id}
              product={p as any}
              layout="vertical"
              enableSwiper={false}
              aspectRatio="square"
              borderRadius="md"
              showShadow={true}
              hoverZoom={true}
              showTitle={true}
              titleSize="lg"
              titleWeight="semibold"
              titleAlign="left"
              showPrice={true}
              priceSize="lg"
              priceColor="#000000"
              showCompareAtPrice={true}
              showSavingsBadge={true}
              showBadges={true}
              showSaleBadge={true}
              showNewBadge={false}
              showLowStockBadge={false}
              badgePosition="top-right"
              showAddToCart={false}
              buttonText="Add to Cart"
              buttonStyle="filled"
              buttonSize="md"
              showCartIcon={true}
              cardRadius="lg"
              cardBorder="none"
              cardShadow={true}
              cardBackground="#ffffff"
              accentColor="#000000"
              fontFamily="inherit"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
