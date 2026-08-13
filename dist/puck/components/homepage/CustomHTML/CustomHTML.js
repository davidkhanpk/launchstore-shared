import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createAccordionFields } from '../../../design-system';
const MAX_WIDTH_CLASSES = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-full',
};
/**
 * Best-effort HTML sanitizer: removes <script> tags, inline event handlers,
 * and javascript: URLs. NOT a substitute for DOMPurify — wire that in via
 * a custom wrapper in the storefront if you accept untrusted user content.
 */
function sanitizeHTML(html) {
    return html
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
        .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '')
        .replace(/javascript:/gi, '');
}
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    htmlContent: { type: 'textarea', label: 'HTML Content' },
    cssContent: { type: 'textarea', label: 'Custom CSS (optional)' },
    sanitizeHTML: {
        type: 'radio', label: 'Sanitize HTML (recommended)',
        options: [
            { label: 'Yes (Safe)', value: true },
            { label: 'No (Trust Content)', value: false },
        ],
    },
};
// ── Layout fields (component-specific) ──────────────────────────────────────
const layoutFields = {
    useContainer: {
        type: 'radio', label: 'Use Container',
        options: [
            { label: 'Yes', value: true },
            { label: 'No (Full Width)', value: false },
        ],
    },
    maxWidth: {
        type: 'select', label: 'Max Width',
        options: [
            { label: 'Small (640px)', value: 'sm' },
            { label: 'Medium (768px)', value: 'md' },
            { label: 'Large (1024px)', value: 'lg' },
            { label: 'Extra Large (1280px)', value: 'xl' },
            { label: '2X Large (1536px)', value: '2xl' },
            { label: 'Full Width', value: 'full' },
        ],
    },
    paddingTop: { type: 'number', label: 'Padding Top (px)', min: 0, max: 200 },
    paddingBottom: { type: 'number', label: 'Padding Bottom (px)', min: 0, max: 200 },
    paddingLeft: { type: 'number', label: 'Padding Left (px)', min: 0, max: 200 },
    paddingRight: { type: 'number', label: 'Padding Right (px)', min: 0, max: 200 },
    backgroundColor: { type: 'text', label: 'Background Color (hex or theme token)' },
    backgroundImage: { type: 'text', label: 'Background Image URL' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...layoutFields,
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['htmlContent', 'cssContent', 'sanitizeHTML'],
        },
        {
            label: 'Layout',
            fieldKeys: [
                'useContainer', 'maxWidth',
                'paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight',
                'backgroundColor', 'backgroundImage',
            ],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const CustomHTML = {
    label: 'Custom HTML',
    fields: accordionFields,
    defaultProps: {
        htmlContent: `<div class="custom-section">
  <h2>Custom HTML Section</h2>
  <p>Add your custom HTML content here. You can include any HTML tags, inline styles, and even JavaScript.</p>
  <button class="custom-btn">Click Me</button>
</div>`,
        cssContent: `.custom-section {
  text-align: center;
}

.custom-btn {
  background-color: #3b82f6;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
}

.custom-btn:hover {
  background-color: #2563eb;
}`,
        useContainer: true,
        maxWidth: 'lg',
        paddingTop: 64,
        paddingBottom: 64,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',
        backgroundImage: '',
        sanitizeHTML: true,
    },
    render: (props) => {
        const containerClass = props.useContainer
            ? `${MAX_WIDTH_CLASSES[props.maxWidth]} mx-auto px-4`
            : 'w-full';
        const backgroundStyle = {
            backgroundColor: props.backgroundColor,
            backgroundImage: props.backgroundImage ? `url(${props.backgroundImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            paddingTop: `${props.paddingTop}px`,
            paddingBottom: `${props.paddingBottom}px`,
            paddingLeft: `${props.paddingLeft}px`,
            paddingRight: `${props.paddingRight}px`,
        };
        const cleanHtml = props.sanitizeHTML
            ? sanitizeHTML(props.htmlContent)
            : props.htmlContent;
        return (_jsx("div", { className: "custom-html-section", style: backgroundStyle, children: _jsxs("div", { className: containerClass, children: [props.cssContent && (_jsx("style", { dangerouslySetInnerHTML: { __html: props.cssContent } })), _jsx("div", { dangerouslySetInnerHTML: { __html: cleanHtml } })] }) }));
    },
};
export default CustomHTML;
//# sourceMappingURL=CustomHTML.js.map