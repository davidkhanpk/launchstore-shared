export const cardMeta = {
    name: 'Card',
    label: 'Card',
    description: 'Container card with padding, shadow, border, rounded corner radius, background color (hex or theme token), and optional hover-lift effect. Hosts a single DropZone ("content") for nested children.',
    category: 'generic',
    intent: ['card', 'container', 'panel', 'surface', 'box'],
    visualRole: 'block',
    dataDeps: [],
    copyFields: [],
    themeable: ['backgroundColor'],
    a11yRisk: 'low',
    a11yNotes: 'Plain div wrapper. If card is interactive (acts like a button/link), consider adding role + tabindex. Otherwise no special a11y concerns.',
    mobileBehavior: 'responsive',
    searchTags: ['card', 'panel', 'container', 'surface', 'box', 'dropzone', 'wrapper'],
    props: {
        padding: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'], required: true },
        shadow: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl'], required: true },
        border: { type: 'boolean', required: true },
        rounded: { type: 'enum', options: ['none', 'sm', 'md', 'lg', 'xl', 'full'], required: true },
        backgroundColor: { type: 'string', required: true },
        hoverEffect: { type: 'boolean', required: true },
    },
};
//# sourceMappingURL=card.meta.js.map