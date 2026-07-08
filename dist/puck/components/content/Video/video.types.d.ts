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
    borderRadius: 'none' | 'sm' | 'md' | 'lg';
    shadow: 'none' | 'sm' | 'md' | 'lg';
    caption: string;
}
//# sourceMappingURL=video.types.d.ts.map