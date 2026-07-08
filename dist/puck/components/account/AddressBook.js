import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const addressBookFields = {
    layout: { type: 'select', label: 'Layout', options: [{ label: 'Grid', value: 'grid' }, { label: 'List', value: 'list' }] },
    showAddButton: { type: 'radio', label: 'Show Add Button', options: RADIO_YES_NO },
    showTypeLabels: { type: 'radio', label: 'Show Type Labels', options: RADIO_YES_NO },
    maxAddresses: { type: 'number', label: 'Max Addresses' },
    backgroundColor: { type: 'text', label: 'Background Color' },
    cardBackgroundColor: { type: 'text', label: 'Card Background Color' },
    textColor: { type: 'text', label: 'Text Color' },
    addButtonText: { type: 'text', label: 'Add Button Text' },
    editButtonText: { type: 'text', label: 'Edit Button Text' },
    deleteButtonText: { type: 'text', label: 'Delete Button Text' },
    setDefaultText: { type: 'text', label: 'Set Default Text' },
    defaultBadgeText: { type: 'text', label: 'Default Badge Text' },
    emptyStateText: { type: 'text', label: 'Empty State Text' },
};
const Plus = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }), _jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })] }));
const Edit = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" }), _jsx("path", { d: "M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" })] }));
const Trash = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("polyline", { points: "3 6 5 6 21 6" }), _jsx("path", { d: "M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" })] }));
const MapPin = ({ size = 16 }) => (_jsxs("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: [_jsx("path", { d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" }), _jsx("circle", { cx: "12", cy: "10", r: "3" })] }));
const MOCK = [
    { id: '1', type: 'shipping', firstName: 'John', lastName: 'Doe', address1: '123 Main Street', address2: 'Apt 4B', city: 'New York', state: 'NY', zip: '10001', country: 'United States', phone: '+1 (555) 123-4567', isDefault: true },
    { id: '2', type: 'billing', firstName: 'John', lastName: 'Doe', company: 'Acme Corp', address1: '456 Park Ave', city: 'New York', state: 'NY', zip: '10022', country: 'United States', phone: '+1 (555) 987-6543', isDefault: false },
];
export const AddressBook = {
    label: 'Address Book',
    fields: addressBookFields,
    defaultProps: { layout: 'grid', showAddButton: true, showTypeLabels: true, maxAddresses: 10, backgroundColor: '#f9fafb', cardBackgroundColor: '#ffffff', textColor: '#111827', addButtonText: 'Add New Address', editButtonText: 'Edit', deleteButtonText: 'Delete', setDefaultText: 'Set as Default', defaultBadgeText: 'Default', emptyStateText: 'No addresses saved' },
    render: (raw) => {
        const { layout = 'grid', showAddButton, showTypeLabels, backgroundColor = '#f9fafb', cardBackgroundColor = '#ffffff', textColor = '#111827', addButtonText = 'Add New Address', editButtonText = 'Edit', deleteButtonText = 'Delete', setDefaultText = 'Set as Default', defaultBadgeText = 'Default', emptyStateText = 'No addresses saved' } = raw;
        const addresses = raw.addresses ?? MOCK;
        const onAdd = raw.onAdd ?? (() => { });
        const onEdit = (id) => raw.onEdit ? raw.onEdit(id) : (() => { });
        const onDelete = (id) => raw.onDelete ? raw.onDelete(id) : (() => { });
        const onSetDefault = (id) => raw.onSetDefault ? raw.onSetDefault(id) : (() => { });
        const cardClass = `p-4 rounded-lg ${layout === 'grid' ? 'border border-gray-200' : 'border-b border-gray-200 last:border-0'}`;
        return (_jsxs("div", { style: { backgroundColor, color: textColor }, className: "p-6 rounded-lg", children: [showAddButton && (_jsxs("button", { onClick: onAdd, className: "mb-4 flex items-center gap-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800", children: [_jsx(Plus, {}), " ", addButtonText] })), addresses.length === 0 ? (_jsxs("div", { className: "py-16 text-center text-gray-500 flex flex-col items-center gap-2", children: [_jsx(MapPin, {}), _jsx("p", { children: emptyStateText })] })) : (_jsx("div", { className: layout === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4', children: addresses.map((a) => (_jsxs("div", { style: { backgroundColor: cardBackgroundColor }, className: cardClass, children: [_jsx("div", { className: "flex items-start justify-between mb-2", children: _jsxs("div", { className: "flex items-center gap-2", children: [showTypeLabels && _jsx("span", { className: "text-xs font-medium px-2 py-1 bg-gray-100 text-gray-700 rounded uppercase", children: a.type }), a.isDefault && _jsx("span", { className: "text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded", children: defaultBadgeText })] }) }), _jsxs("p", { className: "font-semibold", children: [a.firstName, " ", a.lastName] }), a.company && _jsx("p", { className: "text-sm opacity-70", children: a.company }), _jsxs("p", { className: "text-sm opacity-70 mt-2", children: [a.address1, a.address2 ? `, ${a.address2}` : ''] }), _jsxs("p", { className: "text-sm opacity-70", children: [a.city, ", ", a.state, " ", a.zip] }), _jsx("p", { className: "text-sm opacity-70", children: a.country }), _jsx("p", { className: "text-sm opacity-70 mt-1", children: a.phone }), _jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [!a.isDefault && _jsx("button", { onClick: () => onSetDefault(a.id), className: "text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50", children: setDefaultText }), _jsxs("button", { onClick: () => onEdit(a.id), className: "text-xs px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 flex items-center gap-1", children: [_jsx(Edit, {}), " ", editButtonText] }), _jsxs("button", { onClick: () => onDelete(a.id), className: "text-xs px-3 py-1 border border-red-200 text-red-600 rounded hover:bg-red-50 flex items-center gap-1", children: [_jsx(Trash, {}), " ", deleteButtonText] })] })] }, a.id))) }))] }));
    },
};
export default AddressBook;
//# sourceMappingURL=AddressBook.js.map