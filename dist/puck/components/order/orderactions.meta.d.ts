export declare const orderActionsMeta: {
    readonly name: "OrderActions";
    readonly label: "Order Actions";
    readonly description: "Post-order action buttons (download invoice, track shipment, contact support, reorder, return request) with 3 layouts (buttons/cards/list) and 3 button styles. Cart-library-agnostic: takes onInvoice/onTrack/onSupport/onReorder/onReturn callbacks.";
    readonly category: "order";
    readonly intent: readonly ["order", "actions", "post-purchase"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["callbacks (injected)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button> with onClick. Lucide + Heroicons replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "actions", "invoice", "tracking", "support", "reorder", "return"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["buttons", "cards", "list"];
            readonly required: true;
        };
        readonly buttonStyle: {
            readonly type: "enum";
            readonly options: readonly ["filled", "outlined", "text"];
            readonly required: true;
        };
        readonly showDownloadInvoice: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTrackShipment: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showContactSupport: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showReorder: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showReturnRequest: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type OrderActionsMeta = typeof orderActionsMeta;
//# sourceMappingURL=orderactions.meta.d.ts.map