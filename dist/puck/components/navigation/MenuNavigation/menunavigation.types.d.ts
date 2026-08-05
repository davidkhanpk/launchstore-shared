export type MenuLayout = 'horizontal' | 'vertical';
export type MenuAlignment = 'left' | 'center' | 'right';
export type MenuNavigationLayout = 'horizontal' | 'vertical' | 'stacked';
export type MenuNavigationAlignment = 'left' | 'center' | 'right';
export type MenuNavigationHoverEffect = 'underline' | 'background' | 'color' | 'none';
export type MenuNavigationFontSize = 'sm' | 'base' | 'lg';
export type MenuNavigationFontWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type MenuNavigationDropdownStyle = 'default' | 'mega';
/**
 * Base shape for a menu item as authored in the Menu editor.
 * Carries only the fields needed for default dropdowns.
 */
export interface SharedNavMenuItem {
    id: string;
    label: string;
    url?: string;
    position: number;
    isVisible: boolean;
    openInNewTab: boolean;
    children?: SharedNavMenuItem[];
    megaMenu?: {
        enabled: boolean;
        columns?: number;
        showImage?: boolean;
        imageUrl?: string;
    };
}
/**
 * Enriched menu item — the canonical data contract carried into MenuNavigation.
 * Adds the Medusa-enriched category data (needed for real mega-menus via
 * CategoryMegaMenu) plus the extra authored fields (isVisible/type/position/
 * parentId) and the full mega-menu config. This is what the storefront injects
 * via `menuData` after enriching the Menu table with Medusa data.
 *
 * Replaces the old SharedMegaMenuItem-only shape so MenuNavigation can render
 * both default dropdowns (children) AND real mega-menus (enrichedData.category).
 */
export interface SharedEnrichedMenuItem extends SharedNavMenuItem {
    parentId?: string | null;
    type?: 'category' | 'collection' | 'page' | 'custom';
    children?: SharedEnrichedMenuItem[];
    enrichedData?: {
        category?: {
            id: string;
            handle: string;
            name: string;
            description?: string;
            subcategories?: Array<{
                id: string;
                handle: string;
                name: string;
                description?: string;
            }>;
        };
        collection?: {
            id: string;
            handle: string;
            title?: string;
        };
        /** Final URL to navigate to (fallback to url). */
        resolvedUrl?: string;
    };
    megaMenu?: {
        enabled: boolean;
        columns?: number;
        showImage?: boolean;
        imageUrl?: string;
        subcategoryLimit?: number;
        showDescriptions?: boolean;
        showSubcategories?: boolean;
    };
}
/**
 * Theme tokens consumed by the nav bar (background/text/border + mega-menu
 * panel tokens + transition/radius/shadow effects).
 */
export interface SharedMenuNavTheme {
    navigation?: {
        background?: string;
        border?: string;
        text?: string;
        textHover?: string;
        fontSize?: string;
        fontWeight?: number;
        fontFamily?: string;
        padding?: string;
        gap?: string;
    };
    megaMenu?: {
        background?: string;
        linkText?: string;
    };
    effects?: {
        transition?: {
            duration?: string;
            easing?: string;
        };
        borderRadius?: {
            megaMenu?: string;
        };
        shadow?: {
            megaMenu?: string;
        };
    };
}
export interface MenuNavigationProps {
    menuHandle: string;
    layout: MenuNavigationLayout;
    alignment: MenuNavigationAlignment;
    hoverEffect: MenuNavigationHoverEffect;
    textColor: string;
    hoverColor: string;
    fontSize: MenuNavigationFontSize;
    fontWeight: MenuNavigationFontWeight;
    showDropdownArrows: boolean;
    dropdownStyle: MenuNavigationDropdownStyle;
    maxDepth: '1' | '2' | '3';
    /** Authored + Medusa-enriched menu items, injected by the storefront layout. */
    menuData?: SharedEnrichedMenuItem[];
    dropdownBackground?: string;
    dropdownBorder?: string;
    dropdownShadow?: 'sm' | 'md' | 'lg' | 'xl';
    dropdownRadius?: 'sm' | 'md' | 'lg' | 'xl';
    /** Mobile breakpoint (px) below which the desktop nav is replaced by a hamburger → drawer. */
    mobileBreakpoint?: number;
    /** Placeholder text for the in-drawer mobile search input. Empty hides the search. */
    mobileSearchPlaceholder?: string;
    /** Theme tokens (SharedMenuNavTheme) injected by the storefront; used for mega-menu + mobile drawer styling. */
    theme?: SharedMenuNavTheme;
}
//# sourceMappingURL=menunavigation.types.d.ts.map