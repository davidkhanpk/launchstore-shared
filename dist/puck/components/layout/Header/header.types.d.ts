/**
 * Minimal MenuItem shape needed by Header / Footer Puck components.
 * Mirrors the frontend's MenuItem but stripped to what render needs.
 */
export interface SharedMenuItem {
    id: string;
    label: string;
    url?: string;
    isVisible?: boolean;
    openInNewTab?: boolean;
    children?: SharedMenuItem[];
}
export interface SharedMenu {
    id?: string;
    handle?: string;
    name?: string;
    items: SharedMenuItem[];
}
export interface HeaderProps {
    layout: 'left-center-right' | 'stacked' | 'centered';
    backgroundColor: string;
    textColor: string;
    sticky: boolean;
    shadow: boolean;
    transparent: boolean;
    logoPosition: 'left' | 'center' | 'right';
    logoMaxWidth: string;
    logoUrl: string;
    logoAlt: string;
    /** Pre-fetched menu items. Consumers wire to their own data source. */
    menuItems?: SharedMenuItem[];
    menuPosition: 'left' | 'center' | 'right';
    menuStyle: 'horizontal' | 'vertical';
    menuTextColor?: string;
    menuHoverColor?: string;
    actions: Array<'search' | 'wishlist' | 'account' | 'cart'>;
    actionsPosition: 'left' | 'right';
    showCartBadge: boolean;
    showLabels: boolean;
    cartBadgeCount: number;
    /** Loading / error flags consumed from the wrapper's data hook. */
    menuLoading?: boolean;
    menuError?: boolean;
    topBar?: {
        enabled: boolean;
        backgroundColor?: string;
        textColor?: string;
        leftText?: string;
        centerText?: string;
        rightText?: string;
    };
    mobileBreakpoint: 'sm' | 'md' | 'lg';
    mobileMenuStyle: 'drawer' | 'fullscreen';
}
//# sourceMappingURL=header.types.d.ts.map