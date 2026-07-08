export const signInPromptMeta = {
    name: 'SignInPrompt',
    label: 'Sign In Prompt',
    description: 'Inline sign-in/sign-up prompt with two CTAs and optional divider below. No external icon deps.',
    category: 'cart',
    intent: ['account', 'sign-in', 'sign-up', 'cta'],
    visualRole: 'inline',
    dataDeps: [],
    copyFields: ['title', 'message', 'signInLinkText', 'signUpLinkText'],
    themeable: [],
    a11yRisk: 'low',
    a11yNotes: 'Two <a> tags with hrefs. No form fields. Optional divider is decorative.',
    mobileBehavior: 'responsive',
    searchTags: ['account', 'sign-in', 'sign-up', 'prompt'],
    props: {
        title: { type: 'string', required: true },
        message: { type: 'string', required: true },
        signInLinkText: { type: 'string', required: true },
        signUpLinkText: { type: 'string', required: true },
        showDivider: { type: 'boolean', required: true },
    },
};
//# sourceMappingURL=signinprompt.meta.js.map