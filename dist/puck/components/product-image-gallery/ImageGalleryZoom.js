import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Zoom, Thumbs, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const imageGalleryZoomFields = {
    containerWidth: { type: 'select', label: 'Container Width', options: [{ label: 'Full Width', value: 'full' }, { label: 'Large (1200px)', value: 'large' }, { label: 'Medium (800px)', value: 'medium' }, { label: 'Small (600px)', value: 'small' }] },
    customWidth: { type: 'number', label: 'Custom Width (px)' },
    maxHeight: { type: 'number', label: 'Max Height (px) - Desktop' },
    mobileHeight: { type: 'number', label: 'Height (px) - Mobile' },
    maxZoom: { type: 'number', label: 'Maximum Zoom Level' },
    showThumbnails: { type: 'radio', label: 'Show Thumbnails', options: RADIO_YES_NO },
    thumbnailsPerView: { type: 'number', label: 'Thumbnails Per View' },
    thumbnailShape: { type: 'select', label: 'Thumbnail Shape', options: [{ label: 'Square', value: 'square' }, { label: 'Rounded', value: 'rounded' }, { label: 'Circle', value: 'circle' }] },
    aspectRatio: { type: 'select', label: 'Aspect Ratio', options: [{ label: 'Square', value: 'square' }, { label: 'Portrait', value: 'portrait' }, { label: 'Landscape', value: 'landscape' }] },
    enableDoubleClickZoom: { type: 'radio', label: 'Double-Click to Zoom', options: RADIO_YES_NO },
    spacing: { type: 'number', label: 'Spacing (px)' },
    navigationStyle: { type: 'select', label: 'Arrow Style', options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Pill', value: 'pill' }, { label: 'Hidden', value: 'hidden' }] },
    imageFit: { type: 'select', label: 'Image Fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }] },
    backgroundColor: { type: 'text', label: 'Background Color' },
};
const PREVIEW = [
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=1', alt: 'Image 1' },
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=2', alt: 'Image 2' },
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=3', alt: 'Image 3' },
    { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=4', alt: 'Image 4' },
];
const widthMap = { full: '100%', large: '1200px', medium: '800px', small: '600px' };
const aspectMap = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]' };
const shapeMap = { square: 'rounded-none', rounded: 'rounded-md', circle: 'rounded-full' };
export const ImageGalleryZoom = {
    label: 'Zoom Gallery',
    fields: imageGalleryZoomFields,
    defaultProps: { containerWidth: 'large', maxHeight: 600, mobileHeight: 400, maxZoom: 3, showThumbnails: true, thumbnailsPerView: 4, thumbnailShape: 'rounded', aspectRatio: 'square', enableDoubleClickZoom: true, spacing: 16, navigationStyle: 'minimal', imageFit: 'cover', backgroundColor: '#ffffff' },
    render: (raw) => {
        const { containerWidth = 'large', customWidth, maxHeight, maxZoom = 3, showThumbnails, thumbnailsPerView = 4, thumbnailShape = 'rounded', aspectRatio = 'square', spacing, navigationStyle, imageFit, backgroundColor } = raw;
        const images = raw.images ?? PREVIEW;
        const width = containerWidth === 'full' ? '100%' : customWidth ? `${customWidth}px` : widthMap[containerWidth];
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
        const [activeIndex, setActiveIndex] = useState(0);
        return (_jsxs("div", { style: { width, maxWidth: '100%', margin: '0 auto', backgroundColor }, children: [_jsx(Swiper, { modules: [Navigation, Pagination, Zoom, Thumbs], navigation: navigationStyle !== 'hidden', pagination: { clickable: true }, zoom: { maxRatio: maxZoom }, thumbs: { swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }, spaceBetween: spacing, onSlideChange: (s) => setActiveIndex(s.activeIndex), children: images.map((img, i) => (_jsx(SwiperSlide, { children: _jsx("div", { className: `${aspectMap[aspectRatio]} w-full`, style: { maxHeight: maxHeight ? `${maxHeight}px` : undefined }, children: _jsx("div", { className: "swiper-zoom-container", children: _jsx("img", { src: img.url, alt: img.alt, className: `w-full h-full ${imageFit === 'cover' ? 'object-cover' : 'object-contain'}` }) }) }) }, i))) }), showThumbnails && (_jsx(Swiper, { modules: [Thumbs, FreeMode], onSwiper: setThumbsSwiper, spaceBetween: 8, slidesPerView: thumbnailsPerView, freeMode: true, watchSlidesProgress: true, className: "mt-4 thumbnail-swiper", children: images.map((img, i) => (_jsx(SwiperSlide, { children: _jsx("div", { className: `${shapeMap[thumbnailShape]} overflow-hidden border-2 ${i === activeIndex ? 'border-blue-500' : 'border-transparent'} w-16 h-16`, children: _jsx("img", { src: img.url, alt: img.alt, className: "w-full h-full object-cover" }) }) }, i))) }))] }));
    },
};
export default ImageGalleryZoom;
//# sourceMappingURL=ImageGalleryZoom.js.map