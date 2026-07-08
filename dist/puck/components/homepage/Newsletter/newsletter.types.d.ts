/**
 * Newsletter props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface NewsletterProps {
    /** Unique id used by Puck patch operations */
    id?: string;
    title: string;
    subtitle: string;
    description: string;
    placeholderText: string;
    buttonText: string;
    showPrivacyText: boolean;
    privacyText: string;
    layout: 'centered' | 'split' | 'inline';
    showImage: boolean;
    imageUrl: string;
    collectName: boolean;
    nameRequired: boolean;
    successMessage: string;
    backgroundColor: string;
    textColor: string;
    inputBackground: string;
    inputBorder: string;
    buttonBackground: string;
    buttonTextColor: string;
    borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
}
//# sourceMappingURL=newsletter.types.d.ts.map