const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const logoCarouselFields = {
    logoUrls: { type: 'textarea', label: 'Logo URLs (one per line)' },
    logosPerView: { type: 'number', label: 'Logos Per View (Desktop)' },
    logosPerViewTablet: { type: 'number', label: 'Logos Per View (Tablet)' },
    logosPerViewMobile: { type: 'number', label: 'Logos Per View (Mobile)' },
    enableAutoplay: { type: 'radio', label: 'Enable Autoplay', options: RADIO_YES_NO },
    autoplaySpeed: { type: 'number', label: 'Autoplay Speed (ms)' },
    freeMode: { type: 'radio', label: 'Free Mode (smooth scroll)', options: RADIO_YES_NO },
    loop: { type: 'radio', label: 'Infinite Loop', options: RADIO_YES_NO },
    spaceBetween: { type: 'number', label: 'Space Between Logos (px)' },
    grayscale: { type: 'radio', label: 'Grayscale Logos', options: RADIO_YES_NO },
    grayscaleHover: { type: 'radio', label: 'Color on Hover', options: RADIO_YES_NO },
    logoMaxHeight: { type: 'number', label: 'Logo Max Height (px)' },
    backgroundColor: { type: 'text', label: 'Section Background Color (hex)' },
    logoBackgroundColor: { type: 'text', label: 'Logo Background Color (hex)' },
    showBorder: { type: 'radio', label: 'Show Logo Border', options: RADIO_YES_NO },
    borderColor: { type: 'text', label: 'Border Color (hex)' },
    borderRadius: {
        type: 'select', label: 'Border Radius',
        options: [
            { label: 'None', value: 'none' }, { label: 'Small', value: 'sm' }, { label: 'Medium', value: 'md' },
            { label: 'Large', value: 'lg' }, { label: 'Extra Large', value: 'xl' }, { label: 'Full', value: 'full' },
        ],
    },
    paddingY: { type: 'number', label: 'Padding Top/Bottom (px)' },
    paddingX: { type: 'number', label: 'Padding Left/Right (px)' },
};
//# sourceMappingURL=logocarousel.fields.js.map