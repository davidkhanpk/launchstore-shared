export declare const videoFields: {
    videoType: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    videoUrl: {
        type: "text";
        label: string;
    };
    autoplay: {
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
    loop: {
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
    muted: {
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
    controls: {
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
    aspectRatio: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    maxWidth: {
        type: "text";
        label: string;
    };
    alignment: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    borderRadius: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    shadow: {
        type: "select";
        label: string;
        options: {
            label: string;
            value: string;
        }[];
    };
    caption: {
        type: "textarea";
        label: string;
    };
};
//# sourceMappingURL=video.fields.d.ts.map