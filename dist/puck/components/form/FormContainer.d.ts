import type { ComponentConfig } from '@puckeditor/core';
export declare const MAX_WIDTH_OPTIONS: {
    label: string;
    value: string;
}[];
export interface FormContainerProps {
    /**
     * Bound to the Form record id by the designer (injected on load and
     * force-kept on save). NOT a visible field — the id comes from the URL.
     */
    formId: string;
    maxWidth: string;
    gap: string;
    paddingX: string;
    paddingY: string;
    marginTop: string;
    marginBottom: string;
    backgroundColor: string;
    borderWidth: string;
    borderColor: string;
    borderRadius: string;
    shadow: string;
}
/**
 * FormContainer — the shell of a Puck-designed form. Pure layout/styling:
 * field spacing, padding, background, border, radius. Submit behavior
 * (button text, success message, redirect) lives on the FormSubmitButton.
 * Presentational in the editor (a DropZone that accepts field components);
 * the storefront wrapper renders the same tree inside a live <form>.
 */
export declare const FormContainer: ComponentConfig<FormContainerProps>;
export default FormContainer;
//# sourceMappingURL=FormContainer.d.ts.map