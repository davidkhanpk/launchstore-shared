export const addressBookMeta = {
    name: 'AddressBook', label: 'Address Book',
    description: 'Address book with 2 layouts (grid/list), type labels (shipping/billing), default badge, add/edit/delete/set-default actions. Cart-library-agnostic: takes addresses[], onAdd, onEdit, onDelete, onSetDefault.',
    category: 'account', intent: ['account', 'address', 'shipping', 'billing'], visualRole: 'block', dataDeps: ['addresses (consumer)'],
    copyFields: ['addButtonText', 'editButtonText', 'deleteButtonText', 'setDefaultText', 'defaultBadgeText', 'emptyStateText'], themeable: ['backgroundColor', 'cardBackgroundColor', 'textColor'], a11yRisk: 'low', a11yNotes: 'Real <button> with onClick. Lucide icons replaced with inline SVG.', mobileBehavior: 'responsive',
    searchTags: ['account', 'address', 'shipping', 'billing', 'book'],
    props: { layout: { type: 'enum', options: ['grid', 'list'], required: true }, showAddButton: { type: 'boolean', required: true }, showTypeLabels: { type: 'boolean', required: true }, maxAddresses: { type: 'number', required: true }, backgroundColor: { type: 'string', required: true }, cardBackgroundColor: { type: 'string', required: true }, textColor: { type: 'string', required: true }, addButtonText: { type: 'string', required: true }, editButtonText: { type: 'string', required: true }, deleteButtonText: { type: 'string', required: true }, setDefaultText: { type: 'string', required: true }, defaultBadgeText: { type: 'string', required: true }, emptyStateText: { type: 'string', required: true } },
};
//# sourceMappingURL=addressbook.meta.js.map