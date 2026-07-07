import React from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { videoFields } from './video.fields';
import type { VideoProps } from './video.types';

const ASPECT_CLASSES: Record<VideoProps['aspectRatio'], string> = {
  '16:9': 'aspect-video',
  '4:3': 'aspect-[4/3]',
  '1:1': 'aspect-square',
  '21:9': 'aspect-[21/9]',
};
const RADIUS_CLASSES: Record<VideoProps['borderRadius'], string> = {
  none: 'rounded-none', sm: 'rounded-sm', md: 'rounded-md', lg: 'rounded-lg',
};
const SHADOW_CLASSES: Record<VideoProps['shadow'], string> = {
  none: 'shadow-none', sm: 'shadow-sm', md: 'shadow-md', lg: 'shadow-lg',
};
const ALIGNMENT_CLASSES: Record<VideoProps['alignment'], string> = {
  left: 'mr-auto', center: 'mx-auto', right: 'ml-auto',
};
const MAX_WIDTH_DEFAULT = '800px';

export const Video: ComponentConfig<VideoProps> = {
  label: 'Video',
  fields: videoFields as ComponentConfig<VideoProps>['fields'],
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
    borderRadius: 'md',
    shadow: 'md',
    caption: '',
  },
  render: ({ videoType, videoUrl, autoplay, loop, muted, controls, aspectRatio, maxWidth, alignment, borderRadius, shadow, caption }) => {
    const maxWidthPx = maxWidth || MAX_WIDTH_DEFAULT;

    if (videoType === 'mp4') {
      return (
        <figure className={ALIGNMENT_CLASSES[alignment] || 'mx-auto'} style={{ maxWidth: maxWidthPx }}>
          <video
            src={videoUrl}
            autoPlay={autoplay}
            loop={loop}
            muted={muted}
            controls={controls}
            className={`${ASPECT_CLASSES[aspectRatio]} w-full ${RADIUS_CLASSES[borderRadius] || 'rounded-md'} ${SHADOW_CLASSES[shadow] || 'shadow-md'}`}
          />
          {caption && <figcaption className="text-sm text-center mt-2 opacity-75">{caption}</figcaption>}
        </figure>
      );
    }

    // YouTube/Vimeo embed
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
      <figure className={ALIGNMENT_CLASSES[alignment] || 'mx-auto'} style={{ maxWidth: maxWidthPx }}>
        <div className={`${ASPECT_CLASSES[aspectRatio]} w-full ${RADIUS_CLASSES[borderRadius] || 'rounded-md'} ${SHADOW_CLASSES[shadow] || 'shadow-md'} overflow-hidden`}>
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {caption && <figcaption className="text-sm text-center mt-2 opacity-75">{caption}</figcaption>}
      </figure>
    );
  },
};

function extractYouTubeId(url: string): string | null {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function extractVimeoId(url: string): string | null {
  const m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return m ? m[1] : null;
}

export default Video;
