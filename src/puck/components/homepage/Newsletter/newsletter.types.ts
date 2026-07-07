/**
 * Newsletter props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface NewsletterProps {
  /** Unique id used by Puck patch operations */
  id?: string;

  // Content
  title: string;
  subtitle: string;
  description: string;
  placeholderText: string;
  buttonText: string;

  // Privacy
  showPrivacyText: boolean;
  privacyText: string;

  // Layout
  layout: 'centered' | 'split' | 'inline';
  showImage: boolean;
  imageUrl: string;

  // Form Fields
  collectName: boolean;
  nameRequired: boolean;

  // Success Message
  successMessage: string;

  // Styling
  backgroundColor: string;
  textColor: string;
  inputBackground: string;
  inputBorder: string;
  buttonBackground: string;
  buttonTextColor: string;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'full';
}
