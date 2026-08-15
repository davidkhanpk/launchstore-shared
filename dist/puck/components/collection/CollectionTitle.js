import { jsxs as _jsxs } from "react/jsx-runtime";
import { sharedTypographyFields, buildTypographyClasses, buildLayoutClasses, SPACING_OPTIONS, } from '../../design-system';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
const collectionTitleFields = {
    tag: { type: 'select', label: 'HTML Tag', options: [{ label: 'H1', value: 'h1' }, { label: 'H2', value: 'h2' }, { label: 'H3', value: 'h3' }, { label: 'H4', value: 'h4' }] },
    ...sharedTypographyFields,
    marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
    showProductCount: { type: 'radio', label: 'Show Product Count', options: RADIO_YES_NO },
};
export const CollectionTitle = {
    label: 'Collection Title',
    fields: collectionTitleFields,
    defaultProps: {
        tag: 'h1',
        fontSize: '3xl',
        fontWeight: 'bold',
        textAlign: 'left',
        textColor: '#111827',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textTransform: 'none',
        marginBottom: '4',
        showProductCount: true,
    },
    render: (raw) => {
        const { tag = 'h1', showProductCount } = raw;
        const title = raw.title ?? 'Sample Collection';
        const productCount = raw.productCount ?? 24;
        const Tag = tag;
        return (_jsxs(Tag, { className: `${buildTypographyClasses(raw)} ${buildLayoutClasses(raw)}`, children: [title, showProductCount && _jsxs("span", { className: "text-gray-500 text-base font-normal ml-2", children: ["(", productCount, " products)"] })] }));
    },
};
export default CollectionTitle;
//# sourceMappingURL=CollectionTitle.js.map