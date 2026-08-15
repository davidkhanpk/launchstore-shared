/**
 * Shared Design System Presets — Tailwind-based
 *
 * Single source of truth for spacing, typography, color, and border
 * field definitions. Values ARE Tailwind classes — no resolve helpers,
 * no inline CSS, no math. Components use these classes directly:
 *
 *   className={`text-${fontSize} font-${fontWeight} ${marginClasses}`}
 *
 * This keeps everything in Tailwind — what was already working.
 */
import type { CSSProperties } from 'react';
import type { Field } from '@puckeditor/core';
export declare const FONT_SIZE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const FONT_WEIGHT_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const TEXT_ALIGN_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const SPACING_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const RADIUS_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const BORDER_WIDTH_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const LINE_HEIGHT_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const SHADOW_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const LETTER_SPACING_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const TEXT_TRANSFORM_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const sharedTypographyFields: Record<string, Field>;
export declare const sharedLayoutFields: Record<string, Field>;
export declare const sharedColorFields: Record<string, Field>;
export declare const sharedBorderFields: Record<string, Field>;
export declare const BACKGROUND_SCHEME_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const BACKGROUND_SIZE_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const BACKGROUND_POSITION_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const OVERLAY_OPACITY_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const sharedBackgroundFields: Record<string, Field>;
export declare const DENSITY_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const CONTENT_WIDTH_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const CONTENT_ALIGN_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const VERTICAL_ALIGN_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const MIN_HEIGHT_OPTIONS: {
    label: string;
    value: string;
}[];
export declare const sharedSectionLayoutFields: Record<string, Field>;
export declare const defaultTypographyProps: {
    fontSize: string;
    fontWeight: string;
    textAlign: string;
    textColor: string;
    lineHeight: string;
};
export declare const defaultLayoutProps: {
    marginTop: string;
    marginBottom: string;
    paddingX: string;
    paddingY: string;
};
export declare const defaultColorProps: {
    backgroundColor: string;
    borderRadius: string;
};
export declare const defaultBorderProps: {
    borderWidth: string;
    borderColor: string;
};
export declare function buildTypographyClasses(props: any): string;
export declare function buildLayoutClasses(props: any): string;
export declare function buildColorClasses(props: any): string;
export declare function buildBorderClasses(props: any): string;
/**
 * Resolve the section's background LAYERS. Precedence: image > gradient >
 * scheme > plain color. Returns the inline style for the background surface
 * plus whether an overlay should render. Colors resolve through theme tokens
 * (schemes chain so brand changes flow).
 */
export declare function buildBackground(props: {
    backgroundScheme?: string;
    backgroundImage?: string;
    backgroundSize?: string;
    backgroundPosition?: string;
    gradientFrom?: string;
    gradientTo?: string;
    backgroundColor?: string;
}): {
    style: CSSProperties;
    hasOverlaySource: boolean;
};
/** Classes for the section's content wrapper (inside the background surface). */
export declare function buildSectionContentClasses(props: {
    density?: string;
    contentWidth?: string;
    contentAlign?: string;
    verticalAlign?: string;
    minHeight?: string;
}): string;
export { resolveColor } from '../../theme/resolveColor';
//# sourceMappingURL=presets.d.ts.map