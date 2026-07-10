import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface TrackingInfoProps {
  showEstimatedDelivery: boolean;
  showCarrier: boolean;
  showTrackingNumber: boolean;
  message: string;
  luxuryStyle: boolean;
  /** Consumer-provided values at render time. */
  estimatedDelivery?: string;
  carrier?: string;
  trackingNumber?: string;
}

const Row: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex items-center justify-between py-2 text-sm border-b border-gray-100 last:border-0">
    <span className="text-gray-500">{label}</span>
    <span className="text-gray-900 font-medium">{value}</span>
  </div>
);

export const trackingInfoFields: ComponentConfig<TrackingInfoProps>['fields'] = {
  showEstimatedDelivery: { type: 'radio', label: 'Estimated Delivery', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showCarrier: { type: 'radio', label: 'Carrier', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  showTrackingNumber: { type: 'radio', label: 'Tracking Number', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  message: { type: 'textarea', label: 'Message' },
  luxuryStyle: { type: 'radio', label: 'Luxury Style', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};

export const TrackingInfo: ComponentConfig<TrackingInfoProps> = {
  label: 'Tracking Info',
  fields: trackingInfoFields,
  defaultProps: {
    showEstimatedDelivery: true,
    showCarrier: true,
    showTrackingNumber: false,
    message: 'You will receive tracking information once your order ships.',
    luxuryStyle: false,
  },
  render: ({ showEstimatedDelivery, showCarrier, showTrackingNumber, message, luxuryStyle, estimatedDelivery, carrier, trackingNumber }) => {
    return (
      <div className={`mt-4 p-4 rounded-lg border border-gray-200 bg-white ${luxuryStyle ? 'font-light tracking-wide' : ''}`}>
        <h4 className="text-sm font-semibold text-gray-900 m-0 mb-2">Shipping & Tracking</h4>
        {showEstimatedDelivery && <Row label="Estimated Delivery" value={estimatedDelivery || '3–5 business days'} />}
        {showCarrier && <Row label="Carrier" value={carrier || 'Standard Shipping'} />}
        {showTrackingNumber && <Row label="Tracking Number" value={trackingNumber || 'Pending'} />}
        {message && <p className="text-sm text-gray-500 mt-3 m-0">{message}</p>}
      </div>
    );
  },
};

export default TrackingInfo;
