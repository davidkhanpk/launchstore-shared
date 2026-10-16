export const linkListMeta = {
    name: 'LinkList',
    label: 'Link List',
    description: 'A configurable list of links with custom colors — the building block for footer link columns. Unlike QuickLinks, the links themselves are editable props.',
    category: 'footer',
    intent: ['navigate', 'links'],
    visualRole: 'footer-column',
    dataDeps: [],
    copyFields: [],
    themeable: ['color', 'hoverColor'],
    a11yRisk: 'low',
    mobileBehavior: 'responsive',
    searchTags: ['links', 'footer', 'column', 'navigation'],
    props: {
        color: { type: 'color', required: true, description: 'Link text color. Token path (e.g. "text.secondary") or hex.' },
        hoverColor: { type: 'color', required: true, description: 'Hover color. Token path or hex.' },
        fontSize: { type: 'enum', options: ['xs', 'sm', 'md'], required: true, description: 'Link text size.' },
        spacing: { type: 'enum', options: ['sm', 'md', 'lg'], required: true, description: 'Vertical spacing between links.' },
        alignment: { type: 'enum', options: ['left', 'center', 'right'], required: true, description: 'List alignment.' },
    },
};
//# sourceMappingURL=linklist.meta.js.map