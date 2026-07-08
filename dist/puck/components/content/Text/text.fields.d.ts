export declare const textFields: {
    text: {
        type: "textarea";
        label: string;
    };
    richText: {
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
    fontSize: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    fontWeight: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    lineHeight: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    textAlign: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    color: {
        type: "text";
        label: string;
    };
    maxWidth: {
        type: "text";
        label: string;
    };
    marginTop: {
        type: "number";
        label: string;
        min: number;
        max: number;
    };
    marginBottom: {
        type: "number";
        label: string;
        min: number;
        max: number;
    };
    paddingX: {
        type: "number";
        label: string;
        min: number;
        max: number;
    };
    paddingY: {
        type: "number";
        label: string;
        min: number;
        max: number;
    };
};
//# sourceMappingURL=text.fields.d.ts.map