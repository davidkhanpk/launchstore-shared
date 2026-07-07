export interface ImageProps {
  src: string;
  alt: string;
  aspectRatio: 'auto' | 'square' | 'video' | 'portrait' | 'landscape';
  objectFit: 'contain' | 'cover' | 'fill' | 'none';
  width: 'auto' | 'full' | 'custom';
  customWidth: string;
  showCaption: boolean;
  caption: string;
  captionPosition: 'top' | 'bottom';
  captionAlign: 'left' | 'center' | 'right';
  linkUrl: string;
  openInNewTab: boolean;
  borderRadius: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showBorder: boolean;
  borderColor: string;
  borderWidth: number;
  hoverEffect: 'none' | 'zoom' | 'brightness' | 'grayscale' | 'lift';
  alignment: 'left' | 'center' | 'right';
  marginTop: number;
  marginBottom: number;
}
