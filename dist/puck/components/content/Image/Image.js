import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { imageFields } from './image.fields';
const ASPECT = {
    auto: '', square: 'aspect-square', video: 'aspect-video',
    portrait: 'aspect-[3/4]', landscape: 'aspect-[4/3]',
};
const FIT = {
    contain: 'object-contain', cover: 'object-cover', fill: 'object-fill', none: 'object-none',
};
const WIDTH = {
    auto: 'w-auto', full: 'w-full', custom: '',
};
const RADIUS = {
    none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
    xl: 'rounded-xl', '2xl': 'rounded-2xl', full: 'rounded-full',
};
const SHADOW = {
    none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg',
    xl: 'shadow-xl', '2xl': 'shadow-2xl',
};
const ALIGN = {
    left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
const HOVER = {
    none: '', zoom: 'hover:scale-110', brightness: 'hover:brightness-110',
    grayscale: 'grayscale hover:grayscale-0', lift: 'hover:shadow-2xl hover:-translate-y-2',
};
const CAP_ALIGN = {
    left: 'text-left', center: 'text-center', right: 'text-right',
};
export const Image = {
    label: 'Image',
    fields: imageFields,
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
        borderRadius: 'md',
        shadow: 'md',
        showBorder: false,
        borderColor: '#e5e5e5',
        borderWidth: 2,
        hoverEffect: 'none',
        alignment: 'center',
        marginTop: 0,
        marginBottom: 16,
    },
    render: ({ src, alt, aspectRatio, objectFit, width, customWidth, showCaption, caption, captionPosition, captionAlign, linkUrl, openInNewTab, borderRadius, shadow, showBorder, borderColor, borderWidth, hoverEffect, alignment, marginTop, marginBottom, }) => {
        const imageElement = (_jsx("div", { className: "image-wrapper relative overflow-hidden", children: _jsx("img", { src: src, alt: alt, className: `${ASPECT[aspectRatio] || ''} ${FIT[objectFit] || 'object-cover'} ${WIDTH[width] || 'w-full'} ${RADIUS[borderRadius] || 'rounded-md'} ${SHADOW[shadow] || 'shadow-none'} ${HOVER[hoverEffect] || ''} ${showBorder ? 'border' : ''} transition-all duration-300`, style: {
                    width: width === 'custom' ? customWidth : undefined,
                    borderColor: showBorder ? borderColor : undefined,
                    borderWidth: showBorder ? `${borderWidth}px` : undefined,
                } }) }));
        const figure = (_jsxs(_Fragment, { children: [showCaption && captionPosition === 'top' && (_jsx("div", { className: `caption text-sm text-gray-600 mb-2 ${CAP_ALIGN[captionAlign] || 'text-center'}`, children: caption })), linkUrl ? (_jsx("a", { href: linkUrl, target: openInNewTab ? '_blank' : undefined, rel: openInNewTab ? 'noopener noreferrer' : undefined, className: "block", children: imageElement })) : (imageElement), showCaption && captionPosition === 'bottom' && (_jsx("div", { className: `caption text-sm text-gray-600 mt-2 ${CAP_ALIGN[captionAlign] || 'text-center'}`, children: caption }))] }));
        return (_jsx("div", { className: `image-component ${ALIGN[alignment] || 'mx-auto'}`, style: { marginTop: `${marginTop}px`, marginBottom: `${marginBottom}px` }, children: _jsx("div", { className: "image-inner", children: figure }) }));
    },
};
export default Image;
//# sourceMappingURL=Image.js.map