import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { ComponentConfig } from '@puckeditor/core';
import { productReviewsFields } from './productreviews.fields';
import type {
  ProductReviewsProps, ReviewSort, SharedReview, SharedReviewsResponse,
  FetchReviews, CreateReviewFn, VoteOnReview, UploadReviewMedia, FetchCustomer,
} from './productreviews.types';
import type { ProductData } from '../ProductData';

// ── Inline SVG icons ─────────────────────────────────────────────────────────
const StarSvg = ({ size = 20, filled }: { size?: number; filled?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const CheckSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg>
);
const PencilSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
);
const XSvg = ({ size = 12 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
);
const ImageSvg = ({ size = 16 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
);
const ThumbUpSvg = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
);
const ThumbDownSvg = ({ size = 14 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17" /></svg>
);

const SORT_TO_API: Record<ReviewSort, string> = {
  recent: 'newest', helpful: 'most_helpful', rating_high: 'highest', rating_low: 'lowest',
};

const noopFetchReviews: FetchReviews = async () => ({
  reviews: [], count: 0, limit: 0, offset: 0,
  average_rating: 0, rating_distribution: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, recommendation_rate: 0,
});
const noopCreateReview: CreateReviewFn = async (input) => ({
  id: 'mock', content: input.content, rating: input.rating, created_at: new Date().toISOString(),
});
const noopVote: VoteOnReview = async () => {};
const noopUpload: UploadReviewMedia = async (_reviewId: string, file: File) => ({ url: URL.createObjectURL(file), type: 'image' });
const noopFetchCustomer: FetchCustomer = async () => null;

export interface ProductReviewsWithData extends ProductReviewsProps {
  product?: ProductData | null;
  fetchReviews?: FetchReviews;
  createReview?: CreateReviewFn;
  voteOnReview?: VoteOnReview;
  uploadReviewMedia?: UploadReviewMedia;
  fetchCustomer?: FetchCustomer;
  /** Sign-in href (consumer passes the localized URL). */
  signInHref?: string;
}

export const ProductReviews: ComponentConfig<ProductReviewsWithData> = {
  label: 'Product Reviews',
  fields: productReviewsFields as ComponentConfig<ProductReviewsWithData>['fields'],
  defaultProps: {
    showRatingsSummary: true, showVerifiedBadge: true,
    sortBy: 'recent', reviewsPerPage: 5,
  },
  render: (rawProps: any) => {
    const {
      showRatingsSummary, showVerifiedBadge, sortBy, reviewsPerPage = 5,
      product, fetchReviews, createReview, voteOnReview, uploadReviewMedia, fetchCustomer, signInHref,
    } = rawProps as ProductReviewsWithData;

    const rFetch = fetchReviews || noopFetchReviews;
    const rCreate = createReview || noopCreateReview;
    const rVote = voteOnReview || noopVote;
    const rUpload = uploadReviewMedia || noopUpload;
    const rCustomer = fetchCustomer || noopFetchCustomer;
    const signInUrl = signInHref || '/account';

    const [currentSort, setCurrentSort] = useState<ReviewSort>(sortBy || 'recent');
    const [reviews, setReviews] = useState<SharedReview[]>([]);
    const [totalCount, setTotalCount] = useState(0);
    const [averageRating, setAverageRating] = useState(0);
    const [ratingDistribution, setRatingDistribution] = useState<Record<string, number>>({});
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const [customer, setCustomer] = useState<{ first_name?: string; last_name?: string; email?: string } | null>(null);
    const [showForm, setShowForm] = useState(false);
    const [formRating, setFormRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [formTitle, setFormTitle] = useState('');
    const [formContent, setFormContent] = useState('');
    const [formFirstName, setFormFirstName] = useState('');
    const [formLastName, setFormLastName] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const [votes, setVotes] = useState<Record<string, boolean | null>>({});
    const [votingId, setVotingId] = useState<string | null>(null);

    const [mediaFiles, setMediaFiles] = useState<File[]>([]);
    const [mediaPreviewUrls, setMediaPreviewUrls] = useState<string[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleVote = async (reviewId: string, isHelpful: boolean) => {
      if (!customer || votingId) return;
      setVotingId(reviewId);
      try {
        await rVote(reviewId, isHelpful);
        setVotes((prev) => ({ ...prev, [reviewId]: isHelpful }));
        setReviews((prev) =>
          prev.map((r) => {
            if (r.id !== reviewId) return r;
            const had = votes[reviewId];
            const h = (r.helpful_count || 0) + (isHelpful ? 1 : 0) - (had === true ? 1 : 0);
            const u = (r.unhelpful_count || 0) + (!isHelpful ? 1 : 0) - (had === false ? 1 : 0);
            return { ...r, helpful_count: h, unhelpful_count: u };
          })
        );
      } catch {
      } finally { setVotingId(null); }
    };

    const handleMediaSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files || []);
      const combined = [...mediaFiles, ...selected].slice(0, 6);
      setMediaFiles(combined);
      setMediaPreviewUrls(combined.map((f) => URL.createObjectURL(f)));
      e.target.value = '';
    };
    const removeMedia = (idx: number) => {
      URL.revokeObjectURL(mediaPreviewUrls[idx]);
      setMediaFiles((prev) => prev.filter((_, i) => i !== idx));
      setMediaPreviewUrls((prev) => prev.filter((_, i) => i !== idx));
    };

    useEffect(() => {
      rCustomer()
        .then((c) => setCustomer(c))
        .catch(() => {});
    }, [rCustomer]);

    const loadReviews = useCallback(() => {
      if (!product?.id) return;
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

    const handleSortChange = (newSort: string) => {
      setOffset(0);
      setCurrentSort(newSort as ReviewSort);
    };

    const renderStars = (rating: number, size = 'w-5 h-5') => (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((s) => (
          <span key={s} className={s <= rating ? 'text-yellow-400' : 'text-gray-300'}>
            <StarSvg size={parseInt(size.match(/w-(\d+)/)?.[1] || '20')} filled={s <= rating} />
          </span>
        ))}
      </div>
    );

    const ratingCounts = [5, 4, 3, 2, 1].map((star) => {
      const n = ratingDistribution[String(star)] || 0;
      return { star, n, pct: totalCount > 0 ? (n / totalCount) * 100 : 0 };
    });

    const totalPages = Math.ceil(totalCount / reviewsPerPage);
    const currentPage = Math.floor(offset / reviewsPerPage) + 1;

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      if (!product?.id || !customer) return;
      if (formRating === 0) { setSubmitError('Please select a star rating.'); return; }
      if (!formContent.trim()) { setSubmitError('Please write a review.'); return; }

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
            try { await rUpload(review.id, file); } catch {}
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
      } catch (err: any) {
        setSubmitError(err?.message || 'Failed to submit review. Please try again.');
      } finally { setSubmitting(false); }
    };

    if (!product) return <></>;

    return (
      <div className="product-reviews">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Customer Reviews</h2>
          {!submitSuccess && (
            customer ? (
              <button onClick={() => setShowForm((v) => !v)} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors">
                <PencilSvg /> {showForm ? 'Cancel' : 'Write a Review'}
              </button>
            ) : (
              <a
                href={typeof window !== 'undefined' ? `${signInUrl}?redirect=${encodeURIComponent(window.location.pathname)}` : signInUrl}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Sign in to review
              </a>
            )
          )}
        </div>

        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
            Thank you! Your review has been submitted and is pending approval.
          </div>
        )}

        {showForm && customer && (
          <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg border border-gray-200 space-y-4">
            <h3 className="text-base font-semibold text-gray-900">Your Review</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Rating <span className="text-red-500">*</span></label>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <button key={s} type="button"
                    onMouseEnter={() => setHoverRating(s)}
                    onMouseLeave={() => setHoverRating(0)}
                    onClick={() => setFormRating(s)}
                    className="p-0.5"
                  >
                    <span className={(hoverRating || formRating) >= s ? 'text-yellow-400' : 'text-gray-300'}>
                      <StarSvg size={28} filled={(hoverRating || formRating) >= s} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Review Title</label>
              <input type="text" value={formTitle} onChange={(e) => setFormTitle(e.target.value)} placeholder="Summarize your experience" className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" maxLength={120} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Review <span className="text-red-500">*</span></label>
              <textarea value={formContent} onChange={(e) => setFormContent(e.target.value)} placeholder="Tell others about your experience with this product" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none" maxLength={2000} required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" value={formFirstName} onChange={(e) => setFormFirstName(e.target.value)} placeholder={customer.first_name || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" maxLength={80} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" value={formLastName} onChange={(e) => setFormLastName(e.target.value)} placeholder={customer.last_name || ''} className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900" maxLength={80} />
              </div>
            </div>
            {submitError && <p className="text-sm text-red-600">{submitError}</p>}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photos / Videos <span className="text-gray-400 font-normal">(optional, up to 6)</span>
              </label>
              {mediaPreviewUrls.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {mediaPreviewUrls.map((src, idx) => (
                    <div key={idx} className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100 group">
                      {mediaFiles[idx]?.type.startsWith('video/') ? (
                        <video src={src} className="w-full h-full object-cover" muted />
                      ) : (
                        <img src={src} alt="" className="w-full h-full object-cover" />
                      )}
                      <button type="button" onClick={() => removeMedia(idx)} className="absolute top-1 right-1 w-5 h-5 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <XSvg />
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {mediaFiles.length < 6 && (
                <>
                  <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm" multiple onChange={handleMediaSelect} className="sr-only" />
                  <button type="button" onClick={() => fileInputRef.current?.click()} className="inline-flex items-center gap-2 px-3 py-2 border border-dashed border-gray-300 rounded-lg text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800 transition-colors">
                    <ImageSvg /> Add photos or videos
                  </button>
                </>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" disabled={submitting} className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-700 disabled:opacity-50 transition-colors">
                {submitting ? 'Submitting…' : 'Submit Review'}
              </button>
              <button type="button" onClick={() => { setShowForm(false); setSubmitError(null); }} className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900">
                Cancel
              </button>
            </div>
          </form>
        )}

        {showRatingsSummary && totalCount > 0 && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center md:text-left">
                <div className="text-5xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
                {renderStars(Math.round(averageRating), 'w-6 h-6')}
                <p className="text-sm text-gray-600 mt-2">Based on {totalCount} reviews</p>
              </div>
              <div className="space-y-2">
                {ratingCounts.map(({ star, n, pct }) => (
                  <div key={star} className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700 w-12">{star} star</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400" style={{ width: `${pct}%` }} />
                    </div>
                    <span className="text-sm text-gray-600 w-8">{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">{totalCount} Reviews</h3>
          <select value={currentSort} onChange={(e) => handleSortChange(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900">
            <option value="recent">Most Recent</option>
            <option value="helpful">Most Helpful</option>
            <option value="rating_high">Highest Rating</option>
            <option value="rating_low">Lowest Rating</option>
          </select>
        </div>

        {loading && (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="animate-pulse h-20 bg-gray-100 rounded-lg" />
            ))}
          </div>
        )}

        {!loading && fetchError && (
          <div className="text-center py-8 text-gray-500 text-sm">
            <p>Failed to load reviews.</p>
            <button onClick={loadReviews} className="mt-2 text-gray-900 underline text-sm">
              Try again
            </button>
          </div>
        )}

        {!loading && !fetchError && reviews.length === 0 && (
          <p className="text-gray-500 text-sm py-4">No reviews yet for this product. Be the first to leave one!</p>
        )}

        {!loading && !fetchError && reviews.length > 0 && (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {renderStars(review.rating, 'w-4 h-4')}
                      {review.title && <span className="text-sm font-medium text-gray-900">{review.title}</span>}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="font-medium">
                        {review.display_name || [review.first_name, review.last_name].filter(Boolean).join(' ') || 'Anonymous'}
                      </span>
                      {showVerifiedBadge && review.verified_purchase && (
                        <span className="inline-flex items-center gap-1 text-green-600">
                          <CheckSvg /> Verified Purchase
                        </span>
                      )}
                      <span>•</span>
                      <span>{new Date(review.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
                {review.pros && <p className="mt-2 text-sm text-gray-600"><span className="font-medium text-green-700">Pros:</span> {review.pros}</p>}
                {review.cons && <p className="mt-1 text-sm text-gray-600"><span className="font-medium text-red-600">Cons:</span> {review.cons}</p>}
                {review.media_urls && review.media_urls.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {review.media_urls.map((url, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="block w-20 h-20 rounded-lg overflow-hidden bg-gray-100 hover:opacity-90 transition-opacity">
                        {/\.(mp4|webm)(\?|$)/i.test(url) ? (
                          <video src={url} className="w-full h-full object-cover" muted />
                        ) : (
                          <img src={url} alt={`Review photo ${i + 1}`} className="w-full h-full object-cover" />
                        )}
                      </a>
                    ))}
                  </div>
                )}
                {review.merchant_reply && (
                  <div className="mt-3 pl-4 border-l-2 border-gray-300 text-sm text-gray-600">
                    <span className="font-medium">Store reply: </span>{review.merchant_reply}
                  </div>
                )}
                {customer && (
                  <div className="flex items-center gap-3 mt-3">
                    <span className="text-xs text-gray-500">Was this helpful?</span>
                    <button onClick={() => handleVote(review.id, true)} disabled={!!votingId} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors ${votes[review.id] === true ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                      <ThumbUpSvg /> {review.helpful_count ? review.helpful_count : ''}
                    </button>
                    <button onClick={() => handleVote(review.id, false)} disabled={!!votingId} className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-lg transition-colors ${votes[review.id] === false ? 'bg-red-100 text-red-700' : 'text-gray-500 hover:bg-gray-100'}`}>
                      <ThumbDownSvg /> {review.unhelpful_count ? review.unhelpful_count : ''}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            <button onClick={() => setOffset(Math.max(0, offset - reviewsPerPage))} disabled={currentPage === 1 || loading} className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50 transition-colors">
              Previous
            </button>
            <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
            <button onClick={() => setOffset(offset + reviewsPerPage)} disabled={currentPage >= totalPages || loading} className="px-4 py-2 border border-gray-300 rounded-lg text-sm disabled:opacity-40 hover:bg-gray-50 transition-colors">
              Next
            </button>
          </div>
        )}
      </div>
    );
  },
};

export default ProductReviews;
