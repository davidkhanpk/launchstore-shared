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
    borderRadius?: string;
}
//# sourceMappingURL=video.types.d.ts.map