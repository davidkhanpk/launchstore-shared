import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { featuredProductsFields } from './featuredproducts.fields';
const CARD_STYLE = {
    minimal: 'bg-transparent',
    bordered: 'border border-gray-200 bg-white',
    shadow: 'bg-white shadow-lg',
};
// Default product card renderer (used when consumer doesn't pass renderProduct).
// Storefront passes its own `<ProductPreview>` via D-1 render-prop escape hatch.
const defaultCard = (product, props) => {
    const imgSrc = product.thumbnail || `https://via.placeholder.com/400x400?text=${encodeURIComponent(product.title)}`;
    return (_jsxs("div", { className: `product-card ${CARD_STYLE[props.cardStyle]} p-4 rounded-lg overflow-hidden`, children: [_jsx("img", { src: imgSrc, alt: product.title, className: "w-full h-64 object-cover rounded-lg mb-4" }), _jsx("h3", { className: "text-lg font-semibold mb-2", style: { color: props.textColor }, children: product.title }), props.showPrice && product.price != null && (_jsxs("p", { className: "text-xl font-bold mb-3", style: { color: props.textColor }, children: ["$", Number(product.price).toFixed(2)] })), props.showAddToCart && (_jsx("button", { className: "w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition", children: props.buttonText }))] }));
};
export const FeaturedProducts = {
    label: 'Featured Products',
    fields: featuredProductsFields,
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
    render: ({ sectionTitle, sectionSubtitle, showTitle, displayMode, productsPerRow, maxProducts, slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween, autoplay, autoplayDelay, loop, navigation, pagination, paginationStyle, backgroundColor, textColor, cardStyle, showPrice, showAddToCart, buttonText, products, loading, error, renderProduct, }) => {
        const isLoading = !!loading && (!products || products.length === 0);
        const errMsg = error || '';
        const empty = !isLoading && !errMsg && (!products || products.length === 0);
        const Header = showTitle ? (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: sectionTitle }), sectionSubtitle && _jsx("p", { className: "text-lg opacity-80", style: { color: textColor }, children: sectionSubtitle })] })) : null;
        const sectionStyle = { backgroundColor };
        if (errMsg) {
            return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center text-red-500", children: _jsxs("p", { children: ["Error: ", errMsg] }) })] }) }));
        }
        if (isLoading) {
            return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "grid grid-cols-4 gap-6", children: [...Array(maxProducts)].map((_, i) => (_jsx("div", { className: "bg-gray-200 animate-pulse h-96 rounded-lg" }, i))) })] }) }));
        }
        if (empty) {
            return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center", style: { color: textColor }, children: _jsx("p", { children: "No products found." }) })] }) }));
        }
        const renderer = renderProduct || ((p) => defaultCard(p, {
            sectionTitle, sectionSubtitle, showTitle, displayMode, productsPerRow, maxProducts,
            slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween,
            autoplay, autoplayDelay, loop, navigation, pagination, paginationStyle,
            productSource: 'featured', categoryId: '', productIds: '',
            backgroundColor, textColor, cardStyle, showPrice, showAddToCart, buttonText,
        }));
        if (displayMode === 'grid') {
            return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "grid gap-6", style: { gridTemplateColumns: `repeat(${productsPerRow}, minmax(0, 1fr))` }, children: (products || []).map((p) => _jsx("div", { children: renderer(p) }, p.id)) })] }) }));
        }
        // Carousel
        return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx(Swiper, { modules: [Navigation, Pagination, Autoplay], slidesPerView: slidesPerViewMobile, spaceBetween: spaceBetween, navigation: navigation, pagination: pagination ? { type: paginationStyle, clickable: true } : false, autoplay: autoplay ? { delay: autoplayDelay, disableOnInteraction: false } : false, loop: loop, breakpoints: {
                            640: { slidesPerView: slidesPerViewTablet },
                            1024: { slidesPerView },
                        }, className: "products-swiper", children: (products || []).map((p) => (_jsx(SwiperSlide, { children: renderer(p) }, p.id))) })] }) }));
    },
};
export default FeaturedProducts;
//# sourceMappingURL=FeaturedProducts.js.map