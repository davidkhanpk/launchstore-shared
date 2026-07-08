import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];

const orderTimelineFields = {
  orientation: { type: 'select', label: 'Orientation', options: [{ label: 'Vertical', value: 'vertical' }, { label: 'Horizontal', value: 'horizontal' }] },
  style: { type: 'select', label: 'Style', options: [{ label: 'Default', value: 'default' }, { label: 'Minimal', value: 'minimal' }, { label: 'Detailed', value: 'detailed' }] },
  showIcons: { type: 'radio', label: 'Show Icons', options: RADIO_YES_NO },
  showTimestamps: { type: 'radio', label: 'Show Timestamps', options: RADIO_YES_NO },
  showTrackingNumber: { type: 'radio', label: 'Show Tracking Number', options: RADIO_YES_NO },
} as Record<string, Field>;

const Check = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
);
const Clock = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
);
const Package = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
);
const Truck = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
);

const ICON_MAP: Record<string, any> = { Check, Clock, Package, Truck };

export interface OrderTimelineStep { id: string; title: string; description: string; timestamp: string; completed: boolean; iconName: 'Check' | 'Clock' | 'Package' | 'Truck'; }

export interface OrderTimelineProps {
  showIcons: boolean;
  showTimestamps: boolean;
  showTrackingNumber: boolean;
  orientation: 'vertical' | 'horizontal';
  style: 'default' | 'minimal' | 'detailed';
}

export interface OrderTimelineWithData extends OrderTimelineProps {
  steps?: OrderTimelineStep[];
  trackingNumber?: string;
  onCopyTracking?: () => void;
}

const MOCK_STEPS: OrderTimelineStep[] = [
  { id: 'placed', title: 'Order Placed', description: 'Your order has been confirmed', timestamp: 'Dec 21, 2025 - 10:30 AM', completed: true, iconName: 'Check' },
  { id: 'processing', title: 'Processing', description: "We're preparing your order", timestamp: 'Dec 21, 2025 - 11:00 AM', completed: true, iconName: 'Clock' },
  { id: 'shipped', title: 'Shipped', description: 'Your order is on its way', timestamp: 'Dec 22, 2025 - 2:00 PM', completed: true, iconName: 'Truck' },
  { id: 'delivered', title: 'Delivered', description: 'Your order has been delivered', timestamp: 'Expected Dec 25, 2025', completed: false, iconName: 'Package' },
];

export const OrderTimeline: ComponentConfig<OrderTimelineWithData> = {
  label: 'Order Timeline',
  fields: orderTimelineFields as ComponentConfig<OrderTimelineWithData>['fields'],
  defaultProps: { showIcons: true, showTimestamps: true, showTrackingNumber: true, orientation: 'vertical', style: 'default' },
  render: (raw: any) => {
    const { showIcons, showTimestamps, showTrackingNumber, orientation = 'vertical', style = 'default' } = raw as OrderTimelineWithData;
    const steps: OrderTimelineStep[] = (raw as any).steps ?? MOCK_STEPS;
    const trackingNumber: string = (raw as any).trackingNumber ?? '1Z999AA10123456784';
    const onCopyTracking = (raw as any).onCopyTracking ?? (() => {});
    const currentStepIndex = steps.findIndex((s) => !s.completed);

    if (orientation === 'horizontal') {
      return (
        <div className="w-full">
          {showTrackingNumber && (
            <div className="mb-6 text-center">
              <p className="text-sm text-gray-600">Tracking Number: <strong className="text-gray-900">{trackingNumber}</strong></p>
            </div>
          )}
          <div className="flex items-start justify-between relative">
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200">
              <div className="h-full bg-green-500 transition-all" style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }} />
            </div>
            {steps.map((step, index) => {
              const Icon = ICON_MAP[step.iconName] || Check;
              return (
                <div key={step.id} className="flex-1 relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {showIcons && (
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${step.completed ? 'bg-green-500 text-white' : index === currentStepIndex ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                        <Icon />
                      </div>
                    )}
                    <p className={`font-medium mb-1 ${step.completed || index === currentStepIndex ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</p>
                    {style !== 'minimal' && <p className="text-xs text-gray-600 mb-1">{step.description}</p>}
                    {showTimestamps && <p className="text-xs text-gray-500">{step.timestamp}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    return (
      <div className="max-w-2xl mx-auto">
        {showTrackingNumber && (
          <div className="mb-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-600">Tracking Number: <strong className="text-gray-900 ml-2">{trackingNumber}</strong>
              <button onClick={onCopyTracking} className="ml-2 text-blue-600 hover:underline text-xs">Copy</button>
            </p>
          </div>
        )}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200">
            <div className="w-full bg-green-500 transition-all" style={{ height: `${(currentStepIndex / steps.length) * 100}%` }} />
          </div>
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = ICON_MAP[step.iconName] || Check;
              return (
                <div key={step.id} className="flex gap-4 relative">
                  {showIcons && (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 ${step.completed ? 'bg-green-500 text-white' : index === currentStepIndex ? 'bg-blue-500 text-white animate-pulse' : 'bg-gray-200 text-gray-400'}`}>
                      <Icon />
                    </div>
                  )}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-semibold ${step.completed || index === currentStepIndex ? 'text-gray-900' : 'text-gray-400'}`}>{step.title}</h4>
                      {step.completed && <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">Completed</span>}
                      {index === currentStepIndex && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">In Progress</span>}
                    </div>
                    {style !== 'minimal' && <p className="text-sm text-gray-600 mb-2">{step.description}</p>}
                    {showTimestamps && <p className="text-xs text-gray-500">{step.timestamp}</p>}
                    {style === 'detailed' && step.completed && (
                      <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-600">
                        <p>✓ Status updated successfully</p>
                        {step.id === 'shipped' && <p className="mt-1">📦 Package handed to carrier</p>}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

export default OrderTimeline;
