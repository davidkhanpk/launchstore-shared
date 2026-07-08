export interface FooterMenuConfig {
    handle: string;
    title?: string;
    showAllItems?: boolean;
}
export interface SocialLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube';
    url: string;
}
export interface FooterProps {
    columns: '1' | '2' | '3' | '4' | '5';
    backgroundColor: string;
    textColor: string;
    linkColor?: string;
    linkHoverColor: string;
    /** Pre-fetched menus keyed by handle. Consumer wires via data hooks. */
    menus?: Record<string, {
        items: Array<{
            id: string;
            label: string;
            url?: string;
            isVisible?: boolean;
            openInNewTab?: boolean;
        }>;
        name?: string;
    }>;
    menuConfigs: FooterMenuConfig[];
    newsletter?: {
        enabled: boolean;
        title?: string;
        description?: string;
        placeholder?: string;
        buttonText?: string;
    };
    social?: {
        enabled: boolean;
        links: SocialLink[];
    };
    paymentIcons?: {
        enabled: boolean;
        icons: Array<'visa' | 'mastercard' | 'amex' | 'paypal' | 'apple-pay' | 'google-pay'>;
    };
    bottomBar?: {
        copyright?: string;
        links?: Array<{
            label: string;
            url: string;
        }>;
    };
    paddingTop: string;
    paddingBottom: string;
    menuLoading?: boolean;
    menuError?: boolean;
}
//# sourceMappingURL=footer.types.d.ts.map