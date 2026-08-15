import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionHeroProps {
    showImage: boolean;
    showTitle: boolean;
    showDescription: boolean;
    /** 'standard' renders a solid headline; 'luxury' lightens + widens + uppercases it. */
    style: 'standard' | 'luxury';
    backgroundColor: string;
    textColor: string;
    /** Collection context (consumer-provided at render time). */
    title?: string;
    description?: string;
    image?: string;
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    overlayColor?: string;
    overlayOpacity?: string;
    gradientFrom?: string;
    gradientTo?: string;
    density?: string;
    contentWidth?: string;
    contentAlign?: string;
    verticalAlign?: string;
    minHeight?: string;
}
export declare const collectionHeroFields: ComponentConfig<CollectionHeroProps>['fields'];
export declare const CollectionHero: ComponentConfig<CollectionHeroProps>;
export default CollectionHero;
//# sourceMappingURL=CollectionHero.d.ts.map