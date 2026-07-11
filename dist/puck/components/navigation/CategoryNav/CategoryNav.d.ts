import type { ComponentConfig } from '@puckeditor/core';
export interface CategoryNavItem {
    name: string;
    icon?: string;
    href: string;
}
export interface CategoryNavProps {
    title: string;
    showIcons: boolean;
    style: 'standard' | 'luxury';
    categories: CategoryNavItem[];
}
export declare const categoryNavFields: ComponentConfig<CategoryNavProps>['fields'];
export declare const CategoryNav: ComponentConfig<CategoryNavProps>;
export default CategoryNav;
//# sourceMappingURL=CategoryNav.d.ts.map