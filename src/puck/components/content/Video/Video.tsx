import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { resolveColor } from '../../../../theme/resolveColor';
import type { VideoProps } from './video.types';
import {
  SHADOW_OPTIONS,
  sharedTypographyFields,
  sharedLayoutFields,
  sharedColorFields,
  buildLayoutClasses,
  buildColorClasses,
  defaultTypographyProps,
  defaultLayoutProps,
  defaultColorProps,
} from '../../../design-system';

const MAX_WIDTH_DEFAULT = '800px';

// ── Static option maps ─────────────────────────────────────────────────────

const ASPECT_RATIO_MAP: Record<string, string> = {
  '16:9': '16 / 9',
  '4:3': '4 / 3',
  '1:1': '1 / 1',
  '21:9': '21 / 9',
};

const SHADOW_MAP: Record<string, string> = {
  none: 'none',
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.1)',
};

const ALIGN_JUSTIFY_MAP: Record<string, string> = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

// ── Content fields (component-specific) ─────────────────────────────────────

const contentFields = {
  videoType: {
    type: 'select' as const, label: 'Video Type',
    options: [
      { label: 'YouTube', value: 'youtube' },
      { label: 'Vimeo', value: 'vimeo' },
      { label: 'Direct MP4', value: 'mp4' },
    ],
  },
  videoUrl: { type: 'text' as const, label: 'Video URL' },
  autoplay: { type: 'radio' as const, label: 'Autoplay', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  loop: { type: 'radio' as const, label: 'Loop', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  muted: { type: 'radio' as const, label: 'Muted', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  controls: { type: 'radio' as const, label: 'Show Controls', options: [{ label: 'Yes', value: true }, { label: 'No', value: false }] },
  aspectRatio: {
    type: 'select' as const, label: 'Aspect Ratio',
    options: [
      { label: '16:9 (Widescreen)', value: '16:9' },
      { label: '4:3 (Standard)', value: '4:3' },
      { label: '1:1 (Square)', value: '1:1' },
      { label: '21:9 (Cinematic)', value: '21:9' },
    ],
  },
  maxWidth: { type: 'text' as const, label: 'Max Width (e.g. 800px)' },
  alignment: {
    type: 'select' as const, label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  shadow: { type: 'select' as const, label: 'Shadow', options: SHADOW_OPTIONS },
  caption: { type: 'textarea' as const, label: 'Caption (optional)' },
};

// ── All flat fields ─────────────────────────────────────────────────────────

const allFields = {
  ...contentFields,
  ...sharedTypographyFields,
  ...sharedLayoutFields,
  ...sharedColorFields,
};

// ── Helpers ─────────────────────────────────────────────────────────────────

function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function extractVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

// ── Component ───────────────────────────────────────────────────────────────

export const Video: ComponentConfig<VideoProps> = {
  label: 'Video',
  fields: allFields as any,
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
  } as VideoProps,
  render: (rawProps: any) => {
    const {
      videoType, videoUrl, autoplay, loop, muted, controls,
      aspectRatio, maxWidth, alignment,
      borderRadius, shadow, caption,
      marginTop, marginBottom, paddingX, paddingY,
      backgroundColor,
    } = rawProps;

    const maxWidthCss = maxWidth || MAX_WIDTH_DEFAULT;
    const aspectCss = ASPECT_RATIO_MAP[aspectRatio] ?? '16 / 9';
    const shadowCss = SHADOW_MAP[shadow] ?? 'none';
    const justify = ALIGN_JUSTIFY_MAP[alignment] ?? 'center';

    const wrapperClassName = buildLayoutClasses(rawProps);
    const frameClassName = buildColorClasses({ borderRadius });

    const wrapperStyle: React.CSSProperties = {
      display: 'flex',
      justifyContent: justify,
    };

    const figureStyle: React.CSSProperties = {
      maxWidth: maxWidthCss,
      width: '100%',
      margin: 0,
    };

    const frameStyle: React.CSSProperties = {
      position: 'relative',
      width: '100%',
      aspectRatio: aspectCss,
      overflow: 'hidden',
      boxShadow: shadowCss,
      backgroundColor: backgroundColor && backgroundColor !== 'transparent'
        ? (resolveColor(backgroundColor) || backgroundColor)
        : undefined,
    };

    const mediaStyle: React.CSSProperties = {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
    };

    const captionStyle: React.CSSProperties = {
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
        if (autoplay) params.set('autoplay', '1');
        if (loop) { params.set('loop', '1'); params.set('playlist', videoId); }
        if (muted) params.set('mute', '1');
        embedUrl = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
      }
    } else if (videoType === 'vimeo') {
      const videoId = extractVimeoId(videoUrl);
      if (videoId) {
        const params = new URLSearchParams();
        if (autoplay) params.set('autoplay', '1');
        if (loop) params.set('loop', '1');
        if (muted) params.set('muted', '1');
        embedUrl = `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
      }
    }

    return (
      <div className={wrapperClassName} style={wrapperStyle}>
        <figure style={figureStyle}>
          {videoType === 'mp4' ? (
            <div className={frameClassName} style={frameStyle}>
              <video
                src={videoUrl}
                autoPlay={autoplay}
                loop={loop}
                muted={muted}
                controls={controls}
                style={mediaStyle}
              />
            </div>
          ) : (
            <div className={frameClassName} style={frameStyle}>
              <iframe
                src={embedUrl}
                style={mediaStyle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
          {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
        </figure>
      </div>
    );
  },
};

export default Video;
