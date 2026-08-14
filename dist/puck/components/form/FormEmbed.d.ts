import type { ComponentConfig } from '@puckeditor/core';
export interface FormEmbedProps {
    formId: string;
    maxWidth: string;
    paddingX: string;
    paddingY: string;
    backgroundColor: string;
    borderRadius: string;
}
/**
 * FormEmbed — places a form designed in Dashboard → Forms onto any page.
 * This render is the editor fallback (placeholder card); both the dashboard
 * editor and the storefront override `render` to display the actual form.
 */
export declare const FormEmbed: ComponentConfig<FormEmbedProps>;
export default FormEmbed;
//# sourceMappingURL=FormEmbed.d.ts.map