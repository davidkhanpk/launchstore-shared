import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { resolveColor } from '../../../design-system';
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
// ── Content fields (header + display toggles + product source) ──────────────
const contentFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    sectionSubtitle: { type: 'text', label: 'Section Subtitle' },
    showTitle: {
        type: 'radio', label: 'Show Section Title',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    productSource: {
        type: 'select', label: 'Product Source',
        options: [
            { label: 'Featured Products', value: 'featured' },
            { label: 'Best Sellers', value: 'bestsellers' },
            { label: 'New Arrivals', value: 'new' },
            { label: 'From Category', value: 'category' },
            { label: 'Manual Selection', value: 'manual' },
        ],
    },
    categoryId: { type: 'text', label: 'Category ID (for category source)' },
    productIds: { type: 'textarea', label: 'Product IDs (comma-separated, for manual)' },
    showPrice: {
        type: 'radio', label: 'Show Price',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    showAddToCart: {
        type: 'radio', label: 'Show Add to Cart Button',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    buttonText: { type: 'text', label: 'Button Text' },
};
// ── Layout fields (display mode + grid + carousel) ──────────────────────────
const layoutFields = {
    displayMode: {
        type: 'select', label: 'Display Mode',
        options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel (Swiper)', value: 'carousel' }],
    },
    productsPerRow: { type: 'number', label: 'Products Per Row — Desktop (Grid)', min: 2, max: 6 },
    productsPerRowTablet: { type: 'number', label: 'Products Per Row — Tablet (Grid)', min: 1, max: 4 },
    productsPerRowMobile: { type: 'number', label: 'Products Per Row — Mobile (Grid)', min: 1, max: 2 },
    maxProducts: { type: 'number', label: 'Maximum Products', min: 1, max: 50 },
    slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)', min: 1, max: 6 },
    slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)', min: 1, max: 4 },
    slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)', min: 1, max: 2 },
    spaceBetween: { type: 'number', label: 'Space Between Slides (px)', min: 0, max: 100 },
    autoplay: {
        type: 'radio', label: 'Auto-play Carousel',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    autoplayDelay: { type: 'number', label: 'Auto-play Delay (ms)', min: 1000, max: 10000 },
    loop: {
        type: 'radio', label: 'Loop Carousel',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    navigation: {
        type: 'radio', label: 'Show Navigation Arrows',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    pagination: {
        type: 'radio', label: 'Show Pagination',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    paginationStyle: {
        type: 'select', label: 'Pagination Style',
        options: [
            { label: 'Dots', value: 'dots' },
            { label: 'Fraction (1/10)', value: 'fraction' },
            { label: 'Progress Bar', value: 'progressbar' },
        ],
    },
};
// ── Color fields ────────────────────────────────────────────────────────────
const colorFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    cardStyle: {
        type: 'select', label: 'Card Style',
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
export const FeaturedProducts = {
    label: 'Featured Products',
    fields: allFields,
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
    },
    render: ({ sectionTitle, sectionSubtitle, showTitle, displayMode, productsPerRow, productsPerRowTablet, productsPerRowMobile, maxProducts, slidesPerView, slidesPerViewTablet, slidesPerViewMobile, spaceBetween, autoplay, autoplayDelay, loop, navigation, pagination, paginationStyle, backgroundColor, textColor, cardStyle, showPrice, showAddToCart, buttonText, products, loading, error, renderProduct, }) => {
        const isLoading = !!loading && (!products || products.length === 0);
        const errMsg = error || '';
        const empty = !isLoading && !errMsg && (!products || products.length === 0);
        const Header = showTitle ? (_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-4xl font-bold mb-2", style: { color: textColor }, children: sectionTitle }), sectionSubtitle && _jsx("p", { className: "text-lg opacity-80", style: { color: textColor }, children: sectionSubtitle })] })) : null;
        const sectionStyle = { backgroundColor: resolveColor(backgroundColor) || backgroundColor };
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
            return (_jsx("div", { className: "featured-products-section py-16", style: sectionStyle, children: _jsxs("div", { className: "container mx-auto px-4", children: [Header, _jsxs("div", { className: `fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} grid gap-6`, style: { gridTemplateColumns: `repeat(${productsPerRowMobile || 1}, minmax(0, 1fr))` }, children: [(products || []).map((p) => _jsx("div", { children: renderer(p) }, p.id)), _jsx("style", { children: `
                @media (min-width: 512px) { .fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} { grid-template-columns: repeat(${productsPerRowTablet || 2}, minmax(0, 1fr)) !important; } }
                @media (min-width: 1024px) { .fp-grid-${productsPerRow}-${productsPerRowTablet || 2}-${productsPerRowMobile || 1} { grid-template-columns: repeat(${productsPerRow}, minmax(0, 1fr)) !important; } }
              ` })] })] }) }));
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