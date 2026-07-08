import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import { imageGalleryFields } from './imagegallery.fields';
import { SwiperBase } from '../../shared/SwiperBase';
const RADII = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };
const ASPECT = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]' };
const WIDTH = { full: '100%', large: '1200px', medium: '800px', small: '600px', custom: '800px' };
export const ImageGallery = {
    label: 'Image Gallery (Swiper)',
    fields: imageGalleryFields,
    defaultProps: {
        containerWidth: 'large', customWidth: 800, maxHeight: 500,
        layout: 'thumbnails', mainImageAspectRatio: 'landscape',
        showThumbnails: true, thumbnailPosition: 'bottom', thumbnailsPerView: 5, thumbnailSpacing: 12,
        showNavigation: true, navigationColor: '#000000', navigationSize: 'md',
        showPagination: false, paginationType: 'bullets', paginationColor: '#3b82f6',
        enableZoom: true, maxZoomScale: 3,
        loop: true, autoHeight: false, spaceBetween: 10,
        borderRadius: 'md', showBorder: true, borderColor: '#e5e5e5', backgroundColor: '#f9fafb',
    },
    render: (rawProps) => {
        const { containerWidth, customWidth, maxHeight, layout, mainImageAspectRatio, showThumbnails, thumbnailPosition, thumbnailsPerView, thumbnailSpacing, showNavigation, navigationColor, navigationSize, showPagination, paginationType, paginationColor, enableZoom, maxZoomScale, loop, autoHeight, spaceBetween, borderRadius, showBorder, borderColor, backgroundColor, images = [], productTitle = 'Product', } = rawProps;
        const [thumbsSwiper, setThumbsSwiper] = useState(null);
        const rad = RADII[borderRadius || 'md'];
        const radiusCls = `rounded-${borderRadius === 'none' ? 'none' : borderRadius}`;
        const cwidth = containerWidth === 'custom' ? `${customWidth || 800}px` : WIDTH[containerWidth];
        const cheight = maxHeight ? `${maxHeight}px` : '500px';
        if (!images || images.length === 0) {
            return (_jsx("div", { className: "bg-gray-100 flex items-center justify-center aspect-square rounded-lg p-8", children: _jsx("p", { className: "text-gray-400", children: "No images available" }) }));
        }
        const isVertical = thumbnailPosition === 'left' || thumbnailPosition === 'right';
        const thumbSwiper = (_jsx(Swiper, { modules: [Thumbs], onSwiper: setThumbsSwiper, direction: isVertical ? 'vertical' : 'horizontal', spaceBetween: thumbnailSpacing, slidesPerView: thumbnailsPerView, watchSlidesProgress: true, className: "thumbnail-swiper h-full", children: images.map((img, i) => (_jsx(SwiperSlide, { children: _jsx("img", { src: img.url, alt: img.alt || `Thumb ${i + 1}`, className: `w-full ${ASPECT[mainImageAspectRatio]} object-cover cursor-pointer opacity-60 hover:opacity-100 transition ${rad}` }) }, i))) }));
        return (_jsxs("div", { className: "image-gallery p-4", style: { backgroundColor, maxWidth: cwidth, height: cheight, margin: '0 auto', overflow: 'hidden' }, children: [_jsxs("div", { className: `gallery-container ${isVertical ? 'flex gap-4' : ''} ${thumbnailPosition === 'right' ? 'flex-row-reverse' : ''}`, style: { height: cheight, maxHeight: cheight, overflow: 'hidden' }, children: [showThumbnails && thumbnailPosition === 'left' && _jsx("div", { className: "w-24", children: thumbSwiper }), _jsx("div", { className: "flex-1", style: { height: cheight, maxHeight: cheight, overflow: 'hidden' }, children: _jsx(SwiperBase, { breakpoints: { mobile: 1, tablet: 1, desktop: 1 }, spaceBetween: spaceBetween, loop: loop, navigation: showNavigation, navigationColor: navigationColor, pagination: showPagination, paginationType: paginationType, paginationColor: paginationColor, zoomMaxRatio: enableZoom ? maxZoomScale : undefined, thumbsSwiper: thumbsSwiper, className: `main-gallery ${rad} ${showBorder ? 'border-2' : ''}`, children: images.map((img, i) => (_jsx(SwiperSlide, { style: { width: '100%', height: cheight, maxHeight: cheight }, children: _jsx("img", { src: img.url, alt: img.alt || `${productTitle} - Image ${i + 1}`, className: "object-contain", style: { maxWidth: '100%', maxHeight: cheight, width: 'auto', height: 'auto' } }) }, i))) }) }), showThumbnails && thumbnailPosition === 'right' && _jsx("div", { className: "w-24", children: thumbSwiper })] }), showThumbnails && thumbnailPosition === 'bottom' && (_jsx("div", { className: "mt-4 max-w-4xl mx-auto", children: thumbSwiper }))] }));
    },
};
export default ImageGallery;
//# sourceMappingURL=ImageGallery.js.map