export const headingFields = {
    text: { type: 'text', label: 'Heading Text' },
    level: {
        type: 'select',
        label: 'Heading Level (HTML Tag)',
        options: [
            { label: 'H1', value: 'h1' },
            { label: 'H2', value: 'h2' },
            { label: 'H3', value: 'h3' },
            { label: 'H4', value: 'h4' },
            { label: 'H5', value: 'h5' },
            { label: 'H6', value: 'h6' },
        ],
    },
    size: {
        type: 'select',
        label: 'Size Preset (overrides fontSize)',
        options: [
            { label: 'Extra Small', value: 'xs' },
            { label: 'Small', value: 'sm' },
            { label: 'Base', value: 'base' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
            { label: '2XL', value: '2xl' },
            { label: '3XL', value: '3xl' },
            { label: '4XL', value: '4xl' },
            { label: '5XL', value: '5xl' },
        ],
    },
    fontWeight: {
        type: 'select',
        label: 'Font Weight',
        options: [
            { label: 'Light', value: 'light' },
            { label: 'Normal', value: 'normal' },
            { label: 'Medium', value: 'medium' },
            { label: 'Semi Bold', value: 'semibold' },
            { label: 'Bold', value: 'bold' },
        ],
    },
    textAlign: {
        type: 'select',
        label: 'Text Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    // Color: text field by default; frontend consumer can override to ColorField.
    color: { type: 'text', label: 'Text Color (hex or theme token like text.heading)' },
    fontSize: { type: 'text', label: 'Custom Font Size (px/rem, e.g. 48px). Ignored if Size Preset is set.' },
    lineHeight: {
        type: 'select',
        label: 'Line Height',
        options: [
            { label: 'Tight', value: 'tight' },
            { label: 'Snug', value: 'snug' },
            { label: 'Normal', value: 'normal' },
            { label: 'Relaxed', value: 'relaxed' },
            { label: 'Loose', value: 'loose' },
        ],
    },
    letterSpacing: {
        type: 'select',
        label: 'Letter Spacing',
        options: [
            { label: 'Tighter', value: 'tighter' },
            { label: 'Tight', value: 'tight' },
            { label: 'Normal', value: 'normal' },
            { label: 'Wide', value: 'wide' },
            { label: 'Wider', value: 'wider' },
            { label: 'Widest', value: 'widest' },
        ],
    },
    marginTop: { type: 'number', label: 'Margin Top (px)', min: 0, max: 200 },
    marginBottom: { type: 'number', label: 'Margin Bottom (px)', min: 0, max: 200 },
    animation: {
        type: 'select',
        label: 'Entrance Animation',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Fade In', value: 'fadeIn' },
            { label: 'Slide Up', value: 'slideUp' },
            { label: 'Slide Down', value: 'slideDown' },
        ],
    },
    animationDelay: { type: 'number', label: 'Animation Delay (ms)', min: 0, max: 3000 },
};
//# sourceMappingURL=heading.fields.js.map