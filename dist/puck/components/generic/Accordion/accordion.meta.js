export const accordionMeta = {
    name: 'Accordion',
    label: 'Accordion',
    description: 'Stateful accordion (useState for open indices). Items array of {id, title, content}. allowMultiple toggles between single-open and multi-open. bordered + rounded styling controls.',
    category: 'generic',
    intent: ['accordion', 'faq', 'collapsible', 'expandable', 'qa', 'disclosure'],
    visualRole: 'block',
    dataDeps: [],
    copyFields: ['items[].title', 'items[].content'],
    themeable: [],
    a11yRisk: 'high',
    a11yNotes: 'Interactive element. For accessibility consider adding role=region + aria-labelledby per panel, aria-expanded on the trigger button, and a heading for each section (h3/h4). The current implementation is keyboard-focusable on buttons but lacks the ARIA state pattern. Add when time.',
    mobileBehavior: 'responsive',
    searchTags: ['accordion', 'faq', 'collapsible', 'expandable', 'qa', 'panel'],
    props: {
        items: { type: 'array', required: true },
        allowMultiple: { type: 'boolean', required: true },
        bordered: { type: 'boolean', required: true },
        rounded: { type: 'enum', options: ['none', 'sm', 'md', 'lg'], required: true },
    },
};
//# sourceMappingURL=accordion.meta.js.map