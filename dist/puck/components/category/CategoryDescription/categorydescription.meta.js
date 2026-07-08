export const categoryDescriptionMeta = {
    name: 'CategoryDescription',
    label: 'Category Description',
    description: 'Rich-text description block for a category page. Reads category.description from injected category prop. Typography + line-height + max-width + alignment controls. Returns null when description is empty (graceful absence).',
    category: 'category',
    intent: ['description', 'category-description', 'intro', 'summary', 'about'],
    visualRole: 'inline',
    dataDeps: ['category.description'],
    copyFields: [],
    themeable: ['color'],
    a11yRisk: 'low',
    a11yNotes: 'Plain div wrapper; content is a <p> so screen readers parse paragraphs correctly.',
    mobileBehavior: 'responsive',
    searchTags: ['description', 'category', 'intro', 'summary', 'about', 'paragraph'],
    props: {
        category: { type: 'object' },
        fontSize: { type: 'enum', options: ['sm', 'base', 'md', 'lg', 'xl'], required: true },
        color: { type: 'enum', options: ['default', 'black', 'gray', 'muted', 'white'], required: true },
        alignment: { type: 'enum', options: ['left', 'center', 'right', 'justify'], required: true },
        lineHeight: { type: 'enum', options: ['tight', 'normal', 'relaxed', 'loose'], required: true },
        maxWidth: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'], required: true },
    },
};
//# sourceMappingURL=categorydescription.meta.js.map