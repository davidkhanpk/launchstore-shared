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
export declare const trackingInfoFields: ComponentConfig<TrackingInfoProps>['fields'];
export declare const TrackingInfo: ComponentConfig<TrackingInfoProps>;
export default TrackingInfo;
//# sourceMappingURL=TrackingInfo.d.ts.map