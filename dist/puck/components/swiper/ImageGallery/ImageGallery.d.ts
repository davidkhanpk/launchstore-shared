import type { ComponentConfig } from '@puckeditor/core';
import type { ImageGalleryProps } from './imagegallery.types';
import type { ProductDataImage } from '../../product/ProductData';
export interface ImageGalleryWithImages extends ImageGalleryProps {
    images?: ProductDataImage[];
    /** Optional product title for image alt. */
    productTitle?: string;
}
export declare const ImageGallery: ComponentConfig<ImageGalleryWithImages>;
export default ImageGallery;
//# sourceMappingURL=ImageGallery.d.ts.map