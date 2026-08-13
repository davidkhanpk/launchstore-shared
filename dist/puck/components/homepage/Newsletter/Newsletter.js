import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields } from '../../../design-system';
const RADIUS_CLASSES = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-full',
};
const LAYOUT_CLASSES = {
    centered: 'text-center max-w-2xl mx-auto',
    split: 'flex items-center gap-12',
    inline: 'flex items-center justify-between',
};
// ── Content fields (text + email + privacy) ─────────────────────────────────
const contentFields = {
    title: { type: 'text', label: 'Title' },
    subtitle: { type: 'text', label: 'Subtitle' },
    description: { type: 'textarea', label: 'Description' },
    placeholderText: { type: 'text', label: 'Email Placeholder' },
    buttonText: { type: 'text', label: 'Button Text' },
    showPrivacyText: {
        type: 'radio', label: 'Show Privacy Text',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    privacyText: { type: 'textarea', label: 'Privacy Text' },
};
// ── Email / form fields ─────────────────────────────────────────────────────
const emailFields = {
    collectName: {
        type: 'radio', label: 'Collect Name',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    nameRequired: {
        type: 'radio', label: 'Name Required',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    successMessage: { type: 'text', label: 'Success Message' },
};
// ── Layout fields ───────────────────────────────────────────────────────────
const layoutFields = {
    layout: {
        type: 'select', label: 'Layout Style',
        options: [
            { label: 'Centered', value: 'centered' },
            { label: 'Split (Text + Image)', value: 'split' },
            { label: 'Inline', value: 'inline' },
        ],
    },
    showImage: {
        type: 'radio', label: 'Show Image (for split layout)',
        options: [
            { label: 'Yes', value: true },
            { label: 'No', value: false },
        ],
    },
    imageUrl: { type: 'text', label: 'Image URL' },
};
// ── Color / style fields (component-specific — more than shared) ────────────
const styleFields = {
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex or theme token)' },
    inputBackground: { type: 'text', label: 'Input Background (hex or theme token)' },
    inputBorder: { type: 'text', label: 'Input Border (hex or theme token)' },
    buttonBackground: { type: 'text', label: 'Button Background (hex or theme token)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Full (Pills)', value: 'full' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...emailFields,
    ...layoutFields,
    ...styleFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['title', 'subtitle', 'description', 'placeholderText', 'buttonText', 'showPrivacyText', 'privacyText'],
        },
        {
            label: 'Email Form',
            fieldKeys: ['collectName', 'nameRequired', 'successMessage'],
        },
        {
            label: 'Layout',
            fieldKeys: ['layout', 'showImage', 'imageUrl'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'textColor', 'inputBackground', 'inputBorder', 'buttonBackground', 'buttonTextColor', 'borderRadius'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Newsletter = {
    label: 'Newsletter',
    fields: accordionFields,
    defaultProps: {
        title: 'Join Our Newsletter',
        subtitle: 'Stay Updated',
        description: 'Get the latest updates on new products, exclusive deals, and special offers delivered straight to your inbox.',
        placeholderText: 'Enter your email address',
        buttonText: 'Subscribe',
        showPrivacyText: true,
        privacyText: 'We respect your privacy. Unsubscribe at any time.',
        layout: 'centered',
        showImage: true,
        imageUrl: 'https://via.placeholder.com/600x400?text=Newsletter+Image',
        collectName: false,
        nameRequired: false,
        successMessage: 'Thanks for subscribing! Check your email to confirm.',
        backgroundColor: '#000000',
        textColor: '#ffffff',
        inputBackground: '#ffffff',
        inputBorder: '#e5e5e5',
        buttonBackground: '#3b82f6',
        buttonTextColor: '#ffffff',
        borderRadius: 'md',
    },
    render: (props) => (_jsx("div", { className: "newsletter-section py-16", style: { backgroundColor: props.backgroundColor }, children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: LAYOUT_CLASSES[props.layout] || 'text-center max-w-2xl mx-auto', children: [props.layout === 'split' && props.showImage && (_jsx("div", { className: "w-1/2", children: _jsx("img", { src: props.imageUrl, alt: "Newsletter", className: `w-full h-auto ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'}` }) })), _jsxs("div", { className: props.layout === 'split' ? 'w-1/2' : 'w-full', children: [props.subtitle && (_jsx("p", { className: "text-sm font-semibold uppercase tracking-wide mb-2", style: { color: props.textColor, opacity: 0.8 }, children: props.subtitle })), _jsx("h2", { className: "text-4xl font-bold mb-4", style: { color: props.textColor }, children: props.title }), props.description && (_jsx("p", { className: "text-lg mb-6", style: { color: props.textColor, opacity: 0.9 }, children: props.description })), _jsxs("form", { className: "space-y-4", children: [props.collectName && (_jsx("input", { type: "text", placeholder: "Your name", required: props.nameRequired, className: `w-full px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`, style: {
                                            backgroundColor: props.inputBackground,
                                            borderColor: props.inputBorder,
                                        } })), _jsxs("div", { className: props.layout === 'inline' ? 'flex gap-2' : '', children: [_jsx("input", { type: "email", placeholder: props.placeholderText, required: true, className: `${props.layout === 'inline' ? 'flex-1' : 'w-full'} px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`, style: {
                                                    backgroundColor: props.inputBackground,
                                                    borderColor: props.inputBorder,
                                                } }), _jsx("button", { type: "submit", className: `${props.layout === 'inline' ? '' : 'w-full'} px-8 py-3 font-semibold ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} hover:opacity-90 transition`, style: {
                                                    backgroundColor: props.buttonBackground,
                                                    color: props.buttonTextColor,
                                                }, children: props.buttonText })] }), props.showPrivacyText && (_jsx("p", { className: "text-xs", style: { color: props.textColor, opacity: 0.7 }, children: props.privacyText }))] })] })] }) }) })),
};
export default Newsletter;
//# sourceMappingURL=Newsletter.js.map