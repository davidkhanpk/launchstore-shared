import { jsxs as _jsxs } from "react/jsx-runtime";
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const collectionTitleFields = {
    tag: { type: 'select', label: 'HTML Tag', options: [{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' }] },
    fontSize: { type: 'select', label: 'Font Size', options: [{ label: 'Small', value: 'text-2xl' }, { label: 'Medium', value: 'text-3xl' }, { label: 'Large', value: 'text-4xl' }, { label: 'X-Large', value: 'text-5xl' }] },
    textAlign: { type: 'select', label: 'Text Alignment', options: [{ label: 'Left', value: 'left' }, { label: 'Center', value: 'center' }, { label: 'Right', value: 'right' }] },
    fontWeight: { type: 'select', label: 'Font Weight', options: [{ label: 'Normal', value: 'normal' }, { label: 'Medium', value: 'medium' }, { label: 'Semibold', value: 'semibold' }, { label: 'Bold', value: 'bold' }] },
    marginBottom: { type: 'select', label: 'Bottom Margin', options: [{ label: 'None', value: 'mb-0' }, { label: 'Small', value: 'mb-2' }, { label: 'Medium', value: 'mb-4' }, { label: 'Large', value: 'mb-6' }, { label: 'X-Large', value: 'mb-8' }] },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: RADIO_YES_NO },
};
export const CollectionTitle = {
    label: 'Collection Title',
    fields: collectionTitleFields,
    defaultProps: { tag: 'h1', fontSize: 'text-3xl', textAlign: 'left', fontWeight: 'bold', marginBottom: 'mb-4', showProductCount: true },
    render: (raw) => {
        const { tag = 'h1', fontSize = 'text-3xl', textAlign = 'left', fontWeight = 'bold', marginBottom = 'mb-4', showProductCount } = raw;
        const title = raw.title ?? 'Sample Collection';
        const productCount = raw.productCount ?? 24;
        const Tag = tag;
        const alignmentClass = textAlign === 'center' ? 'text-center' : textAlign === 'right' ? 'text-right' : 'text-left';
        return (_jsxs(Tag, { className: `${fontSize} ${alignmentClass} font-${fontWeight} ${marginBottom}`, children: [title, showProductCount && _jsxs("span", { className: "text-gray-500 text-base font-normal ml-2", children: ["(", productCount, " products)"] })] }));
    },
};
export default CollectionTitle;
//# sourceMappingURL=CollectionTitle.js.map