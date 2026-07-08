import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Thumbs, FreeMode, Zoom } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/zoom';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const imageGalleryFullscreenFields = {
  containerWidth: { type: 'select', label: 'Container Width', options: [{ label: 'Full Width', value: 'full' }, { label: 'Large (1200px)', value: 'large' }, { label: 'Medium (800px)', value: 'medium' }, { label: 'Small (600px)', value: 'small' }] },
  customWidth: { type: 'number', label: 'Custom Width (px)' },
  maxHeight: { type: 'number', label: 'Max Height (px) - Desktop' },
  mobileHeight: { type: 'number', label: 'Height (px) - Mobile' },
  thumbnailsPerView: { type: 'number', label: 'Thumbnails Per View' },
  thumbnailPosition: { type: 'select', label: 'Thumbnail Position', options: [{ label: 'Bottom', value: 'bottom' }, { label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }] },
  thumbnailShape: { type: 'select', label: 'Thumbnail Shape', options: [{ label: 'Square', value: 'square' }, { label: 'Rounded', value: 'rounded' }, { label: 'Circle', value: 'circle' }] },
  navigationStyle: { type: 'select', label: 'Arrow Style', options: [{ label: 'Minimal', value: 'minimal' }, { label: 'Pill', value: 'pill' }, { label: 'Hidden', value: 'hidden' }] },
  enableZoom: { type: 'radio', label: 'Enable Zoom', options: RADIO_YES_NO },
  maxZoom: { type: 'number', label: 'Max Zoom' },
  showImageCounter: { type: 'radio', label: 'Show Image Counter', options: RADIO_YES_NO },
  enableFullscreen: { type: 'radio', label: 'Enable Fullscreen', options: RADIO_YES_NO },
  imageFit: { type: 'select', label: 'Image Fit', options: [{ label: 'Cover', value: 'cover' }, { label: 'Contain', value: 'contain' }] },
  backgroundColor: { type: 'text', label: 'Background Color' },
} as Record<string, Field>;

const PREVIEW = [
  { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=1', alt: 'Image 1' },
  { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=2', alt: 'Image 2' },
  { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=3', alt: 'Image 3' },
  { url: 'https://placehold.co/800x800/f5f5f5/a3a3a3?text=4', alt: 'Image 4' },
];

const widthMap = { full: '100%', large: '1200px', medium: '800px', small: '600px' } as const;
const shapeMap = { square: 'rounded-none', rounded: 'rounded-md', circle: 'rounded-full' } as const;
const Expand = ({ size = 20 }: { size?: number }) => (<svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9" /><polyline points="9 21 3 21 3 15" /><line x1="21" y1="3" x2="14" y2="10" /><line x1="3" y1="21" x2="10" y2="14" /></svg>);

export interface ImageGalleryFullscreenProps {
  containerWidth: 'full' | 'large' | 'medium' | 'small';
  customWidth?: number;
  maxHeight?: number;
  mobileHeight?: number;
  thumbnailsPerView: number;
  thumbnailPosition: 'bottom' | 'left' | 'right';
  thumbnailShape: 'square' | 'rounded' | 'circle';
  navigationStyle: 'minimal' | 'pill' | 'hidden';
  enableZoom: boolean;
  maxZoom: number;
  showImageCounter: boolean;
  enableFullscreen: boolean;
  imageFit: 'cover' | 'contain';
  backgroundColor: string;
}

export interface ImageGalleryFullscreenWithData extends ImageGalleryFullscreenProps {
  images?: Array<{ url: string; alt: string }>;
}

export const ImageGalleryFullscreen: ComponentConfig<ImageGalleryFullscreenWithData> = {
  label: 'Fullscreen Gallery',
  fields: imageGalleryFullscreenFields as ComponentConfig<ImageGalleryFullscreenWithData>['fields'],
  defaultProps: { containerWidth: 'large', maxHeight: 700, mobileHeight: 400, thumbnailsPerView: 5, thumbnailPosition: 'bottom', thumbnailShape: 'rounded', navigationStyle: 'minimal', enableZoom: true, maxZoom: 3, showImageCounter: true, enableFullscreen: true, imageFit: 'cover', backgroundColor: '#ffffff' },
  render: (raw: any) => {
    const { containerWidth = 'large', customWidth, maxHeight, thumbnailsPerView = 5, thumbnailPosition = 'bottom', thumbnailShape = 'rounded', navigationStyle, enableZoom, maxZoom = 3, showImageCounter, enableFullscreen, imageFit, backgroundColor } = raw as ImageGalleryFullscreenWithData;
    const images: Array<{ url: string; alt: string }> = (raw as any).images ?? PREVIEW;
    const width = containerWidth === 'full' ? '100%' : customWidth ? `${customWidth}px` : widthMap[containerWidth];
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const mainSwiper = (
      <Swiper
        modules={[Navigation, Keyboard, Thumbs, Zoom]}
        navigation={navigationStyle !== 'hidden'}
        zoom={enableZoom ? { maxRatio: maxZoom } : false}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        onSlideChange={(s) => setActiveIndex(s.activeIndex)}
        style={{ maxHeight: maxHeight ? `${maxHeight}px` : undefined }}
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="aspect-square w-full">
              <div className="swiper-zoom-container w-full h-full">
                <img src={img.url} alt={img.alt} className={`w-full h-full ${imageFit === 'cover' ? 'object-cover' : 'object-contain'}`} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );

    return (
      <div style={{ width, maxWidth: '100%', margin: '0 auto', backgroundColor }}>
        <div className={`${thumbnailPosition === 'left' ? 'flex gap-4' : thumbnailPosition === 'right' ? 'flex flex-row-reverse gap-4' : ''}`}>
          {thumbnailPosition !== 'bottom' && (
            <Swiper modules={[Thumbs, FreeMode]} onSwiper={setThumbsSwiper} direction="vertical" spaceBetween={8} slidesPerView={thumbnailsPerView} freeMode watchSlidesProgress className="thumbnail-swiper" style={{ flexBasis: `${thumbnailsPerView * 70}px` }}>
              {images.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className={`${shapeMap[thumbnailShape]} overflow-hidden border-2 ${i === activeIndex ? 'border-blue-500' : 'border-transparent'} w-16 h-16`}>
                    <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
          <div className="flex-1 relative">
            {mainSwiper}
            {enableFullscreen && (
              <button onClick={() => setIsFullscreen(!isFullscreen)} className="absolute top-2 right-2 z-10 p-2 bg-white/80 rounded shadow hover:bg-white"><Expand /></button>
            )}
            {showImageCounter && (
              <div className="absolute bottom-2 right-2 z-10 px-2 py-1 bg-black/60 text-white text-sm rounded">{activeIndex + 1} / {images.length}</div>
            )}
          </div>
        </div>
        {thumbnailPosition === 'bottom' && (
          <Swiper modules={[Thumbs, FreeMode]} onSwiper={setThumbsSwiper} spaceBetween={8} slidesPerView={thumbnailsPerView} freeMode watchSlidesProgress className="mt-4 thumbnail-swiper">
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <div className={`${shapeMap[thumbnailShape]} overflow-hidden border-2 ${i === activeIndex ? 'border-blue-500' : 'border-transparent'} w-16 h-16`}>
                  <img src={img.url} alt={img.alt} className="w-full h-full object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setIsFullscreen(false)}>
            <img src={images[activeIndex]?.url} alt={images[activeIndex]?.alt} className="max-w-full max-h-full object-contain" />
          </div>
        )}
      </div>
    );
  },
};

export default ImageGalleryFullscreen;
