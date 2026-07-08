import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import { cardFields } from './card.fields';
const PAD = { none: 'p-0', sm: 'p-3', md: 'p-6', lg: 'p-8', xl: 'p-12' };
const SHADOW = { none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg', xl: 'shadow-xl' };
const ROUND = { none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg', xl: 'rounded-xl', full: 'rounded-full' };
export const Card = {
    label: 'Card',
    fields: cardFields,
    defaultProps: { id: 'card-1', padding: 'lg', shadow: 'md', border: true, rounded: 'lg', backgroundColor: '#ffffff', hoverEffect: true },
    render: ({ id, padding, shadow, border, rounded, backgroundColor, hoverEffect }) => (_jsx("div", { id: id, className: `${PAD[padding] || 'p-8'} ${SHADOW[shadow] || 'shadow-none'} ${ROUND[rounded] || 'rounded-lg'} ${border ? 'border border-gray-200 dark:border-gray-700' : ''} ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}`, style: { backgroundColor: resolveColor(backgroundColor) }, children: _jsx(DropZone, { zone: "content" }) })),
};
export default Card;
//# sourceMappingURL=Card.js.map