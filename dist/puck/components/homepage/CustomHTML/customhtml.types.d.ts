/**
 * CustomHTML props — used by the Puck ComponentConfig and the AI meta file.
 * The editor layer (launchstore-frontend) and the renderer layer
 * (launchstore-storefront) both consume this type.
 */
export interface CustomHTMLProps {
    /** Unique id used by Puck patch operations */
    id?: string;
    /** Free-form HTML that the user pastes. Dangerous — but reviewed via the `sanitizeHTML` toggle. */
    htmlContent: string;
    /** Custom CSS scoped to this section. Injected via `<style>` tag at runtime. */
    cssContent: string;
    useContainer: boolean;
    maxWidth: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
    paddingTop: number;
    paddingBottom: number;
    paddingLeft: number;
    paddingRight: number;
    backgroundColor: string;
    backgroundImage: string;
    sanitizeHTML: boolean;
}
//# sourceMappingURL=customhtml.types.d.ts.map