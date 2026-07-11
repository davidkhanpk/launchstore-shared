import type { ComponentConfig } from '@puckeditor/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
export interface ImageGalleryZoomProps {
    containerWidth: 'full' | 'large' | 'medium' | 'small';
    customWidth?: number;
    maxHeight?: number;
    mobileHeight?: number;
    maxZoom: number;
    showThumbnails: boolean;
    thumbnailsPerView: number;
    thumbnailShape: 'square' | 'rounded' | 'circle';
    aspectRatio: 'square' | 'portrait' | 'landscape';
    enableDoubleClickZoom: boolean;
    spacing: number;
    navigationStyle: 'minimal' | 'pill' | 'hidden';
    imageFit: 'cover' | 'contain';
    backgroundColor: string;
}
export interface ImageGalleryZoomWithData extends ImageGalleryZoomProps {
    images?: Array<{
        url: string;
        alt: string;
    }>;
}
export declare const ImageGalleryZoom: ComponentConfig<ImageGalleryZoomWithData>;
export default ImageGalleryZoom;
//# sourceMappingURL=ImageGalleryZoom.d.ts.map