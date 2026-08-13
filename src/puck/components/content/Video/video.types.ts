export interface VideoProps {
  id?: string;
  videoType: 'youtube' | 'vimeo' | 'mp4';
  videoUrl: string;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
  aspectRatio: '16:9' | '4:3' | '1:1' | '21:9';
  maxWidth: string;
  alignment: 'left' | 'center' | 'right';
  shadow: 'none' | 'sm' | 'md' | 'lg';
  caption: string;
  // Shared typography
  fontSize?: string;
  fontWeight?: string;
  textAlign?: string;
  textColor?: string;
  lineHeight?: string;
  // Shared layout
  marginTop?: string;
  marginBottom?: string;
  paddingX?: string;
  paddingY?: string;
  // Shared color
  backgroundColor?: string;
  borderRadius?: string;
}
