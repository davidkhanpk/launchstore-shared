import type { ComponentConfig } from '@puckeditor/core';
export interface PremiumService {
    icon: string;
    title: string;
    description: string;
}
export interface PremiumServicesProps {
    services: PremiumService[];
    columns: number;
}
export declare const premiumServicesFields: ComponentConfig<PremiumServicesProps>['fields'];
export declare const PremiumServices: ComponentConfig<PremiumServicesProps>;
export default PremiumServices;
//# sourceMappingURL=PremiumServices.d.ts.map