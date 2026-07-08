import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
const signInPromptFields = {
    title: { type: 'text', label: 'Title' },
    message: { type: 'textarea', label: 'Message' },
    signInLinkText: { type: 'text', label: 'Sign In Link Text' },
    signUpLinkText: { type: 'text', label: 'Sign Up Link Text' },
    showDivider: { type: 'radio', label: 'Show Divider Below', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
};
export const SignInPrompt = {
    label: 'Sign In Prompt',
    fields: signInPromptFields,
    defaultProps: {
        title: 'Already have an account?', message: 'Sign in for a better experience.',
        signInLinkText: 'Sign in', signUpLinkText: 'Join us', showDivider: true,
    },
    render: (raw) => {
        const { title, message, signInLinkText, signUpLinkText, showDivider, signInHref = '/account', signUpHref = '/account/register' } = raw;
        return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg flex items-start justify-between border border-gray-200 dark:border-gray-700", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold text-gray-900 dark:text-white", children: title }), _jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-2", children: message })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("a", { href: signInHref, className: "text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300", children: signInLinkText }), signUpLinkText && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-gray-400", children: "or" }), _jsx("a", { href: signUpHref, className: "text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300", children: signUpLinkText })] }))] })] }), showDivider && _jsx("div", { className: "h-px w-full bg-gray-200 dark:bg-gray-700 my-6" })] }));
    },
};
export default SignInPrompt;
//# sourceMappingURL=SignInPrompt.js.map