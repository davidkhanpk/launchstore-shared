import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { containerFields } from './container.fields';
const MAX_W = {
    sm: 'max-w-screen-sm', md: 'max-w-screen-md', lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl', '2xl': 'max-w-screen-2xl', full: 'max-w-full',
};
const PAD = {
    none: 'px-0', sm: 'px-4', md: 'px-6', lg: 'px-8',
};
export const Container = {
    label: 'Container',
    fields: containerFields,
    defaultProps: { maxWidth: 'xl', padding: 'md' },
    render: ({ maxWidth, padding }) => (_jsx("div", { className: `mx-auto ${MAX_W[maxWidth] || 'max-w-screen-xl'} ${PAD[padding] || 'px-6'}`, style: { minHeight: '80px' }, children: _jsx(DropZone, { zone: "content" }) })),
};
export default Container;
//# sourceMappingURL=Container.js.map