import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, } from '../../../design-system';
const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    text: { type: 'text', label: 'Button Text' },
    preorderText: { type: 'text', label: 'Pre-order Button Text' },
    variant: {
        type: 'select', label: 'Style',
        options: [
            { label: 'Primary', value: 'primary' },
            { label: 'Secondary', value: 'secondary' },
            { label: 'Outline', value: 'outline' },
            { label: 'Ghost', value: 'ghost' },
            { label: 'Custom Colors', value: 'custom' },
        ],
    },
    useThemeColors: { type: 'radio', label: 'Use Theme Colors', options: RADIO_YES_NO },
    backgroundColor: { type: 'text', label: 'Background Color (hex, rgb, or theme token)' },
    textColor: { type: 'text', label: 'Text Color (hex, rgb, or theme token)' },
    hoverBackgroundColor: { type: 'text', label: 'Hover Background Color' },
    hoverTextColor: { type: 'text', label: 'Hover Text Color' },
    borderColor: { type: 'text', label: 'Border Color (for outline variant)' },
    size: {
        type: 'select', label: 'Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    fullWidth: { type: 'radio', label: 'Full Width', options: RADIO_YES_NO },
    showIcon: { type: 'radio', label: 'Show Cart Icon', options: RADIO_YES_NO },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'rounded-none' }, { label: 'Small', value: 'rounded-sm' },
            { label: 'Medium', value: 'rounded-md' }, { label: 'Large', value: 'rounded-lg' },
            { label: 'Extra Large', value: 'rounded-xl' }, { label: 'Full', value: 'rounded-full' },
        ],
    },
    marginTop: {
        type: 'select', label: 'Margin Top',
        options: [
            { label: 'None', value: 'mt-0' }, { label: 'Small (0.5rem)', value: 'mt-2' },
            { label: 'Medium (1rem)', value: 'mt-4' }, { label: 'Large (1.5rem)', value: 'mt-6' }, { label: 'X-Large (2rem)', value: 'mt-8' },
        ],
    },
    marginBottom: {
        type: 'select', label: 'Margin Bottom',
        options: [
            { label: 'None', value: 'mb-0' }, { label: 'Small (0.5rem)', value: 'mb-2' },
            { label: 'Medium (1rem)', value: 'mb-4' }, { label: 'Large (1.5rem)', value: 'mb-6' }, { label: 'X-Large (2rem)', value: 'mb-8' },
        ],
    },
    marginLeft: {
        type: 'select', label: 'Margin Left',
        options: [
            { label: 'None', value: 'ml-0' }, { label: 'Auto', value: 'ml-auto' },
            { label: 'Small', value: 'ml-2' }, { label: 'Medium', value: 'ml-4' },
        ],
    },
    marginRight: {
        type: 'select', label: 'Margin Right',
        options: [
            { label: 'None', value: 'mr-0' }, { label: 'Auto', value: 'mr-auto' },
            { label: 'Small', value: 'mr-2' }, { label: 'Medium', value: 'mr-4' },
        ],
    },
    paddingX: {
        type: 'select', label: 'Horizontal Padding',
        options: [{ label: 'Small', value: 'px-4' }, { label: 'Medium', value: 'px-6' }, { label: 'Large', value: 'px-8' }, { label: 'X-Large', value: 'px-10' }],
    },
    paddingY: {
        type: 'select', label: 'Vertical Padding',
        options: [{ label: 'Small', value: 'py-2' }, { label: 'Medium', value: 'py-3' }, { label: 'Large', value: 'py-4' }, { label: 'X-Large', value: 'py-5' }],
    },
    disabled: { type: 'radio', label: 'Disabled State (Preview)', options: RADIO_YES_NO },
};
// ── Accordion config ────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: ['text', 'preorderText', 'showIcon'],
        },
        {
            label: 'Style',
            fieldKeys: ['variant', 'size', 'fullWidth', 'borderRadius', 'disabled'],
        },
        {
            label: 'Colors',
            fieldKeys: ['useThemeColors', 'backgroundColor', 'textColor', 'hoverBackgroundColor', 'hoverTextColor', 'borderColor'],
        },
        {
            label: 'Spacing',
            fieldKeys: ['marginTop', 'marginBottom', 'marginLeft', 'marginRight', 'paddingX', 'paddingY'],
        },
    ],
    allFields,
});
const CartSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "9", cy: "21", r: "1" }), _jsx("circle", { cx: "20", cy: "21", r: "1" }), _jsx("path", { d: "M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" })] }));
const CheckSvg = ({ size = 20 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const ClockSvg = ({ size = 20 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("circle", { cx: "12", cy: "12", r: "10" }), _jsx("polyline", { points: "12 6 12 12 16 14" })] }));
const VARIANT = {
    primary: 'bg-black text-white hover:bg-gray-900',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white bg-transparent',
    ghost: 'text-black hover:bg-gray-100 bg-transparent',
    custom: '',
};
const SIZE = { sm: 'text-sm', md: 'text-base', lg: 'text-lg' };
const formatPreorderDate = (iso) => {
    try {
        return new Date(iso).toLocaleDateString();
    }
    catch {
        return iso;
    }
};
const noopAdd = async () => { };
export const AddToCart = {
    label: 'Add to Cart Button',
    fields: accordionFields,
    defaultProps: {
        text: 'Add to Cart', preorderText: 'Pre-order',
        variant: 'primary', size: 'md', fullWidth: false, showIcon: true, disabled: false,
        backgroundColor: '#000000', textColor: '#ffffff',
        hoverBackgroundColor: '#1f2937', hoverTextColor: '#ffffff', borderColor: '#000000',
        useThemeColors: false,
        marginTop: 'mt-4', marginBottom: 'mb-4', marginLeft: 'ml-0', marginRight: 'mr-0',
        paddingX: 'px-6', paddingY: 'py-3', borderRadius: 'rounded-lg',
    },
    render: (rawProps) => {
        const { text, preorderText, variant = 'primary', size = 'md', fullWidth = false, showIcon = true, disabled = false, backgroundColor = '#000000', textColor = '#ffffff', hoverBackgroundColor = '#1f2937', hoverTextColor = '#ffffff', borderColor = '#000000', useThemeColors = false, marginTop = 'mt-4', marginBottom = 'mb-4', marginLeft = 'ml-0', marginRight = 'mr-0', paddingX = 'px-6', paddingY = 'py-3', borderRadius = 'rounded-lg', selectedVariantId, quantity = 1, onAdd, isLoading = false, inStock = true, isPreorder = false, preorderAvailableDate, theme, } = rawProps;
        const [justAdded, setJustAdded] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const hasVariant = !!selectedVariantId;
        const add = onAdd || noopAdd;
        const handleClick = async () => {
            if (!hasVariant || disabled)
                return;
            try {
                await add(selectedVariantId, quantity);
                setJustAdded(true);
                setTimeout(() => setJustAdded(false), 2000);
            }
            catch { }
        };
        const resolve = (color) => useThemeColors ? resolveColor(color) : color;
        // Custom color styles — ALWAYS applied (regardless of `variant`), so that
        // the color overrides take effect on the canvas even when the user has
        // `variant` set to 'primary' / 'secondary' / 'outline' / 'ghost'.
        // Inline styles have higher CSS specificity than the Tailwind classes
        // from VARIANT[variant], so they win and the button shows the custom
        // colors. The hover state still works via isHovered below.
        //
        // Previously this was gated on `variant === 'custom'`, which meant any
        // non-custom variant silently ignored the color props — exactly the
        // symptom in the bug report. The generic Button.tsx in the same project
        // does NOT gate on variant; this aligns AddToCart with that pattern.
        const customStyles = {
            backgroundColor: isHovered ? resolve(hoverBackgroundColor) : resolve(backgroundColor),
            color: isHovered ? resolve(hoverTextColor) : resolve(textColor),
        };
        if (borderColor) {
            customStyles.borderColor = resolve(borderColor);
            customStyles.borderWidth = '2px';
            customStyles.borderStyle = 'solid';
        }
        // Editor preview OR live render with no variant selected yet (multi-variant
        // product, user hasn't picked). Same UI: the button is disabled because
        // we don't have a variant to add, but the TEXT reflects stock state so
        // the shopper sees "Out of Stock" instead of a misleading "Add to Cart"
        // when the product is actually unavailable.
        if (!hasVariant) {
            const previewText = !inStock ? 'Out of Stock' : (text || 'Add to Cart');
            return (_jsxs("button", { type: "button", disabled: true, className: `
          ${variant === 'custom' ? '' : VARIANT[variant || 'primary']} ${SIZE[size || 'md']}
          ${fullWidth ? 'w-full' : ''} ${marginTop} ${marginBottom} ${marginLeft} ${marginRight}
          ${paddingX} ${paddingY} ${borderRadius}
          font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed
          flex items-center justify-center gap-2 ${variant === 'outline' ? 'border-2' : ''}
        `, style: customStyles, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [showIcon && _jsx(CartSvg, {}), previewText] }));
        }
        const isBtnDisabled = disabled || !inStock || isLoading;
        const widthClass = fullWidth ? 'w-full' : '';
        return (_jsxs(_Fragment, { children: [_jsxs("button", { type: "button", disabled: isBtnDisabled, className: `
            ${variant === 'custom' ? '' : VARIANT[variant || 'primary']}
            ${SIZE[size || 'md']} ${widthClass}
            ${marginTop} ${marginBottom} ${marginLeft} ${marginRight}
            ${paddingX} ${paddingY} ${borderRadius}
            font-medium transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            flex items-center justify-center gap-2
            ${justAdded ? '!bg-green-600 !text-white' : ''}
            ${variant === 'outline' ? 'border-2' : ''}
          `, style: customStyles, onClick: handleClick, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [showIcon && (justAdded ? _jsx(CheckSvg, {}) : isPreorder ? _jsx(ClockSvg, {}) : _jsx(CartSvg, {})), _jsx("span", { children: isLoading ? 'Adding…' : justAdded ? 'Added!' : !inStock ? 'Out of Stock' : isPreorder ? (preorderText || 'Pre-order') : (text || 'Add to Cart') })] }), isPreorder && preorderAvailableDate && (_jsxs("p", { className: "text-sm text-ui-fg-subtle mt-1", children: ["Ships on ", formatPreorderDate(preorderAvailableDate)] }))] }));
    },
};
export default AddToCart;
//# sourceMappingURL=AddToCart.js.map