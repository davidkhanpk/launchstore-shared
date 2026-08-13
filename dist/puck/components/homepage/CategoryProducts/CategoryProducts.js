import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, } from '../../../design-system';
// ── Flat field definitions (referenced by key inside the accordion) ─────────
const categoryProductsFields = {
    sectionTitle: { type: 'text', label: 'Section Title' },
    sectionSubtitle: { type: 'textarea', label: 'Section Subtitle' },
    showTitle: { type: 'radio', label: 'Show Section Title', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    categoryId: { type: 'text', label: 'Category ID' },
    categoryName: { type: 'text', label: 'Category Name (for display)' },
    displayMode: { type: 'select', label: 'Display Mode', options: [{ label: 'Grid', value: 'grid' }, { label: 'Carousel (Swiper)', value: 'carousel' }] },
    productsPerRow: { type: 'number', label: 'Products Per Row (Grid)', min: 2, max: 6 },
    maxProducts: { type: 'number', label: 'Maximum Products', min: 1, max: 50 },
    slidesPerView: { type: 'number', label: 'Slides Per View (Desktop)', min: 1, max: 6 },
    slidesPerViewTablet: { type: 'number', label: 'Slides Per View (Tablet)', min: 1, max: 4 },
    slidesPerViewMobile: { type: 'number', label: 'Slides Per View (Mobile)', min: 1, max: 2 },
    spaceBetween: { type: 'number', label: 'Space Between Slides (px)', min: 0, max: 100 },
    autoplay: { type: 'radio', label: 'Auto-play Carousel', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    autoplayDelay: { type: 'number', label: 'Auto-play Delay (ms)', min: 1000, max: 10000 },
    loop: { type: 'radio', label: 'Loop Carousel', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    navigation: { type: 'radio', label: 'Show Navigation Arrows', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    pagination: { type: 'radio', label: 'Show Pagination Dots', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    imageAspectRatio: { type: 'select', label: 'Image Aspect Ratio', options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
        ] },
    showPrice: { type: 'radio', label: 'Show Price', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showRating: { type: 'radio', label: 'Show Rating', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showBadges: { type: 'radio', label: 'Show Badges (New/Sale)', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    showViewAllButton: { type: 'radio', label: 'Show View All Button', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    viewAllButtonText: { type: 'text', label: 'View All Button Text' },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    cardStyle: { type: 'select', label: 'Card Style', options: [
            { label: 'Minimal', value: 'minimal' }, { label: 'Bordered', value: 'bordered' }, { label: 'Shadow', value: 'shadow' },
        ] },
    borderRadius: { type: 'select', label: 'Border Radius', options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
        ] },
    buttonColor: { type: 'text', label: 'Button Color (hex or theme token)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
    buttonRadius: { type: 'select', label: 'Button Radius', options: [
            { label: 'Small', value: 'small' }, { label: 'Medium', value: 'medium' }, { label: 'Large', value: 'large' }, { label: 'None', value: 'none' },
        ] },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Section',
            defaultOpen: true,
            fieldKeys: ['sectionTitle', 'sectionSubtitle', 'showTitle', 'categoryId', 'categoryName'],
        },
        {
            label: 'Display',
            fieldKeys: ['displayMode', 'productsPerRow', 'maxProducts'],
        },
        {
            label: 'Carousel',
            fieldKeys: ['slidesPerView', 'slidesPerViewTablet', 'slidesPerViewMobile', 'spaceBetween', 'autoplay', 'autoplayDelay', 'loop', 'navigation', 'pagination'],
        },
        {
            label: 'Product Card',
            fieldKeys: ['imageAspectRatio', 'showPrice', 'showAddToCart', 'showRating', 'showBadges'],
        },
        {
            label: 'View All Button',
            fieldKeys: ['showViewAllButton', 'viewAllButtonText', 'buttonColor', 'buttonTextColor', 'buttonRadius'],
        },
        {
            label: 'Styling',
            fieldKeys: ['backgroundColor', 'textColor', 'cardStyle', 'borderRadius'],
        },
    ],
    allFields: categoryProductsFields,
});
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
    fields: accordionFields,
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
        const sectionStyle = { backgroundColor: resolveColor(backgroundColor) || backgroundColor };
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