import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef, useCallback } from 'react';
import { productReviewsFields } from './productreviews.fields';
// ── Inline SVG icons ─────────────────────────────────────────────────────────
const StarSvg = ({ size = 20, filled }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: filled ? 'currentColor' : 'none', stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" }) }));
const CheckSvg = ({ size = 16 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("polyline", { points: "20 6 9 17 4 12" }) }));
const PencilSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("path", { d: "M12 20h9" }), _jsx("path", { d: "M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })] }));
const XSvg = ({ size = 12 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), _jsx("line", { x1: "6", y1: "6", x2: "18", y2: "18" })] }));
const ImageSvg = ({ size = 16 }) => (_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: [_jsx("rect", { x: "3", y: "3", width: "18", height: "18", rx: "2" }), _jsx("circle", { cx: "8.5", cy: "8.5", r: "1.5" }), _jsx("polyline", { points: "21 15 16 10 5 21" })] }));
const ThumbUpSvg = ({ size = 14 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" }) }));
const ThumbDownSvg = ({ size = 14 }) => (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: _jsx("path", { d: "M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" }) }));
const SORT_TO_API = {
    recent: 'newest', helpful: 'most_helpful', rating_high: 'highest', rating_low: 'lowest',
};
const noopFetchReviews = async () => ({
    reviews: [], count: 0, limit: 0, offset: 0,
    average_rating: 0, rating_distribution: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, recommendation_rate: 0,
});
const noopCreateReview = async (input) => ({
    id: 'mock', content: input.content, rating: input.rating, created_at: new Date().toISOString(),
});
const noopVote = async () => { };
const noopUpload = async (_reviewId, file) => ({ url: URL.createObjectURL(file), type: 'image' });
const noopFetchCustomer = async () => null;
export const ProductReviews = {
    label: 'Product Reviews',
    fields: productReviewsFields,
    defaultProps: {
        showRatingsSummary: true, showVerifiedBadge: true,
        sortBy: 'recent', reviewsPerPage: 5,
    },
    render: (rawProps) => {
        const { showRatingsSummary, showVerifiedBadge, sortBy, reviewsPerPage = 5, product, fetchReviews, createReview, voteOnReview, uploadReviewMedia, fetchCustomer, signInHref, } = rawProps;
        const rFetch = fetchReviews || noopFetchReviews;
        const rCreate = createReview || noopCreateReview;
        const rVote = voteOnReview || noopVote;
        const rUpload = uploadReviewMedia || noopUpload;
        const rCustomer = fetchCustomer || noopFetchCustomer;
        const signInUrl = signInHref || '/account';
        const [currentSort, setCurrentSort] = useState(sortBy || 'recent');
        const [reviews, setReviews] = useState([]);
        const [totalCount, setTotalCount] = useState(0);
        const [averageRating, setAverageRating] = useState(0);
        const [ratingDistribution, setRatingDistribution] = useState({});
        const [offset, setOffset] = useState(0);
        const [loading, setLoading] = useState(false);
        const [fetchError, setFetchError] = useState(false);
        const [customer, setCustomer] = useState(null);
        const [showForm, setShowForm] = useState(false);
        const [formRating, setFormRating] = useState(0);
        const [hoverRating, setHoverRating] = useState(0);
        const [formTitle, setFormTitle] = useState('');
        const [formContent, setFormContent] = useState('');
        const [formFirstName, setFormFirstName] = useState('');
        const [formLastName, setFormLastName] = useState('');
        const [submitting, setSubmitting] = useState(false);
        const [submitError, setSubmitError] = useState(null);
        const [submitSuccess, setSubmitSuccess] = useState(false);
        const [votes, setVotes] = useState({});
        const [votingId, setVotingId] = useState(null);
        const [mediaFiles, setMediaFiles] = useState([]);
        const [mediaPreviewUrls, setMediaPreviewUrls] = useState([]);
        const fileInputRef = useRef(null);
        const handleVote = async (reviewId, isHelpful) => {
            if (!customer || votingId)
                return;
            setVotingId(reviewId);
            try {
                await rVote(reviewId, isHelpful);
                setVotes((prev) => ({ ...prev, [reviewId]: isHelpful }));
                setReviews((prev) => prev.map((r) => {
                    if (r.id !== reviewId)
                        return r;
                    const had = votes[reviewId];
                    const h = (r.helpful_count || 0) + (isHelpful ? 1 : 0) - (had === true ? 1 : 0);
                    const u = (r.unhelpful_count || 0) + (!isHelpful ? 1 : 0) - (had === false ? 1 : 0);
                    return { ...r, helpful_count: h, unhelpful_count: u };
                }));
            }
            catch {
            }
            finally {
                setVotingId(null);
            }
        };
        const handleMediaSelect = (e) => {
            const selected = Array.from(e.target.files || []);
            const combined = [...mediaFiles, ...selected].slice(0, 6);
            setMediaFiles(combined);
            setMediaPreviewUrls(combined.map((f) => URL.createObjectURL(f)));
            e.target.value = '';
        };
        const removeMedia = (idx) => {
            URL.revokeObjectURL(mediaPreviewUrls[idx]);
            setMediaFiles((prev) => prev.filter((_, i) => i !== idx));
            setMediaPreviewUrls((prev) => prev.filter((_, i) => i !== idx));
        };
        useEffect(() => {
            rCustomer()
                .then((c) => setCustomer(c))
                .catch(() => { });
        }, [rCustomer]);
        const loadReviews = useCallback(() => {
            if (!product?.id)
                return;
            setLoading(true);
            setFetchError(false);
            rFetch(product.id, {
                limit: reviewsPerPage,
                offset,
                sort: SORT_TO_API[currentSort] || 'newest',
            })
                .then((data) => {
                setReviews(data.reviews || []);
                setTotalCount(data.count || 0);
                setAverageRating(data.average_rating || 0);
                setRatingDistribution(data.rating_distribution || {});
            })
                .catch(() => setFetchError(true))
                .finally(() => setLoading(false));
        }, [product?.id, offset, currentSort, reviewsPerPage, rFetch]);
        useEffect(() => { loadReviews(); }, [loadReviews]);
        const handleSortChange = (newSort) => {
            setOffset(0);
            setCurrentSort(newSort);
        };
        const renderStars = (rating, size = 'w-5 h-5') => (_jsx("div", { className: "flex items-center gap-0.5", children: [1, 2, 3, 4, 5].map((s) => (_jsx("span", { className: s <= rating ? 'text-yellow-400' : 'text-gray-300', children: _jsx(StarSvg, { size: parseInt(size.match(/w-(\d+)/)?.[1] || '20'), filled: s <= rating }) }, s))) }));
        const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
            const n = ratingDistribution[String(star)] || 0;
            return { star, n, pct: totalCount > 0 ? (n / totalCount) * 100 : 0 };
        });
        const totalPages = Math.ceil(totalCount / reviewsPerPage);
        const currentPage = Math.floor(offset / reviewsPerPage) + 1;
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!product?.id || !customer)
                return;
            if (formRating === 0) {
                setSubmitError('Please select a star rating.');
                return;
            }
            if (!formContent.trim()) {
                setSubmitError('Please write a review.');
                return;
            }
            setSubmitting(true);
            setSubmitError(null);
            try {
                const review = await rCreate({
                    product_id: product.id,
                    content: formContent.trim(),
                    rating: formRating,
                    first_name: formFirstName.trim() || customer.first_name || 'Anonymous',
                    last_name: formLastName.trim() || customer.last_name || '',
                    title: formTitle.trim() || undefined,
                    verified_source: 'order_history',
                });
                if (mediaFiles.length > 0 && review?.id) {
                    for (const file of mediaFiles) {
                        try {
                            await rUpload(review.id, file);
                        }
                        catch { }
                    }
                }
                mediaPreviewUrls.forEach((u) => URL.revokeObjectURL(u));
                setMediaFiles([]);
                setMediaPreviewUrls([]);
                setSubmitSuccess(true);
                setShowForm(false);
                setOffset(0);
                setCurrentSort('recent');
                setTimeout(() => loadReviews(), 300);
            }
            catch (err) {
                setSubmitError(err?.message || 'Failed to submit review. Please try again.');
            }
            finally {
                setSubmitting(false);
            }
        };
        if (!product)
            return _jsx(_Fragment, {});
        return (_jsxs("div", { className: "product-reviews", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "text-2xl font-bold text-gray-900", children: "Customer Reviews" }), !submitSuccess && (customer ? (_jsxs("button", { onClick: () => setShowForm((v) => !v), className: "inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors", children: [_jsx(PencilSvg, {}), " ", showForm ? 'Cancel' : 'Write a Review'] })) : (_jsx("a", { href: typeof window !== 'undefined' ? `${signInUrl}?redirect=${encodeURIComponent(window.location.pathname)}` : signInUrl, className: "inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors", children: "Sign in to review" })))] }), submitSuccess && (_jsx("div", { className: "mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm", children: "Thank you! Your review has been submitted and is pending approval." })), showForm && customer && (_jsxs("form", { onSubmit: handleSubmit, className: "mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-4", children: [_jsx("h3", { className: "text-base font-semibold text-gray-900", children: "Your Review" }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: ["Rating ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("div", { className: "flex items-center gap-1", children: [1, 2, 3, 4, 5].map((s) => (_jsx("button", { type: "button", onMouseEnter: () => setHoverRating(s), onMouseLeave: () => setHoverRating(0), onClick: () => setFormRating(s), className: "p-0.5", children: _jsx("span", { className: (hoverRating || formRating) >= s ? 'text-yellow-400' : 'text-gray-300', children: _jsx(StarSvg, { size: 28, filled: (hoverRating || formRating) >= s }) }) }, s))) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Review Title" }), _jsx("input", { type: "text", value: formTitle, onChange: (e) => setFormTitle(e.target.value), placeholder: "Summarize your experience", className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900", maxLength: 120 })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: ["Review ", _jsx("span", { className: "text-red-500", children: "*" })] }), _jsx("textarea", { value: formContent, onChange: (e) => setFormContent(e.target.value), placeholder: "Tell others about your experience with this product", rows: 4, className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none", maxLength: 2000, required: true })] }), _jsxs("div", { className: "grid grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "First Name" }), _jsx("input", { type: "text", value: formFirstName, onChange: (e) => setFormFirstName(e.target.value), placeholder: customer.first_name || '', className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900", maxLength: 80 })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-gray-700 mb-1", children: "Last Name" }), _jsx("input", { type: "text", value: formLastName, onChange: (e) => setFormLastName(e.target.value), placeholder: customer.last_name || '', className: "w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900", maxLength: 80 })] })] }), submitError && _jsx("p", { className: "text-sm text-red-600", children: submitError }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-700 mb-2", children: ["Photos / Videos ", _jsx("span", { className: "text-gray-400 font-normal", children: "(optional, up to 6)" })] }), mediaPreviewUrls.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: mediaPreviewUrls.map((src, idx) => (_jsxs("div", { className: "relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 group", children: [mediaFiles[idx]?.type.startsWith('video/') ? (_jsx("video", { src: src, className: "w-full h-full object-cover", muted: true })) : (_jsx("img", { src: src, alt: "", className: "w-full h-full object-cover" })), _jsx("button", { type: "button", onClick: () => removeMedia(idx), className: "absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity", children: _jsx(XSvg, {}) })] }, idx))) })), mediaFiles.length < 6 && (_jsxs(_Fragment, { children: [_jsx("input", { ref: fileInputRef, type: "file", accept: "image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm", multiple: true, onChange: handleMediaSelect, className: "sr-only" }), _jsxs("button", { type: "button", onClick: () => fileInputRef.current?.click(), className: "inline-flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors", children: [_jsx(ImageSvg, {}), " Add photos or videos"] })] }))] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("button", { type: "submit", disabled: submitting, className: "px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors", children: submitting ? 'Submitting…' : 'Submit Review' }), _jsx("button", { type: "button", onClick: () => { setShowForm(false); setSubmitError(null); }, className: "px-4 py-2 text-sm text-gray-600 hover:text-gray-900", children: "Cancel" })] })] })), showRatingsSummary && totalCount > 0 && (_jsx("div", { className: "bg-gray-50 rounded-lg p-6 mb-8", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "text-center md:text-left", children: [_jsx("div", { className: "text-5xl font-bold text-gray-900 mb-2", children: averageRating.toFixed(1) }), renderStars(Math.round(averageRating), 'w-6 h-6'), _jsxs("p", { className: "text-sm text-gray-600 mt-2", children: ["Based on ", totalCount, " reviews"] })] }), _jsx("div", { className: "space-y-2", children: ratingCounts.map(({ star, n, pct }) => (_jsxs("div", { className: "flex items-center gap-3", children: [_jsxs("span", { className: "text-sm font-medium text-gray-700 w-12", children: [star, " star"] }), _jsx("div", { className: "flex-1 h-2 bg-gray-200 rounded-full overflow-hidden", children: _jsx("div", { className: "h-full bg-yellow-400", style: { width: `${pct}%` } }) }), _jsx("span", { className: "text-sm text-gray-600 w-8", children: n })] }, star))) })] }) })), _jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("h3", { className: "text-lg font-semibold text-gray-900", children: [totalCount, " Reviews"] }), _jsxs("select", { value: currentSort, onChange: (e) => handleSortChange(e.target.value), className: "px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900", children: [_jsx("option", { value: "recent", children: "Most Recent" }), _jsx("option", { value: "helpful", children: "Most Helpful" }), _jsx("option", { value: "rating_high", children: "Highest Rating" }), _jsx("option", { value: "rating_low", children: "Lowest Rating" })] })] }), loading && (_jsx("div", { className: "space-y-4", children: Array.from({ length: 3 }).map((_, i) => (_jsx("div", { className: "animate-pulse h-20 bg-gray-100 rounded-lg" }, i))) })), !loading && fetchError && (_jsxs("div", { className: "text-center py-8 text-gray-500 text-sm", children: [_jsx("p", { children: "Failed to load reviews." }), _jsx("button", { onClick: loadReviews, className: "mt-2 text-gray-900 underline text-sm", children: "Try again" })] })), !loading && !fetchError && reviews.length === 0 && (_jsx("p", { className: "text-gray-500 text-sm py-4", children: "No reviews yet for this product. Be the first to leave one!" })), !loading && !fetchError && reviews.length > 0 && (_jsx("div", { className: "space-y-6", children: reviews.map((review) => (_jsxs("div", { className: "border-b border-gray-200 pb-6 last:border-0", children: [_jsx("div", { className: "flex items-start justify-between mb-3", children: _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-2", children: [renderStars(review.rating, 'w-4 h-4'), review.title && _jsx("span", { className: "text-sm font-medium text-gray-900", children: review.title })] }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx("span", { className: "font-medium", children: review.display_name || [review.first_name, review.last_name].filter(Boolean).join(' ') || 'Anonymous' }), showVerifiedBadge && review.verified_purchase && (_jsxs("span", { className: "inline-flex items-center gap-1 text-green-600", children: [_jsx(CheckSvg, {}), " Verified Purchase"] })), _jsx("span", { children: "\u2022" }), _jsx("span", { children: new Date(review.created_at).toLocaleDateString() })] })] }) }), _jsx("p", { className: "text-gray-700 text-sm leading-relaxed", children: review.content }), review.pros && _jsxs("p", { className: "mt-2 text-sm text-gray-600", children: [_jsx("span", { className: "font-medium text-green-700", children: "Pros:" }), " ", review.pros] }), review.cons && _jsxs("p", { className: "mt-1 text-sm text-gray-600", children: [_jsx("span", { className: "font-medium text-red-600", children: "Cons:" }), " ", review.cons] }), review.media_urls && review.media_urls.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: review.media_urls.map((url, i) => (_jsx("a", { href: url, target: "_blank", rel: "noopener noreferrer", className: "block w-20 h-20 rounded-lg overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity", children: /\.(mp4|webm)(\?|$)/i.test(url) ? (_jsx("video", { src: url, className: "w-full h-full object-cover", muted: true })) : (_jsx("img", { src: url, alt: `Review photo ${i + 1}`, className: "w-full h-full object-cover" })) }, i))) })), review.merchant_reply && (_jsxs("div", { className: "mt-3 pl-4 border-l-2 border-gray-300 text-sm text-gray-600", children: [_jsx("span", { className: "font-medium", children: "Store reply: " }), review.merchant_reply] })), customer && (_jsxs("div", { className: "flex items-center gap-3 mt-3", children: [_jsx("span", { className: "text-xs text-gray-500", children: "Was this helpful?" }), _jsxs("button", { onClick: () => handleVote(review.id, true), disabled: !!votingId, className: `inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors ${votes[review.id] === true ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`, children: [_jsx(ThumbUpSvg, {}), " ", review.helpful_count ? review.helpful_count : ''] }), _jsxs("button", { onClick: () => handleVote(review.id, false), disabled: !!votingId, className: `inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors ${votes[review.id] === false ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`, children: [_jsx(ThumbDownSvg, {}), " ", review.unhelpful_count ? review.unhelpful_count : ''] })] }))] }, review.id))) })), totalPages > 1 && (_jsxs("div", { className: "flex items-center justify-center gap-2 mt-8", children: [_jsx("button", { onClick: () => setOffset(Math.max(0, offset - reviewsPerPage)), disabled: currentPage === 1 || loading, className: "px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50 transition-colors", children: "Previous" }), _jsxs("span", { className: "text-sm text-gray-600", children: ["Page ", currentPage, " of ", totalPages] }), _jsx("button", { onClick: () => setOffset(offset + reviewsPerPage), disabled: currentPage >= totalPages || loading, className: "px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50 transition-colors", children: "Next" })] }))] }));
    },
};
export default ProductReviews;
//# sourceMappingURL=ProductReviews.js.map