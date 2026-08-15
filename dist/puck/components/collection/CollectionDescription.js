import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../../theme/resolveColor';
import { sharedTypographyFields, buildTypographyClasses, buildLayoutClasses, SPACING_OPTIONS, } from '../../design-system';
const collectionDescriptionFields = {
    ...sharedTypographyFields,
    marginBottom: { type: 'select', label: 'Margin Bottom', options: SPACING_OPTIONS },
    maxWidth: { type: 'text', label: 'Max Width (e.g. max-w-3xl or 768px)' },
};
export const CollectionDescription = {
    label: 'Collection Description',
    fields: collectionDescriptionFields,
    defaultProps: {
        fontSize: 'base',
        fontWeight: 'normal',
        textAlign: 'left',
        textColor: '#6b7280',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        textTransform: 'none',
        marginBottom: '6',
        maxWidth: 'max-w-3xl',
    },
    render: (raw) => {
        const { textAlign = 'left', textColor, maxWidth } = raw;
        const text = raw.text ?? 'Explore our curated collection of premium products, carefully selected for quality and style.';
        const alignmentClass = textAlign === 'center' ? 'mx-auto' : textAlign === 'right' ? 'ml-auto' : '';
        return (_jsx("p", { className: `${buildTypographyClasses(raw)} ${buildLayoutClasses(raw)} ${maxWidth || ''} ${alignmentClass}`, style: textColor ? { color: resolveColor(textColor) } : undefined, children: text }));
    },
};
export default CollectionDescription;
//# sourceMappingURL=CollectionDescription.js.map