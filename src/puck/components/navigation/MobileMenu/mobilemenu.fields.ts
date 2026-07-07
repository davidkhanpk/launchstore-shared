import type { Field } from '@puckeditor/core';
import type { MobileMenuProps } from './mobilemenu.types';

/**
 * MobileMenu is a RENDERED-FROM-DATA component: in the Puck editor
 * it shows an empty placeholder (no menu data bound), but in the
 * live renderer the consumer wrapper injects `items` + `theme` from
 * the page's navigation/menu config before passing the props down.
 *
 * Therefore the Puck fields are intentionally minimal — only
 * cosmetic overrides (drawer width, animation direction). The
 * `items` and `theme` props are populated at render-time via the
 * consumer wrapper, not via the editor panel.
 */
export const mobileMenuFields = {
  drawerMaxWidth: { type: 'text', label: 'Drawer Max Width (e.g. 400px)' },
  animationDirection: {
    type: 'select',
    label: 'Slide-In Direction',
    options: [{ label: 'Left', value: 'left' }, { label: 'Right', value: 'right' }],
  },
} as Record<string, Field>;

// Re-export types for convenience in consumer wrappers that need
// to build the data shape from EnrichedMenuItem + Theme.
export type { SharedMobileMenuItem, SharedMobileMenuTheme } from './mobilemenu.types';
