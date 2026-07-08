import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderActionsFields = {
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Buttons', value: 'buttons' }, { label: 'Cards', value: 'cards' }, { label: 'List', value: 'list' }] },
  buttonStyle: { type: 'select', label: 'Button Style', options: [{ label: 'Filled', value: 'filled' }, { label: 'Outlined', value: 'outlined' }, { label: 'Text', value: 'text' }] },
  showDownloadInvoice: { type: 'radio', label: 'Show Download Invoice', options: RADIO_YES_NO },
  showTrackShipment: { type: 'radio', label: 'Show Track Shipment', options: RADIO_YES_NO },
  showContactSupport: { type: 'radio', label: 'Show Contact Support', options: RADIO_YES_NO },
  showReorder: { type: 'radio', label: 'Show Reorder', options: RADIO_YES_NO },
  showReturnRequest: { type: 'radio', label: 'Show Return Request', options: RADIO_YES_NO },
} as Record<string, Field>;

const Download = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
);
const Package = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const Support = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>
);
const Refresh = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" /><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" /></svg>
);
const ChevronRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6" /></svg>
);

export interface OrderActionsProps {
  showDownloadInvoice: boolean;
  showTrackShipment: boolean;
  showContactSupport: boolean;
  showReorder: boolean;
  showReturnRequest: boolean;
  layout: 'buttons' | 'cards' | 'list';
  buttonStyle: 'filled' | 'outlined' | 'text';
}

export interface OrderActionsWithData extends OrderActionsProps {
  onInvoice?: () => void;
  onTrack?: () => void;
  onSupport?: () => void;
  onReorder?: () => void;
  onReturn?: () => void;
}

export const OrderActions: ComponentConfig<OrderActionsWithData> = {
  label: 'Order Actions',
  fields: orderActionsFields as ComponentConfig<OrderActionsWithData>['fields'],
  defaultProps: { showDownloadInvoice: true, showTrackShipment: true, showContactSupport: true, showReorder: true, showReturnRequest: false, layout: 'buttons', buttonStyle: 'outlined' },
  render: (raw: any) => {
    const { showDownloadInvoice, showTrackShipment, showContactSupport, showReorder, showReturnRequest, layout = 'buttons', buttonStyle = 'outlined' } = raw as OrderActionsWithData;
    const onInvoice = (raw as any).onInvoice ?? (() => {});
    const onTrack = (raw as any).onTrack ?? (() => {});
    const onSupport = (raw as any).onSupport ?? (() => {});
    const onReorder = (raw as any).onReorder ?? (() => {});
    const onReturn = (raw as any).onReturn ?? (() => {});

    const actions: any[] = [];
    if (showDownloadInvoice) actions.push({ id: 'invoice', label: 'Download Invoice', description: 'Get a PDF copy of your invoice', icon: Download, onClick: onInvoice });
    if (showTrackShipment) actions.push({ id: 'track', label: 'Track Shipment', description: 'Follow your package in real-time', icon: Package, onClick: onTrack });
    if (showContactSupport) actions.push({ id: 'support', label: 'Contact Support', description: 'Get help with your order', icon: Support, onClick: onSupport });
    if (showReorder) actions.push({ id: 'reorder', label: 'Reorder Items', description: 'Buy these items again', icon: Refresh, onClick: onReorder });
    if (showReturnRequest) actions.push({ id: 'return', label: 'Request Return', description: 'Start a return or refund request', icon: Refresh, onClick: onReturn });

    const getButtonClasses = () => {
      const base = 'px-4 py-2 rounded font-medium transition-colors flex items-center gap-2';
      if (buttonStyle === 'filled') return `${base} bg-black text-white hover:bg-gray-800`;
      if (buttonStyle === 'outlined') return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`;
      return `${base} text-blue-600 hover:text-blue-700 hover:underline`;
    };

    if (layout === 'cards') {
      return (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((a) => (
            <button key={a.id} onClick={a.onClick} className="bg-white border border-gray-200 rounded-lg p-6 text-left hover:border-gray-300 hover:shadow-sm transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-100 rounded-lg"><a.icon /></div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{a.label}</h4>
                  <p className="text-sm text-gray-600">{a.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      );
    }

    if (layout === 'list') {
      return (
        <div className="bg-white border border-gray-200 rounded-lg divide-y divide-gray-200">
          {actions.map((a) => (
            <button key={a.id} onClick={a.onClick} className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3"><a.icon /><div className="text-left"><p className="font-medium text-gray-900">{a.label}</p><p className="text-sm text-gray-600">{a.description}</p></div></div>
              <ChevronRight />
            </button>
          ))}
        </div>
      );
    }

    return (
      <div className="flex flex-wrap gap-3">
        {actions.map((a) => (
          <button key={a.id} onClick={a.onClick} className={getButtonClasses()}><a.icon /> {a.label}</button>
        ))}
      </div>
    );
  },
};

export default OrderActions;
