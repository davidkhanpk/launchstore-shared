import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const collectionMetadataFields = {
  showHandle: { type: 'radio', label: 'Show Handle', options: RADIO_YES_NO },
  showCreatedDate: { type: 'radio', label: 'Show Created Date', options: RADIO_YES_NO },
  showUpdatedDate: { type: 'radio', label: 'Show Updated Date', options: RADIO_YES_NO },
  fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Extra Small', value: 'text-xs' }, { label: 'Small', value: 'text-sm' }, { label: 'Medium', value: 'text-base' }] },
  textColor: { type: 'select', label: 'Text Color', options: [{ label: 'Gray 400', value: 'text-gray-400' }, { label: 'Gray 500', value: 'text-gray-500' }, { label: 'Gray 600', value: 'text-gray-600' }] },
} as Record<string, Field>;

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

export const CollectionMetadata: ComponentConfig<CollectionMetadataWithData> = {
  label: 'Collection Metadata',
  fields: collectionMetadataFields as ComponentConfig<CollectionMetadataWithData>['fields'],
  defaultProps: { showHandle: false, showCreatedDate: false, showUpdatedDate: false, fontSize: 'text-sm', textColor: 'text-gray-500' },
  render: (raw: any) => {
    const { showHandle, showCreatedDate, showUpdatedDate, fontSize = 'text-sm', textColor = 'text-gray-500' } = raw as CollectionMetadataWithData;
    const handle = (raw as any).handle ?? 'sample-collection';
    const createdAt = (raw as any).createdAt ?? new Date().toLocaleDateString();
    const updatedAt = (raw as any).updatedAt ?? new Date().toLocaleDateString();
    const metadata: string[] = [];
    if (showHandle) metadata.push(`Handle: ${handle}`);
    if (showCreatedDate) metadata.push(`Created: ${createdAt}`);
    if (showUpdatedDate) metadata.push(`Updated: ${updatedAt}`);

    if (metadata.length === 0) return <div className={`${fontSize} ${textColor} mb-4 italic`}>Enable metadata fields to display collection information</div>;
    return (
      <div className={`${fontSize} ${textColor} mb-4`}>
        {metadata.map((item, i) => <span key={i}>{item}{i < metadata.length - 1 && ' • '}</span>)}
      </div>
    );
  },
};

export default CollectionMetadata;
