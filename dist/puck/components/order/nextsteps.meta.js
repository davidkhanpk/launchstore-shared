export const nextStepsMeta = {
    name: 'NextSteps',
    label: 'Next Steps',
    description: 'Order-confirmation atom: a numbered list of "what happens next" steps (processing → shipped → delivered). Step content is consumer-injected; editor shows placeholders.',
    category: 'order',
    intent: ['confirm', 'guide'],
    visualRole: 'atom',
    dataDeps: ['steps (consumer-injected)'],
    copyFields: [],
    themeable: [],
    a11yRisk: 'low',
    mobileBehavior: 'responsive',
    searchTags: ['order', 'next steps', 'timeline', 'atom'],
    props: {
        layout: { type: 'enum', options: ['vertical', 'horizontal'], required: true, description: 'Step arrangement.' },
    },
};
//# sourceMappingURL=nextsteps.meta.js.map