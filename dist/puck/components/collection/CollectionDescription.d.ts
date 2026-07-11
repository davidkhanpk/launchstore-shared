import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionDescriptionProps {
    fontSize: string;
    textAlign: 'left' | 'center' | 'right';
    textColor: string;
    marginBottom: string;
    maxWidth: string;
}
export interface CollectionDescriptionWithData extends CollectionDescriptionProps {
    text?: string;
}
export declare const CollectionDescription: ComponentConfig<CollectionDescriptionWithData>;
export default CollectionDescription;
//# sourceMappingURL=CollectionDescription.d.ts.map