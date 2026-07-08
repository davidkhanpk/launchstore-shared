import React, { useState } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderHistoryFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'List', value: 'list' }, { label: 'Grid', value: 'grid' }, { label: 'Timeline', value: 'timeline' }] },
  showSearch: { type: 'radio', label: 'Show Search', options: RADIO_YES_NO },
  showFilters: { type: 'radio', label: 'Show Filters', options: RADIO_YES_NO },
  defaultStatus: { type: 'select', label: 'Default Status Filter', options: [{ label: 'All', value: 'all' }, { label: 'Pending', value: 'pending' }, { label: 'Processing', value: 'processing' }, { label: 'Shipped', value: 'shipped' }, { label: 'Delivered', value: 'delivered' }, { label: 'Cancelled', value: 'cancelled' }] },
  showImages: { type: 'radio', label: 'Show Item Images', options: RADIO_YES_NO },
  showItemCount: { type: 'radio', label: 'Show Item Count', options: RADIO_YES_NO },
  ordersPerPage: { type: 'number', label: 'Orders Per Page' },
  backgroundColor: { type: 'text', label: 'Background Color' },
  textColor: { type: 'text', label: 'Text Color' },
  emptyStateText: { type: 'text', label: 'Empty State Text' },
  viewDetailsText: { type: 'text', label: 'View Details Text' },
} as Record<string, Field>;

const Package = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const ChevronRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
);
const Search = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
);

const STATUS_COLOR: Record<string, string> = {
  pending: 'bg-yellow-100 text-yellow-800', processing: 'bg-blue-100 text-blue-800',
  shipped: 'bg-purple-100 text-purple-800', delivered: 'bg-green-100 text-green-800', cancelled: 'bg-red-100 text-red-800',
};

export interface OrderHistoryItem { id: string; name: string; image?: string; quantity: number; price: number; }
export interface OrderRecord { id: string; orderNumber: string; date: string; status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'; total: number; itemCount: number; items: OrderHistoryItem[]; }

export interface OrderHistoryProps {
  layout: 'list' | 'grid' | 'timeline';
  showSearch: boolean;
  showFilters: boolean;
  defaultStatus: 'all' | 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  showImages: boolean;
  showItemCount: boolean;
  ordersPerPage: number;
  backgroundColor: string;
  textColor: string;
  emptyStateText: string;
  viewDetailsText: string;
}

export interface OrderHistoryWithData extends OrderHistoryProps {
  orders?: OrderRecord[];
  onViewDetails?: (id: string) => void;
}

const MOCK: OrderRecord[] = [
  { id: '1', orderNumber: 'ORD-2024-001', date: '2024-12-15', status: 'delivered', total: 14999, itemCount: 3, items: [
    { id: 'i1', name: 'Classic T-Shirt', image: 'https://placehold.co/80', quantity: 2, price: 2999 },
    { id: 'i2', name: 'Denim Jeans', image: 'https://placehold.co/80', quantity: 1, price: 7999 },
  ]},
  { id: '2', orderNumber: 'ORD-2024-002', date: '2024-12-20', status: 'shipped', total: 7999, itemCount: 1, items: [
    { id: 'i3', name: 'Leather Belt', image: 'https://placehold.co/80', quantity: 1, price: 7999 },
  ]},
];

const defaultFormat = (p: number) => `$${(p / 100).toFixed(2)}`;

export const OrderHistory: ComponentConfig<OrderHistoryWithData> = {
  label: 'Order History',
  fields: orderHistoryFields as ComponentConfig<OrderHistoryWithData>['fields'],
  defaultProps: { layout: 'list', showSearch: true, showFilters: true, defaultStatus: 'all', showImages: true, showItemCount: true, ordersPerPage: 10, backgroundColor: '#f9fafb', textColor: '#111827', emptyStateText: 'No orders found', viewDetailsText: 'View Details' },
  render: (raw: any) => {
    const { layout = 'list', showSearch, showFilters, defaultStatus = 'all', showImages, showItemCount, backgroundColor = '#f9fafb', textColor = '#111827', emptyStateText = 'No orders found', viewDetailsText = 'View Details' } = raw as OrderHistoryWithData;
    const orders: OrderRecord[] = (raw as any).orders ?? MOCK;
    const onViewDetails = (id: string) => (raw as any).onViewDetails ? (raw as any).onViewDetails(id) : (() => {});

    const [q, setQ] = useState('');
    const [status, setStatus] = useState(defaultStatus);
    const filtered = orders.filter((o) => {
      if (status !== 'all' && o.status !== status) return false;
      if (q && !o.orderNumber.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });

    return (
      <div style={{ backgroundColor, color: textColor }} className="p-6 rounded-lg">
        {(showSearch || showFilters) && (
          <div className="mb-4 flex gap-3 flex-wrap">
            {showSearch && (
              <div className="flex-1 min-w-[200px] relative">
                <input type="text" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by order number" className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded" />
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"><Search /></div>
              </div>
            )}
            {showFilters && (
              <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="px-3 py-2 border border-gray-300 rounded">
                <option value="all">All</option>
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="py-16 text-center text-gray-500 flex flex-col items-center gap-2"><Package /><p>{emptyStateText}</p></div>
        ) : (
          <div className={layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
            {filtered.map((o) => (
              <div key={o.id} className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold">{o.orderNumber}</p>
                    <p className="text-sm opacity-70">{o.date}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded ${STATUS_COLOR[o.status]}`}>{o.status}</span>
                </div>
                {showItemCount && <p className="text-sm opacity-70 mb-3">{o.itemCount} {o.itemCount === 1 ? 'item' : 'items'} · {defaultFormat(o.total)}</p>}
                {showImages && (
                  <div className="flex gap-2 mb-3 overflow-x-auto">
                    {o.items.map((i) => (
                      <img key={i.id} src={i.image} alt={i.name} className="w-12 h-12 rounded object-cover flex-shrink-0" />
                    ))}
                  </div>
                )}
                <button onClick={() => onViewDetails(o.id)} className="text-sm text-blue-600 hover:underline flex items-center gap-1">{viewDetailsText} <ChevronRight /></button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};

export default OrderHistory;
