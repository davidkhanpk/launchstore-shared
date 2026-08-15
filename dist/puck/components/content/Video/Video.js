import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { resolveColor } from '../../../../theme/resolveColor';
import { SHADOW_OPTIONS, sharedTypographyFields, sharedLayoutFields, sharedColorFields, buildLayoutClasses, buildColorClasses, defaultTypographyProps, defaultLayoutProps, defaultColorProps, } from '../../../design-system';
const MAX_WIDTH_DEFAULT = '800px';
// ── Static option maps ─────────────────────────────────────────────────────
const ASPECT_RATIO_MAP = {
    '16:9': '16 / 9',
    '4:3': '4 / 3',
    '1:1': '1 / 1',
    '21:9': '21 / 9',
};
const SHADOW_MAP = {
    none: 'none',
    sm: '0 1px 2px rgba(0,0,0,0.05)',
    md: '0 4px 6px rgba(0,0,0,0.1)',
    lg: '0 10px 15px rgba(0,0,0,0.1)',
};
const ALIGN_JUSTIFY_MAP = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};
// ── Content fields (component-specific) ─────────────────────────────────────
const contentFields = {
    videoType: {
        type: 'select', label: 'Video Type',
        options: [
            { label: 'YouTube', value: 'youtube' },
            { label: 'Vimeo', value: 'vimeo' },
            { label: 'Direct MP4', value: 'mp4' },
        ],
    },
    videoUrl: { type: 'text', label: 'Video URL' },
    autoplay: { type: 'radio', label: 'Autoplay', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    loop: { type: 'radio', label: 'Loop', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    muted: { type: 'radio', label: 'Muted', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    controls: { type: 'radio', label: 'Show Controls', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
    aspectRatio: {
        type: 'select', label: 'Aspect Ratio',
        options: [
            { label: '16:9 (Widescreen)', value: '16:9' },
            { label: '4:3 (Standard)', value: '4:3' },
            { label: '1:1 (Square)', value: '1:1' },
            { label: '21:9 (Cinematic)', value: '21:9' },
        ],
    },
    maxWidth: { type: 'text', label: 'Max Width (e.g. 800px)' },
    alignment: {
        type: 'select', label: 'Alignment',
        options: [
            { label: 'Left', value: 'left' },
            { label: 'Center', value: 'center' },
            { label: 'Right', value: 'right' },
        ],
    },
    shadow: { type: 'select', label: 'Shadow', options: SHADOW_OPTIONS },
    caption: { type: 'textarea', label: 'Caption (optional)' },
};
// ── All flat fields ─────────────────────────────────────────────────────────
const allFields = {
    ...contentFields,
    ...sharedTypographyFields,
    ...sharedLayoutFields,
    ...sharedColorFields,
};
// ── Helpers ─────────────────────────────────────────────────────────────────
function extractYouTubeId(url) {
    const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    return m ? m[1] : null;
}
function extractVimeoId(url) {
    const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    return m ? m[1] : null;
}
// ── Component ───────────────────────────────────────────────────────────────
export const Video = {
    label: 'Video',
    fields: allFields,
    defaultProps: {
        videoType: 'youtube',
        videoUrl: '',
        autoplay: false,
        loop: false,
        muted: true,
        controls: true,
        aspectRatio: '16:9',
        maxWidth: MAX_WIDTH_DEFAULT,
        alignment: 'center',
        shadow: 'md',
        caption: '',
        ...defaultTypographyProps,
        ...defaultLayoutProps,
        ...defaultColorProps,
        borderRadius: 'md',
    },
    render: (rawProps) => {
        const { videoType, videoUrl, autoplay, loop, muted, controls, aspectRatio, maxWidth, alignment, borderRadius, shadow, caption, marginTop, marginBottom, paddingX, paddingY, backgroundColor, } = rawProps;
        const maxWidthCss = maxWidth || MAX_WIDTH_DEFAULT;
        const aspectCss = ASPECT_RATIO_MAP[aspectRatio] ?? '16 / 9';
        const shadowCss = SHADOW_MAP[shadow] ?? 'none';
        const justify = ALIGN_JUSTIFY_MAP[alignment] ?? 'center';
        const wrapperClassName = buildLayoutClasses(rawProps);
        const frameClassName = buildColorClasses({ borderRadius });
        const wrapperStyle = {
            display: 'flex',
            justifyContent: justify,
        };
        const figureStyle = {
            maxWidth: maxWidthCss,
            width: '100%',
            margin: 0,
        };
        const frameStyle = {
            position: 'relative',
            width: '100%',
            aspectRatio: aspectCss,
            overflow: 'hidden',
            boxShadow: shadowCss,
            backgroundColor: backgroundColor && backgroundColor !== 'transparent'
                ? (resolveColor(backgroundColor) || backgroundColor)
                : undefined,
        };
        const mediaStyle = {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
        };
        const captionStyle = {
            fontSize: '0.875rem',
            textAlign: 'center',
            marginTop: '8px',
            opacity: 0.75,
        };
        let embedUrl = videoUrl;
        if (videoType === 'youtube') {
            const videoId = extractYouTubeId(videoUrl);
            if (videoId) {
                const params = new URLSearchParams();
                if (autoplay)
                    params.set('autoplay', '1');
                if (loop) {
                    params.set('loop', '1');
                    params.set('playlist', videoId);
                }
                if (muted)
                    params.set('mute', '1');
                embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
            }
        }
        else if (videoType === 'vimeo') {
            const videoId = extractVimeoId(videoUrl);
            if (videoId) {
                const params = new URLSearchParams();
                if (autoplay)
                    params.set('autoplay', '1');
                if (loop)
                    params.set('loop', '1');
                if (muted)
                    params.set('muted', '1');
                embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
            }
        }
        return (_jsx("div", { className: wrapperClassName, style: wrapperStyle, children: _jsxs("figure", { style: figureStyle, children: [videoType === 'mp4' ? (_jsx("div", { className: frameClassName, style: frameStyle, children: _jsx("video", { src: videoUrl, autoPlay: autoplay, loop: loop, muted: muted, controls: controls, style: mediaStyle }) })) : (_jsx("div", { className: frameClassName, style: frameStyle, children: _jsx("iframe", { src: embedUrl, style: mediaStyle, allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true }) })), caption && _jsx("figcaption", { style: captionStyle, children: caption })] }) }));
    },
};
export default Video;
//# sourceMappingURL=Video.js.map