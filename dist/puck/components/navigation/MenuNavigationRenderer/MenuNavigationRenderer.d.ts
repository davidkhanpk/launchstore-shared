import React from 'react';
import type { MenuNavigationRendererProps } from './menunavigationrenderer.types';
/**
 * MenuNavigationRenderer — live renderer for the storefront's
 * navigation menu. Uses CSS-state hover (no @headlessui/react
 * Popover dependency) — same behavior, less surface area.
 *
 * Renders items + mega-menu popovers positioned via a small
 * useState hover tracker. Consumer projects EnrichedMenuItem +
 * Theme into the SharedEnrichedMenuItem + SharedMenuNavTheme
 * shape.
 */
export declare const MenuNavigationRenderer: React.FC<MenuNavigationRendererProps>;
export default MenuNavigationRenderer;
//# sourceMappingURL=MenuNavigationRenderer.d.ts.map