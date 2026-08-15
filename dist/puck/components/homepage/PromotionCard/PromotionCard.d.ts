import type { ComponentConfig } from '@puckeditor/core';
export interface PromotionCardProps {
    title: string;
    description: string;
    buttonText: string;
    buttonHref: string;
    backgroundColor: string;
    textColor: string;
    buttonColor: string;
    buttonTextColor: string;
    /** Tailwind radius scale value — see RADIUS_OPTIONS in the design system. */
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
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
export declare const promotionCardFields: ComponentConfig<PromotionCardProps>['fields'];
export declare const PromotionCard: ComponentConfig<PromotionCardProps>;
export default PromotionCard;
//# sourceMappingURL=PromotionCard.d.ts.map