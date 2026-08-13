import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import type { ComponentConfig } from '@puckeditor/core';
import type {
  ImageGalleryProps, ImageGalleryLayout, ImageGalleryThumbPos,
  ImageGalleryRadius, ImageGalleryAspect, ImageGalleryContainerWidth,
} from './imagegallery.types';
import type { ProductDataImage } from '../../product/ProductData';
import { SwiperBase } from '../../shared/SwiperBase';
import {
  createAccordionFields,
  sharedLayoutFields,
  buildLayoutClasses,
  defaultLayoutProps,
} from '../../../design-system';

const RADII: Record<ImageGalleryRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };
const ASPECT: Record<ImageGalleryAspect, string> = { square: 'aspect-square', portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]', wide: 'aspect-[16/9]' };
const WIDTH: Record<ImageGalleryContainerWidth, string> = { full: '100%', large: '1200px', medium: '800px', small: '600px', custom: '800px' };

export interface ImageGalleryWithImages extends ImageGalleryProps {
  images?: ProductDataImage[];
  /** Optional product title for image alt. */
  productTitle?: string;
}

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  containerWidth: {
    type: 'select' as const, label: 'Container Width',
    options: [
      { label: 'Full Width (100%)', value: 'full' },
      { label: 'Large (1200px)', value: 'large' },
      { label: 'Medium (800px)', value: 'medium' },
      { label: 'Small (600px)', value: 'small' },
      { label: 'Custom', value: 'custom' },
    ],
  },
  customWidth: { type: 'number' as const, label: 'Custom Width (px)' },
  maxHeight: { type: 'number' as const, label: 'Max Height (px)' },
  layout: {
    type: 'select' as const, label: 'Gallery Layout',
    options: [
      { label: 'Standard (Full Image)', value: 'standard' },
      { label: 'With Thumbnails', value: 'thumbnails' },
      { label: 'Grid View', value: 'grid' },
    ],
  },
  mainImageAspectRatio: {
    type: 'select' as const, label: 'Main Image Aspect Ratio',
    options: [
      { label: 'Square (1:1)', value: 'square' },
      { label: 'Portrait (3:4)', value: 'portrait' },
      { label: 'Landscape (4:3)', value: 'landscape' },
      { label: 'Wide (16:9)', value: 'wide' },
    ],
  },
};

// ── Thumbnails fields (component-specific) ──────────────────────────────────

const thumbnailFields = {
  showThumbnails: { type: 'radio' as const, label: 'Show Thumbnails', options: RADIO_YES_NO },
  thumbnailPosition: {
    type: 'select' as const, label: 'Thumbnail Position',
    options: [
      { label: 'Bottom', value: 'bottom' },
      { label: 'Right', value: 'right' },
      { label: 'Left', value: 'left' },
    ],
  },
  thumbnailsPerView: { type: 'number' as const, label: 'Thumbnails Per View' },
  thumbnailSpacing: { type: 'number' as const, label: 'Thumbnail Spacing (px)' },
};

// ── Carousel fields (component-specific) ────────────────────────────────────

const carouselFields = {
  showNavigation: { type: 'radio' as const, label: 'Show Navigation Arrows', options: RADIO_YES_NO },
  navigationColor: { type: 'text' as const, label: 'Navigation Color (hex)' },
  navigationSize: {
    type: 'select' as const, label: 'Navigation Size',
    options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
  },
  showPagination: { type: 'radio' as const, label: 'Show Pagination', options: RADIO_YES_NO },
  paginationType: {
    type: 'select' as const, label: 'Pagination Type',
    options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction (1/5)', value: 'fraction' }],
  },
  paginationColor: { type: 'text' as const, label: 'Pagination Color (hex)' },
  enableZoom: { type: 'radio' as const, label: 'Enable Zoom (click/pinch)', options: RADIO_YES_NO },
  maxZoomScale: { type: 'number' as const, label: 'Max Zoom Scale' },
  loop: { type: 'radio' as const, label: 'Loop', options: RADIO_YES_NO },
  autoHeight: { type: 'radio' as const, label: 'Auto Height', options: RADIO_YES_NO },
  spaceBetween: { type: 'number' as const, label: 'Space Between Images (px)' },
};

// ── Color fields (component-specific) ───────────────────────────────────────

const colorFields = {
  borderRadius: {
    type: 'select' as const, label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
    ],
  },
  showBorder: { type: 'radio' as const, label: 'Show Border', options: RADIO_YES_NO },
  borderColor: { type: 'text' as const, label: 'Border Color (hex)' },
  backgroundColor: { type: 'text' as const, label: 'Background Color (hex)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...thumbnailFields,
  ...carouselFields,
  ...colorFields,
  ...sharedLayoutFields,
};

// ── Accordion config ────────────────────────────────────────────────────────

const accordionFields = createAccordionFields({
  groups: [
    {
      label: 'Content',
      defaultOpen: true,
      fieldKeys: ['containerWidth', 'customWidth', 'maxHeight', 'layout', 'mainImageAspectRatio'],
    },
    {
      label: 'Thumbnails',
      fieldKeys: ['showThumbnails', 'thumbnailPosition', 'thumbnailsPerView', 'thumbnailSpacing'],
    },
    {
      label: 'Carousel',
      fieldKeys: [
        'showNavigation', 'navigationColor', 'navigationSize',
        'showPagination', 'paginationType', 'paginationColor',
        'enableZoom', 'maxZoomScale', 'loop', 'autoHeight', 'spaceBetween',
      ],
    },
    {
      label: 'Colors',
      fieldKeys: ['borderRadius', 'showBorder', 'borderColor', 'backgroundColor'],
    },
    {
      label: 'Layout',
      fieldKeys: ['marginTop', 'marginBottom', 'paddingX', 'paddingY'],
    },
  ],
  allFields,
});

// ── Component ───────────────────────────────────────────────────────────────

export const ImageGallery: ComponentConfig<ImageGalleryWithImages> = {
  label: 'Image Gallery (Swiper)',
  fields: accordionFields as any,
  defaultProps: {
    containerWidth: 'large', customWidth: 800, maxHeight: 500,
    layout: 'thumbnails', mainImageAspectRatio: 'landscape',
    showThumbnails: true, thumbnailPosition: 'bottom', thumbnailsPerView: 5, thumbnailSpacing: 12,
    showNavigation: true, navigationColor: '#000000', navigationSize: 'md',
    showPagination: false, paginationType: 'bullets', paginationColor: '#3b82f6',
    enableZoom: true, maxZoomScale: 3,
    loop: true, autoHeight: false, spaceBetween: 10,
    borderRadius: 'md', showBorder: true, borderColor: '#e5e5e5', backgroundColor: '#f9fafb',
    ...defaultLayoutProps,
  } as ImageGalleryWithImages,
  render: (rawProps: any) => {
    const {
      containerWidth, customWidth, maxHeight, layout, mainImageAspectRatio,
      showThumbnails, thumbnailPosition, thumbnailsPerView, thumbnailSpacing,
      showNavigation, navigationColor, navigationSize,
      showPagination, paginationType, paginationColor,
      enableZoom, maxZoomScale, loop, autoHeight, spaceBetween,
      borderRadius, showBorder, borderColor, backgroundColor,
      marginTop, marginBottom, paddingX, paddingY,
      images = [], productTitle = 'Product',
    } = rawProps as ImageGalleryWithImages;

    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const rad = RADII[(borderRadius as ImageGalleryRadius) || 'md'];
    const radiusCls = `rounded-${borderRadius === 'none' ? 'none' : (borderRadius as string)}`;
    const cwidth = (containerWidth as ImageGalleryContainerWidth) === 'custom' ? `${customWidth || 800}px` : WIDTH[containerWidth as ImageGalleryContainerWidth];
    const cheight = maxHeight ? `${maxHeight}px` : '500px';

    const wrapperClassName = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });

    if (!images || images.length === 0) {
      return (
        <div className={wrapperClassName}>
          <div className="bg-gray-100 flex items-center justify-center aspect-square rounded-lg p-8">
            <p className="text-gray-400">No images available</p>
          </div>
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
      <div className={wrapperClassName}>
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
      </div>
    );
  },
};

export default ImageGallery;
