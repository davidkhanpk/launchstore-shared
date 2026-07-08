import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { categoryProductsFields } from './categoryproducts.fields';
const ASPECT = {
    square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]',
};
const CARD_STYLE = {
    minimal: 'bg-transparent', bordered: 'border border-gray-200 bg-white', shadow: 'bg-white shadow-lg',
};
const RADIUS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const BTN_RADIUS = {
    small: 'rounded', medium: 'rounded-md', large: 'rounded-lg', none: 'rounded-none',
};
const defaultCard = (p, props) => {
    const img = p.thumbnail || `https://via.placeholder.com/400x400?text=${encodeURIComponent(p.title)}`;
    return (_jsxs("div", { className: `product-card ${CARD_STYLE[props.cardStyle]} ${RADIUS[props.borderRadius]} overflow-hidden`, children: [_jsxs("div", { className: `${ASPECT[props.imageAspectRatio]} overflow-hidden ${RADIUS[props.borderRadius]} mb-3 relative`, children: [_jsx("img", { src: img, alt: p.title, className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300" }), props.showBadges && (_jsxs("div", { className: "absolute top-2 right-2 flex flex-col gap-1", children: [p.onSale && _jsx("span", { className: "px-2 py-1 bg-red-500 text-white text-xs font-bold rounded", children: "SALE" }), p.isNew && _jsx("span", { className: "px-2 py-1 bg-green-500 text-white text-xs font-bold rounded", children: "NEW" })] }))] }), _jsx("h3", { className: "text-md font-semibold mb-2 line-clamp-2", style: { color: props.textColor }, children: p.title }), props.showRating && p.rating != null && (_jsxs("div", { className: "flex items-center gap-1 mb-2", children: [_jsx("span", { className: "text-yellow-400", children: "\u2605" }), _jsx("span", { className: "text-sm", style: { color: props.textColor }, children: p.rating })] })), props.showPrice && p.price != null && (_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsxs("span", { className: "text-xl font-bold", style: { color: props.textColor }, children: ["$", Number(p.price).toFixed(2)] }), p.onSale && p.compareAtPrice != null && (_jsxs("span", { className: "text-sm text-gray-400 line-through", children: ["$", Number(p.compareAtPrice).toFixed(2)] }))] })), props.showAddToCart && (_jsx("button", { className: "w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition", children: "Add to Cart" }))] }));
};
const ViewAllButton = ({ props }) => props.showViewAllButton ? (_jsx("div", { className: "text-center mt-12", children: _jsx("a", { href: `/categories/${props.categoryId}`, className: `inline-block px-8 py-3 transition-colors ${BTN_RADIUS[props.buttonRadius] || 'rounded-md'}`, style: { backgroundColor: props.buttonColor, color: props.buttonTextColor }, children: props.viewAllButtonText }) })) : null;
export const CategoryProducts = {
    label: 'Category Products',
    fields: categoryProductsFields,
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
    render: (rawProps) => {
        const p = rawProps;
        const { sectionTitle, sectionSubtitle, showTitle, categoryId, categoryName, displayMode, productsPerRow, maxProducts, slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween, autoplay, autoplayDelay, loop, navigation, pagination, imageAspectRatio, showPrice, showAddToCart, showRating, showBadges, showViewAllButton, viewAllButtonText, backgroundColor, textColor, cardStyle, borderRadius, buttonColor, buttonTextColor, buttonRadius, products, loading, error, renderProduct, } = p;
        const isLoading = !!loading && (!products || products.length === 0);
        const errMsg = error || '';
        const empty = !isLoading && !errMsg && (!products || products.length === 0);
        const Header = showTitle ? (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: sectionTitle || categoryName }), sectionSubtitle && _jsx("p", { className: "text-lg opacity-80", style: { color: textColor }, children: sectionSubtitle })] })) : null;
        const sectionStyle = { backgroundColor };
        if (errMsg) {
            return _jsx("div", { className: "category-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center text-red-500", children: _jsxs("p", { children: ["Error: ", errMsg] }) })] }) });
        }
        if (isLoading) {
            return _jsx("div", { className: "category-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "grid grid-cols-4 gap-6", children: [...Array(maxProducts)].map((_, i) => _jsx("div", { className: "bg-gray-200 animate-pulse h-96 rounded-lg" }, i)) })] }) });
        }
        if (empty) {
            return _jsx("div", { className: "category-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "text-center", style: { color: textColor }, children: _jsx("p", { children: "No products found in this category." }) })] }) });
        }
        const renderer = renderProduct || ((p) => defaultCard(p, {
            sectionTitle, sectionSubtitle, showTitle, categoryId, categoryName, displayMode, productsPerRow, maxProducts,
            slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween, autoplay, autoplayDelay, loop, navigation, pagination,
            imageAspectRatio, showPrice, showAddToCart, showRating, showBadges,
            showViewAllButton, viewAllButtonText,
            backgroundColor, textColor, cardStyle, borderRadius, buttonColor, buttonTextColor, buttonRadius,
        }));
        if (displayMode === 'grid') {
            return (_jsx("div", { className: "category-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx("div", { className: "grid gap-6", style: { gridTemplateColumns: `repeat(${productsPerRow}, minmax(0, 1fr))` }, children: (products || []).map((p) => (_jsx("div", { className: `${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} overflow-hidden`, children: renderer(p) }, p.id))) }), _jsx(ViewAllButton, { props: { categoryId, showViewAllButton, viewAllButtonText, buttonColor, buttonTextColor, buttonRadius } })] }) }));
        }
        return (_jsx("div", { className: "category-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsx(Swiper, { modules: [Navigation, Pagination, Autoplay], spaceBetween: spaceBetween, slidesPerView: slidesPerViewMobile, navigation: navigation, pagination: pagination ? { clickable: true } : false, autoplay: autoplay ? { delay: autoplayDelay } : false, loop: loop, breakpoints: { 640: { slidesPerView: slidesPerViewTablet }, 1024: { slidesPerView } }, className: "product-carousel", children: (products || []).map((p) => (_jsx(SwiperSlide, { children: _jsx("div", { className: `${CARD_STYLE[cardStyle]} ${RADIUS[borderRadius]} overflow-hidden`, children: renderer(p) }) }, p.id))) }), _jsx(ViewAllButton, { props: { categoryId, showViewAllButton, viewAllButtonText, buttonColor, buttonTextColor, buttonRadius } })] }) }));
    },
};
export default CategoryProducts;
//# sourceMappingURL=CategoryProducts.js.map