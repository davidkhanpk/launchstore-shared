/**
 * Public re-exports for the CustomHTML component.
 * The editor (launchstore-frontend) imports `CustomHTML` and `CustomHTMLProps`
 * to wire into its Puck config (extending fields with custom widgets).
 * The renderer (launchstore-storefront) imports `CustomHTML` as-is.
 */
export { CustomHTML } from './CustomHTML';
export type { CustomHTMLProps } from './customhtml.types';
export { customHtmlFields } from './customhtml.fields';
export { customHtmlMeta, type CustomHtmlMeta } from './customhtml.meta';
