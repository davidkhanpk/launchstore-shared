import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const accountProfileFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Single Column', value: 'single-column' }, { label: 'Two Column', value: 'two-column' }, { label: 'Card Grid', value: 'card-grid' }] },
  showAvatar: { type: 'radio', label: 'Show Avatar', options: RADIO_YES_NO },
  showPersonalInfo: { type: 'radio', label: 'Show Personal Info', options: RADIO_YES_NO },
  showContactInfo: { type: 'radio', label: 'Show Contact Info', options: RADIO_YES_NO },
  showPreferences: { type: 'radio', label: 'Show Preferences', options: RADIO_YES_NO },
  allowEditing: { type: 'radio', label: 'Allow Editing', options: RADIO_YES_NO },
  editButtonText: { type: 'text', label: 'Edit Button Text' },
  saveButtonText: { type: 'text', label: 'Save Button Text' },
  cancelButtonText: { type: 'text', label: 'Cancel Button Text' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  textColor: { type: 'text', label: 'Text Color' },
} as Record<string, Field>;

const User = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
);
const Mail = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const Phone = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);
const MapPin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Edit = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
);
const Save = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" /><polyline points="17 21 17 13 7 13 7 21" /><polyline points="7 3 7 8 15 8" /></svg>
);

export interface AccountProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  birthday?: string;
  address?: string;
  newsletter?: boolean;
  orderNotifications?: boolean;
}

export interface AccountProfileProps {
  layout: 'single-column' | 'two-column' | 'card-grid';
  showAvatar: boolean;
  showPersonalInfo: boolean;
  showContactInfo: boolean;
  showPreferences: boolean;
  allowEditing: boolean;
  editButtonText: string;
  saveButtonText: string;
  cancelButtonText: string;
  backgroundColor: string;
  textColor: string;
}

export interface AccountProfileWithData extends AccountProfileProps {
  profile?: AccountProfile;
  avatarUrl?: string;
  onSave?: (profile: AccountProfile) => void | Promise<void>;
}

const MOCK: AccountProfile = { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com', phone: '+1 (555) 123-4567', birthday: '1990-01-15', address: '123 Main St, City, State 12345', newsletter: true, orderNotifications: true };

export const AccountProfile: ComponentConfig<AccountProfileWithData> = {
  label: 'Account Profile',
  fields: accountProfileFields as ComponentConfig<AccountProfileWithData>['fields'],
  defaultProps: { layout: 'two-column', showAvatar: true, showPersonalInfo: true, showContactInfo: true, showPreferences: true, allowEditing: true, editButtonText: 'Edit Profile', saveButtonText: 'Save Changes', cancelButtonText: 'Cancel', backgroundColor: '#f9fafb', textColor: '#111827' },
  render: (raw: any) => {
    const { layout = 'two-column', showAvatar, showPersonalInfo, showContactInfo, showPreferences, allowEditing, editButtonText = 'Edit Profile', saveButtonText = 'Save Changes', cancelButtonText = 'Cancel', backgroundColor = '#f9fafb', textColor = '#111827' } = raw as AccountProfileWithData;
    const profile: AccountProfile = (raw as any).profile ?? MOCK;
    const avatarUrl: string | undefined = (raw as any).avatarUrl;
    const onSave: (p: AccountProfile) => void | Promise<void> = (raw as any).onSave ?? (() => {});

    const [isEditing, setIsEditing] = useState(false);
    const [form, setForm] = useState<AccountProfile>(profile);
    const handle = (k: keyof AccountProfile, v: any) => setForm((p) => ({ ...p, [k]: v }));

    const handleSave = async () => { await onSave(form); setIsEditing(false); };
    const handleCancel = () => { setForm(profile); setIsEditing(false); };

    const initials = `${form.firstName[0] || ''}${form.lastName[0] || ''}`.toUpperCase();
    const field = (key: keyof AccountProfile, value: any, type: string = 'text', readonly: boolean = true) =>
      isEditing && !readonly
        ? <input type={type} value={value as string || ''} onChange={(e) => handle(key, e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded" />
        : <p className="text-gray-900">{String(value || '—')}</p>;

    return (
      <div style={{ backgroundColor, color: textColor }} className="p-8 rounded-lg">
        <div className={layout === 'card-grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : layout === 'single-column' ? 'space-y-6' : 'grid grid-cols-1 md:grid-cols-2 gap-6'}>
          {showAvatar && (
            <div className="flex items-center gap-4 pb-4 border-b border-gray-200 md:col-span-2">
              {avatarUrl ? <img src={avatarUrl} alt={profile.firstName} className="w-20 h-20 rounded-full object-cover" /> : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">{initials}</div>
              )}
              <div>
                <h2 className="text-2xl font-semibold">{profile.firstName} {profile.lastName}</h2>
                <p className="text-sm opacity-70">{profile.email}</p>
              </div>
            </div>
          )}
          {showPersonalInfo && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><User /> Personal Info</h3>
              <div className="space-y-3">
                <div><label className="text-sm text-gray-600">First Name</label>{field('firstName', form.firstName, 'text', false)}</div>
                <div><label className="text-sm text-gray-600">Last Name</label>{field('lastName', form.lastName, 'text', false)}</div>
                {form.birthday && <div><label className="text-sm text-gray-600">Birthday</label>{field('birthday', form.birthday, 'date', false)}</div>}
              </div>
            </div>
          )}
          {showContactInfo && (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Mail /> Contact Info</h3>
              <div className="space-y-3">
                <div><label className="text-sm text-gray-600">Email</label>{field('email', form.email, 'email', false)}</div>
                {form.phone && <div><label className="text-sm text-gray-600">Phone</label>{field('phone', form.phone, 'tel', false)}</div>}
                {form.address && <div><label className="text-sm text-gray-600">Address</label>{field('address', form.address, 'text', false)}</div>}
              </div>
            </div>
          )}
          {showPreferences && (
            <div className="bg-white p-6 rounded-lg shadow-sm md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2"><Phone /> Preferences</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={!!form.newsletter} onChange={(e) => handle('newsletter', e.target.checked)} disabled={!isEditing} className="h-4 w-4" />
                  <span>Subscribe to newsletter</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={!!form.orderNotifications} onChange={(e) => handle('orderNotifications', e.target.checked)} disabled={!isEditing} className="h-4 w-4" />
                  <span>Order notifications</span>
                </label>
              </div>
            </div>
          )}
        </div>
        {allowEditing && (
          <div className="mt-6 flex gap-3">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"><Save /> {saveButtonText}</button>
                <button onClick={handleCancel} className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-50">{cancelButtonText}</button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"><Edit /> {editButtonText}</button>
            )}
          </div>
        )}
      </div>
    );
  },
};

export default AccountProfile;
