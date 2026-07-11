import type { ComponentConfig } from '@puckeditor/core';
export interface NextStep {
    icon: string;
    text: string;
}
export interface NextStepsProps {
    steps: NextStep[];
    layout: 'vertical' | 'horizontal';
}
export declare const nextStepsFields: ComponentConfig<NextStepsProps>['fields'];
export declare const NextSteps: ComponentConfig<NextStepsProps>;
export default NextSteps;
//# sourceMappingURL=NextSteps.d.ts.map