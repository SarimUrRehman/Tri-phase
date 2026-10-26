import React, { useState } from 'react';
import { BUSINESS_INFO, REVIEWS, ReviewItem } from '../constants/siteConfig.ts';
import { Star, CheckCircle, ExternalLink, MessageSquareQuote, ChevronLeft, ChevronRight } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'grid' | 'carousel'>('grid');
  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section
      id="reviews"
      aria-label="Customer Reviews"
      className="py-16 sm:py-24 bg-white text-slate-900 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header & Google 5.0 Summary Lockup */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-0.5 bg-[#4F6BFF]" aria-hidden="true"></span>
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#4F6BFF] font-['Montserrat']">
                Customer Testimonials
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#201A5B] font-['Exo_2']">
              Trusted by 159+ Aucklanders
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600">
              Real feedback from local homeowners, property managers, and businesses across Auckland.
            </p>
          </div>

          {/* 5.0 Star Summary Card */}
          <div className="bg-[#F3F2FA] rounded-xl p-4 sm:p-5 border border-slate-200/90 flex items-center gap-4 shrink-0 shadow-sm">
            {/* Google G SVG */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0">
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-[#201A5B] font-['Exo_2'] leading-none">
                  5.0
                </span>
                <div className="flex text-[#FFC83D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFC83D] text-[#FFC83D]" />
                  ))}
                </div>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Based on <strong className="text-slate-900 font-bold">{BUSINESS_INFO.reviewCount} Google reviews</strong>
              </div>
            </div>
          </div>
        </div>

        {/* View mode toggle (Grid or Carousel) */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider font-['Montserrat']">
            Customer Reviews <span className="text-[10px] text-slate-400 font-mono">(Editable Content)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('grid')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'grid'
                  ? 'bg-[#201A5B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              All 6 Reviews
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('carousel')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                activeTab === 'carousel'
                  ? 'bg-[#201A5B] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-slate-900'
              }`}
            >
              Focus View
            </button>
          </div>
        </div>

        {/* Reviews Content: Grid Mode */}
        {activeTab === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}

        {/* Reviews Content: Carousel Mode */}
        {activeTab === 'carousel' && (
          <div className="max-w-2xl mx-auto bg-[#F3F2FA] rounded-2xl p-8 border border-slate-200 relative">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5 text-[#FFC83D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFC83D] text-[#FFC83D]" />
                ))}
              </div>
              <span className="text-xs text-slate-500 font-medium">
                Review {carouselIndex + 1} of {REVIEWS.length}
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-800 leading-relaxed italic mb-6">
              "{REVIEWS[carouselIndex].text}"
            </p>

            <div className="flex items-center justify-between border-t border-slate-200 pt-4">
              <div>
                <h4 className="text-sm font-bold text-[#201A5B] font-['Exo_2'] flex items-center gap-1.5">
                  <span>{REVIEWS[carouselIndex].name}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                </h4>
                <p className="text-xs text-slate-500">
                  {REVIEWS[carouselIndex].location} · {REVIEWS[carouselIndex].service}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevCarousel}
                  className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={nextCarousel}
                  className="p-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 shadow-sm transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Read our reviews on Google button */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_INFO.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#201A5B] hover:bg-[#14103C] text-white font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FFC83D]"
          >
            <span>Read our reviews on Google</span>
            <ExternalLink className="w-4 h-4 text-[#FFC83D]" />
          </a>
          <p className="mt-2 text-xs text-slate-500">
            Official Google My Business Profile · 5.0 Star Rated (159 Reviews)
          </p>
        </div>
      </div>
    </section>
  );
};

interface ReviewCardProps {
  review: ReviewItem;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Top: Stars & Date */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex text-[#FFC83D]">
            {[...Array(review.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FFC83D] text-[#FFC83D]" />
            ))}
          </div>
          <span className="text-[11px] text-slate-400">{review.date}</span>
        </div>

        {/* Service Tag (Unboxed metadata) */}
        <div className="text-xs font-semibold text-[#4F6BFF] mb-2 font-['Montserrat']">
          {review.service}
        </div>

        {/* Review text */}
        <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">
          "{review.text}"
        </p>
      </div>

      {/* Reviewer info */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="text-sm font-bold text-[#201A5B] font-['Exo_2'] flex items-center gap-1.5">
            <span>{review.name}</span>
            {review.verified && (
              <span title="Verified Customer" className="inline-flex items-center">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
              </span>
            )}
          </div>
          <div className="text-[11px] text-slate-500">{review.location}</div>
        </div>

        <div className="w-7 h-7 rounded-full bg-[#F3F2FA] text-slate-400 flex items-center justify-center">
          <MessageSquareQuote className="w-4 h-4 text-slate-500" />
        </div>
      </div>
    </div>
  );
};
