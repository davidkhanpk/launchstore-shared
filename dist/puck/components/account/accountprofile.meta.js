export const accountProfileMeta = {
    name: 'AccountProfile', label: 'Account Profile',
    description: 'Customer profile view/edit with avatar, personal info, contact info, and preferences. 3 layouts (single-column/two-column/card-grid). Cart-library-agnostic: takes profile, avatarUrl, onSave. Lucide icons replaced with inline SVG.',
    category: 'account', intent: ['account', 'profile', 'customer'], visualRole: 'block', dataDeps: ['profile (consumer)'],
    copyFields: ['editButtonText', 'saveButtonText', 'cancelButtonText'], themeable: ['backgroundColor', 'textColor'], a11yRisk: 'medium', a11yNotes: 'Real <input> + <button>. Toggling edit mode shows controlled form.', mobileBehavior: 'responsive',
    searchTags: ['account', 'profile', 'customer', 'settings'],
    props: { layout: { type: 'enum', options: ['single-column', 'two-column', 'card-grid'], required: true }, showAvatar: { type: 'boolean', required: true }, showPersonalInfo: { type: 'boolean', required: true }, showContactInfo: { type: 'boolean', required: true }, showPreferences: { type: 'boolean', required: true }, allowEditing: { type: 'boolean', required: true }, editButtonText: { type: 'string', required: true }, saveButtonText: { type: 'string', required: true }, cancelButtonText: { type: 'string', required: true }, backgroundColor: { type: 'string', required: true }, textColor: { type: 'string', required: true } },
};
//# sourceMappingURL=accountprofile.meta.js.map