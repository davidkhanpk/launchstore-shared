import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const collectionMetadataFields = {
    showHandle: { type: 'radio', label: 'Show Handle', options: RADIO_YES_NO },
    showCreatedDate: { type: 'radio', label: 'Show Created Date', options: RADIO_YES_NO },
    showUpdatedDate: { type: 'radio', label: 'Show Updated Date', options: RADIO_YES_NO },
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Extra Small', value: 'text-xs' }, { label: 'Small', value: 'text-sm' }, { label: 'Medium', value: 'text-base' }] },
    textColor: { type: 'select', label: 'Text Color', options: [{ label: 'Gray 400', value: 'text-gray-400' }, { label: 'Gray 500', value: 'text-gray-500' }, { label: 'Gray 600', value: 'text-gray-600' }] },
};
export const CollectionMetadata = {
    label: 'Collection Metadata',
    fields: collectionMetadataFields,
    defaultProps: { showHandle: false, showCreatedDate: false, showUpdatedDate: false, fontSize: 'text-sm', textColor: 'text-gray-500' },
    render: (raw) => {
        const { showHandle, showCreatedDate, showUpdatedDate, fontSize = 'text-sm', textColor = 'text-gray-500' } = raw;
        const handle = raw.handle ?? 'sample-collection';
        const createdAt = raw.createdAt ?? new Date().toLocaleDateString();
        const updatedAt = raw.updatedAt ?? new Date().toLocaleDateString();
        const metadata = [];
        if (showHandle)
            metadata.push(`Handle: ${handle}`);
        if (showCreatedDate)
            metadata.push(`Created: ${createdAt}`);
        if (showUpdatedDate)
            metadata.push(`Updated: ${updatedAt}`);
        if (metadata.length === 0)
            return _jsx("div", { className: `${fontSize} ${textColor} mb-4 italic`, children: "Enable metadata fields to display collection information" });
        return (_jsx("div", { className: `${fontSize} ${textColor} mb-4`, children: metadata.map((item, i) => _jsxs("span", { children: [item, i < metadata.length - 1 && ' • '] }, i)) }));
    },
};
export default CollectionMetadata;
//# sourceMappingURL=CollectionMetadata.js.map