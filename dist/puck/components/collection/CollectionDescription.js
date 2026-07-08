import { jsx as _jsx } from "react/jsx-runtime";
const collectionDescriptionFields = {
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'text-sm' }, { label: 'Medium', value: 'text-base' }, { label: 'Large', value: 'text-lg' }] },
    textAlign: { type: 'select', label: 'Text Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    textColor: { type: 'select', label: 'Text Color', options: [{ label: 'Gray 600', value: 'text-gray-600' }, { label: 'Gray 700', value: 'text-gray-700' }, { label: 'Gray 800', value: 'text-gray-800' }, { label: 'Black', value: 'text-black' }] },
    marginBottom: { type: 'select', label: 'Bottom Margin', options: [{ label: 'None', value: 'mb-0' }, { label: 'Small', value: 'mb-2' }, { label: 'Medium', value: 'mb-4' }, { label: 'Large', value: 'mb-6' }] },
    maxWidth: { type: 'select', label: 'Max Width', options: [{ label: 'Full', value: 'max-w-full' }, { label: '2XL', value: 'max-w-2xl' }, { label: '3XL', value: 'max-w-3xl' }, { label: '4XL', value: 'max-w-4xl' }] },
};
export const CollectionDescription = {
    label: 'Collection Description',
    fields: collectionDescriptionFields,
    defaultProps: { fontSize: 'text-base', textAlign: 'left', textColor: 'text-gray-600', marginBottom: 'mb-6', maxWidth: 'max-w-3xl' },
    render: (raw) => {
        const { fontSize = 'text-base', textAlign = 'left', textColor = 'text-gray-600', marginBottom = 'mb-6', maxWidth = 'max-w-3xl' } = raw;
        const text = raw.text ?? 'Explore our curated collection of premium products, carefully selected for quality and style.';
        const alignmentClass = textAlign === 'center' ? 'text-center mx-auto' : textAlign === 'right' ? 'text-right ml-auto' : 'text-left';
        return _jsx("p", { className: `${fontSize} ${textColor} ${marginBottom} ${maxWidth} ${alignmentClass}`, children: text });
    },
};
export default CollectionDescription;
//# sourceMappingURL=CollectionDescription.js.map