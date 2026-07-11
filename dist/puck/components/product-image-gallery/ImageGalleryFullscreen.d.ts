import type { ComponentConfig } from '@puckeditor/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/free-mode';
import 'swiper/css/zoom';
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
    images?: Array<{
        url: string;
        alt: string;
    }>;
}
export declare const ImageGalleryFullscreen: ComponentConfig<ImageGalleryFullscreenWithData>;
export default ImageGalleryFullscreen;
//# sourceMappingURL=ImageGalleryFullscreen.d.ts.map