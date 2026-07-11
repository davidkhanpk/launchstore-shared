import type { ComponentConfig } from '@puckeditor/core';
export interface FilterOption {
    label: string;
    value: string;
}
export interface FilterGroupProps {
    title: string;
    type: 'range' | 'checkbox' | 'radio';
    min: number;
    max: number;
    options: FilterOption[];
    collapsible: boolean;
    defaultExpanded: boolean;
    style: 'standard' | 'luxury';
}
export declare const filterGroupFields: ComponentConfig<FilterGroupProps>['fields'];
export declare const FilterGroup: ComponentConfig<FilterGroupProps>;
export default FilterGroup;
//# sourceMappingURL=FilterGroup.d.ts.map