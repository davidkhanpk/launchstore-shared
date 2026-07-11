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
    alignment: 'left' | 'center';
}
export declare const promotionCardFields: ComponentConfig<PromotionCardProps>['fields'];
export declare const PromotionCard: ComponentConfig<PromotionCardProps>;
export default PromotionCard;
//# sourceMappingURL=PromotionCard.d.ts.map