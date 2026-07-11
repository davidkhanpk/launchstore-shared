export interface SharedMegaMenuCategory {
    id: string;
    handle: string;
    name: string;
    description?: string;
    subcategories?: SharedMegaMenuCategory[];
}
/**
 * Stripped-down shape of EnrichedMenuItem that CategoryMegaMenu
 * needs. Consumer wrappers project EnrichedMenuItem → this.
 */
export interface SharedMegaMenuItem {
    id: string;
    label: string;
    url?: string;
    openInNewTab?: boolean;
    enrichedData?: {
        category?: SharedMegaMenuCategory;
        /** Final URL to navigate to (fallback to url). */
        resolvedUrl?: string;
    };
}
export interface SharedCategoryMegaMenuConfig {
    enabled: boolean;
    columns?: number;
    showImage?: boolean;
    imageUrl?: string;
    subcategoryLimit?: number;
    showDescriptions?: boolean;
    showSubcategories?: boolean;
}
export interface SharedMegaMenuTheme {
    background?: string;
    sectionHeading?: string;
    linkText?: string;
    linkHover?: string;
    /** CSS font sizes/weights (already-resolved). */
    headingFontSize?: string;
    headingFontWeight?: number;
    linkFontSize?: string;
    linkFontWeight?: number;
    /** Padding + column-gap. */
    padding?: string;
    columnGap?: string;
    /** Border radius + box shadow. */
    borderRadius?: string;
    boxShadow?: string;
}
export interface CategoryMegaMenuProps {
    item: SharedMegaMenuItem;
    megaMenu: SharedCategoryMegaMenuConfig;
    theme?: SharedMegaMenuTheme;
    onLinkClick?: () => void;
}
//# sourceMappingURL=categorymegamenu.types.d.ts.map