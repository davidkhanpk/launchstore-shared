import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionHeroProps {
    showImage: boolean;
    showTitle: boolean;
    showDescription: boolean;
    height: 'small' | 'medium' | 'large';
    overlayOpacity: number;
    style: 'standard' | 'luxury';
    backgroundColor: string;
    textColor: string;
    /** Collection context (consumer-provided at render time). */
    title?: string;
    description?: string;
    image?: string;
}
export declare const collectionHeroFields: ComponentConfig<CollectionHeroProps>['fields'];
export declare const CollectionHero: ComponentConfig<CollectionHeroProps>;
export default CollectionHero;
//# sourceMappingURL=CollectionHero.d.ts.map