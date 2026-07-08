import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { productCarouselFields } from './productcarousel.fields';
import { SwiperBase } from '../../shared/SwiperBase';
const ASPECT = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' };
const RADII = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };
const getPrice = (p) => {
    const v = p.variants?.[0];
    const cap = v?.calculated_price?.calculated_amount;
    const op = v?.original_price?.original_amount;
    return { price: cap, compareAt: op, onSale: typeof cap === 'number' && typeof op === 'number' && cap < op };
};
const formatPrice = (cents) => `$${(cents / 100).toFixed(2)}`;
const CartSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
export const ProductCarousel = {
    label: 'Product Carousel (Swiper)',
    fields: productCarouselFields,
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
    render: (rawProps) => {
        const { products = [], onAddToCart, ...props } = rawProps;
        if (!products || products.length === 0) {
            return _jsx("div", { className: "product-carousel-section py-8", children: _jsx("div", { className: "container mx-auto px-4 text-center text-gray-400", children: "No products to display" }) });
        }
        const aspectCls = ASPECT[props.imageAspectRatio || 'square'];
        const radCls = RADII[props.cardBorderRadius || 'lg'];
        return (_jsx("div", { className: "product-carousel-section py-8", style: { backgroundColor: props.backgroundColor }, children: _jsxs("div", { className: "container mx-auto px-4", children: [props.showTitle && _jsx("h2", { className: "text-3xl font-bold mb-6", children: props.sectionTitle }), _jsx(SwiperBase, { breakpoints: { mobile: props.slidesPerViewMobile, tablet: props.slidesPerViewTablet, desktop: props.slidesPerView }, spaceBetween: props.spaceBetween, effect: props.effect, speed: props.speed, loop: props.loop, freeMode: props.freeMode, centeredSlides: props.centeredSlides, navigation: props.navigation, navigationColor: props.navigationColor, pagination: props.pagination, paginationType: props.paginationType, paginationColor: props.paginationColor, autoplay: props.autoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false, className: "product-carousel", children: products.map((p) => {
                            const priceInfo = getPrice(p);
                            const image = p.thumbnail || p.images?.[0]?.url || '/placeholder.png';
                            return (_jsx(SwiperSlide, { children: _jsx("a", { href: `/products/${p.handle}`, className: "block", children: _jsxs("div", { className: `product-card p-4 ${radCls} ${props.cardShadow ? 'shadow-lg' : ''} hover:shadow-xl transition-shadow`, style: { backgroundColor: props.cardBackground }, children: [props.showProductImage && (_jsxs("div", { className: `${aspectCls} overflow-hidden ${radCls} mb-3 relative`, children: [_jsx("img", { src: image, alt: p.title || 'Product', className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300" }), priceInfo.onSale && (_jsx("span", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded", children: "Sale" }))] })), props.showProductTitle && _jsx("h3", { className: "text-lg font-semibold mb-2 line-clamp-2", children: p.title }), props.showProductPrice && priceInfo.price != null && (_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("p", { className: "text-xl font-bold", children: formatPrice(priceInfo.price) }), priceInfo.onSale && priceInfo.compareAt != null && (_jsx("p", { className: "text-sm text-gray-500 line-through", children: formatPrice(priceInfo.compareAt) }))] })), props.showAddToCart && (_jsxs("button", { type: "button", className: "w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2", onClick: (e) => { e.preventDefault(); onAddToCart?.(p.id); }, children: [_jsx(CartSvg, {}), " Add to Cart"] }))] }) }) }, p.id));
                        }) })] }) }));
    },
};
export default ProductCarousel;
//# sourceMappingURL=ProductCarousel.js.map