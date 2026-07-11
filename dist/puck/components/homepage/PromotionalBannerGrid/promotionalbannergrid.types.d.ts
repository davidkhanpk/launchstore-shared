/**
 * PromotionalBannerGrid props — used by the Puck ComponentConfig and the
 * AI meta file. The editor layer (launchstore-frontend) and the renderer
 * layer (launchstore-storefront) both consume this type.
 */
export interface PromotionalBannerItem {
    /** Stable id used by Puck patch operations */
    id: string;
    title: string;
    subtitle: string;
    imageUrl: string;
    ctaText: string;
    ctaLink: string;
    /** 0-100 — opacity of the dark overlay over the image */
    overlayOpacity: number;
    textColor: string;
    /**
     * Position of the text overlay on the banner. All 7 options are valid
     * even though some early drafts only listed 5 — keep the full set.
     */
    textPosition: 'top-left' | 'top-center' | 'top-right' | 'center' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}
export interface PromotionalBannerGridProps {
    /** Unique id used by Puck patch operations */
    id?: string;
    title?: string;
    subtitle?: string;
    layout: '2-column' | '3-column' | '1-2-split' | '2-1-split';
    spacing: 'none' | 'sm' | 'md' | 'lg';
    /** Array of banner items — see `PromotionalBannerItem` */
    banners: PromotionalBannerItem[];
    borderRadius: 'none' | 'sm' | 'md' | 'lg';
    hoverEffect: 'zoom' | 'overlay' | 'lift' | 'none';
    /** Free-text CSS length, e.g. "300px" */
    minHeight: string;
}
//# sourceMappingURL=promotionalbannergrid.types.d.ts.map