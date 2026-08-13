import { jsx as _jsx } from "react/jsx-runtime";
import { resolveColor } from '../../theme/resolveColor';
import { buildLayoutClasses, buildColorClasses, } from './presets';
/**
 * StyledSection — universal layout wrapper for all Puck components.
 *
 * Uses Tailwind classes (via buildLayoutClasses/buildColorClasses) for
 * spacing, padding, and border radius. Colors use inline style with
 * resolveColor (hex/token → CSS value).
 */
export const StyledSection = ({ marginTop, marginBottom, paddingX, paddingY, backgroundColor, borderRadius, borderWidth, borderColor, children, }) => {
    const layoutClasses = buildLayoutClasses({ marginTop, marginBottom, paddingX, paddingY });
    const colorClasses = buildColorClasses({ borderRadius });
    const borderClasses = borderWidth ? `border-${borderWidth}` : '';
    const style = {};
    if (backgroundColor && backgroundColor !== 'transparent') {
        style.backgroundColor = resolveColor(backgroundColor) || backgroundColor;
    }
    const bw = borderWidth;
    if (bw && bw !== '0') {
        style.borderWidth = `${bw}px`;
        style.borderStyle = 'solid';
        style.borderColor = resolveColor(borderColor) || borderColor || '#e5e7eb';
    }
    const allClasses = [layoutClasses, colorClasses, borderClasses].filter(Boolean).join(' ');
    return _jsx("div", { className: allClasses, style: style, children: children });
};
export default StyledSection;
//# sourceMappingURL=StyledSection.js.map