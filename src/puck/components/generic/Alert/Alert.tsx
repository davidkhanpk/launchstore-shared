import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { alertFields } from './alert.fields';
import type { AlertProps } from './alert.types';

// Inline SVG icons (replacing @heroicons/react). Stroke=currentColor inherits text color from parent.
const ICONS = {
  info: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>),
  success: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>),
  warning: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>),
  error: (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg>),
};

const STYLE: Record<AlertProps['type'], { bg: string; border: string; text: string; icon: React.ReactNode }> = {
  info: { bg: 'bg-blue-50 dark:bg-blue-900/20', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-800 dark:text-blue-200', icon: ICONS.info },
  success: { bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', text: 'text-green-800 dark:text-green-200', icon: ICONS.success },
  warning: { bg: 'bg-yellow-50 dark:bg-yellow-900/20', border: 'border-yellow-200 dark:border-yellow-800', text: 'text-yellow-800 dark:text-yellow-200', icon: ICONS.warning },
  error: { bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', text: 'text-red-800 dark:text-red-200', icon: ICONS.error },
};

export const Alert: ComponentConfig<AlertProps> = {
  label: 'Alert',
  fields: alertFields as ComponentConfig<AlertProps>['fields'],
  defaultProps: { id: 'alert-1', type: 'info', message: 'This is an alert message', showIcon: true, dismissible: false },
  render: ({ id, type, title, message, showIcon, dismissible }) => {
    const s = STYLE[type] || STYLE.info;
    const dismiss = (e: React.MouseEvent<HTMLButtonElement>) => {
      const el = (e.currentTarget as HTMLElement).closest('[role="alert"]');
      if (el) el.remove();
    };
    return (
      <div id={id} className={`${s.bg} ${s.border} ${s.text} border rounded-lg p-4 flex items-start gap-3`} role="alert">
        {showIcon && <span className="flex-shrink-0 mt-0.5">{s.icon}</span>}
        <div className="flex-1">
          {title && <h4 className="font-semibold mb-1">{title}</h4>}
          <p className="text-sm">{message}</p>
        </div>
        {dismissible && (
          <button onClick={dismiss} className="flex-shrink-0 ml-auto" aria-label="Dismiss">
            {STYLE.error.icon}
          </button>
        )}
      </div>
    );
  },
};

export default Alert;
