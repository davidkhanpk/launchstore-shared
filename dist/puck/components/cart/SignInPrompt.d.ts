import type { ComponentConfig } from '@puckeditor/core';
export interface SignInPromptConfig {
    title: string;
    message: string;
    signInLinkText: string;
    signUpLinkText: string;
    showDivider: boolean;
}
export interface SignInPromptWithData extends SignInPromptConfig {
    signInHref?: string;
    signUpHref?: string;
}
export declare const SignInPrompt: ComponentConfig<SignInPromptWithData>;
export default SignInPrompt;
//# sourceMappingURL=SignInPrompt.d.ts.map