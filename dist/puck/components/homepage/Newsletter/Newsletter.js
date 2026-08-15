import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { SectionShell, sharedBackgroundFields, sharedSectionLayoutFields, sharedTypographyFields, buildTypographyClasses, RADIUS_OPTIONS, } from '../../../design-system';
// Text alignment follows the `layout` field (centered layout centers text) —
// drop the standalone textAlign field to avoid two competing controls.
const { textAlign: _textAlign, ...newsletterTypographyFields } = sharedTypographyFields;
// Static lookups so Tailwind can see the classes at build time.
const RADIUS_CLASSES = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
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
    inputBackground: { type: 'text', label: 'Input Background (hex or theme token)' },
    inputBorder: { type: 'text', label: 'Input Border (hex or theme token)' },
    buttonBackground: { type: 'text', label: 'Button Background (hex or theme token)' },
    buttonTextColor: { type: 'text', label: 'Button Text Color (hex or theme token)' },
    borderRadius: { type: 'select', label: 'Border Radius', options: RADIUS_OPTIONS },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...emailFields,
    ...layoutFields,
    ...styleFields,
    ...newsletterTypographyFields,
    ...sharedBackgroundFields,
    ...sharedSectionLayoutFields,
};
// ── Component ───────────────────────────────────────────────────────────────
export const Newsletter = {
    label: 'Newsletter',
    fields: allFields,
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
        // Typography (fontSize/fontWeight drive the title, textTransform/
        // letterSpacing drive the subtitle eyebrow)
        fontSize: '4xl',
        fontWeight: 'bold',
        lineHeight: 'normal',
        textTransform: 'uppercase',
        letterSpacing: 'wide',
        textColor: '#ffffff',
        // Component-specific form styling
        inputBackground: '#ffffff',
        inputBorder: '#e5e5e5',
        buttonBackground: 'button.primary.background',
        buttonTextColor: '#ffffff',
        borderRadius: 'md',
        // Background (shared section control model)
        backgroundScheme: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overlayColor: '',
        overlayOpacity: '0',
        gradientFrom: '',
        gradientTo: '',
        backgroundColor: '#000000',
        // Section layout (shared)
        density: 'comfortable',
        contentWidth: 'wide',
        contentAlign: 'center',
        verticalAlign: 'top',
        minHeight: '',
    },
    render: (props) => {
        // When a scheme is active its text color flows from SectionShell; the
        // explicit textColor prop only applies on plain/gradient backgrounds.
        const fg = props.backgroundScheme
            ? undefined
            : (resolveColor(props.textColor) || props.textColor);
        const fgStyle = fg ? { color: fg } : undefined;
        // Title: size + weight (+ line height). Subtitle: transform + tracking.
        const titleTypography = buildTypographyClasses({
            fontSize: props.fontSize,
            fontWeight: props.fontWeight,
            lineHeight: props.lineHeight,
        });
        const subtitleTypography = buildTypographyClasses({
            textTransform: props.textTransform,
            letterSpacing: props.letterSpacing,
        });
        return (_jsx(SectionShell, { ...props, className: "overflow-hidden", contentClassName: "px-4", children: _jsxs("div", { className: `w-full ${LAYOUT_CLASSES[props.layout] || 'text-center max-w-2xl mx-auto'}`, children: [props.layout === 'split' && props.showImage && (_jsx("div", { className: "w-1/2", children: _jsx("img", { src: props.imageUrl, alt: "Newsletter", className: `w-full h-auto ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'}` }) })), _jsxs("div", { className: props.layout === 'split' ? 'w-1/2' : 'w-full', children: [props.subtitle && (_jsx("p", { className: `text-sm font-semibold mb-2 ${subtitleTypography}`, style: fgStyle ? { ...fgStyle, opacity: 0.8 } : { opacity: 0.8 }, children: props.subtitle })), _jsx("h2", { className: `${titleTypography || 'text-4xl font-bold'} mb-4`, style: fgStyle, children: props.title }), props.description && (_jsx("p", { className: "text-lg mb-6", style: fgStyle ? { ...fgStyle, opacity: 0.9 } : { opacity: 0.9 }, children: props.description })), _jsxs("form", { className: "space-y-4", children: [props.collectName && (_jsx("input", { type: "text", placeholder: "Your name", required: props.nameRequired, className: `w-full px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`, style: {
                                            backgroundColor: props.inputBackground,
                                            borderColor: props.inputBorder,
                                        } })), _jsxs("div", { className: props.layout === 'inline' ? 'flex gap-2' : '', children: [_jsx("input", { type: "email", placeholder: props.placeholderText, required: true, className: `${props.layout === 'inline' ? 'flex-1' : 'w-full'} px-4 py-3 ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} border-2`, style: {
                                                    backgroundColor: props.inputBackground,
                                                    borderColor: props.inputBorder,
                                                } }), _jsx("button", { type: "submit", className: `${props.layout === 'inline' ? '' : 'w-full'} px-8 py-3 font-semibold ${RADIUS_CLASSES[props.borderRadius] || 'rounded-lg'} hover:opacity-90 transition`, style: {
                                                    backgroundColor: props.buttonBackground,
                                                    color: props.buttonTextColor,
                                                }, children: props.buttonText })] }), props.showPrivacyText && (_jsx("p", { className: "text-xs", style: fgStyle ? { ...fgStyle, opacity: 0.7 } : { opacity: 0.7 }, children: props.privacyText }))] })] })] }) }));
    },
};
export default Newsletter;
//# sourceMappingURL=Newsletter.js.map