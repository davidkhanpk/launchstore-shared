import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const savedBlockFields = {
  id: { type: 'text', label: 'ID' },
  blockId: { type: 'text', label: 'Block ID' },
  blockName: { type: 'text', label: 'Block Name' },
} as Record<string, Field>;

export interface SavedBlockProps {
  id: string;
  blockId: string;
  blockName: string;
}

export const SavedBlock: ComponentConfig<SavedBlockProps> = {
  label: 'Saved Block',
  fields: savedBlockFields as ComponentConfig<SavedBlockProps>['fields'],
  defaultProps: { id: 'saved-block-1', blockId: '', blockName: '' },
  render: ({ blockId, blockName }: SavedBlockProps) => {
    if (!blockId) {
      return (
        <div style={{ border: '2px dashed #d1d5db', borderRadius: '8px', padding: '24px', textAlign: 'center', color: '#9ca3af', userSelect: 'none' }}>
          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🧩</div>
          <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 500 }}>Saved Block</p>
          <p style={{ margin: '4px 0 0', fontSize: '0.75rem' }}>Select a block ID in the panel</p>
        </div>
      );
    }
    return (
      <div style={{ border: '2px solid #e5e7eb', borderRadius: '8px', padding: '16px', backgroundColor: '#f9fafb', userSelect: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '1.25rem' }}>🧩</span>
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#111827' }}>{blockName || 'Saved Block'}</p>
            <p style={{ margin: '2px 0 0', fontSize: '0.75rem', color: '#6b7280' }}>ID: {blockId}</p>
          </div>
        </div>
        <p style={{ margin: '8px 0 0', fontSize: '0.7rem', color: '#9ca3af', fontStyle: 'italic' }}>Rendered live on storefront</p>
      </div>
    );
  },
};

export default SavedBlock;
