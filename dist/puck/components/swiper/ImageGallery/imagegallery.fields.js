const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const imageGalleryFields = {
    containerWidth: {
        type: 'select', label: 'Container Width',
        options: [
            { label: 'Full Width (100%)', value: 'full' },
            { label: 'Large (1200px)', value: 'large' },
            { label: 'Medium (800px)', value: 'medium' },
            { label: 'Small (600px)', value: 'small' },
            { label: 'Custom', value: 'custom' },
        ],
    },
    customWidth: { type: 'number', label: 'Custom Width (px)' },
    maxHeight: { type: 'number', label: 'Max Height (px)' },
    layout: {
        type: 'select', label: 'Gallery Layout',
        options: [
            { label: 'Standard (Full Image)', value: 'standard' },
            { label: 'With Thumbnails', value: 'thumbnails' },
            { label: 'Grid View', value: 'grid' },
        ],
    },
    mainImageAspectRatio: {
        type: 'select', label: 'Main Image Aspect Ratio',
        options: [
            { label: 'Square (1:1)', value: 'square' },
            { label: 'Portrait (3:4)', value: 'portrait' },
            { label: 'Landscape (4:3)', value: 'landscape' },
            { label: 'Wide (16:9)', value: 'wide' },
        ],
    },
    showThumbnails: { type: 'radio', label: 'Show Thumbnails', options: RADIO_YES_NO },
    thumbnailPosition: {
        type: 'select', label: 'Thumbnail Position',
        options: [
            { label: 'Bottom', value: 'bottom' },
            { label: 'Right', value: 'right' },
            { label: 'Left', value: 'left' },
        ],
    },
    thumbnailsPerView: { type: 'number', label: 'Thumbnails Per View' },
    thumbnailSpacing: { type: 'number', label: 'Thumbnail Spacing (px)' },
    showNavigation: { type: 'radio', label: 'Show Navigation Arrows', options: RADIO_YES_NO },
    navigationColor: { type: 'text', label: 'Navigation Color (hex)' },
    navigationSize: {
        type: 'select', label: 'Navigation Size',
        options: [{ label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }],
    },
    showPagination: { type: 'radio', label: 'Show Pagination', options: RADIO_YES_NO },
    paginationType: {
        type: 'select', label: 'Pagination Type',
        options: [{ label: 'Bullets', value: 'bullets' }, { label: 'Fraction (1/5)', value: 'fraction' }],
    },
    paginationColor: { type: 'text', label: 'Pagination Color (hex)' },
    enableZoom: { type: 'radio', label: 'Enable Zoom (click/pinch)', options: RADIO_YES_NO },
    maxZoomScale: { type: 'number', label: 'Max Zoom Scale' },
    loop: { type: 'radio', label: 'Loop', options: RADIO_YES_NO },
    autoHeight: { type: 'radio', label: 'Auto Height', options: RADIO_YES_NO },
    spaceBetween: { type: 'number', label: 'Space Between Images (px)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' },
            { label: 'Medium', value: 'md' }, { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' },
        ],
    },
    showBorder: { type: 'radio', label: 'Show Border', options: RADIO_YES_NO },
    borderColor: { type: 'text', label: 'Border Color (hex)' },
    backgroundColor: { type: 'text', label: 'Background Color (hex)' },
};
//# sourceMappingURL=imagegallery.fields.js.map