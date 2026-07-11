import type { ComponentConfig } from '@puckeditor/core';
export interface LinkListItem {
    text: string;
    url: string;
}
export interface LinkListProps {
    links: LinkListItem[];
    color: string;
    hoverColor: string;
    fontSize: 'xs' | 'sm' | 'base';
    spacing: 'sm' | 'md' | 'lg';
    alignment: 'left' | 'center' | 'right';
}
export declare const linkListFields: ComponentConfig<LinkListProps>['fields'];
export declare const LinkList: ComponentConfig<LinkListProps>;
export default LinkList;
//# sourceMappingURL=LinkList.d.ts.map