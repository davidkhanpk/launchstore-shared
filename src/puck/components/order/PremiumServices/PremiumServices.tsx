import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface PremiumService {
  icon: string;
  title: string;
  description: string;
}

export interface PremiumServicesProps {
  services: PremiumService[];
  columns: number;
}

const GiftSvg = () => (<svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" /></svg>);
const ShieldSvg = () => (<svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const TruckSvg = () => (<svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.3a1 1 0 0 0-.3-.7l-2.7-2.7a1 1 0 0 0-.7-.3H14v7h2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>);
const SupportSvg = () => (<svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>);
const StarSvg = () => (<svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9 12 2" /></svg>);

const ICON: Record<string, React.ReactNode> = { gift: <GiftSvg />, shield: <ShieldSvg />, truck: <TruckSvg />, support: <SupportSvg /> };

const PLACEHOLDER: PremiumService[] = [
  { icon: 'gift', title: 'Complimentary Gift Wrapping', description: 'Elegantly wrapped with care' },
  { icon: 'shield', title: 'Authenticity Guarantee', description: '100% genuine products' },
  { icon: 'truck', title: 'Express Delivery', description: 'White-glove service' },
  { icon: 'support', title: 'Concierge Support', description: '24/7 dedicated assistance' },
];

const COLS: Record<number, string> = { 1: 'grid-cols-1', 2: 'grid-cols-1 sm:grid-cols-2', 3: 'grid-cols-1 sm:grid-cols-3', 4: 'grid-cols-1 sm:grid-cols-2' };

export const premiumServicesFields: ComponentConfig<PremiumServicesProps>['fields'] = {
  services: {
    type: 'array', label: 'Services',
    getItemSummary: (item: PremiumService) => item?.title || 'Service',
    arrayFields: {
      icon: { type: 'select', label: 'Icon', options: [{ label: 'Gift', value: 'gift' }, { label: 'Shield', value: 'shield' }, { label: 'Truck', value: 'truck' }, { label: 'Support', value: 'support' }] },
      title: { type: 'text', label: 'Title' },
      description: { type: 'text', label: 'Description' },
    },
  },
  columns: { type: 'select', label: 'Columns', options: [{ label: '1', value: 1 }, { label: '2', value: 2 }, { label: '3', value: 3 }] },
};

export const PremiumServices: ComponentConfig<PremiumServicesProps> = {
  label: 'Premium Services',
  fields: premiumServicesFields,
  defaultProps: {
    services: [],
    columns: 1,
  },
  render: ({ services, columns }) => {
    const items = services && services.length > 0 ? services : PLACEHOLDER;
    return (
      <div className={`grid ${COLS[columns] || 'grid-cols-1'} gap-4`}>
        {items.map((svc, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white">
            <span className="text-gray-700 shrink-0">{ICON[svc?.icon || ''] || <StarSvg />}</span>
            <div>
              <div className="text-sm font-medium text-gray-900">{svc?.title || ''}</div>
              {svc?.description && <div className="text-xs text-gray-500 mt-0.5">{svc.description}</div>}
            </div>
          </div>
        ))}
      </div>
    );
  },
};

export default PremiumServices;
