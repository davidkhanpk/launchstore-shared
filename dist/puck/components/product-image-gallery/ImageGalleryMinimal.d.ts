import type { ComponentConfig } from '@puckeditor/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export interface ImageGalleryMinimalProps {
    containerWidth: 'full' | 'large' | 'medium' | 'small' | 'custom';
    customWidth?: number;
    maxHeight?: number;
    mobileHeight?: number;
    aspectRatio: 'square' | 'portrait' | 'landscape' | 'wide';
    showNavigation: boolean;
    navigationStyle: 'minimal' | 'pill' | 'hidden';
    showPagination: boolean;
    paginationStyle: 'dots' | 'line' | 'fraction';
    loop: boolean;
    autoHeight: boolean;
    spacing: number;
    imageFit: 'cover' | 'contain';
    backgroundColor: string;
}
export interface ImageGalleryMinimalWithData extends ImageGalleryMinimalProps {
    images?: Array<{
        url: string;
        alt: string;
    }>;
}
export declare const ImageGalleryMinimal: ComponentConfig<ImageGalleryMinimalWithData>;
export default ImageGalleryMinimal;
//# sourceMappingURL=ImageGalleryMinimal.d.ts.map