import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { ComponentConfig } from '@puckeditor/core';
import { imageGalleryFields } from './imagegallery.fields';
import type {
  ImageGalleryProps, ImageGalleryLayout, ImageGalleryThumbPos,
  ImageGalleryRadius, ImageGalleryAspect, ImageGalleryContainerWidth,
} from './imagegallery.types';
import type { ProductDataImage } from '../../product/ProductData';
import { SwiperBase } from '../../shared/SwiperBase';

const RADII: Record<ImageGalleryRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };
const ASPECT: Record<ImageGalleryAspect, string> = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]' };
const WIDTH: Record<ImageGalleryContainerWidth, string> = { full: '100%', large: '1200px', medium: '800px', small: '600px', custom: '800px' };

export interface ImageGalleryWithImages extends ImageGalleryProps {
  images?: ProductDataImage[];
  /** Optional product title for image alt. */
  productTitle?: string;
}

export const ImageGallery: ComponentConfig<ImageGalleryWithImages> = {
  label: 'Image Gallery (Swiper)',
  fields: imageGalleryFields as ComponentConfig<ImageGalleryWithImages>['fields'],
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
  render: (rawProps: any) => {
    const {
      containerWidth, customWidth, maxHeight, layout, mainImageAspectRatio,
      showThumbnails, thumbnailPosition, thumbnailsPerView, thumbnailSpacing,
      showNavigation, navigationColor, navigationSize,
      showPagination, paginationType, paginationColor,
      enableZoom, maxZoomScale, loop, autoHeight, spaceBetween,
      borderRadius, showBorder, borderColor, backgroundColor,
      images = [], productTitle = 'Product',
    } = rawProps as ImageGalleryWithImages;

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const rad = RADII[(borderRadius as ImageGalleryRadius) || 'md'];
    const radiusCls = `rounded-${borderRadius === 'none' ? 'none' : (borderRadius as string)}`;
    const cwidth = (containerWidth as ImageGalleryContainerWidth) === 'custom' ? `${customWidth || 800}px` : WIDTH[containerWidth as ImageGalleryContainerWidth];
    const cheight = maxHeight ? `${maxHeight}px` : '500px';

    if (!images || images.length === 0) {
      return (
        <div className="bg-gray-100 flex items-center justify-center aspect-square rounded-lg p-8">
          <p className="text-gray-400">No images available</p>
        </div>
      );
    }

    const isVertical = thumbnailPosition === 'left' || thumbnailPosition === 'right';

    const thumbSwiper = (
      <Swiper
        modules={[Thumbs]}
        onSwiper={setThumbsSwiper}
        direction={isVertical ? 'vertical' : 'horizontal'}
        spaceBetween={thumbnailSpacing}
        slidesPerView={thumbnailsPerView}
        watchSlidesProgress
        className="thumbnail-swiper h-full"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img src={img.url} alt={img.alt || `Thumb ${i + 1}`} className={`w-full ${ASPECT[mainImageAspectRatio as ImageGalleryAspect]} object-cover cursor-pointer opacity-60 hover:opacity-100 transition ${rad}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    );

    return (
      <div className="image-gallery p-4" style={{ backgroundColor, maxWidth: cwidth, height: cheight, margin: '0 auto', overflow: 'hidden' }}>
        <div className={`gallery-container ${isVertical ? 'flex gap-4' : ''} ${thumbnailPosition === 'right' ? 'flex-row-reverse' : ''}`} style={{ height: cheight, maxHeight: cheight, overflow: 'hidden' }}>
          {showThumbnails && thumbnailPosition === 'left' && <div className="w-24">{thumbSwiper}</div>}

          <div className="flex-1" style={{ height: cheight, maxHeight: cheight, overflow: 'hidden' }}>
            <SwiperBase
              breakpoints={{ mobile: 1, tablet: 1, desktop: 1 }}
              spaceBetween={spaceBetween}
              loop={loop}
              navigation={showNavigation}
              navigationColor={navigationColor}
              pagination={showPagination}
              paginationType={paginationType as any}
              paginationColor={paginationColor}
              zoomMaxRatio={enableZoom ? maxZoomScale : undefined}
              thumbsSwiper={thumbsSwiper}
              className={`main-gallery ${rad} ${showBorder ? 'border-2' : ''}`}
            >
              {images.map((img, i) => (
                <SwiperSlide key={i} style={{ width: '100%', height: cheight, maxHeight: cheight }}>
                  <img src={img.url} alt={img.alt || `${productTitle} - Image ${i + 1}`} className="object-contain" style={{ maxWidth: '100%', maxHeight: cheight, width: 'auto', height: 'auto' }} />
                </SwiperSlide>
              ))}
            </SwiperBase>
          </div>

          {showThumbnails && thumbnailPosition === 'right' && <div className="w-24">{thumbSwiper}</div>}
        </div>
        {showThumbnails && thumbnailPosition === 'bottom' && (
          <div className="mt-4 max-w-4xl mx-auto">{thumbSwiper}</div>
        )}
      </div>
    );
  },
};

export default ImageGallery;
