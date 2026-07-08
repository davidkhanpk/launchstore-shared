import { jsx as _jsx } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const imageGalleryMinimalFields = {
    containerWidth: { type: 'select', label: 'Container Width', options: [{ label: 'Full Width (100%)', value: 'full' }, { label: 'Large (1200px)', value: 'large' }, { label: 'Medium (800px)', value: 'medium' }, { label: 'Small (600px)', value: 'small' }, { label: 'Custom', value: 'custom' }] },
    customWidth: { type: 'number', label: 'Custom Width (px)' },
    maxHeight: { type: 'number', label: 'Max Height (px) - Desktop' },
    mobileHeight: { type: 'number', label: 'Height (px) - Mobile' },
    aspectRatio: { type: 'select', label: 'Aspect Ratio', options: [{ label: 'Square (1:1)', value: 'square' }, { label: 'Portrait (3:4)', value: 'portrait' }, { label: 'Landscape (4:3)', value: 'landscape' }, { label: 'Wide (16:9)', value: 'wide' }] },
    imageFit: { type: 'select', label: 'Image Fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }] },
    showNavigation: { type: 'radio', label: 'Navigation Arrows', options: RADIO_YES_NO },
    navigationStyle: { type: 'select', label: 'Arrow Style', options: [{ label: 'Minimal (circle)', value: 'minimal' }, { label: 'Pill (rounded bar)', value: 'pill' }, { label: 'Hidden', value: 'hidden' }] },
    showPagination: { type: 'radio', label: 'Pagination Dots', options: RADIO_YES_NO },
    paginationStyle: { type: 'select', label: 'Pagination Style', options: [{ label: 'Dots', value: 'dots' }, { label: 'Line', value: 'line' }, { label: 'Fraction', value: 'fraction' }] },
    loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
    autoHeight: { type: 'radio', label: 'Auto Height', options: RADIO_YES_NO },
    spacing: { type: 'number', label: 'Spacing Between Slides (px)' },
    backgroundColor: { type: 'text', label: 'Background Color' },
};
const PREVIEW = [
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=Product+1', alt: 'Product Image 1' },
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=Product+2', alt: 'Product Image 2' },
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=Product+3', alt: 'Product Image 3' },
];
const widthMap = { full: '100%', large: '1200px', medium: '800px', small: '600px', custom: '600px' };
const aspectMap = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-video' };
export const ImageGalleryMinimal = {
    label: 'Minimal Gallery',
    fields: imageGalleryMinimalFields,
    defaultProps: { containerWidth: 'large', maxHeight: 600, mobileHeight: 400, aspectRatio: 'square', showNavigation: true, navigationStyle: 'minimal', showPagination: true, paginationStyle: 'dots', loop: true, autoHeight: false, spacing: 16, imageFit: 'cover', backgroundColor: '#ffffff' },
    render: (raw) => {
        const { containerWidth = 'large', customWidth, maxHeight, aspectRatio = 'square', showNavigation, navigationStyle, showPagination, paginationStyle, loop, autoHeight, spacing, imageFit, backgroundColor } = raw;
        const images = raw.images ?? PREVIEW;
        const width = containerWidth === 'custom' && customWidth ? `${customWidth}px` : widthMap[containerWidth];
        return (_jsx("div", { style: { width, maxWidth: '100%', margin: '0 auto', backgroundColor }, children: _jsx(Swiper, { modules: showNavigation && showPagination ? [Navigation, Pagination, Keyboard] : showNavigation ? [Navigation, Keyboard] : showPagination ? [Pagination, Keyboard] : [Keyboard], navigation: showNavigation && navigationStyle !== 'hidden', pagination: showPagination ? { clickable: true, type: paginationStyle === 'fraction' ? 'fraction' : 'bullets' } : false, loop: loop, autoHeight: autoHeight, spaceBetween: spacing, children: images.map((img, i) => (_jsx(SwiperSlide, { children: _jsx("div", { className: `${aspectMap[aspectRatio]} w-full`, style: { maxHeight: maxHeight ? `${maxHeight}px` : undefined }, children: _jsx("img", { src: img.url, alt: img.alt, className: `w-full h-full ${imageFit === 'cover' ? 'object-cover' : 'object-contain'}` }) }) }, i))) }) }));
    },
};
export default ImageGalleryMinimal;
//# sourceMappingURL=ImageGalleryMinimal.js.map