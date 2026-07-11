import type { ComponentConfig } from '@puckeditor/core';
export interface CollectionMetadataProps {
    showHandle: boolean;
    showCreatedDate: boolean;
    showUpdatedDate: boolean;
    fontSize: string;
    textColor: string;
}
export interface CollectionMetadataWithData extends CollectionMetadataProps {
    handle?: string;
    createdAt?: string;
    updatedAt?: string;
}
export declare const CollectionMetadata: ComponentConfig<CollectionMetadataWithData>;
export default CollectionMetadata;
//# sourceMappingURL=CollectionMetadata.d.ts.map