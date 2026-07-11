const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const productCardFields = {
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
    priceColor: { type: 'text', label: 'Price Color (hex)' },
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
    cardBackground: { type: 'text', label: 'Card Background (hex)' },
    accentColor: { type: 'text', label: 'Accent Color (hex)' },
    fontFamily: { type: 'text', label: 'Font Family' },
    productId: { type: 'text', label: 'Product ID (optional)' },
};
//# sourceMappingURL=productcard.fields.js.map