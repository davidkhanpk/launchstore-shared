export declare const contactInfoMeta: {
    readonly name: "ContactInfo";
    readonly label: "Contact Info";
    readonly description: "Contact information block with optional address / phone / email / hours. Each item can be hidden individually. Layout stacked or grid. Each item becomes a mailto:/tel:/maps.google.com link where applicable.";
    readonly category: "footer";
    readonly intent: readonly ["contact", "contact-info", "address", "phone", "email", "hours", "business-info"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["address", "phone", "email", "hours"];
    readonly themeable: readonly ["textColor", "iconColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "tel/mailto/maps links are exposed via href — screen readers should announce them correctly. Icon-only decorative items hidden via showIcons=false.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["contact", "address", "phone", "email", "hours", "maps", "tel", "mailto"];
    readonly props: {
        readonly showAddress: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly address: {
            readonly type: "string";
        };
        readonly showPhone: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly phone: {
            readonly type: "string";
        };
        readonly showEmail: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly email: {
            readonly type: "string";
        };
        readonly showHours: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly hours: {
            readonly type: "string";
        };
        readonly showIcons: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["stacked", "grid"];
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly iconColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly fontSize: {
            readonly type: "enum";
            readonly options: readonly ["sm", "base"];
            readonly required: true;
        };
        readonly gap: {
            readonly type: "enum";
            readonly options: readonly ["sm", "md", "lg"];
            readonly required: true;
        };
    };
};
export type ContactInfoMeta = typeof contactInfoMeta;
//# sourceMappingURL=contactinfo.meta.d.ts.map