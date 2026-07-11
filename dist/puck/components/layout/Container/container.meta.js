export const containerMeta = {
    name: 'Container',
    label: 'Container',
    description: 'Centered max-width container that wraps a DropZone ("content"). Tailwind max-w-screen-* breakpoints + horizontal padding preset.',
    category: 'layout',
    intent: ['container', 'wrapper', 'max-width', 'center'],
    visualRole: 'inline',
    dataDeps: [],
    copyFields: [],
    themeable: [],
    a11yRisk: 'low',
    a11yNotes: 'Plain presentational div — semantic role optional.',
    mobileBehavior: 'responsive',
    searchTags: ['container', 'wrapper', 'max-width', 'center', 'layout', 'dropzone'],
    props: {
        maxWidth: { type: 'enum', options: ['sm', 'md', 'lg', 'xl', '2xl', 'full'] },
        padding: { type: 'enum', options: ['none', 'sm', 'md', 'lg'] },
    },
};
//# sourceMappingURL=container.meta.js.map