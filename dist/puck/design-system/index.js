// Option ladders
export { FONT_SIZE_OPTIONS, FONT_WEIGHT_OPTIONS, TEXT_ALIGN_OPTIONS, SPACING_OPTIONS, RADIUS_OPTIONS, BORDER_WIDTH_OPTIONS, LINE_HEIGHT_OPTIONS, SHADOW_OPTIONS, LETTER_SPACING_OPTIONS, TEXT_TRANSFORM_OPTIONS, BACKGROUND_SCHEME_OPTIONS, BACKGROUND_SIZE_OPTIONS, BACKGROUND_POSITION_OPTIONS, OVERLAY_OPACITY_OPTIONS, DENSITY_OPTIONS, CONTENT_WIDTH_OPTIONS, CONTENT_ALIGN_OPTIONS, VERTICAL_ALIGN_OPTIONS, MIN_HEIGHT_OPTIONS, } from './presets';
// Shared field definitions
export { sharedTypographyFields, sharedLayoutFields, sharedColorFields, sharedBorderFields, sharedBackgroundFields, sharedSectionLayoutFields, } from './presets';
// Default props
export { defaultTypographyProps, defaultLayoutProps, defaultColorProps, defaultBorderProps, } from './presets';
// Tailwind class builders (for render functions)
export { buildTypographyClasses, buildLayoutClasses, buildColorClasses, buildBorderClasses, buildBackground, buildSectionContentClasses, } from './presets';
// Section skeleton (ecommerce section control model)
export { SectionShell, BackgroundOverlay } from './section-shell';
// Styled wrapper (SectionShell + surface extras)
export { StyledSection } from './StyledSection';
// Color resolver (hex/token → CSS color — the only inline style usage)
export { resolveColor } from './presets';
//# sourceMappingURL=index.js.map