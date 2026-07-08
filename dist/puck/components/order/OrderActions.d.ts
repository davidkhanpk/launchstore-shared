import type { ComponentConfig } from '@puckeditor/core';
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
export declare const OrderActions: ComponentConfig<OrderActionsWithData>;
export default OrderActions;
//# sourceMappingURL=OrderActions.d.ts.map