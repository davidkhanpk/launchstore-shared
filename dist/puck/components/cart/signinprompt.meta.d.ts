export declare const signInPromptMeta: {
    readonly name: "SignInPrompt";
    readonly label: "Sign In Prompt";
    readonly description: "Inline sign-in/sign-up prompt with two CTAs and optional divider below. No external icon deps.";
    readonly category: "cart";
    readonly intent: readonly ["account", "sign-in", "sign-up", "cta"];
    readonly visualRole: "inline";
    readonly dataDeps: readonly [];
    readonly copyFields: readonly ["title", "message", "signInLinkText", "signUpLinkText"];
    readonly themeable: readonly [];
    readonly a11yRisk: "low";
    readonly a11yNotes: "Two <a> tags with hrefs. No form fields. Optional divider is decorative.";
    readonly mobileBehavior: "responsive";
    readonly searchTags: readonly ["account", "sign-in", "sign-up", "prompt"];
    readonly props: {
        readonly title: {
            readonly type: "string";
            readonly required: true;
        };
        readonly message: {
            readonly type: "string";
            readonly required: true;
        };
        readonly signInLinkText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly signUpLinkText: {
            readonly type: "string";
            readonly required: true;
        };
        readonly showDivider: {
            readonly type: "boolean";
            readonly required: true;
        };
    };
};
export type SignInPromptMeta = typeof signInPromptMeta;
//# sourceMappingURL=signinprompt.meta.d.ts.map