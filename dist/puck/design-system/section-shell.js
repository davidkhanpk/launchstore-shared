import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../theme/resolveColor';
import { buildBackground, buildSectionContentClasses, sectionMinHeight } from './presets';
/** Absolute overlay layer — renders between the background and the content. */
export function BackgroundOverlay({ overlayColor, overlayOpacity, }) {
    const opacity = Number(overlayOpacity) || 0;
    if (!overlayColor || opacity <= 0)
        return null;
    return (_jsx("div", { "aria-hidden": "true", className: "absolute inset-0 pointer-events-none", style: { backgroundColor: resolveColor(overlayColor), opacity: opacity / 100 } }));
}
export function SectionShell({ backgroundScheme, backgroundImage, backgroundSize, backgroundPosition, overlayColor, overlayOpacity, gradientFrom, gradientTo, backgroundColor, density, contentWidth, contentAlign, verticalAlign, minHeight, marginTop, marginBottom, className, style, contentClassName, children, }) {
    const bg = buildBackground({
        backgroundScheme, backgroundImage, backgroundSize, backgroundPosition,
        gradientFrom, gradientTo, backgroundColor,
    });
    const marginClasses = [
        marginTop ? `mt-${marginTop}` : '',
        marginBottom ? `mb-${marginBottom}` : '',
    ].filter(Boolean).join(' ');
    const contentClasses = [
        buildSectionContentClasses({ density, contentWidth, contentAlign, verticalAlign }),
        contentClassName || '',
    ].filter(Boolean).join(' ');
    // Dark/accent schemes flip the default text color for readability.
    const schemeTextColor = backgroundScheme
        ? resolveColor(`scheme.${backgroundScheme}.text`)
        : undefined;
    // Min-height as an inline style — identical in every consumer, regardless
    // of whether their Tailwind generates the equivalent class.
    const minHeightPx = sectionMinHeight(minHeight);
    return (_jsx("section", { className: marginClasses, children: _jsxs("div", { className: `relative w-full ${className || ''}`, style: { ...bg.style, ...style }, children: [bg.hasOverlaySource && (_jsx(BackgroundOverlay, { overlayColor: overlayColor, overlayOpacity: overlayOpacity })), _jsx("div", { className: `relative ${contentClasses}`, style: {
                        ...(minHeightPx ? { minHeight: minHeightPx } : {}),
                        ...(schemeTextColor ? { color: schemeTextColor } : {}),
                    }, children: children })] }) }));
}
export default SectionShell;
//# sourceMappingURL=section-shell.js.map