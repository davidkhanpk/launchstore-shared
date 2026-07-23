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
  pickupOption?: { id: string; name: string; price: string; time: string; description: string };
}

// No static MOCK — the storefront wrapper injects real Medusa shipping
// options via Puck context. If no data is passed, we show an empty state.
// The shared component is purely presentational.

export const ShippingMethod: ComponentConfig<ShippingMethodWithData> = {
  label: 'Shipping Method',
  fields: shippingMethodFields as ComponentConfig<ShippingMethodWithData>['fields'],
  defaultProps: { layout: 'list', showDeliveryTime: true, showDeliveryDescription: false, showPickupOption: false, defaultSelection: 'standard' },
  render: (raw: any) => {
    const { layout = 'list', showDeliveryTime, showDeliveryDescription, showPickupOption, defaultSelection = 'standard' } = raw as ShippingMethodWithData;
    const baseMethods: any[] | undefined = (raw as any).methods;
    const pickup: any | undefined = (raw as any).pickupOption ?? ((raw as any).showPickupOption
      ? { id: 'pickup', name: 'Store Pickup', price: 'FREE', time: 'Ready in 2-4 hours', description: 'Pick up at our store location' }
      : undefined);
    const methods = baseMethods
      ? (pickup ? [...baseMethods, pickup] : baseMethods)
      : undefined;
    const selectedId: string = (raw as any).selectedId ?? defaultSelection;
    const onSelect: (id: string) => void = (raw as any).onSelect ?? (() => {});
    const onContinue: () => void = (raw as any).onContinue ?? (() => {});

    // Empty state: no methods provided. The storefront wrapper injects
    // real Medusa shipping options; if none are returned, show this
    // instead of a hardcoded fallback list.
    if (!methods || methods.length === 0) {
      return (
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-200">
            <Truck />
            <h2 className="text-xl font-semibold text-gray-900">Delivery Method</h2>
          </div>
          <p className="text-sm text-gray-500">
            No shipping options are available for this region yet.
          </p>
        </div>
      );
    }

    const renderMethod = (method: any) => {
      if (layout === 'cards') {
        return (
          <div key={method.id} onClick={() => onSelect(method.id)} className={`border-2 rounded-lg p-4 cursor-pointer transition-colors ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-500'}`}>
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <Truck />
                <div>
                  <h4 className="font-medium text-gray-900">{method.name}</h4>
                  {showDeliveryTime && method.time && <p className="text-sm text-gray-600 mt-1"><Clock /> {method.time}</p>}
                </div>
              </div>
              <span className="font-bold text-gray-900">{method.price}</span>
            </div>
            {showDeliveryDescription && method.description && <p className="text-sm text-gray-500 mt-2">{method.description}</p>}
          </div>
        );
      }
      if (layout === 'compact') {
        return (
          <label key={method.id} className={`flex items-center justify-between border rounded p-3 cursor-pointer ${method.id === selectedId ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'}`}>
            <div className="flex items-center gap-2">
              <input type="radio" name="shipping" className="h-4 w-4" checked={method.id === selectedId} onChange={() => onSelect(method.id)} />
              <span className="text-sm font-medium text-gray-900">{method.name}</span>
              {showDeliveryTime && method.time && <span className="text-xs text-gray-500">({method.time})</span>}
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
                {showDeliveryTime && method.time && <p className="text-sm text-gray-600 mt-1 ml-8"><Clock /> {method.time}</p>}
                {showDeliveryDescription && method.description && <p className="text-sm text-gray-500 mt-1 ml-8">{method.description}</p>}
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
          <button type="button" onClick={onContinue} className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors font-medium">Continue to Payment</button>
        </div>
      </div>
    );
  },
};

export default ShippingMethod;
