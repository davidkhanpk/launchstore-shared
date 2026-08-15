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
 * Section — the reference implementation of the ecommerce section control
 * model (SectionShell). Background scheme / image + overlay / gradient,
 * density, content width, content + vertical alignment, min-height —
 * everything a merchant needs to build professional section rhythm.
 */
export const Section = {
    label: 'Section',
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
        contentWidth: 'standard',
        contentAlign: 'left',
        verticalAlign: 'top',
        minHeight: '',
        borderRadius: 'none',
    },
    render: (props) => (_jsx(SectionShell, { ...props, children: _jsx(DropZone, { zone: "content" }) })),
};
export default Section;
//# sourceMappingURL=Section.js.map