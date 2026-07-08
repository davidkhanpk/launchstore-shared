/**
 * Drift decision: dead fields removed.
 *
 * Both source versions declared `showProducts`, `collectionId`,
 * `productLimit`, `productLayout` — but neither render function ever
 * referenced them. They were placeholder fields for a "show products
 * from a Medusa collection" feature that never landed. Shared drops
 * them. Follow-up epic can reintroduce when the feature is built.
 */
export declare const countdownTimerFields: {
    title: {
        type: "text";
        label: string;
    };
    subtitle: {
        type: "text";
        label: string;
    };
    endDate: {
        type: "text";
        label: string;
    };
    timerStyle: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    showDays: {
        type: "radio";
        label: string;
        options: ({
            label: string;
            value: true;
        } | {
            label: string;
            value: false;
        })[];
    };
    showHours: {
        type: "radio";
        label: string;
        options: ({
            label: string;
            value: true;
        } | {
            label: string;
            value: false;
        })[];
    };
    showMinutes: {
        type: "radio";
        label: string;
        options: ({
            label: string;
            value: true;
        } | {
            label: string;
            value: false;
        })[];
    };
    showSeconds: {
        type: "radio";
        label: string;
        options: ({
            label: string;
            value: true;
        } | {
            label: string;
            value: false;
        })[];
    };
    showCTA: {
        type: "radio";
        label: string;
        options: ({
            label: string;
            value: true;
        } | {
            label: string;
            value: false;
        })[];
    };
    ctaText: {
        type: "text";
        label: string;
    };
    ctaLink: {
        type: "text";
        label: string;
    };
    backgroundColor: {
        type: "text";
        label: string;
    };
    textColor: {
        type: "text";
        label: string;
    };
    timerColor: {
        type: "text";
        label: string;
    };
    accentColor: {
        type: "text";
        label: string;
    };
    spacing: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    mode: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
//# sourceMappingURL=countdowntimer.fields.d.ts.map