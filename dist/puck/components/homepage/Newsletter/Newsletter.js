import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { newsletterFields } from './newsletter.fields';
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
export const Newsletter = {
    label: 'Newsletter',
    fields: newsletterFields,
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