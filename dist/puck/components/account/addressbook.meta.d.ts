export declare const addressBookMeta: {
    readonly name: "AddressBook";
    readonly label: "Address Book";
    readonly description: "Address book with 2 layouts (grid/list), type labels (shipping/billing), default badge, add/edit/delete/set-default actions. Cart-library-agnostic: takes addresses[], onAdd, onEdit, onDelete, onSetDefault.";
    readonly category: "account";
    readonly intent: readonly ["account", "address", "shipping", "billing"];
    readonly visualRole: "block";
    readonly dataDeps: readonly ["addresses (consumer)"];
    readonly copyFields: readonly ["addButtonText", "editButtonText", "deleteButtonText", "setDefaultText", "defaultBadgeText", "emptyStateText"];
    readonly themeable: readonly ["backgroundColor", "cardBackgroundColor", "textColor"];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Real <button> with onClick. Lucide icons replaced with inline SVG.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "address", "shipping", "billing", "book"];
    readonly props: {
        readonly layout: {
            readonly type: "enum";
            readonly options: readonly ["grid", "list"];
            readonly required: true;
        };
        readonly showAddButton: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly showTypeLabels: {
            readonly type: "boolean";
            readonly required: true;
        };
        readonly maxAddresses: {
            readonly type: "number";
            readonly required: true;
        };
        readonly backgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly cardBackgroundColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly textColor: {
            readonly type: "string";
            readonly required: true;
        };
        readonly addButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly editButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly deleteButtonText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly setDefaultText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly defaultBadgeText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly emptyStateText: {
            readonly type: "string";
            readonly required: true;
        };
    };
};
export type AddressBookMeta = typeof addressBookMeta;
//# sourceMappingURL=addressbook.meta.d.ts.map