import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields, } from '../../../design-system';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    layout: {
        type: 'select', label: 'Card Layout',
        options: [
            { label: 'Vertical', value: 'vertical' },
            { label: 'Horizontal', value: 'horizontal' },
            { label: 'Compact', value: 'compact' },
            { label: 'Spacious', value: 'spacious' },
        ],
    },
    enableSwiper: {
        type: 'radio', label: 'Image Gallery Type',
        options: [
            { label: 'Single Image', value: false },
            { label: 'Image Carousel (Swiper)', value: true },
        ],
    },
    aspectRatio: {
        type: 'select', label: 'Image Aspect Ratio',
        options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (16:9)', value: 'landscape' },
        ],
    },
    borderRadius: {
        type: 'select', label: 'Image Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Full', value: 'full' },
        ],
    },
    showShadow: { type: 'radio', label: 'Image Shadow', options: RADIO_YES_NO },
    hoverZoom: { type: 'radio', label: 'Hover Zoom Effect', options: RADIO_YES_NO },
    showTitle: { type: 'radio', label: 'Show Title', options: RADIO_YES_NO },
    titleSize: {
        type: 'select', label: 'Title Size',
        options: [
            { label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' }, { label: '2XLarge', value: '2xl' },
        ],
    },
    titleWeight: {
        type: 'select', label: 'Title Weight',
        options: [
            { label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' },
            { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' },
        ],
    },
    titleAlign: {
        type: 'select', label: 'Title Alignment',
        options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }],
    },
    showPrice: { type: 'radio', label: 'Show Price', options: RADIO_YES_NO },
    priceSize: {
        type: 'select', label: 'Price Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Base', value: 'base' }, { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' }],
    },
    priceColor: { type: 'text', label: 'Price Color (hex or theme token)' },
    showCompareAtPrice: { type: 'radio', label: 'Show Compare At Price', options: RADIO_YES_NO },
    showSavingsBadge: { type: 'radio', label: 'Show Savings Badge', options: RADIO_YES_NO },
    showBadges: { type: 'radio', label: 'Enable Badges', options: RADIO_YES_NO },
    showSaleBadge: { type: 'radio', label: 'Show Sale Badge', options: RADIO_YES_NO },
    showNewBadge: { type: 'radio', label: 'Show New Badge', options: RADIO_YES_NO },
    showLowStockBadge: { type: 'radio', label: 'Show Low Stock Badge', options: RADIO_YES_NO },
    badgePosition: {
        type: 'select', label: 'Badge Position',
        options: [
            { label: 'Top Left', value: 'top-left' }, { label: 'Top Right', value: 'top-right' },
            { label: 'Bottom Left', value: 'bottom-left' }, { label: 'Bottom Right', value: 'bottom-right' },
        ],
    },
    showAddToCart: { type: 'radio', label: 'Show Add to Cart', options: RADIO_YES_NO },
    buttonText: { type: 'text', label: 'Button Text' },
    buttonStyle: {
        type: 'select', label: 'Button Style',
        options: [{ label: 'Filled', value: 'filled' }, { label: 'Outline', value: 'outline' }, { label: 'Ghost', value: 'ghost' }],
    },
    buttonSize: {
        type: 'select', label: 'Button Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    showCartIcon: { type: 'radio', label: 'Show Cart Icon', options: RADIO_YES_NO },
    cardRadius: {
        type: 'select', label: 'Card Border Radius',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'XLarge', value: 'xl' },
        ],
    },
    cardBorder: {
        type: 'select', label: 'Card Border',
        options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    cardShadow: { type: 'radio', label: 'Card Shadow', options: RADIO_YES_NO },
    cardBackground: { type: 'text', label: 'Card Background (hex or theme token)' },
    accentColor: { type: 'text', label: 'Accent Color (hex or theme token)' },
    fontFamily: { type: 'text', label: 'Font Family' },
    productId: { type: 'text', label: 'Product ID (optional)' },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Source',
            defaultOpen: true,
            fieldKeys: ['productId'],
        },
        {
            label: 'Layout',
            fieldKeys: ['layout', 'enableSwiper'],
        },
        {
            label: 'Image',
            fieldKeys: ['aspectRatio', 'borderRadius', 'showShadow', 'hoverZoom'],
        },
        {
            label: 'Title',
            fieldKeys: ['showTitle', 'titleSize', 'titleWeight', 'titleAlign'],
        },
        {
            label: 'Price',
            fieldKeys: ['showPrice', 'priceSize', 'priceColor', 'showCompareAtPrice', 'showSavingsBadge'],
        },
        {
            label: 'Badges',
            fieldKeys: ['showBadges', 'showSaleBadge', 'showNewBadge', 'showLowStockBadge', 'badgePosition'],
        },
        {
            label: 'Add to Cart Button',
            fieldKeys: ['showAddToCart', 'buttonText', 'buttonStyle', 'buttonSize', 'showCartIcon'],
        },
        {
            label: 'Card Appearance',
            fieldKeys: ['cardRadius', 'cardBorder', 'cardShadow', 'cardBackground', 'accentColor', 'fontFamily'],
        },
    ],
    allFields,
});
const CartSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
const ASPECT = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[16/9]' };
const IMG_RADIUS = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', full: 'rounded-full' };
const CARD_RADIUS = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };
const CARD_BORDER = { none: 'border-0', sm: 'border', md: 'border-2', lg: 'border-4' };
const TITLE_SIZE = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl', '2xl': 'text-2xl' };
const PRICE_SIZE = { sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl' };
const TITLE_WEIGHT = { normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold' };
const TITLE_ALIGN = { left: 'text-left', center: 'text-center', right: 'text-right' };
const BTN_SIZE = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2 text-base', lg: 'px-6 py-3 text-lg' };
/**
 * Default card renderer — used when no `renderProduct` is
 * injected. Simple image+title+price composition that
 * demonstrates the full feature set (badges, add-to-cart)
 * using only Tailwind classes. Targeted at:
 * - editor preview (Puck canvas)
 * - frontend (no Medusa SDK for real product lookup)
 * - any consumer that doesn't ship its own ProductPreview.
 */
const DefaultCard = ({ product, props }) => {
    const isSale = product.variants?.[0]?.calculated_price?.calculated_amount
        && product.variants?.[0]?.original_price?.original_amount
        && (product.variants?.[0]).calculated_price.calculated_amount
            < (product.variants?.[0]).original_price.original_amount;
    const isNew = product.created_at && (Date.now() - new Date(product.created_at).getTime() < 1000 * 60 * 60 * 24 * 30);
    const isLowStock = typeof product.inventory_quantity === 'number' && product.inventory_quantity < 10;
    const cap = product.variants?.[0]?.calculated_price?.calculated_amount;
    const op = product.variants?.[0]?.original_price?.original_amount;
    const badgePos = {
        'top-left': 'top-2 left-2', 'top-right': 'top-2 right-2',
        'bottom-left': 'bottom-2 left-2', 'bottom-right': 'bottom-2 right-2',
    };
    return (_jsxs("div", { className: `puck-product-card-wrapper overflow-hidden ${CARD_RADIUS[props.cardRadius]} ${CARD_BORDER[props.cardBorder]} ${props.cardShadow ? 'shadow-md' : ''}`, style: { backgroundColor: props.cardBackground, fontFamily: props.fontFamily, color: props.accentColor }, children: [_jsxs("div", { className: "relative", children: [product.thumbnail || product.images?.[0]?.url ? (_jsx("img", { src: (product.thumbnail || product.images?.[0]?.url), alt: product.title, className: `w-full ${ASPECT[props.aspectRatio]} object-cover ${IMG_RADIUS[props.borderRadius]} ${props.hoverZoom ? 'hover:scale-105 transition-transform' : ''}` })) : (_jsx("div", { className: `w-full ${ASPECT[props.aspectRatio]} bg-gray-100 ${IMG_RADIUS[props.borderRadius]} flex items-center justify-center text-gray-400 text-sm`, children: "No image" })), props.showBadges && (props.showSaleBadge && isSale || props.showNewBadge && isNew || props.showLowStockBadge && isLowStock) && (_jsxs("div", { className: `absolute ${badgePos[props.badgePosition]} flex gap-1`, children: [props.showSaleBadge && isSale && _jsx("span", { className: "bg-red-500 text-white text-xs px-2 py-1 rounded", children: "Sale" }), props.showNewBadge && isNew && _jsx("span", { className: "bg-blue-500 text-white text-xs px-2 py-1 rounded", children: "New" }), props.showLowStockBadge && isLowStock && _jsx("span", { className: "bg-orange-500 text-white text-xs px-2 py-1 rounded", children: "Low Stock" })] }))] }), _jsxs("div", { className: "p-4 space-y-2", children: [props.showTitle && (_jsx("h3", { className: `${TITLE_SIZE[props.titleSize]} ${TITLE_WEIGHT[props.titleWeight]} ${TITLE_ALIGN[props.titleAlign]} text-gray-900`, children: product.title })), props.showPrice && (_jsxs("div", { className: "flex items-baseline gap-2", children: [_jsx("span", { className: `${PRICE_SIZE[props.priceSize]} font-semibold`, style: { color: props.priceColor }, children: typeof cap === 'number' ? `$${(cap / 100).toFixed(2)}` : 'Price N/A' }), props.showCompareAtPrice && isSale && typeof op === 'number' && (_jsxs("span", { className: `${PRICE_SIZE[props.priceSize]} text-gray-500 line-through`, children: ["$", (op / 100).toFixed(2)] })), props.showSavingsBadge && isSale && typeof op === 'number' && typeof cap === 'number' && (_jsxs("span", { className: "bg-red-100 text-red-600 text-xs px-2 py-1 rounded", children: ["Save ", Math.round(((op - cap) / op) * 100), "%"] }))] })), props.showAddToCart && (_jsxs("button", { type: "button", className: `${BTN_SIZE[props.buttonSize]} rounded-lg font-medium transition-colors ${props.buttonStyle === 'filled' ? 'bg-gray-900 text-white hover:bg-gray-700'
                            : props.buttonStyle === 'outline' ? 'border-2 border-gray-900 text-gray-900 hover:bg-gray-100'
                                : 'text-gray-900 hover:bg-gray-100'}`, children: [props.showCartIcon && _jsxs("span", { className: "inline-flex items-center gap-2", children: [_jsx(CartSvg, {}), " ", props.buttonText] }), !props.showCartIcon && props.buttonText] }))] })] }));
};
export const ProductCard = {
    label: 'Product Card',
    fields: accordionFields,
    defaultProps: {
        layout: 'vertical', enableSwiper: true, aspectRatio: 'square',
        borderRadius: 'md', showShadow: true, hoverZoom: true,
        showTitle: true, titleSize: 'lg', titleWeight: 'semibold', titleAlign: 'left',
        showPrice: true, priceSize: 'lg', priceColor: '#000000',
        showCompareAtPrice: true, showSavingsBadge: true,
        showBadges: true, showSaleBadge: true, showNewBadge: true, showLowStockBadge: true,
        badgePosition: 'top-right',
        showAddToCart: true, buttonText: 'Add to Cart',
        buttonStyle: 'filled', buttonSize: 'md', showCartIcon: true,
        cardRadius: 'lg', cardBorder: 'sm', cardShadow: true,
        cardBackground: '#ffffff', accentColor: '#000000', fontFamily: 'inherit',
        productId: '',
    },
    resolveData: async (data, { changed }) => {
        if (!data.props.productId)
            return { props: data.props };
        if (data.readOnly?.product)
            return { props: data.props, readOnly: data.readOnly };
        return { props: data.props };
    },
    render: (rawProps) => {
        const { product, renderProduct, ...rest } = rawProps;
        if (renderProduct && product) {
            return _jsx("div", { className: "puck-product-card-wrapper", children: renderProduct(product, rest) });
        }
        const fallback = product || {
            id: 'mock-product',
            title: 'Sample Product (Select a Product ID to load real data)',
            variants: [{ calculated_price: { calculated_amount: 9999 }, original_price: { original_amount: 12999 } }],
            images: [
                { url: 'https://via.placeholder.com/400x400?text=Product+Image+1' },
                { url: 'https://via.placeholder.com/400x400?text=Product+Image+2' },
            ],
            inventory_quantity: 10,
            created_at: new Date().toISOString(),
        };
        return _jsx(DefaultCard, { product: fallback, props: rest });
    },
};
export default ProductCard;
//# sourceMappingURL=ProductCard.js.map