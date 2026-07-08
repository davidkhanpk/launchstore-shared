export declare const accountProfileMeta: {
    readonly name: "AccountProfile";
    readonly label: "Account Profile";
    readonly description: "Customer profile view/edit with avatar, personal info, contact info, and preferences. 3 layouts (single-column/two-column/card-grid). Cart-library-agnostic: takes profile, avatarUrl, onSave. Lucide icons replaced with inline SVG.";
    readonly category: "account";
    readonly intent: readonly ["account", "profile", "customer"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["profile (consumer)"];
    readonly copyFields: readonly ["editButtonText", "saveButtonText", "cancelButtonText"];
    readonly themeable: readonly ["backgroundColor", "textColor"];
    readonly a11yRisk: "medium";
    readonly a11yNotes: "Real <input> + <button>. Toggling edit mode shows controlled form.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "profile", "customer", "settings"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["single-column", "two-column", "card-grid"];
            readonly required: true;
        };
        readonly showAvatar: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPersonalInfo: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showContactInfo: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showPreferences: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly allowEditing: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly editButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly saveButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cancelButtonText: {
            readonly type: "string";
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
    };
};
export type AccountProfileMeta = typeof accountProfileMeta;
//# sourceMappingURL=accountprofile.meta.d.ts.map