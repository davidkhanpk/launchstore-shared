import type { Field } from '@puckeditor/core';
import type { ProductDataImage } from '../../product/ProductData';

export type ImageGalleryContainerWidth = 'full' | 'large' | 'medium' | 'small' | 'custom';
export type ImageGalleryLayout = 'standard' | 'thumbnails' | 'grid';
export type ImageGalleryAspect = 'square' | 'portrait' | 'landscape' | 'wide';
export type ImageGalleryThumbPos = 'bottom' | 'right' | 'left';
export type ImageGalleryNavSize = 'sm' | 'md' | 'lg';
export type ImageGalleryRadius = 'none' | 'sm' | 'md' | 'lg' | 'xl';

export interface ImageGalleryProps {
  containerWidth: ImageGalleryContainerWidth;
  customWidth: number;
  maxHeight: number;
  layout: ImageGalleryLayout;
  mainImageAspectRatio: ImageGalleryAspect;
  showThumbnails: boolean;
  thumbnailPosition: ImageGalleryThumbPos;
  thumbnailsPerView: number;
  thumbnailSpacing: number;
  showNavigation: boolean;
  navigationColor: string;
  navigationSize: ImageGalleryNavSize;
  showPagination: boolean;
  paginationType: 'bullets' | 'fraction';
  paginationColor: string;
  enableZoom: boolean;
  maxZoomScale: number;
  loop: boolean;
  autoHeight: boolean;
  spaceBetween: number;
  borderRadius: ImageGalleryRadius;
  showBorder: boolean;
  borderColor: string;
  backgroundColor: string;
}

const RADII: Record<ImageGalleryRadius, string> = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl' };
