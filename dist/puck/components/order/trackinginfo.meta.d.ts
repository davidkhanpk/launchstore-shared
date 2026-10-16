export declare const trackingInfoMeta: {
    readonly name: "TrackingInfo";
    readonly label: "Tracking Info";
    readonly description: "Order-confirmation atom: shipping & tracking panel — estimated delivery, carrier, tracking number. Values come from order context.";
    readonly category: "order";
    readonly intent: readonly ["confirm", "track"];
    readonly visualRole: "atom";
    readonly dataDeps: readonly ["shipment data (page context)"];
    readonly copyFields: readonly ["message"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "tracking", "shipping", "delivery", "atom"];
    readonly props: {
        readonly showEstimatedDelivery: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the estimated delivery line.";
        };
        readonly showCarrier: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the carrier line.";
        };
        readonly showTrackingNumber: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Show the tracking number.";
        };
        readonly message: {
            readonly type: "string";
            readonly required: true;
            readonly description: "Fallback message before the order ships.";
        };
        readonly luxuryStyle: {
            readonly type: "boolean";
            readonly required: true;
            readonly description: "Lighter typography variant.";
        };
    };
};
export type TrackingInfoMeta = typeof trackingInfoMeta;
//# sourceMappingURL=trackinginfo.meta.d.ts.map