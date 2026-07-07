import type { Field } from '@puckeditor/core';
import type { VideoProps } from './video.types';

export const videoFields = {
  videoType: {
    type: 'select',
    label: 'Video Type',
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
    type: 'select',
    label: 'Aspect Ratio',
    options: [
      { label: '16:9 (Widescreen)', value: '16:9' },
      { label: '4:3 (Standard)', value: '4:3' },
      { label: '1:1 (Square)', value: '1:1' },
      { label: '21:9 (Cinematic)', value: '21:9' },
    ],
  },
  maxWidth: { type: 'text', label: 'Max Width (e.g. 800px)' },
  alignment: {
    type: 'select',
    label: 'Alignment',
    options: [
      { label: 'Left', value: 'left' },
      { label: 'Center', value: 'center' },
      { label: 'Right', value: 'right' },
    ],
  },
  borderRadius: {
    type: 'select',
    label: 'Border Radius',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  shadow: {
    type: 'select',
    label: 'Shadow',
    options: [
      { label: 'None', value: 'none' },
      { label: 'Small', value: 'sm' },
      { label: 'Medium', value: 'md' },
      { label: 'Large', value: 'lg' },
    ],
  },
  caption: { type: 'textarea', label: 'Caption (optional)' },
} satisfies Record<Exclude<keyof VideoProps, 'id'>, Field>;
