import type { Field } from '@puckeditor/core';
export interface AccordionGroup {
    /** Section label shown in the accordion header. */
    label: string;
    /** Field keys that belong to this group (must exist in allFields). */
    fieldKeys: string[];
    /** Whether this section starts expanded. Default: false. */
    defaultOpen?: boolean;
}
export interface AccordionConfig {
    groups: AccordionGroup[];
    /** The full flat fields record (same object that normally goes to ComponentConfig.fields). */
    allFields: Record<string, Field>;
}
export declare function createAccordionFields(config: AccordionConfig): Record<string, Field>;
//# sourceMappingURL=accordion-field.d.ts.map