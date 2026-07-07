export const videoMeta = {
  name: 'Video',
  label: 'Video',
  description: 'Embeds a YouTube, Vimeo, or direct MP4 video. Supports autoplay, loop, mute, controls, multiple aspect ratios, and optional caption.',
  category: 'content',
  intent: ['video', 'embed', 'media', 'demo', 'tutorial'],
  visualRole: 'inline',
  dataDeps: [],
  copyFields: ['caption'],
  themeable: [],
  a11yRisk: 'medium',
  a11yNotes: 'Always provide a caption. iframe embeds lack keyboard shortcuts by default; users cannot pause via spacebar. Add poster image via CSS for YouTube loads.',
  mobileBehavior: 'responsive',
  searchTags: ['video', 'youtube', 'vimeo', 'mp4', 'embed', 'media', 'autoplay'],

  props: {
    videoType: { type: 'enum', options: ['youtube', 'vimeo', 'mp4'] },
    videoUrl: { type: 'string' },
    autoplay: { type: 'boolean', required: true },
    loop: { type: 'boolean', required: true },
    muted: { type: 'boolean', required: true },
    controls: { type: 'boolean', required: true },
    aspectRatio: { type: 'enum', options: ['16:9', '4:3', '1:1', '21:9'] },
    maxWidth: { type: 'string' },
    alignment: { type: 'enum', options: ['left', 'center', 'right'] },
    borderRadius: { type: 'enum', options: ['none', 'sm', 'md', 'lg'] },
    shadow: { type: 'enum', options: ['none', 'sm', 'md', 'lg'] },
    caption: { type: 'string' },
  },
} as const;

export type VideoMeta = typeof videoMeta;
