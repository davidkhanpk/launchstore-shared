import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface AccountSidebarProps {
  showOrders: boolean;
  showProfile: boolean;
  showAddresses: boolean;
  showWishlist: boolean;
  showPaymentMethods: boolean;
  showConcierge: boolean;
  showRewards: boolean;
  showLogout: boolean;
  style: 'standard' | 'luxury';
  activeView: string;
}

interface Item { key: string; label: string; show: boolean }

export const accountSidebarFields: ComponentConfig<AccountSidebarProps>['fields'] = {
  showOrders: { type: 'radio', label: 'Orders', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showProfile: { type: 'radio', label: 'Profile', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showAddresses: { type: 'radio', label: 'Addresses', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showWishlist: { type: 'radio', label: 'Wishlist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showPaymentMethods: { type: 'radio', label: 'Payment Methods', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showConcierge: { type: 'radio', label: 'Concierge', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showRewards: { type: 'radio', label: 'Rewards', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showLogout: { type: 'radio', label: 'Logout', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  style: { type: 'select', label: 'Style', options: [{ label: 'Standard', value: 'standard' }, { label: 'Luxury', value: 'luxury' }] },
  activeView: { type: 'text', label: 'Active View Key' },
};

export const AccountSidebar: ComponentConfig<AccountSidebarProps> = {
  label: 'Account Sidebar',
  fields: accountSidebarFields,
  defaultProps: {
    showOrders: true,
    showProfile: true,
    showAddresses: true,
    showWishlist: false,
    showPaymentMethods: false,
    showConcierge: false,
    showRewards: false,
    showLogout: true,
    style: 'standard',
    activeView: 'orders',
  },
  render: ({ showOrders, showProfile, showAddresses, showWishlist, showPaymentMethods, showConcierge, showRewards, showLogout, style, activeView }) => {
    const items: Item[] = [
      { key: 'dashboard', label: 'Dashboard', show: true },
      { key: 'orders', label: 'Orders', show: showOrders },
      { key: 'profile', label: 'Profile', show: showProfile },
      { key: 'addresses', label: 'Addresses', show: showAddresses },
      { key: 'wishlist', label: 'Wishlist', show: showWishlist },
      { key: 'payment', label: 'Payment Methods', show: showPaymentMethods },
      { key: 'concierge', label: 'Concierge', show: showConcierge },
      { key: 'rewards', label: 'Rewards', show: showRewards },
    ].filter((i) => i.show);
    const luxury = style === 'luxury';
    return (
      <nav className={`flex flex-col gap-1 ${luxury ? 'font-light tracking-wide' : ''}`}>
        {items.map((item) => (
          <a
            key={item.key}
            href="#"
            className={`no-underline px-4 py-2 rounded-md text-sm transition-colors ${item.key === activeView ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
          >
            {item.label}
          </a>
        ))}
        {showLogout && (
          <a href="#" className="no-underline px-4 py-2 rounded-md text-sm text-red-600 hover:bg-red-50 mt-2 border-t border-gray-100 pt-3">
            Logout
          </a>
        )}
      </nav>
    );
  },
};

export default AccountSidebar;
