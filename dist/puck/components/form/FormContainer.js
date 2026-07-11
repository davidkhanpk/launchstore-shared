import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../theme/resolveColor';
const formContainerFields = {
    formId: { type: 'text', label: 'Form ID (auto-generated, do not change)' },
    formName: { type: 'text', label: 'Form Name' },
    submitButtonText: { type: 'text', label: 'Submit Button Text' },
    successMessage: { type: 'text', label: 'Success Message' },
    successRedirectUrl: { type: 'text', label: 'Redirect URL after submit (optional)' },
    padding: { type: 'select', label: 'Padding', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    backgroundColor: { type: 'text', label: 'Background Color (token or hex)' },
    borderRadius: { type: 'select', label: 'Border Radius', options: [{ label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }] },
    maxWidth: { type: 'select', label: 'Max Width', options: [{ label: 'Small (384px)', value: 'sm' }, { label: 'Medium (448px)', value: 'md' }, { label: 'Large (512px)', value: 'lg' }, { label: 'Extra Large (576px)', value: 'xl' }, { label: 'Full', value: 'full' }] },
};
const PAD = { none: '', sm: 'p-4', md: 'p-6', lg: 'p-8', xl: 'p-12' };
const RAD = { none: '', sm: 'rounded', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-2xl' };
const MAX = { sm: 'max-w-sm', md: 'max-w-md', lg: 'max-w-lg', xl: 'max-w-xl', full: 'max-w-full' };
export const FormContainer = {
    label: 'Form Container',
    fields: formContainerFields,
    defaultProps: {
        formId: `form-${Math.random().toString(36).slice(2, 10)}`,
        formName: 'Contact Form', submitButtonText: 'Submit', successMessage: 'Thank you! Your message has been sent.',
        padding: 'lg', backgroundColor: 'ui.background', borderRadius: 'md', maxWidth: 'lg',
    },
    render: ({ formId, formName, padding, backgroundColor, borderRadius, maxWidth }) => (_jsx("div", { className: `${MAX[maxWidth]} mx-auto`, "data-form-id": formId, "data-form-name": formName, children: _jsx("div", { className: `${PAD[padding]} ${RAD[borderRadius]}`, style: { backgroundColor: resolveColor(backgroundColor) }, children: _jsx(DropZone, { zone: "fields" }) }) })),
};
export default FormContainer;
//# sourceMappingURL=FormContainer.js.map