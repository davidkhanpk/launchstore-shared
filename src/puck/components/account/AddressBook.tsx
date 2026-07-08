import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const addressBookFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }] },
  showAddButton: { type: 'radio', label: 'Show Add Button', options: RADIO_YES_NO },
  showTypeLabels: { type: 'radio', label: 'Show Type Labels', options: RADIO_YES_NO },
  maxAddresses: { type: 'number', label: 'Max Addresses' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  cardBackgroundColor: { type: 'text', label: 'Card Background Color' },
  textColor: { type: 'text', label: 'Text Color' },
  addButtonText: { type: 'text', label: 'Add Button Text' },
  editButtonText: { type: 'text', label: 'Edit Button Text' },
  deleteButtonText: { type: 'text', label: 'Delete Button Text' },
  setDefaultText: { type: 'text', label: 'Set Default Text' },
  defaultBadgeText: { type: 'text', label: 'Default Badge Text' },
  emptyStateText: { type: 'text', label: 'Empty State Text' },
} as Record<string, Field>;

const Plus = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
);
const Edit = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
);
const Trash = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="3 6 5 6 21 6" /><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
);
const MapPin = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);

export interface Address {
  id: string; type: 'shipping' | 'billing'; firstName: string; lastName: string; company?: string;
  address1: string; address2?: string; city: string; state: string; zip: string; country: string; phone: string; isDefault: boolean;
}

export interface AddressBookProps {
  layout: 'grid' | 'list';
  showAddButton: boolean;
  showTypeLabels: boolean;
  maxAddresses: number;
  backgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  addButtonText: string;
  editButtonText: string;
  deleteButtonText: string;
  setDefaultText: string;
  defaultBadgeText: string;
  emptyStateText: string;
}

export interface AddressBookWithData extends AddressBookProps {
  addresses?: Address[];
  onAdd?: () => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onSetDefault?: (id: string) => void;
}

const MOCK: Address[] = [
  { id: '1', type: 'shipping', firstName: 'John', lastName: 'Doe', address1: '123 Main Street', address2: 'Apt 4B', city: 'New York', state: 'NY', zip: '10001', country: 'United States', phone: '+1 (555) 123-4567', isDefault: true },
  { id: '2', type: 'billing', firstName: 'John', lastName: 'Doe', company: 'Acme Corp', address1: '456 Park Ave', city: 'New York', state: 'NY', zip: '10022', country: 'United States', phone: '+1 (555) 987-6543', isDefault: false },
];

export const AddressBook: ComponentConfig<AddressBookWithData> = {
  label: 'Address Book',
  fields: addressBookFields as ComponentConfig<AddressBookWithData>['fields'],
  defaultProps: { layout: 'grid', showAddButton: true, showTypeLabels: true, maxAddresses: 10, backgroundColor: '#f9fafb', cardBackgroundColor: '#ffffff', textColor: '#111827', addButtonText: 'Add New Address', editButtonText: 'Edit', deleteButtonText: 'Delete', setDefaultText: 'Set as Default', defaultBadgeText: 'Default', emptyStateText: 'No addresses saved' },
  render: (raw: any) => {
    const { layout = 'grid', showAddButton, showTypeLabels, backgroundColor = '#f9fafb', cardBackgroundColor = '#ffffff', textColor = '#111827', addButtonText = 'Add New Address', editButtonText = 'Edit', deleteButtonText = 'Delete', setDefaultText = 'Set as Default', defaultBadgeText = 'Default', emptyStateText = 'No addresses saved' } = raw as AddressBookWithData;
    const addresses: Address[] = (raw as any).addresses ?? MOCK;
    const onAdd = (raw as any).onAdd ?? (() => {});
    const onEdit = (id: string) => (raw as any).onEdit ? (raw as any).onEdit(id) : (() => {});
    const onDelete = (id: string) => (raw as any).onDelete ? (raw as any).onDelete(id) : (() => {});
    const onSetDefault = (id: string) => (raw as any).onSetDefault ? (raw as any).onSetDefault(id) : (() => {});

    const cardClass = `p-4 rounded-lg ${layout === 'grid' ? 'border border-gray-200' : 'border-b border-gray-200 last:border-0'}`;

    return (
      <div style={{ backgroundColor, color: textColor }} className="p-6 rounded-lg">
        {showAddButton && (
          <button onClick={onAdd} className="mb-4 flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"><Plus /> {addButtonText}</button>
        )}
        {addresses.length === 0 ? (
          <div className="py-16 text-center text-gray-500 flex flex-col items-center gap-2"><MapPin /><p>{emptyStateText}</p></div>
        ) : (
          <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
            {addresses.map((a) => (
              <div key={a.id} style={{ backgroundColor: cardBackgroundColor }} className={cardClass}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {showTypeLabels && <span className="text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded uppercase">{a.type}</span>}
                    {a.isDefault && <span className="text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">{defaultBadgeText}</span>}
                  </div>
                </div>
                <p className="font-semibold">{a.firstName} {a.lastName}</p>
                {a.company && <p className="text-sm opacity-70">{a.company}</p>}
                <p className="text-sm opacity-70 mt-2">{a.address1}{a.address2 ? `, ${a.address2}` : ''}</p>
                <p className="text-sm opacity-70">{a.city}, {a.state} {a.zip}</p>
                <p className="text-sm opacity-70">{a.country}</p>
                <p className="text-sm opacity-70 mt-1">{a.phone}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {!a.isDefault && <button onClick={() => onSetDefault(a.id)} className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">{setDefaultText}</button>}
                  <button onClick={() => onEdit(a.id)} className="text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1"><Edit /> {editButtonText}</button>
                  <button onClick={() => onDelete(a.id)} className="text-xs px-3 py-1 border border-red-200 text-red-600 rounded hover:bg-red-50 flex items-center gap-1"><Trash /> {deleteButtonText}</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default AddressBook;
