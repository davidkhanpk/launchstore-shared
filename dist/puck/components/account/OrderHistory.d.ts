import type { ComponentConfig } from '@puckeditor/core';
export interface OrderHistoryItem {
    id: string;
    name: string;
    image?: string;
    quantity: number;
    price: number;
}
export interface OrderRecord {
    id: string;
    orderNumber: string;
    date: string;
    status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
    total: number;
    itemCount: number;
    items: OrderHistoryItem[];
}
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
export declare const OrderHistory: ComponentConfig<OrderHistoryWithData>;
export default OrderHistory;
//# sourceMappingURL=OrderHistory.d.ts.map