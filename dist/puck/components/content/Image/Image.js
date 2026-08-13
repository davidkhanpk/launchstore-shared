import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { createAccordionFields, sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildLayoutClasses, buildColorClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
// ── Static option maps ─────────────────────────────────────────────────────
const ASPECT_RATIO_MAP = {
    auto: '',
    square: '1 / 1',
    video: '16 / 9',
    portrait: '3 / 4',
    landscape: '4 / 3',
};
const SHADOW_MAP = {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
    xl: '0 20px 25px rgba(0,0,0,0.15)',
    '2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
};
const HOVER_FILTER_MAP = {
    none: '',
    zoom: '__zoom__',
    brightness: 'brightness(1.1)',
    grayscale: 'grayscale(1)',
    lift: '__lift__',
};
const ALIGN_JUSTIFY_MAP = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    src: { type: 'text', label: 'Image URL' },
    alt: { type: 'text', label: 'Alt Text (for accessibility)' },
    aspectRatio: {
        type: 'select', label: 'Aspect Ratio',
        options: [
            { label: 'Auto (Original)', value: 'auto' },
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Video (16:9)', value: 'video' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
        ],
    },
    objectFit: {
        type: 'select', label: 'Object Fit',
        options: [
            { label: 'Contain', value: 'contain' },
            { label: 'Cover', value: 'cover' },
            { label: 'Fill', value: 'fill' },
            { label: 'None', value: 'none' },
        ],
    },
    width: {
        type: 'select', label: 'Width',
        options: [
            { label: 'Auto', value: 'auto' },
            { label: 'Full', value: 'full' },
            { label: 'Custom', value: 'custom' },
        ],
    },
    customWidth: { type: 'text', label: 'Custom Width (e.g., 500px, 80%)' },
    showCaption: {
        type: 'radio', label: 'Show Caption',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    caption: { type: 'textarea', label: 'Caption Text' },
    captionPosition: {
        type: 'select', label: 'Caption Position',
        options: [{ label: 'Top', value: 'top' }, { label: 'Bottom', value: 'bottom' }],
    },
    captionAlign: {
        type: 'select', label: 'Caption Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    linkUrl: { type: 'text', label: 'Link URL (optional)' },
    openInNewTab: {
        type: 'radio', label: 'Open in New Tab',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    shadow: {
        type: 'select', label: 'Shadow',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' },
            { label: 'Extra Large', value: 'xl' },
            { label: '2XL', value: '2xl' },
        ],
    },
    showBorder: {
        type: 'radio', label: 'Show Border',
        options: [{ label: 'Yes', value: true }, { label: 'No', value: false }],
    },
    borderColor: { type: 'text', label: 'Border Color (hex or theme token)' },
    borderWidth: { type: 'number', label: 'Border Width (px)', min: 1, max: 10 },
    hoverEffect: {
        type: 'select', label: 'Hover Effect',
        options: [
            { label: 'None', value: 'none' },
            { label: 'Zoom', value: 'zoom' },
            { label: 'Brightness', value: 'brightness' },
            { label: 'Grayscale to Color', value: 'grayscale' },
            { label: 'Lift (Shadow)', value: 'lift' },
        ],
    },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Accordion config ─────────────────────────────────────────────────────────
const accordionFields = createAccordionFields({
    groups: [
        {
            label: 'Content',
            defaultOpen: true,
            fieldKeys: [
                'src', 'alt', 'aspectRatio', 'objectFit', 'width', 'customWidth',
                'linkUrl', 'openInNewTab',
            ],
        },
        {
            label: 'Caption',
            fieldKeys: ['showCaption', 'caption', 'captionPosition', 'captionAlign'],
        },
        {
            label: 'Typography',
            fieldKeys: ['fontSize', 'fontWeight', 'textAlign', 'textColor', 'lineHeight'],
        },
        {
            label: 'Layout',
            fieldKeys: ['alignment', 'marginTop', 'marginBottom', 'paddingX', 'paddingY'],
        },
        {
            label: 'Colors',
            fieldKeys: ['backgroundColor', 'borderRadius', 'shadow', 'showBorder', 'borderColor', 'borderWidth', 'hoverEffect'],
        },
    ],
    allFields,
});
// ── Component ───────────────────────────────────────────────────────────────
export const Image = {
    label: 'Image',
    fields: accordionFields,
    defaultProps: {
        src: 'https://via.placeholder.com/800x600',
        alt: 'Image description',
        aspectRatio: 'auto',
        objectFit: 'cover',
        width: 'full',
        customWidth: '600px',
        showCaption: false,
        caption: 'Image caption goes here',
        captionPosition: 'bottom',
        captionAlign: 'center',
        linkUrl: '',
        openInNewTab: false,
        shadow: 'md',
        showBorder: false,
        borderColor: '#e5e5e5',
        borderWidth: 2,
        hoverEffect: 'none',
        alignment: 'center',
        ...defaultTypographyProps,
        ...defaultLayoutProps,
        marginBottom: 'md',
        ...defaultColorProps,
        borderRadius: 'md',
    },
    render: (rawProps) => {
        const { src, alt, aspectRatio, objectFit, width, customWidth, showCaption, caption, captionPosition, captionAlign, linkUrl, openInNewTab, borderRadius, shadow, showBorder, borderColor, borderWidth, hoverEffect, alignment, marginTop, marginBottom, paddingX, paddingY, backgroundColor, } = rawProps;
        const aspectCss = ASPECT_RATIO_MAP[aspectRatio] ?? '';
        const widthCss = width === 'custom' ? (customWidth || 'auto') : width === 'full' ? '100%' : 'auto';
        const shadowCss = SHADOW_MAP[shadow] ?? 'none';
        const hoverToken = HOVER_FILTER_MAP[hoverEffect] ?? '';
        const isLiftHover = hoverToken === '__lift__';
        const isZoomHover = hoverToken === '__zoom__';
        const hoverFilter = hoverToken && !isLiftHover && !isZoomHover ? hoverToken : '';
        const justify = ALIGN_JUSTIFY_MAP[alignment] ?? 'center';
        const captionAlignCss = captionAlign || 'center';
        const wrapperClassName = buildLayoutClasses(rawProps);
        const wrapperStyle = {
            display: 'flex',
            justifyContent: justify,
        };
        const colorClassName = buildColorClasses({ borderRadius });
        const innerStyle = {
            width: widthCss,
            maxWidth: '100%',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: isLiftHover ? 'none' : shadowCss,
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        const imgStyle = {
            display: 'block',
            width: '100%',
            height: aspectCss ? 'auto' : 'auto',
            aspectRatio: aspectCss || undefined,
            objectFit: objectFit || 'cover',
            borderWidth: showBorder ? `${borderWidth}px` : undefined,
            borderStyle: showBorder ? 'solid' : undefined,
            borderColor: showBorder ? (resolveColor(borderColor) || borderColor) : undefined,
            filter: hoverFilter,
            transition: 'transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease',
        };
        const liftShadow = SHADOW_MAP.xl;
        const hoverCss = [
            isZoomHover && '.img-hover-zoom:hover { transform: scale(1.08); }',
            isLiftHover && `.img-hover-lift:hover { transform: translateY(-4px); box-shadow: ${liftShadow}; }`,
            hoverFilter && `.img-hover-filter:hover { filter: none; }`,
        ].filter(Boolean).join('\n');
        const imageElement = (_jsx("div", { className: colorClassName, style: innerStyle, children: _jsx("img", { src: src, alt: alt, className: [
                    colorClassName,
                    isZoomHover && 'img-hover-zoom',
                    isLiftHover && 'img-hover-lift',
                    hoverFilter && 'img-hover-filter',
                ].filter(Boolean).join(' '), style: imgStyle }) }));
        const captionStyle = {
            fontSize: '0.875rem',
            color: '#6b7280',
            textAlign: captionAlignCss,
            marginTop: captionPosition === 'bottom' ? '8px' : 0,
            marginBottom: captionPosition === 'top' ? '8px' : 0,
        };
        return (_jsxs(_Fragment, { children: [_jsx("div", { className: wrapperClassName, style: wrapperStyle, children: _jsxs("div", { style: { width: widthCss, maxWidth: '100%' }, children: [showCaption && captionPosition === 'top' && (_jsx("div", { style: captionStyle, children: caption })), linkUrl ? (_jsx("a", { href: linkUrl, target: openInNewTab ? '_blank' : undefined, rel: openInNewTab ? 'noopener noreferrer' : undefined, style: { display: 'block' }, children: imageElement })) : (imageElement), showCaption && captionPosition === 'bottom' && (_jsx("div", { style: captionStyle, children: caption }))] }) }), hoverCss && _jsx("style", { dangerouslySetInnerHTML: { __html: hoverCss } })] }));
    },
};
export default Image;
//# sourceMappingURL=Image.js.map