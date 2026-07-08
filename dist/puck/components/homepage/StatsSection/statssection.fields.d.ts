export declare const statsSectionFields: {
    title: {
        type: "text";
        label: string;
    };
    subtitle: {
        type: "text";
        label: string;
    };
    columns: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    alignment: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    stats: {
        type: "array";
        label: string;
        arrayFields: any;
    };
    backgroundColor: {
        type: "text";
        label: string;
    };
    textColor: {
        type: "text";
        label: string;
    };
    numberColor: {
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
    showDividers: {
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
    borderRadius: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
};
//# sourceMappingURL=statssection.fields.d.ts.map