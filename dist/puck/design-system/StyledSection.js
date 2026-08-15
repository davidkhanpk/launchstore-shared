import { jsx as _jsx } from "react/jsx-runtime";
import { SectionShell } from './section-shell';
import { buildColorClasses, buildBorderClasses, resolveColor } from './presets';
/**
 * StyledSection — universal section wrapper for Puck components, now built
 * on SectionShell (the ecommerce section control model): background scheme /
 * image + overlay / gradient, density, content width, alignment, min-height.
 * Surface extras (radius, border, shadow) layer on top of the shell.
 */
export const StyledSection = ({ borderRadius, borderWidth, borderColor, shadow, ...shellProps }) => {
    const surfaceClasses = [
        buildColorClasses({ borderRadius }),
        buildBorderClasses({ borderWidth }),
        shadow && shadow !== 'none' ? `shadow-${shadow}` : '',
        'overflow-hidden',
    ].filter(Boolean).join(' ');
    const surfaceStyle = {};
    const bw = borderWidth;
    if (bw && bw !== '0') {
        surfaceStyle.borderStyle = 'solid';
        surfaceStyle.borderColor = resolveColor(borderColor) || '#e5e7eb';
    }
    return (_jsx(SectionShell, { ...shellProps, className: surfaceClasses, style: surfaceStyle }));
};
export default StyledSection;
//# sourceMappingURL=StyledSection.js.map