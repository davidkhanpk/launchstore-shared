import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SwiperSlide } from 'swiper/react';
import { SwiperBase } from '../../shared/SwiperBase';
import { sharedLayoutFields, buildLayoutClasses, defaultLayoutProps, } from '../../../design-system';
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
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    productSource: {
        type: 'select', label: 'Product Source',
        options: [
            { label: 'Manual Selection', value: 'manual' },
            { label: 'From Collection', value: 'collection' },
            { label: 'From Category', value: 'category' },
            { label: 'Featured Products', value: 'featured' },
            { label: 'Best Sellers', value: 'bestsellers' },
        ],
    },
    productIds: { type: 'textarea', label: 'Product IDs (comma-separated)' },
    collectionId: { type: 'text', label: 'Collection ID (optional on product pages)' },
    categoryId: { type: 'text', label: 'Category ID (optional on product pages)' },
    maxProducts: { type: 'number', label: 'Maximum Products' },
};
// ── Carousel fields (component-specific) ────────────────────────────────────
const carouselFields = {
    slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)' },
    slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)' },
    slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)' },
    spaceBetween: { type: 'number', label: 'Space Between Slides (px)' },
    effect: {
        type: 'select', label: 'Transition Effect',
        options: [
            { label: 'Slide', value: 'slide' }, { label: 'Fade', value: 'fade' },
            { label: 'Cube', value: 'cube' }, { label: 'Coverflow', value: 'coverflow' }, { label: 'Flip', value: 'flip' },
        ],
    },
    speed: { type: 'number', label: 'Transition Speed (ms)' },
    navigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
    navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
    pagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
    paginationType: {
        type: 'select', label: 'Pagination Type',
        options: [
            { label: 'Bullets', value: 'bullets' },
            { label: 'Fraction (1/10)', value: 'fraction' },
            { label: 'Progress Bar', value: 'progressbar' },
        ],
    },
    paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
    autoplay: { type: 'radio', label: 'Autoplay', options: RADIO_YES_NO },
    autoplayDelay: { type: 'number', label: 'Autoplay Delay (ms)' },
    pauseOnHover: { type: 'radio', label: 'Pause on Hover', options: RADIO_YES_NO },
    loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
    centeredSlides: { type: 'radio', label: 'Center Slides', options: RADIO_YES_NO },
    freeMode: { type: 'radio', label: 'Free Mode (continuous sliding)', options: RADIO_YES_NO },
};
// ── Card fields (component-specific) ────────────────────────────────────────
const cardFields = {
    showProductImage: { type: 'radio', label: 'Show Product Image', options: RADIO_YES_NO },
    showProductTitle: { type: 'radio', label: 'Show Product Title', options: RADIO_YES_NO },
    showProductPrice: { type: 'radio', label: 'Show Product Price', options: RADIO_YES_NO },
    showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: RADIO_YES_NO },
    imageAspectRatio: {
        type: 'select', label: 'Image Aspect Ratio',
        options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
        ],
    },
};
// ── Color fields (component-specific) ───────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex)' },
    cardBackground: { type: 'text', label: 'Card Background (hex)' },
    cardBorderRadius: {
        type: 'select', label: 'Card Border Radius',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
        ],
    },
    cardShadow: { type: 'radio', label: 'Card Shadow', options: RADIO_YES_NO },
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
export const ProductCarousel = {
    label: 'Product Carousel (Swiper)',
    fields: allFields,
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
    },
    render: (rawProps) => {
        const { products = [], onAddToCart, ...props } = rawProps;
        const marginTop = rawProps.marginTop;
        const marginBottom = rawProps.marginBottom;
        const paddingX = rawProps.paddingX;
        const paddingY = rawProps.paddingY;
        const layoutClassName = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
        const sectionClassName = `product-carousel-section py-8 ${layoutClassName}`.trim();
        const sectionStyle = { backgroundColor: props.backgroundColor };
        if (!products || products.length === 0) {
            return (_jsx("div", { className: sectionClassName, style: sectionStyle, children: _jsx("div", { className: "container mx-auto px-4 text-center text-gray-400", children: "No products to display" }) }));
        }
        const aspectCls = ASPECT[props.imageAspectRatio || 'square'];
        const radCls = RADII[props.cardBorderRadius || 'lg'];
        return (_jsx("div", { className: sectionClassName, style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [props.showTitle && _jsx("h2", { className: "text-3xl font-bold mb-6", children: props.sectionTitle }), _jsx(SwiperBase, { breakpoints: { mobile: props.slidesPerViewMobile, tablet: props.slidesPerViewTablet, desktop: props.slidesPerView }, spaceBetween: props.spaceBetween, effect: props.effect, speed: props.speed, loop: props.loop, freeMode: props.freeMode, centeredSlides: props.centeredSlides, navigation: props.navigation, navigationColor: props.navigationColor, pagination: props.pagination, paginationType: props.paginationType, paginationColor: props.paginationColor, autoplay: props.autoplay ? { delay: props.autoplayDelay, disableOnInteraction: false, pauseOnMouseEnter: props.pauseOnHover } : false, className: "product-carousel", children: products.map((p) => {
                            const priceInfo = getPrice(p);
                            const image = p.thumbnail || p.images?.[0]?.url || '/placeholder.png';
                            return (_jsx(SwiperSlide, { children: _jsx("a", { href: `/products/${p.handle}`, className: "block", children: _jsxs("div", { className: `product-card p-4 ${radCls} ${props.cardShadow ? 'shadow-lg' : ''} hover:shadow-xl transition-shadow`, style: { backgroundColor: props.cardBackground }, children: [props.showProductImage && (_jsxs("div", { className: `${aspectCls} overflow-hidden ${radCls} mb-3 relative`, children: [_jsx("img", { src: image, alt: p.title || 'Product', className: "w-full h-full object-cover hover:scale-110 transition-transform duration-300" }), priceInfo.onSale && (_jsx("span", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded", children: "Sale" }))] })), props.showProductTitle && _jsx("h3", { className: "text-lg font-semibold mb-2 line-clamp-2", children: p.title }), props.showProductPrice && priceInfo.price != null && (_jsxs("div", { className: "flex items-center gap-2 mb-3", children: [_jsx("p", { className: "text-xl font-bold", children: formatPrice(priceInfo.price) }), priceInfo.onSale && priceInfo.compareAt != null && (_jsx("p", { className: "text-sm text-gray-500 line-through", children: formatPrice(priceInfo.compareAt) }))] })), props.showAddToCart && (_jsxs("button", { type: "button", className: "w-full px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition inline-flex items-center justify-center gap-2", onClick: (e) => { e.preventDefault(); onAddToCart?.(p.id); }, children: [_jsx(CartSvg, {}), " Add to Cart"] }))] }) }) }, p.id));
                        }) })] }) }));
    },
};
export default ProductCarousel;
//# sourceMappingURL=ProductCarousel.js.map