import { jsx as _jsx } from "react/jsx-runtime";
import { DropZone } from '@puckeditor/core';
import { SectionShell, sharedBackgroundFields, sharedSectionLayoutFields, sharedColorFields, } from '../../../design-system';
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...sharedBackgroundFields,
    ...sharedSectionLayoutFields,
    ...sharedColorFields,
};
// ── Component ───────────────────────────────────────────────────────────────
/**
 * Container — a section-level block on the ecommerce section control model
 * (SectionShell): background scheme/image+overlay/gradient, density, content
 * width, alignment, min-height.
 */
export const Container = {
    label: 'Container',
    fields: allFields,
    defaultProps: {
        backgroundScheme: '',
        backgroundImage: '',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overlayColor: '',
        overlayOpacity: '0',
        gradientFrom: '',
        gradientTo: '',
        backgroundColor: '',
        density: 'compact',
        contentWidth: 'wide',
        contentAlign: 'left',
        verticalAlign: 'top',
        minHeight: '',
        borderRadius: 'none',
    },
    render: (props) => (_jsx(SectionShell, { ...props, children: _jsx(DropZone, { zone: "content" }) })),
};
export default Container;
//# sourceMappingURL=Container.js.map