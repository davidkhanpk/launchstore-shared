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

  // Typography (shared design-system fields — title size/weight, subtitle transform/tracking)
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textColor?: string;

  // Styling (component-specific form surfaces)
  inputBackground: string;
  inputBorder: string;
  buttonBackground: string;
  buttonTextColor: string;
  /** Tailwind radius scale value — see RADIUS_OPTIONS in the design system. */
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';

  // Background (shared section control model: image > gradient > scheme > color)
  backgroundScheme?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  overlayColor?: string;
  overlayOpacity?: string;
  gradientFrom?: string;
  gradientTo?: string;
  backgroundColor?: string;

  // Section layout (shared)
  density?: string;
  contentWidth?: string;
  contentAlign?: string;
  verticalAlign?: string;
  minHeight?: string;
}
