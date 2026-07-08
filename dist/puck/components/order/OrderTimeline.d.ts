import type { ComponentConfig } from '@puckeditor/core';
export interface OrderTimelineStep {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    completed: boolean;
    iconName: 'Check' | 'Clock' | 'Package' | 'Truck';
}
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
export declare const OrderTimeline: ComponentConfig<OrderTimelineWithData>;
export default OrderTimeline;
//# sourceMappingURL=OrderTimeline.d.ts.map