export declare const trustBadgesFields: {
    title: {
        type: "text";
        label: string;
    };
    subtitle: {
        type: "text";
        label: string;
    };
    layout: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
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
    badges: {
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
    spacing: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    showBorder: {
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
//# sourceMappingURL=trustbadges.fields.d.ts.map