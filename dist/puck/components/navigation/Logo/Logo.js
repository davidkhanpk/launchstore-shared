import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { logoFields } from './logo.fields';
const TEXT_SIZE = {
    sm: 'text-sm', base: 'text-base', lg: 'text-lg', xl: 'text-xl',
};
const TEXT_WEIGHT = {
    normal: 'font-normal', medium: 'font-medium', semibold: 'font-semibold', bold: 'font-bold',
};
export const Logo = {
    label: 'Logo',
    fields: logoFields,
    defaultProps: {
        imageUrl: '',
        altText: 'Store Logo',
        linkTo: '/',
        maxWidth: '150px',
        maxHeight: '60px',
        showText: true,
        text: 'My Store',
        textPosition: 'right',
        textSize: 'xl',
        textColor: '#000000',
        textWeight: 'bold',
    },
    render: (rawProps) => {
        const { imageUrl, altText, linkTo, maxWidth, maxHeight, showText, text, textPosition, textSize, textColor, textWeight } = rawProps;
        const hasImage = imageUrl && imageUrl.trim() !== '' && imageUrl !== '/logo.svg';
        return (_jsxs("a", { href: linkTo, className: `flex items-center gap-3 ${textPosition === 'below' ? 'flex-col' : 'flex-row'}`, children: [hasImage && (_jsx("div", { style: { maxWidth, maxHeight, flexShrink: 0, display: 'flex', alignItems: 'center', overflow: 'hidden' }, children: _jsx("img", { src: imageUrl, alt: altText, style: { maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' } }) })), (showText || !hasImage) && text && (_jsx("span", { className: TEXT_SIZE[textSize] || 'text-xl', style: { color: resolveColor(textColor), fontWeight: TEXT_WEIGHT[textWeight] === 'font-bold' ? 700 : TEXT_WEIGHT[textWeight] === 'font-semibold' ? 600 : TEXT_WEIGHT[textWeight] === 'font-medium' ? 500 : 400 }, children: text }))] }));
    },
};
export default Logo;
//# sourceMappingURL=Logo.js.map