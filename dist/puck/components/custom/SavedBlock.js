import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const savedBlockFields = {
    id: { type: 'text', label: 'ID' },
    blockId: { type: 'text', label: 'Block ID' },
    blockName: { type: 'text', label: 'Block Name' },
};
export const SavedBlock = {
    label: 'Saved Block',
    fields: savedBlockFields,
    defaultProps: { id: 'saved-block-1', blockId: '', blockName: '' },
    render: ({ blockId, blockName }) => {
        if (!blockId) {
            return (_jsxs("div", { style: { border: '2px dashed #d1d5db', borderRadius: '8px', padding: '24px', textAlign: 'center', color: '#9ca3af', userSelect: 'none' }, children: [_jsx("div", { style: { fontSize: '2rem', marginBottom: '8px' }, children: "\uD83E\uDDE9" }), _jsx("p", { style: { margin: 0, fontSize: '0.875rem', fontWeight: 500 }, children: "Saved Block" }), _jsx("p", { style: { margin: '4px 0 0', fontSize: '0.75rem' }, children: "Select a block ID in the panel" })] }));
        }
        return (_jsxs("div", { style: { border: '2px solid #e5e7eb', borderRadius: '8px', padding: '16px', backgroundColor: '#f9fafb', userSelect: 'none' }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' }, children: [_jsx("span", { style: { fontSize: '1.25rem' }, children: "\uD83E\uDDE9" }), _jsxs("div", { children: [_jsx("p", { style: { margin: 0, fontSize: '0.875rem', fontWeight: 600, color: '#111827' }, children: blockName || 'Saved Block' }), _jsxs("p", { style: { margin: '2px 0 0', fontSize: '0.75rem', color: '#6b7280' }, children: ["ID: ", blockId] })] })] }), _jsx("p", { style: { margin: '8px 0 0', fontSize: '0.7rem', color: '#9ca3af', fontStyle: 'italic' }, children: "Rendered live on storefront" })] }));
    },
};
export default SavedBlock;
//# sourceMappingURL=SavedBlock.js.map