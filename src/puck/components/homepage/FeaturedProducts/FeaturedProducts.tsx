import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { FeaturedProductsProps, SharedProduct } from './featuredproducts.types';
import { resolveColor } from '../../../design-system';

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

// ── Content fields (header + display toggles + product source) ──────────────

const contentFields = {
  sectionTitle: { type: 'text' as const, label: 'Section Title' },
  sectionSubtitle: { type: 'text' as const, label: 'Section Subtitle' },
  showTitle: {
    type: 'radio' as const, label: 'Show Section Title',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  productSource: {
    type: 'select' as const, label: 'Product Source',
    options: [
      { label: 'Featured Products', value: 'featured' },
      { label: 'Best Sellers', value: 'bestsellers' },
      { label: 'New Arrivals', value: 'new' },
      { label: 'From Category', value: 'category' },
      { label: 'Manual Selection', value: 'manual' },
    ],
  },
  categoryId: { type: 'text' as const, label: 'Category ID (for category source)' },
  productIds: { type: 'textarea' as const, label: 'Product IDs (comma-separated, for manual)' },
  showPrice: {
    type: 'radio' as const, label: 'Show Price',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  showAddToCart: {
    type: 'radio' as const, label: 'Show Add to Cart Button',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  buttonText: { type: 'text' as const, label: 'Button Text' },
};

// ── Layout fields (display mode + grid + carousel) ──────────────────────────

const layoutFields = {
  displayMode: {
    type: 'select' as const, label: 'Display Mode',
    options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel (Swiper)', value: 'carousel' }],
  },
  productsPerRow: { type: 'number' as const, label: 'Products Per Row — Desktop (Grid)', min: 2, max: 6 },
  productsPerRowTablet: { type: 'number' as const, label: 'Products Per Row — Tablet (Grid)', min: 1, max: 4 },
  productsPerRowMobile: { type: 'number' as const, label: 'Products Per Row — Mobile (Grid)', min: 1, max: 2 },
  maxProducts: { type: 'number' as const, label: 'Maximum Products', min: 1, max: 50 },
  slidesPerView: { type: 'number' as const, label: 'Slides Per View (Desktop)', min: 1, max: 6 },
  slidesPerViewTablet: { type: 'number' as const, label: 'Slides Per View (Tablet)', min: 1, max: 4 },
  slidesPerViewMobile: { type: 'number' as const, label: 'Slides Per View (Mobile)', min: 1, max: 2 },
  spaceBetween: { type: 'number' as const, label: 'Space Between Slides (px)', min: 0, max: 100 },
  autoplay: {
    type: 'radio' as const, label: 'Auto-play Carousel',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  autoplayDelay: { type: 'number' as const, label: 'Auto-play Delay (ms)', min: 1000, max: 10000 },
  loop: {
    type: 'radio' as const, label: 'Loop Carousel',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  navigation: {
    type: 'radio' as const, label: 'Show Navigation Arrows',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  pagination: {
    type: 'radio' as const, label: 'Show Pagination',
    options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
  },
  paginationStyle: {
    type: 'select' as const, label: 'Pagination Style',
    options: [
      { label: 'Dots', value: 'dots' },
      { label: 'Fraction (1/10)', value: 'fraction' },
      { label: 'Progress Bar', value: 'progressbar' },
    ],
  },
};

// ── Color fields ────────────────────────────────────────────────────────────

const colorFields = {
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex or theme token)' },
  textColor: { type: 'text' as const, label: 'Text Color (hex or theme token)' },
  cardStyle: {
    type: 'select' as const, label: 'Card Style',
    options: [
      { label: 'Minimal', value: 'minimal' },
      { label: 'Bordered', value: 'bordered' },
      { label: 'Shadow', value: 'shadow' },
    ],
  },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...layoutFields,
  ...colorFields,
};

// ── Component ───────────────────────────────────────────────────────────────

export const FeaturedProducts: ComponentConfig<FeaturedProductsProps> = {
  label: 'Featured Products',
  fields: allFields as any,
  defaultProps: {
    sectionTitle: 'Featured Products',
    sectionSubtitle: 'Check out our most popular items',
    showTitle: true,
    displayMode: 'carousel',
    productsPerRow: 4,
    productsPerRowTablet: 2,
    productsPerRowMobile: 1,
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
  } as FeaturedProductsProps,
  render: ({
    sectionTitle, sectionSubtitle, showTitle,
    displayMode, productsPerRow, productsPerRowTablet, productsPerRowMobile,
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

    const sectionStyle: React.CSSProperties = { backgroundColor: resolveColor(backgroundColor) || backgroundColor };

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
            <div
              className={`fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} grid gap-6`}
              style={{ gridTemplateColumns: `repeat(${productsPerRowMobile || 1}, minmax(0, 1fr))` }}
            >
              {(products || []).map((p: SharedProduct) => <div key={p.id}>{renderer(p)}</div>)}
              <style>{`
                @media (min-width: 512px) { .fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} { grid-template-columns: repeat(${productsPerRowTablet || 2}, minmax(0, 1fr)) !important; } }
                @media (min-width: 1024px) { .fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} { grid-template-columns: repeat(${productsPerRow}, minmax(0, 1fr)) !important; } }
              `}</style>
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
