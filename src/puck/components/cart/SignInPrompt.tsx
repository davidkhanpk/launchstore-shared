import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import type { Field } from '@puckeditor/core';

const signInPromptFields = {
  title: { type: 'text', label: 'Title' },
  message: { type: 'textarea', label: 'Message' },
  signInLinkText: { type: 'text', label: 'Sign In Link Text' },
  signUpLinkText: { type: 'text', label: 'Sign Up Link Text' },
  showDivider: { type: 'radio', label: 'Show Divider Below', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
} as Record<string, Field>;

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

export const SignInPrompt: ComponentConfig<SignInPromptWithData> = {
  label: 'Sign In Prompt',
  fields: signInPromptFields as ComponentConfig<SignInPromptWithData>['fields'],
  defaultProps: {
    title: 'Already have an account?', message: 'Sign in for a better experience.',
    signInLinkText: 'Sign in', signUpLinkText: 'Join us', showDivider: true,
  },
  render: (raw: any) => {
    const { title, message, signInLinkText, signUpLinkText, showDivider, signInHref = '/account', signUpHref = '/account/register' } = raw as SignInPromptWithData;
    return (
      <>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg flex items-start justify-between border border-gray-200 dark:border-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{message}</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={signInHref} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">{signInLinkText}</a>
            {signUpLinkText && (
              <>
                <span className="text-gray-400">or</span>
                <a href={signUpHref} className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">{signUpLinkText}</a>
              </>
            )}
          </div>
        </div>
        {showDivider && <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-6" />}
      </>
    );
  },
};

export default SignInPrompt;
