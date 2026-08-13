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
    borderRadius?: string;
    shadow: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    showBorder: boolean;
    borderColor: string;
    borderWidth: number;
    hoverEffect: 'none' | 'zoom' | 'brightness' | 'grayscale' | 'lift';
    alignment: 'left' | 'center' | 'right';
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    textColor?: string;
    lineHeight?: string;
    marginTop?: string;
    marginBottom?: string;
    paddingX?: string;
    paddingY?: string;
    backgroundColor?: string;
}
//# sourceMappingURL=image.types.d.ts.map