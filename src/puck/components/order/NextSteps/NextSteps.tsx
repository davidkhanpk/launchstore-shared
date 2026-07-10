import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';

export interface NextStep {
  icon: string;
  text: string;
}

export interface NextStepsProps {
  steps: NextStep[];
  layout: 'vertical' | 'horizontal';
}

const EmailSvg = () => (<svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 6-10 7L2 6" /></svg>);
const PackageSvg = () => (<svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16.5 9.4 7.5 4.2M21 16V8a2 2 0 0 0-1-1.7l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.7l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><path d="m3.3 7 8.7 5 8.7-5M12 22V12" /></svg>);
const TruckSvg = () => (<svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 17h4V5H2v12h3" /><path d="M20 17h2v-3.3a1 1 0 0 0-.3-.7l-2.7-2.7a1 1 0 0 0-.7-.3H14v7h2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></svg>);
const CheckSvg = () => (<svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>);

const ICON: Record<string, React.ReactNode> = { email: <EmailSvg />, package: <PackageSvg />, truck: <TruckSvg /> };

const PLACEHOLDER: NextStep[] = [
  { icon: 'email', text: 'Check your email for confirmation' },
  { icon: 'package', text: "We'll prepare your order" },
  { icon: 'truck', text: 'Track your shipment' },
];

export const nextStepsFields: ComponentConfig<NextStepsProps>['fields'] = {
  steps: {
    type: 'array', label: 'Steps',
    getItemSummary: (item: NextStep) => item?.text || 'Step',
    arrayFields: {
      icon: { type: 'select', label: 'Icon', options: [{ label: 'Email', value: 'email' }, { label: 'Package', value: 'package' }, { label: 'Truck', value: 'truck' }] },
      text: { type: 'text', label: 'Text' },
    },
  },
  layout: { type: 'select', label: 'Layout', options: [{ label: 'Vertical', value: 'vertical' }, { label: 'Horizontal', value: 'horizontal' }] },
};

export const NextSteps: ComponentConfig<NextStepsProps> = {
  label: 'Next Steps',
  fields: nextStepsFields,
  defaultProps: {
    steps: [],
    layout: 'vertical',
  },
  render: ({ steps, layout }) => {
    const items = steps && steps.length > 0 ? steps : PLACEHOLDER;
    const horizontal = layout === 'horizontal';
    return (
      <ol className={`list-none p-0 m-0 flex ${horizontal ? 'flex-row gap-6' : 'flex-col gap-3'}`}>
        {items.map((step, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 text-gray-700 shrink-0">
              {ICON[step?.icon || ''] || <CheckSvg />}
            </span>
            <span className="text-sm text-gray-700">{step?.text || ''}</span>
          </li>
        ))}
      </ol>
    );
  },
};

export default NextSteps;
