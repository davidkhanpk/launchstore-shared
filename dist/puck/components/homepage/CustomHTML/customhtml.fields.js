export const customHtmlFields = {
    // Content
    htmlContent: { type: 'textarea', label: 'HTML Content' },
    cssContent: { type: 'textarea', label: 'Custom CSS (optional)' },
    // Container
    useContainer: {
        type: 'radio',
        label: 'Use Container',
        options: [
            { label: 'Yes', value: true },
            { label: 'No (Full Width)', value: false },
        ],
    },
    maxWidth: {
        type: 'select',
        label: 'Max Width',
        options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'Extra Large (1280px)', value: 'xl' },
            { label: '2X Large (1536px)', value: '2xl' },
            { label: 'Full Width', value: 'full' },
        ],
    },
    // Spacing
    paddingTop: { type: 'number', label: 'Padding Top (px)', min: 0, max: 200 },
    paddingBottom: { type: 'number', label: 'Padding Bottom (px)', min: 0, max: 200 },
    paddingLeft: { type: 'number', label: 'Padding Left (px)', min: 0, max: 200 },
    paddingRight: { type: 'number', label: 'Padding Right (px)', min: 0, max: 200 },
    // Background
    backgroundColor: { type: 'text', label: 'Background Color (hex)' },
    backgroundImage: { type: 'text', label: 'Background Image URL' },
    // Safety
    sanitizeHTML: {
        type: 'radio',
        label: 'Sanitize HTML (recommended)',
        options: [
            { label: 'Yes (Safe)', value: true },
            { label: 'No (Trust Content)', value: false },
        ],
    },
};
//# sourceMappingURL=customhtml.fields.js.map