import type { ComponentConfig } from '@puckeditor/core';
export interface CategoryHeroProps {
    showImage: boolean;
    showTitle: boolean;
    showDescription: boolean;
    height: 'small' | 'medium' | 'large';
    overlayOpacity: number;
    style: 'standard' | 'luxury';
    backgroundColor: string;
    textColor: string;
    /** Category context (consumer-provided at render time). */
    title?: string;
    description?: string;
    image?: string;
}
export declare const categoryHeroFields: ComponentConfig<CategoryHeroProps>['fields'];
export declare const CategoryHero: ComponentConfig<CategoryHeroProps>;
export default CategoryHero;
//# sourceMappingURL=CategoryHero.d.ts.map