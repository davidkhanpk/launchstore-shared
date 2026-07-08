export declare const orderTimelineMeta: {
    readonly name: "OrderTimeline";
    readonly label: "Order Timeline";
    readonly description: "Order status timeline (placed → processing → shipped → delivered) with 2 orientations (vertical/horizontal) and 3 detail levels. Optional tracking number with copy button. Cart-library-agnostic: takes steps[], trackingNumber, onCopyTracking.";
    readonly category: "order";
    readonly intent: readonly ["order", "tracking", "timeline", "status"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["steps (consumer)"];
    readonly copyFields: readonly [];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Plain text + decorative icons. Tracking Copy button has onClick.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["order", "tracking", "timeline", "status", "shipped"];
    readonly props: {
        readonly orientation: {
            readonly type: "enum";
            readonly options: readonly ["vertical", "horizontal"];
            readonly required: true;
        };
        readonly style: {
            readonly type: "enum";
            readonly options: readonly ["default", "minimal", "detailed"];
            readonly required: true;
        };
        readonly showIcons: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTimestamps: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTrackingNumber: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type OrderTimelineMeta = typeof orderTimelineMeta;
//# sourceMappingURL=ordertimeline.meta.d.ts.map