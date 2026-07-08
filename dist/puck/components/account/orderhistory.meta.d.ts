export declare const orderHistoryMeta: {
    readonly name: "OrderHistory";
    readonly label: "Order History";
    readonly description: "Customer order list with 3 layouts (list/grid/timeline), search, status filter, item thumbnails, and view-details action. Cart-library-agnostic: takes orders[], onViewDetails.";
    readonly category: "account";
    readonly intent: readonly ["account", "orders", "history"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["orders (consumer)"];
    readonly copyFields: readonly ["emptyStateText", "viewDetailsText"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <input type=\"search\"> + <select> + <button>. Filtered client-side from orders prop.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "orders", "history", "tracking"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["list", "grid", "timeline"];
            readonly required: true;
        };
        readonly showSearch: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showFilters: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly defaultStatus: {
            readonly type: "enum";
            readonly options: readonly ["all", "pending", "processing", "shipped", "delivered", "cancelled"];
            readonly required: true;
        };
        readonly showImages: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showItemCount: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly ordersPerPage: {
            readonly type: "number";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly emptyStateText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly viewDetailsText: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type OrderHistoryMeta = typeof orderHistoryMeta;
//# sourceMappingURL=orderhistory.meta.d.ts.map