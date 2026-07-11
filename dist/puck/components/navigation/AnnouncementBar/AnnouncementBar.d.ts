import type { ComponentConfig } from '@puckeditor/core';
export interface AnnouncementBarProps {
    text: string;
    linkText: string;
    linkUrl: string;
    backgroundColor: string;
    textColor: string;
    alignment: 'left' | 'center' | 'right';
    fontSize: 'xs' | 'sm' | 'base';
    paddingY: 'sm' | 'md' | 'lg';
}
export declare const announcementBarFields: ComponentConfig<AnnouncementBarProps>['fields'];
export declare const AnnouncementBar: ComponentConfig<AnnouncementBarProps>;
export default AnnouncementBar;
//# sourceMappingURL=AnnouncementBar.d.ts.map