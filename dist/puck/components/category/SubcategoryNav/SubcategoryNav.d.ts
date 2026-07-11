import type { ComponentConfig } from '@puckeditor/core';
export interface SubcategoryNavProps {
    layout: 'horizontal' | 'vertical' | 'pills';
    showIcons: boolean;
    alignment: 'left' | 'center' | 'right';
    /** Subcategories (consumer-provided at render time). */
    items?: Array<{
        id: string;
        name: string;
        url?: string;
    }>;
}
export declare const subcategoryNavFields: ComponentConfig<SubcategoryNavProps>['fields'];
export declare const SubcategoryNav: ComponentConfig<SubcategoryNavProps>;
export default SubcategoryNav;
//# sourceMappingURL=SubcategoryNav.d.ts.map