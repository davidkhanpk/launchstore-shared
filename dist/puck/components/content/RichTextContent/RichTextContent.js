import { jsx as _jsx } from "react/jsx-runtime";
import { richTextContentFields } from './richtext.fields';
export const RichTextContent = {
    label: 'Rich Text Content',
    fields: richTextContentFields,
    defaultProps: {
        content: '',
        maxWidth: 'max-w-3xl',
        padding: 'py-12',
    },
    render: ({ content, maxWidth, padding }) => (_jsx("div", { className: `mx-auto px-4 sm:px-6 ${maxWidth} ${padding}`, children: _jsx("div", { className: "prose prose-gray prose-lg max-w-none", dangerouslySetInnerHTML: { __html: content } }) })),
};
export default RichTextContent;
//# sourceMappingURL=RichTextContent.js.map