const RADIO_YES_NO = [{ label: 'Yes', value: true }, { label: 'No', value: false }];
export const productReviewsFields = {
    showRatingsSummary: { type: 'radio', label: 'Show Ratings Summary', options: RADIO_YES_NO },
    showVerifiedBadge: { type: 'radio', label: 'Show Verified Purchase Badge', options: RADIO_YES_NO },
    sortBy: {
        type: 'select', label: 'Default Sort',
        options: [
            { label: 'Most Recent', value: 'recent' },
            { label: 'Most Helpful', value: 'helpful' },
            { label: 'Highest Rating', value: 'rating_high' },
            { label: 'Lowest Rating', value: 'rating_low' },
        ],
    },
    reviewsPerPage: { type: 'number', label: 'Reviews Per Page' },
};
//# sourceMappingURL=productreviews.fields.js.map