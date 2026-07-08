export const newsletterFields = {
    // Content
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    description: { type: 'textarea', label: 'Description' },
    placeholderText: { type: 'text', label: 'Email Placeholder' },
    buttonText: { type: 'text', label: 'Button Text' },
    // Privacy
    showPrivacyText: {
        type: 'radio',
        label: 'Show Privacy Text',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    privacyText: { type: 'textarea', label: 'Privacy Text' },
    // Layout
    layout: {
        type: 'select',
        label: 'Layout Style',
        options: [
            { label: 'Centered', value: 'centered' },
            { label: 'Split (Text + Image)', value: 'split' },
            { label: 'Inline', value: 'inline' },
        ],
    },
    showImage: {
        type: 'radio',
        label: 'Show Image (for split layout)',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    imageUrl: { type: 'text', label: 'Image URL' },
    // Form Fields
    collectName: {
        type: 'radio',
        label: 'Collect Name',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    nameRequired: {
        type: 'radio',
        label: 'Name Required',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    // Success Message
    successMessage: { type: 'text', label: 'Success Message' },
    // Styling
    backgroundColor: { type: 'text', label: 'Background Color (hex)' },
    textColor: { type: 'text', label: 'Text Color (hex)' },
    inputBackground: { type: 'text', label: 'Input Background (hex)' },
    inputBorder: { type: 'text', label: 'Input Border (hex)' },
    buttonBackground: { type: 'text', label: 'Button Background (hex)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex)' },
    borderRadius: {
        type: 'select',
        label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Full (Pills)', value: 'full' },
        ],
    },
};
//# sourceMappingURL=newsletter.fields.js.map