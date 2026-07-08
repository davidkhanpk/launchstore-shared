import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const shippingAddressFields = {
  layout: { type: 'select', label: 'Form Layout', options: [{ label: 'Single Column', value: 'single-column' }, { label: 'Two Column', value: 'two-column' }] },
  showBillingAddress: { type: 'radio', label: 'Show Billing Address Option', options: RADIO_YES_NO },
  defaultSameAsBilling: { type: 'radio', label: 'Default Same as Shipping', options: RADIO_YES_NO },
  requirePhone: { type: 'radio', label: 'Require Phone Number', options: RADIO_YES_NO },
  showCompanyField: { type: 'radio', label: 'Show Company Field', options: RADIO_YES_NO },
  enableAddressAutocomplete: { type: 'radio', label: 'Enable Address Autocomplete', options: RADIO_YES_NO },
} as Record<string, Field>;

const MapPin = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
);
const Mail = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
);
const Phone = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

export interface ShippingAddressProps {
  showBillingAddress: boolean;
  requirePhone: boolean;
  showCompanyField: boolean;
  enableAddressAutocomplete: boolean;
  defaultSameAsBilling: boolean;
  layout: 'single-column' | 'two-column';
}

export interface ShippingAddressWithData extends ShippingAddressProps {
  onContinue?: () => void;
  onSameAsBillingChange?: (v: boolean) => void;
  sameAsBilling?: boolean;
  countries?: Array<{ code: string; name: string }>;
  states?: Array<{ code: string; name: string }>;
}

const MOCK_COUNTRIES = [{ code: 'US', name: 'United States' }, { code: 'CA', name: 'Canada' }, { code: 'GB', name: 'United Kingdom' }];

export const ShippingAddress: ComponentConfig<ShippingAddressWithData> = {
  label: 'Shipping Address',
  fields: shippingAddressFields as ComponentConfig<ShippingAddressWithData>['fields'],
  defaultProps: { showBillingAddress: true, requirePhone: false, showCompanyField: false, enableAddressAutocomplete: true, defaultSameAsBilling: true, layout: 'two-column' },
  render: (raw: any) => {
    const { showBillingAddress, requirePhone, showCompanyField, layout = 'two-column' } = raw as ShippingAddressWithData;
    const sameAsBilling: boolean = (raw as any).sameAsBilling ?? true;
    const onSameAsBillingChange: (v: boolean) => void = (raw as any).onSameAsBillingChange ?? (() => {});
    const onContinue: () => void = (raw as any).onContinue ?? (() => {});
    const countries = (raw as any).countries ?? MOCK_COUNTRIES;
    const gridCols = layout === 'two-column' ? 'grid-cols-2' : 'grid-cols-1';
    const cityGrid = layout === 'two-column' ? 'grid-cols-3' : 'grid-cols-1';

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <MapPin />
          <h2 className="text-xl font-semibold text-gray-900">Shipping Address</h2>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Contact Information</h3>
          <div className={`grid ${gridCols} gap-4`}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2"><Mail /> Email *</label>
              <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="john@example.com" />
            </div>
            {requirePhone && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2"><Phone /> Phone *</label>
                <input type="tel" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="+1 (555) 123-4567" />
              </div>
            )}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-4">Shipping Address</h3>
          <div className="space-y-4">
            <div className={`grid ${gridCols} gap-4`}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Doe" />
              </div>
            </div>
            {showCompanyField && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company (Optional)</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company Name" />
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="123 Main Street" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Apartment, suite, etc. (Optional)</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Apt 4B" />
            </div>
            <div className={`grid ${cityGrid} gap-4`}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">City *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="New York" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"><option>Select State</option></select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">ZIP Code *</label>
                <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="10001" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                {countries.map((c: any) => <option key={c.code} value={c.code}>{c.name}</option>)}
              </select>
            </div>
          </div>
        </div>

        {showBillingAddress && (
          <div className="pt-4 border-t border-gray-200">
            <label className="flex items-center">
              <input type="checkbox" checked={sameAsBilling} onChange={(e) => onSameAsBillingChange(e.target.checked)} className="mr-2 h-4 w-4" />
              <span className="text-sm text-gray-700">Billing address same as shipping</span>
            </label>
          </div>
        )}

        <div className="mt-6">
          <button onClick={onContinue} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">Continue to Shipping Method</button>
        </div>
      </div>
    );
  },
};

export default ShippingAddress;
