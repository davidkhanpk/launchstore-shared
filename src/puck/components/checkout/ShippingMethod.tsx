import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const shippingMethodFields = {
  layout: { type: 'select', label: 'Display Layout', options: [{ label: 'List', value: 'list' }, { label: 'Cards', value: 'cards' }, { label: 'Compact', value: 'compact' }] },
  showDeliveryTime: { type: 'radio', label: 'Show Delivery Time', options: RADIO_YES_NO },
  showDeliveryDescription: { type: 'radio', label: 'Show Description', options: RADIO_YES_NO },
  showPickupOption: { type: 'radio', label: 'Show Pickup Option', options: RADIO_YES_NO },
  defaultSelection: { type: 'select', label: 'Default Selection', options: [{ label: 'Standard', value: 'standard' }, { label: 'Express', value: 'express' }, { label: 'Overnight', value: 'overnight' }] },
} as Record<string, Field>;

const Truck = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
);
const Clock = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);

export interface ShippingMethodProps {
  layout: 'list' | 'cards' | 'compact';
  showDeliveryTime: boolean;
  showDeliveryDescription: boolean;
  showPickupOption: boolean;
  defaultSelection: 'standard' | 'express' | 'overnight';
}

export interface ShippingMethodWithData extends ShippingMethodProps {
  methods?: Array<{ id: string; name: string; price: string; time: string; description: string }>;
  selectedId?: string;
  onSelect?: (id: string) => void;
  onContinue?: () => void;
}

const BASE_METHODS = [
  { id: 'standard', name: 'Standard Shipping', price: '$9.95', time: '5-7 business days', description: 'Delivered by ground shipping' },
  { id: 'express', name: 'Express Shipping', price: '$19.95', time: '2-3 business days', description: 'Expedited delivery service' },
  { id: 'overnight', name: 'Overnight Shipping', price: '$39.95', time: 'Next business day', description: 'Guaranteed next-day delivery' },
];
const PICKUP = { id: 'pickup', name: 'Store Pickup', price: 'FREE', time: 'Ready in 2-4 hours', description: 'Pick up at our store location' };

export const ShippingMethod: ComponentConfig<ShippingMethodWithData> = {
  label: 'Shipping Method',
  fields: shippingMethodFields as ComponentConfig<ShippingMethodWithData>['fields'],
  defaultProps: { layout: 'list', showDeliveryTime: true, showDeliveryDescription: false, showPickupOption: false, defaultSelection: 'standard' },
  render: (raw: any) => {
    const { layout = 'list', showDeliveryTime, showDeliveryDescription, showPickupOption, defaultSelection = 'standard' } = raw as ShippingMethodWithData;
    const baseMethods = (raw as any).methods ?? BASE_METHODS;
    const methods = showPickupOption ? [...baseMethods, PICKUP] : baseMethods;
    const selectedId: string = (raw as any).selectedId ?? defaultSelection;
    const onSelect: (id: string) => void = (raw as any).onSelect ?? (() => {});
    const onContinue: () => void = (raw as any).onContinue ?? (() => {});

    const renderMethod = (method: any) => {
      if (layout === 'cards') {
        return (
          <div key={method.id} onClick={() => onSelect(method.id)} className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <Truck />
                <div>
                  <h4 className="font-medium text-gray-900">{method.name}</h4>
                  {showDeliveryTime && <p className="text-sm text-gray-600 mt-1"><Clock /> {method.time}</p>}
                </div>
              </div>
              <span className="font-bold text-gray-900">{method.price}</span>
            </div>
            {showDeliveryDescription && <p className="text-sm text-gray-500 mt-2">{method.description}</p>}
          </div>
        );
      }
      if (layout === 'compact') {
        return (
          <label key={method.id} className={`flex items-center justify-between border rounded p-3 cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
            <div className="flex items-center gap-2">
              <input type="radio" name="shipping" className="h-4 w-4" checked={method.id === selectedId} onChange={() => onSelect(method.id)} />
              <span className="text-sm font-medium text-gray-900">{method.name}</span>
              {showDeliveryTime && <span className="text-xs text-gray-500">({method.time})</span>}
            </div>
            <span className="text-sm font-medium text-gray-900">{method.price}</span>
          </label>
        );
      }
      return (
        <label key={method.id} className={`border rounded-lg p-4 cursor-pointer transition-colors block ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <input type="radio" name="shipping" className="h-4 w-4" checked={method.id === selectedId} onChange={() => onSelect(method.id)} />
              <div>
                <div className="flex items-center gap-2"><Truck /><h4 className="font-medium text-gray-900">{method.name}</h4></div>
                {showDeliveryTime && <p className="text-sm text-gray-600 mt-1 ml-8"><Clock /> {method.time}</p>}
                {showDeliveryDescription && <p className="text-sm text-gray-500 mt-1 ml-8">{method.description}</p>}
              </div>
            </div>
            <span className="font-bold text-gray-900">{method.price}</span>
          </div>
        </label>
      );
    };

    return (
      <div className="border border-gray-200 rounded-lg p-6 bg-white">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
          <Truck />
          <h2 className="text-xl font-semibold text-gray-900">Delivery Method</h2>
        </div>
        <div className={`space-y-${layout === 'compact' ? '2' : '4'}`}>
          {methods.map(renderMethod)}
        </div>
        <div className="mt-6">
          <button onClick={onContinue} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">Continue to Payment</button>
        </div>
      </div>
    );
  },
};

export default ShippingMethod;
