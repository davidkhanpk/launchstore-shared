import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface AccountContentProps {
  defaultView: 'dashboard' | 'orders' | 'profile' | 'addresses' | 'wishlist';
  showRecentOrders: boolean;
  showWishlist: boolean;
  showRecommendations: boolean;
  showLoyaltyPoints: boolean;
  showPersonalStylist: boolean;
  luxuryStyle: boolean;
}

const Panel: React.FC<{ title: string; children?: React.ReactNode }> = ({ title, children }) => (
  <div className="border border-gray-200 rounded-lg p-4 bg-white">
    <h3 className="text-sm font-semibold text-gray-900 m-0 mb-3">{title}</h3>
    {children}
  </div>
);

export const accountContentFields: ComponentConfig<AccountContentProps>['fields'] = {
  defaultView: {
    type: 'select', label: 'Default View',
    options: [
      { label: 'Dashboard', value: 'dashboard' }, { label: 'Orders', value: 'orders' },
      { label: 'Profile', value: 'profile' }, { label: 'Addresses', value: 'addresses' }, { label: 'Wishlist', value: 'wishlist' },
    ],
  },
  showRecentOrders: { type: 'radio', label: 'Recent Orders', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showWishlist: { type: 'radio', label: 'Wishlist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showRecommendations: { type: 'radio', label: 'Recommendations', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showLoyaltyPoints: { type: 'radio', label: 'Loyalty Points', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showPersonalStylist: { type: 'radio', label: 'Personal Stylist', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  luxuryStyle: { type: 'radio', label: 'Luxury Style', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};

export const AccountContent: ComponentConfig<AccountContentProps> = {
  label: 'Account Content',
  fields: accountContentFields,
  defaultProps: {
    defaultView: 'dashboard',
    showRecentOrders: true,
    showWishlist: false,
    showRecommendations: false,
    showLoyaltyPoints: false,
    showPersonalStylist: false,
    luxuryStyle: false,
  },
  render: ({ defaultView, showRecentOrders, showWishlist, showRecommendations, showLoyaltyPoints, showPersonalStylist, luxuryStyle }) => {
    return (
      <div className={`flex flex-col gap-4 ${luxuryStyle ? 'font-light' : ''}`}>
        <div className="text-xs uppercase tracking-wide text-gray-400">{defaultView}</div>
        {showLoyaltyPoints && (
          <Panel title="Loyalty Points">
            <div className="text-2xl font-semibold text-gray-900">2,450 pts</div>
          </Panel>
        )}
        {showRecentOrders && (
          <Panel title="Recent Orders">
            <div className="divide-y divide-gray-100">
              {[1, 2, 3].map((n) => (
                <div key={n} className="flex items-center justify-between py-2 text-sm">
                  <span className="text-gray-700">Order #{1000 + n}</span>
                  <span className="text-gray-500">Delivered</span>
                </div>
              ))}
            </div>
          </Panel>
        )}
        {showWishlist && (
          <Panel title="Wishlist">
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((n) => <div key={n} className="aspect-square bg-gray-100 rounded" />)}
            </div>
          </Panel>
        )}
        {showRecommendations && (
          <Panel title="Recommended for You">
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((n) => <div key={n} className="aspect-square bg-gray-100 rounded" />)}
            </div>
          </Panel>
        )}
        {showPersonalStylist && (
          <Panel title="Your Personal Stylist">
            <p className="text-sm text-gray-600 m-0">Book a session with your dedicated stylist.</p>
          </Panel>
        )}
        {!showRecentOrders && !showWishlist && !showRecommendations && !showLoyaltyPoints && !showPersonalStylist && (
          <Panel title="Account">
            <p className="text-sm text-gray-600 m-0">Your account details will appear here.</p>
          </Panel>
        )}
      </div>
    );
  },
};

export default AccountContent;
