import type { ComponentConfig } from '@puckeditor/core';
export interface QuickLinkItem {
    text: string;
    href: string;
}
export interface QuickLinksProps {
    title: string;
    links: QuickLinkItem[];
    fontSize: 'xs' | 'sm' | 'base';
}
export declare const quickLinksFields: ComponentConfig<QuickLinksProps>['fields'];
export declare const QuickLinks: ComponentConfig<QuickLinksProps>;
export default QuickLinks;
//# sourceMappingURL=QuickLinks.d.ts.map